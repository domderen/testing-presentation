export function isString(obj) {
  return typeof obj === 'string';
};

export function isStringAsync(obj, cb) {
  setTimeout(() => {
    const result = this.isString(obj);
    cb(result);
  }, 100);
};

export function isStringPromise(obj) {
  return new Promise((resolve, reject) => {
    const result = this.isString(obj);

    if(result) {
      return resolve(true);
    }

    return reject(false);
  });
};
