export const List = ({ list, users }) => {
  const usersMap = {};
  users.forEach((user) => {
    usersMap[user.id] = user;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{usersMap[item.personId]?.name || "未知"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
