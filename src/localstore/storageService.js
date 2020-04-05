export function setItem(key, value) {
  localStorage.setItem(key, value);
};

export function getItem(key, _default) {
  return localStorage.getItem(key) || _default;
};

export function clearAll() {
  localStorage.clear();
  
};
