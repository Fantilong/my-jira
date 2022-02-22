import { useEffect, useState } from "react";

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

export const useMount = (callback) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    // 当 param 变化后，才设置定时器，
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    // 在上次 effect 运行完成后清理
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};
