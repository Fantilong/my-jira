import React from "react";
import { Form, Input, Select } from "antd";

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
    <Form style={{ marginBottom: "2rem" }} layout="inline">
      <Form.Item>
        <Input
          placeholder="项目名"
          type={"text"}
          value={param.name}
          onChange={(event) => setParam({ ...param, name: event.target.value })}
        />
      </Form.Item>
      <Form.Item>
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
      </Form.Item>
    </Form>
  );
};
