import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? true : !!value);

export const cleanObject = (obj: Object) => {
  const result = JSON.parse(JSON.stringify(obj));

  for (const key in result) {
    if (!isFalsy(result[key])) {
      delete result[key];
    }
  }

  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line
  }, []);
};

export const useArray = <V>(initialState: V[]) => {
  const [value, setValue] = useState(initialState);

  return {
    value,
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
    add: (person: V) => setValue([...value, person]),
  };
};

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  // console.log(value.mayNotExist);

  useEffect(() => {
    // 当 param 变化后，才设置定时器，
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    // 在上次 effect 运行完成后清理
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};
