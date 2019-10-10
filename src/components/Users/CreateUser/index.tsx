import React, { useState } from "react";
import styled from "styled-components";
// import { Mutation } from "react-apollo";
// import { useMutation } from "@apollo/react-hooks";
import { CreateUserComponent } from "../../../generated/graphql";
import { whileStatement } from "@babel/types";

interface CustomAttributes {
  isValid: boolean;
}

const Container = styled.div`
  display: flex;
`;

const Form = styled.div`
  margin: 2rem auto;
`;

const SubmitButton = styled.button`
  border: 1px solid black;
  padding: 1rem 2rem;
  ${(p: CustomAttributes) =>
    p.isValid
      ? "background: green; color: white;"
      : "background: white; color: gray;"}
  transition: 0.2s ease;
`;

const TextField = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  padding: 1rem 2rem;
`;

const CreateUserContainer: React.FC = () => {
  //   const [createUser, { error, loading, data }] = useMutation(
  //     CreateUserMutation
  //   );

  const [username, setUsername] = useState("");
  console.log(username);

  const isValid = username.length > 2;

  return (
    <CreateUserComponent>
      {(mutate, { loading, data, error }) => {
        console.log(loading, data, error);
        return (
          <Container>
            <Form>
              <TextField
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
              <SubmitButton
                disabled={!isValid}
                isValid={isValid}
                onClick={() => {
                  mutate({ variables: { username: username } });
                }}
              >
                Create User
              </SubmitButton>
            </Form>
          </Container>
        );
      }}
    </CreateUserComponent>
  );
};

export default CreateUserContainer;
