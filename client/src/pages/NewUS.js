import React, { useState } from "react";
import "../css/NewUS.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import API from "../utils/API";
import { Widget } from "@uploadcare/react-widget";
import $ from "jquery";
import KeyboardEventHandler from "react-keyboard-event-handler";

function Home() {
  const [image, setImage] = useState([]);
  const [hide, setHide] = useState(false);
  const [enter, setEnter] = useState(false);
  const openImageHandler = event => {
    $(
      "button.uploadcare--widget__button.uploadcare--widget__button_type_open"
    ).click();
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
  return (
    <div path="Settings" className="signupBackground">
      <Container className="homeContainer">
        <Row className="homeRow">
          <Col className="homeCol">
            <Card className="SignupCard">
              <CardBody>
                <CardTitle className="homeCardTitle">
                  {image.length > 0 ? (
                    <h1 className="success">Success!</h1>
                  ) : (
                    <h1>Upload profile picture</h1>
                  )}
                </CardTitle>
                <CardBody className="homeCardBody">
                  <div id="userPWidget">
                    {image.length ? (
                      <div className="imgDiv">
                        <KeyboardEventHandler
                          handleKeys={["enter"]}
                          onKeyEvent={(key, e) => {
                            $(
                              "button.uploadcare--widget__button.uploadcare--widget__button_type_open"
                            ).click();
                            console.log(e);
                          }}
                        >
                          <img
                            // onFocus={openOnEnter}
                            tabIndex={0}
                            onClick={openImageHandler}
                            className="userPicture"
                            alt="user pic"
                            src={image}
                          />
                        </KeyboardEventHandler>
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
              <Button id="save" onClick={handleImageSubmit} type="submit">
                <i className="fas fa-arrow-right"></i>
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
