import { Input, Select } from "antd";
import React from "react";

const Option = Select.Option;
export interface User {
  id: string;
  name: string;
  token: string;
}
interface SearchPanelProps {
  users: User[];
  param: { name: string; personId: string };
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Input
        value={param.name}
        onChange={(event) => setParam({ ...param, name: event.target.value })}
      />
      <Select
        value={param.personId}
        onChange={(value) => setParam({ ...param, personId: value })}
      >
        <Option value={""}>负责人</Option>
        {users?.map((user) => (
          <Option key={user.id} value={user.id}>
            {user.name}
          </Option>
        ))}
      </Select>
    </div>
  );
};
