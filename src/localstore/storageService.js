export default function setItem(key, value) {
  localStorage.setItem(key, value);
};

export function getItem(key, _default) {
  var localValue = localStorage.getItem(key);
  
};

// export default function clear() {
//   localStorage.clear();
  
// };

// export default function removeItem(key) {
//   localStorage.removeItem(key);

// };