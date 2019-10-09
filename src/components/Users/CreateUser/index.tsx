import * as React from "react";
// import styled from "styled-components";
// import { Mutation } from "react-apollo";
// import { useMutation } from "@apollo/react-hooks";
import { CreateUserComponent } from "../../../generated/graphql";

const CreateUserContainer: React.FC = () => {
  //   const [createUser, { error, loading, data }] = useMutation(
  //     CreateUserMutation
  //   );

  return (
    <CreateUserComponent>
      {(mutate, { client }) => (
        <div
          onClick={() => {
            mutate({ variables: { username: "nickenauber" } });
          }}
        >
          Create User
        </div>
      )}
    </CreateUserComponent>
  );
};

export default CreateUserContainer;
