import { useEffect, useRef, useState } from "react";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export const useDocumentTitle = (title: string, keepOnUnmount = true) => {
  const oldTitle = useRef(document.title).current;

  useEffect(() => {
    document.title = title;
  }, [title]);

  // 只执行一次
  useEffect(() => {
    // 在每次组件执行前，清理一次
    return () => {
      if (!keepOnUnmount) {
        document.title = oldTitle;
      }
    };
  }, [keepOnUnmount, oldTitle]);
};

export const resetRoute = () => (window.location.href = window.location.origin);
