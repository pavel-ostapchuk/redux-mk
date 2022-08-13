export function toStorate(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
