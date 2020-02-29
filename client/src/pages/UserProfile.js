import React, { useState, useEffect } from "react";
import "../css/UserProfile.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Button,
  ListGroup,
  ListGroupItem,
  InputGroup,
  Input
} from "reactstrap";
import API from "../utils/API";
import { Widget } from "@uploadcare/react-widget";

function Profile() {
  const [image, setImage] = useState([]);
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState([]);
  const [passwordVisible, setPasswordVisible] = useState(false);
  useEffect(() => {
    imageDidMount();
  });
  const imageDidMount = () => {
    API.getBooks(image)
      .then(res => {
        console.log(res.data.items);
        console.log(res.data);
        setImage(res.data);
      })
      .catch(err => console.log(err));
  };
  const handleImageSubmit = event => {
    event.preventDefault();
    console.log("images ", image);
    if (image.length) {
      API.saveImage({ image })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log("Unable to save image ", err));
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="userProfile">
      <Container className="userContainer">
        <Row className="userRow">
          <Col className="userCol">
            {user.length ? (
              <h1>{user.name}'s Settings</h1>
            ) : (
              <h1>My Settings</h1>
            )}

            <Card className="userCard">
              <CardBody className="userCardBody">
                <CardTitle className="userCardTitle">
                  <h2>Profile Picture</h2>
                </CardTitle>
                <CardBody className="userCardBody">
                  <div id="userPWidget">
                    {image.length ? (
                      <div className="imgDiv">
                        <label htmlFor="file">Change Image:</label>
                        <img
                          className="userPicture"
                          alt="user pic"
                          src={image}
                        />
                      </div>
                    ) : (
                      ""
                    )}

                    <Widget
                      publicKey={process.env.UPLOADCARE_PUBLIC_KEY}
                      id="userFile"
                      onFileSelect={file => {
                        console.log("File changed: ", file);

                        if (file) {
                          file.progress(info =>
                            console.log("File progress: ", info.progress)
                          );
                          file.done(info => {
                            console.log("File uploaded: ", info);
                            setImage([info.originalUrl]);
                          });
                        }
                      }}
                    />
                  </div>
                </CardBody>
              </CardBody>
              <Button id="userSave" onClick={handleImageSubmit} type="submit">
                Save Image
              </Button>
            </Card>
            <Card className="userCard">
              <CardBody className="userCardBody">
                <CardTitle className="userCardTitle"></CardTitle>
                {boards.length > 0 ? (
                  <h2 className="boardsHeader">Your Boards</h2>
                ) : (
                  <div className="boardsHeader">
                    <h2>You have no boards right now</h2>
                    <Button className="userCreateButton">Create One!</Button>
                  </div>
                )}
                <CardBody className="userCardBody">
                  {boards.length ? (
                    <ListGroup>
                      {boards.map((board, index) => (
                        <ListGroupItem key={board}>
                          <Card key={index + 1}>
                            <CardImg
                              style={{
                                maxHeight: 100,
                                maxWidth: 100,
                                margin: 20
                              }}
                              top
                              width="100%"
                              src={board.image}
                              alt="Card image cap"
                            />
                            <CardBody key={index + 2}>
                              <Button>Delete</Button>
                            </CardBody>
                          </Card>
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                  ) : (
                    ""
                  )}
                </CardBody>
              </CardBody>
            </Card>
            <Card className="userCard">
              <CardBody className="userCardBody">
                <CardTitle className="userCardTitle">
                  <h2>{user.name} Information</h2>
                </CardTitle>
                <CardBody className="userCardBody">
                  {user.length ? (
                    <ListGroup>
                      {user.map((user, index) => (
                        <div>
                          <InputGroup className="inputGroup">
                            <label>Name: </label>
                            <Input
                              readOnly
                              className="inputName"
                              value={user.name}
                              type="name"
                            />
                            <label>Email: </label>
                            <Input
                              readOnly
                              className="inputEmail"
                              value={user.email}
                              type="email"
                            />
                            <label>Password: </label>
                            <Input
                              readOnly
                              className="inputPassword"
                              value={user.password}
                              type={passwordVisible ? "text" : "password"}
                            />
                            <span
                              onClick={togglePasswordVisibility}
                              toggle="#password-field"
                              class="fa fa-fw fa-eye field-icon toggle-password"
                            ></span>
                          </InputGroup>
                        </div>
                      ))}
                    </ListGroup>
                  ) : (
                    <div>
                      <InputGroup className="inputGroup">
                        <label>Name: </label>
                        <Input
                          readOnly
                          className="inputName"
                          value={"name"}
                          type="name"
                        />
                        <label>Email: </label>
                        <Input
                          readOnly
                          className="inputEmail"
                          value={"email"}
                          type="email"
                        />
                        <label>Password: </label>
                        <Input
                          readOnly
                          className="inputPassword"
                          value={"password"}
                          type={passwordVisible ? "text" : "password"}
                        />
                        <span
                          onClick={togglePasswordVisibility}
                          toggle="#password-field"
                          class="fa fa-fw fa-eye field-icon toggle-password"
                        ></span>
                      </InputGroup>
                    </div>
                  )}
                </CardBody>
              </CardBody>
            </Card>
            <Card className="userCard">
              <CardBody className="userCardBody">
                <CardTitle className="userCardTitle">
                  <h2 className="comingSoonHeader">More Coming Soon!</h2>
                </CardTitle>
                <CardBody className="userCardBody"></CardBody>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
