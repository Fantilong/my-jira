import { useArray, useMount } from "utils";

interface Person {
  name: string;
  age: number;
}

export const TsReacTTest = ({}) => {
  const persons: Person[] = [
    { name: "jack", age: 25 },
    { name: "ma", age: 22 },
  ];
  const { value, clear, removeIndex, add } = useArray<Person[]>(persons);

  useMount(() => {
    // 期待这里报错：Property 'notExist' does not exist on type '{ name: string; age: number; }[]'.
    // console.log(value.notExist);
    // 期待这里报错：Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'.
    // add({ name: "david" });
    // 期待这里报错：Argument of type 'string' is not assignable to parameter of type 'number'.
    // removeIndex("123");
  });

  return (
    <div>
      {/*期待: 点击以后增加 john */}
      <button onClick={() => {}}>add john</button>
      {/*期待: 点击以后删除第一项*/}
      <button onClick={() => {}}>remove 0</button>
      {/*期待：点击以后清空列表*/}
      <button style={{ marginBottom: "50px" }} onClick={() => {}}>
        clear
      </button>
      {/* {
                value.map((person, index) => (
                    <div style={{ marginBottom: "30px" }}>
                        <span style={{ color: "red" }}>{index}</span>
                        <span>{person.name}</span>
                        <span>{person.age}</span>
                    </div>
                ))
            } */}
    </div>
  );
};
