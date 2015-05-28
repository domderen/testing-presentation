export function isString(obj) {
  return typeof obj === 'string';
};

export function isStringAsync(obj, cb) {
  setTimeout(() => {
    const result = this.isString(obj);
    cb(result);
  }, 100);
};
