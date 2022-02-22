export const isFalsy = (value) => (value === 0 ? true : !!value);

export const cleanObject = (obj) => {
  const result = JSON.parse(JSON.stringify(obj));

  for (const key in result) {
    if (!isFalsy(result[key])) {
      delete result[key];
    }
  }

  return result;
};
