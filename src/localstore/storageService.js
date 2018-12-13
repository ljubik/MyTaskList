export function setItem(key, value) {
  localStorage.setItem(key, value);
};

export function getItem(key, _default) {
  return localStorage.getItem(key) || _default;
};

// export default function clear() {
//   localStorage.clear();
  
// };

// export default function removeItem(key) {
//   localStorage.removeItem(key);

// };