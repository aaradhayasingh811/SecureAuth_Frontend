export function isEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export function isStrongPassword(p) {
  return p && p.length >= 8;
}
