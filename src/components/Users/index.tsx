import * as React from "react";
import UserList from "./UserList";
import User from "./User";
import CreateUser from "./CreateUser";
import { Route } from "react-router-dom";

const Users: React.FC = () => {
  return (
    <>
      <Route exact path="/users" component={UserList} />
      <Route exact path="/users/:id" component={User} />
      <Route exact path="/users/create" component={CreateUser} />
    </>
  );
};

export default Users;
