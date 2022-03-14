import { Table } from "antd";
import { User } from "./search-panel";
import React from "react";
import dayjs from "dayjs";
interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
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
          title: "部门",
          dataIndex: "organization",
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
        {
          title: "创建时间",
          // dataIndex: "created",
          render: (value, project) => {
            return (
              <span>
                {project.created
                  ? dayjs(project.created).format("YYYY-MM-DD")
                  : "未知"}
              </span>
            );
          },
        },
      ]}
      pagination={false}
    />
  );
};
