export function saveToLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLocal(key, fallback = null) {
  const v = localStorage.getItem(key);
  if (!v) return fallback;
  try {
    return JSON.parse(v);
  } catch {
    return fallback;
  }
}
