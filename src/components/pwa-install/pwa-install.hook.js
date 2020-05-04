import { useEffect, useState } from 'react';

let deferredPrompt = null;

export const usePwaInstall = () => {
  const [isCustomInstallSupported, setCustomInstallSupported] = useState(false);
  const [isInstalled, setInstalled] = useState(false);
  const [isInstalling, setInstalling] = useState(false);

  useEffect(() => {
    const onBeforeInstallPrompt = e => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      setCustomInstallSupported(true);
    };

    const onAppInstalled = () => {
      setInstalled(true);
      setInstalling(false);
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);

    window.addEventListener('appinstalled', onAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
      window.removeEventListener('appinstalled', onAppInstalled);
    };
  }, []);

  const install = () => {
    if (!deferredPrompt) {
      return;
    }
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        setInstalling(true);
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    });
  };

  return [isCustomInstallSupported, isInstalling, isInstalled, install];
};
