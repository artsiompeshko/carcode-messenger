import { useEffect, useState } from 'react';

export const usePwaInstall = () => {
  const [isCustomInstallSupported, setCustomInstallSupported] = useState(!!window.deferredPrompt);
  const [isInstalled, setInstalled] = useState(false);
  const [isInstalling, setInstalling] = useState(false);

  useEffect(() => {
    const onAppInstalled = () => {
      setInstalled(true);
      setInstalling(false);
    };

    window.addEventListener('appinstalled', onAppInstalled);

    return () => {
      window.removeEventListener('appinstalled', onAppInstalled);
    };
  }, []);

  useEffect(() => {
    setCustomInstallSupported(!!window.deferredPrompt);
  });

  const install = () => {
    const { deferredPrompt } = window;

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
