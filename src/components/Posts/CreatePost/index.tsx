import React, { useState } from "react";
import styled from "styled-components";
import { CreatePostComponent } from "../../../generated/graphql";

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
`;

const TextField = styled.input`
  border: none;
  outline: none;
  border-bottom: 0.5px solid gray;
  padding: 1rem 2rem;
  display: block;
  font-size: 1.2rem;
`;

const CreatePostContainer: React.FC = () => {
  //   const [createUser, { error, loading, data }] = useMutation(
  //     CreateUserMutation
  //   );

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");

  const isValid = title.length > 0 && body.length > 0;

  return (
    <CreatePostComponent>
      {(mutate, { loading, data, error }) => {
        console.log(loading, data, error);
        return (
          <Container>
            <Form>
              <TextField
                autoFocus
                placeholder="Title"
                value={title}
                onChange={({ target }) => setTitle(target.value)}
              />
              <TextField
                autoFocus
                placeholder="Once upon a time..."
                value={body}
                onChange={({ target }) => setBody(target.value)}
              />
              <TextField
                autoFocus
                placeholder="Username of the author"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
                onKeyDown={({ keyCode }) =>
                  keyCode === 13 &&
                  isValid &&
                  mutate({ variables: { title, body, username } })
                }
              />
              <SubmitButton
                disabled={!isValid}
                isValid={isValid}
                onClick={() => {
                  mutate({ variables: { title, body, username } });
                }}
              >
                Create User
              </SubmitButton>
            </Form>
          </Container>
        );
      }}
    </CreatePostComponent>
  );
};

export default CreatePostContainer;
