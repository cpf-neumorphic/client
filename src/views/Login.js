import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";

export default (props) => {
  const history = useHistory();
  const { currentUser, allUsers, setCurrentUser } = useContext(UserContext);
  const [selectedNric, setSelectedNric] = useState(currentUser.nric);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "user") {
      const userObj = allUsers.find((user) => user.name === value);
      if (userObj) setSelectedNric(userObj.nric);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCurrentUser(selectedNric);
    history.push("/");
  };

  return (
    <Container style={{ margin: "6rem auto" }}>
      <Card style={{ maxWidth: "500px", margin: "auto" }} body>
        <h2>SingPass Login</h2>
        <p>This is a demo login page</p>
        <hr />
        <Form onSubmit={handleSubmit} onChange={handleChange}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select demo account</Form.Label>
            <Form.Control as="select" name="user">
              {allUsers
                .sort((user) => (user.nric === selectedNric ? -1 : 0))
                .map((user) => (
                  <option key={user.nric}>{user.name}</option>
                ))}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
