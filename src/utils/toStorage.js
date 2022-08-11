export function toStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
