import { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { cleanObject, useDebounce, useMount } from "utils";
import { useHttp } from "utils/http";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({ name: "", personId: "" });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceParam = useDebounce(param, 500);

  const client = useHttp();

  useEffect(() => {
    // fetch(
    //   `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`
    // ).then(async (res) => {
    //   if (res.ok) {
    //     setList(await res.json());
    //   }
    // });

    client("projects", { data: cleanObject(debounceParam) }).then(setList);
  }, [debounceParam]);

  useMount(() => {
    // fetch(`${apiUrl}/users`).then(async (res) => {
    //   if (res.ok) {
    //     setUsers(await res.json());
    //   }
    // });

    client("users").then(setUsers);
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List list={list} users={users} />
    </div>
  );
};
