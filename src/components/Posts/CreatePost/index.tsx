import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CreatePostComponent } from "../../../generated/graphql";

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

const Buttons = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const CancelButtonContainer = styled.div`
  flex: 1;
`;

const Button = styled.button`
  border-radius: 2.5px;
  padding: 0.5rem 2rem;
  transition: 0.2s ease;
  display: block;
  cursor: pointer;
  font-weight: 700;
`;

const CancelButton = styled(Button)`
  border: 1px solid red;

  color: red;
  background: white;
`;

const SubmitButtonContainer = styled.div`
  justify-content: flex-end;
`;

const SubmitButton = styled(Button)`
  border: 1px solid lightgray;
  ${(p: CustomAttributes) =>
    p.isValid
      ? "background:  #37C870 ; color: white;"
      : "background: lightgray; color: black;"}
`;

const TextField = styled.input`
  border: none;
  outline: none;
  border-bottom: 0.5px solid gray;
  padding: 1rem 2rem;
  display: block;
  font-size: 1.2rem;
  background: lightgray;
  margin-top: 0.5rem;
  color: white;
`;

const CreatePostContainer: React.FC<Props> = ({ history }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");

  const isValid = title.length > 0 && body.length > 0;

  return (
    <CreatePostComponent>
      {(mutate, { loading, data, error }) => {
        data && history.goBack();

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
              <Buttons>
                <CancelButtonContainer>
                  <CancelButton
                    disabled={loading}
                    onClick={() => history.goBack()}
                  >
                    Cancel
                  </CancelButton>
                </CancelButtonContainer>
                <SubmitButtonContainer>
                  <SubmitButton
                    disabled={!isValid || loading}
                    isValid={isValid}
                    onClick={() => {
                      mutate({ variables: { title, body, username } });
                    }}
                  >
                    {loading ? "Creating..." : "Create Post"}
                  </SubmitButton>
                </SubmitButtonContainer>
              </Buttons>
            </Form>
          </Container>
        );
      }}
    </CreatePostComponent>
  );
};

export default withRouter(CreatePostContainer);
