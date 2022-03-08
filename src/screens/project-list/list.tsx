import { Table } from "antd";
import { User } from "./search-panel";

interface Project {
  id: string;
  name: string;
  personId: string;
  organization: string;
  created: number;
}
interface ListProps {
  list: Project[];
  users: User[];
}

export const List = ({ list, users }: ListProps) => {
  return (
    <Table
      dataSource={list}
      rowKey={(record) => record.id}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
        },
        {
          title: "负责人",
          dataIndex: "personId",
          render: (personId: string) => {
            return (
              <span>
                {users.find((user) => user.id === personId)?.name || "未知"}
              </span>
            );
          },
        },
      ]}
      pagination={false}
    />
  );
};
