const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

const stringifyValue = value => {
  if (typeof value === 'object' && value !== null) {
    return JSON.stringify(value);
  }

  return value;
};

const parseValue = value => {
  // assume it is an object that has been stringified
  if (value && (value[0] === '{' || value[0] === '[')) {
    return JSON.parse(value);
  }

  if (value && (value === 'true' || value === 'false')) {
    return value === 'true';
  }

  return value;
};

const set = (cname, cvalue, exdays = 1000) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * MILLISECONDS_IN_DAY);
  const expires = `expires=${d.toUTCString()}`;
  window.document.cookie = `${cname}=${stringifyValue(cvalue)};${expires};path=/`;
};

const setSession = (cname, cvalue) => {
  window.document.cookie = `${cname}=${stringifyValue(cvalue)};path=/`;
};

const get = cname => {
  const name = `${cname}=`;
  const ca = window.document.cookie.split(';');

  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    c = c.trim();
    if (c.indexOf(name) === 0) {
      return parseValue(c.substring(name.length, c.length));
    }
  }
  return '';
};

const remove = cname => {
  if (get(cname)) {
    set(cname, '', -1);
  }
};

const areEnabled = (() => {
  let result;

  try {
    document.cookie = 'cookietest=1';
    result = document.cookie.indexOf('cookietest=') !== -1;
    document.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';

    return result;
  } catch (e) {
    return false;
  }
})();

export default {
  get,
  set,
  setSession,
  remove,
  areEnabled,
};
