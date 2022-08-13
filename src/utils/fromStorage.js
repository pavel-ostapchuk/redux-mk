export function fromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
