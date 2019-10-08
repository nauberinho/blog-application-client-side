import * as React from "react";
import { useUserListQuery } from "../../generated/graphql";
import { UserList, OwnProps } from "./UserList";

const UserListContainer: React.FC<OwnProps> = ({ handleIdChange }) => {
  const { data, error, loading } = useUserListQuery();
  console.log(data, error, "=error", loading);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <UserList data={data} handleIdChange={handleIdChange} />;
};

export default UserListContainer;
