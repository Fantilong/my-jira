import qs from "qs";
import * as auth from "context/auth-provider";
import { useAuth } from "context/auth-context";

interface Config extends RequestInit {
  data?: Object;
  token?: String;
}

const apiUrl = process.env.REACT_APP_API_URL;

export const http = async (
  endpoint: string,
  { data, token, headers, ...customerConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customerConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data);
  }

  return window.fetch(`${apiUrl}/${endpoint}`, config).then(async (res) => {
    if (res.status === 401) {
      await auth.logout();
      window.location.reload();
      return Promise.reject({ message: "请重新登录" });
    }

    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};
export const useHttp = () => {
  const { user } = useAuth();

  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token });

  // let myFavoriteNumber: string | number
  // myFavoriteNumber = 'seven'
  // myFavoriteNumber = 2
  // // myFavoriteNumber = {}

  // let jackFavoriteNumber: string | number
  // interface Person {
  //   name: string
  // }

  // type Person = {
  //   name: string
  // }

  // const xiaoM: Person = { name: 'xiam' }

  // type FavoriteNumber = string | number
  // let roseFN: FavoriteNumber = "2"

  // type Person = {
  //   name: string
  //   age: number
  // }

  // const xiaoM: Partial<Person> = {}
  // const xiaoL: Omit<Person, 'name' | 'age'> = {}

  // type PersonKeys = keyof Person
  // type PersonOnlyName = Pick<Person, 'age'>
  // // let a: PersonOnlyName = { age: 123 }

  // type Age = Exclude<PersonKeys, 'name'>

  // // {name: string}

  // type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

  // Person,

  // type Pick<T, K extends keyof T> = {
  //     [P in K]: T[P];
  // };

  // type Exclude<T, U> = T extends U ? never : T;

  // let a: Age = { name: '123' }
};
