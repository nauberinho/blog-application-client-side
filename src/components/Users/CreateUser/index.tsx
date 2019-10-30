import React, { useState } from "react";
import styled from "styled-components";
// import { Mutation } from "react-apollo";
// import { useMutation } from "@apollo/react-hooks";
import { CreateUserComponent } from "../../../generated/graphql";
import { whileStatement } from "@babel/types";

interface Props {
  history: any;
}

interface CustomAttributes {
  isValid: boolean;
}

const Container = styled.div`
  display: flex;
`;

const Form = styled.div`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled.button`
  border: 1px solid black;
  padding: 1rem 2rem;
  ${(p: CustomAttributes) =>
    p.isValid
      ? "background:  #37C870 ; color: white;"
      : "background: white; color: gray;"}
  transition: 0.2s ease;
  display: block;
  margin-top: 1rem;
`;

const TextField = styled.input`
  border: none;
  outline: none;
  border-bottom: 0.5px solid lightgray;
  padding: 1rem 2rem;
  display: block;
  font-size: 1.2rem;
`;

const CreateUserContainer: React.FC<Props> = ({ history }) => {
  //   const [createUser, { error, loading, data }] = useMutation(
  //     CreateUserMutation
  //   );

  const [username, setUsername] = useState("");
  console.log(username);

  const isValid = username.length > 2;

  return (
    <CreateUserComponent>
      {(mutate, { loading, data, error }) => {
        data && history.goBack();
        return (
          <Container>
            <Form>
              <TextField
                autoFocus
                value={username}
                onChange={({ target }) => setUsername(target.value)}
                onKeyDown={({ keyCode }) =>
                  keyCode === 13 &&
                  isValid &&
                  mutate({ variables: { username: username } })
                }
              />
              <SubmitButton
                disabled={!isValid}
                isValid={isValid}
                onClick={() => {
                  mutate({ variables: { username: username } });
                }}
              >
                {loading ? "Creating..." : "Create Post"}
              </SubmitButton>
            </Form>
          </Container>
        );
      }}
    </CreateUserComponent>
  );
};

export default CreateUserContainer;
