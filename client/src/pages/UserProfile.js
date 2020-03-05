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
  Input,
  Form
} from "reactstrap";
import API from "../utils/API";
import { Widget } from "@uploadcare/react-widget";
import $ from "jquery";
import CreateBoardModal from "./boardeditor/modal/modal";

function Profile() {
  const [image, setImage] = useState([]);
  const [boards, setBoards] = useState([]);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleConfirm, setPasswordVisibleConfirm] = useState(false);
  const [editor, setEditor] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [saved, setSaved] = useState(false);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    imageDidMount();
    userDidMount();
  });
  const userDidMount = () => {
    setSaved(true);
    API.signInRoute(name, email, password)
      .then(res => {
        setEmail(res.data.email);
        setPassword(res.data.password);
        setName(res.data.name);
      })
      .catch(err => console.log("Unable to load user ", err));
  };
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
  const nameHandler = string => {
    let s = string.split(/(?<=^\S+)\s/);
    string = s[0];
    return string;
  };
  const openImageHandler = event => {
    $(
      "button.uploadcare--widget__button.uploadcare--widget__button_type_open"
    ).click();
  };
  const handleUserInfoSubmit = event => {
    event.preventDefault();
    setEditor(false);
    console.log(name, password, email);
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordVisibilityConfirm = () => {
    setPasswordVisibleConfirm(!passwordVisibleConfirm);
  };
  const toggleEditor = () => {
    setEditor(!editor);
  };
  return (
    <div className="signupBackground">
      <Container className="userContainer">
        <Row className="userRow">
          <Col className="userCol">
            {name.length && saved ? (
              <h1>{nameHandler(name)}'s Profile</h1>
            ) : (
              <h1 className="profileTitle">My Profile</h1>
            )}
            <div className="wrapperDiv">
              <Card className="userCard">
                <CardBody className="userCardBody">
                  <CardTitle className="userCardTitle">
                    <h2>Profile Picture</h2>
                  </CardTitle>
                  <CardBody className="userCardInnerBody">
                    <div id="userPWidget">
                      {image.length ? (
                        <div className="imgDiv">
                          <img
                            onClick={openImageHandler}
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
                        // do not store images on development
                        // doNotStore
                        onHide={hide ? $("#userFile").hide() : ""}
                        crop
                        imagesOnly
                        multipleMax={1}
                        imageShrink="400x400"
                        id="userFile"
                        onFileSelect={file => {
                          console.log("File changed: ", file);

                          if (file) {
                            file.progress(info =>
                              console.log("File progress: ", info.progress)
                            );
                            file.done(info => {
                              console.log("File uploaded: ", info);
                              setImage([info.cdnUrl]);
                            });
                            if (
                              file.progress(info => {
                                return (info = info.progress);
                              }) === 1
                            ) {
                              setHide(true);
                            }
                          }
                        }}
                      />
                    </div>
                  </CardBody>
                </CardBody>
                <button
                  className="profileButton"
                  onClick={handleImageSubmit}
                  type="submit"
                >
                  Save Image
                </button>
              </Card>
              <Card className="userCard">
                <CardBody className="userCardBody">
                  <CardTitle className="userCardTitle"></CardTitle>
                  {boards.length > 0 ? (
                    <h2 className="boardsHeader">Your Boards</h2>
                  ) : (
                    <div className="boardsHeader">
                      <h2>You have no boards right now</h2>
                    </div>
                  )}
                  <CardBody className="userCardInnerBody">
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
                <CreateBoardModal></CreateBoardModal>
              </Card>
              <Card className="userInformationCard">
                <CardBody className="userCardBody">
                  <CardTitle className="userCardTitle">
                    <h2>My Information</h2>
                  </CardTitle>
                  <CardBody className="userCardInnerBody">
                    <div>
                      <Form onSubmit={handleUserInfoSubmit}>
                        <InputGroup
                          autoComplete="new-password"
                          className="inputGroup"
                        >
                          <span
                            tabIndex={0}
                            onClick={() => {
                              toggleEditor();
                              {
                                !name.length ? setSaved(false) : setSaved(true);
                              }
                            }}
                            class="fas fa-pen-square toggle-editor"
                          ></span>
                          <label>Name: </label>
                          <Input
                            autoComplete="new-password"
                            autoCapitalize="on"
                            readOnly={editor ? false : "readonly"}
                            className="inputName"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            type="name"
                          />
                          <label>Email: </label>
                          <Input
                            autoComplete="new-password"
                            readOnly={editor ? false : "readonly"}
                            className="inputEmail"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            type="email"
                          />
                          <label>Password: </label>
                          <Input
                            autoComplete="new-password"
                            readOnly={editor ? false : "readonly"}
                            className="inputPassword"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            type={passwordVisible ? "text" : "password"}
                          />
                          {password.length ? (
                            <span
                              tabIndex={0}
                              onFocus={togglePasswordVisibility}
                              toggle="#password-field"
                              className="fa fa-fw fa-eye field-icon toggle-password"
                            ></span>
                          ) : (
                            ""
                          )}
                          <label>Confirm Password: </label>
                          <Input
                            autoComplete="new-password"
                            readOnly={editor ? false : "readonly"}
                            className="inputPassword"
                            onChange={e => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            type={passwordVisibleConfirm ? "text" : "password"}
                          />
                          {confirmPassword.length ? (
                            <span
                              tabIndex={0}
                              onFocus={togglePasswordVisibilityConfirm}
                              toggle="#password-field"
                              className="fa fa-fw fa-eye field-icon toggle-password-2"
                            ></span>
                          ) : (
                            ""
                          )}
                        </InputGroup>
                        {editor ? (
                          <Button
                            className="saveInfoButton"
                            onClick={() => {
                              handleUserInfoSubmit();
                              setSaved(true);
                            }}
                          >
                            Save
                          </Button>
                        ) : (
                          ""
                        )}
                      </Form>
                    </div>
                  </CardBody>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
