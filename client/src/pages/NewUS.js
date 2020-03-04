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

function Home() {
  const [image, setImage] = useState([]);
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
    <div path="Settings" className="homepage">
      <Container className="homeContainer">
        <Row className="homeRow">
          <Col className="homeCol">
            <Card className="homeCard">
              <CardBody>
                <CardTitle className="homeCardTitle">
                  {image.length > 0 ? (
                    <h1 className="success">Success!</h1>
                  ) : (
                    <h1>Upload profile picture</h1>
                  )}
                </CardTitle>
                <CardBody className="homeCardBody">
                  <div id="widget">
                    <label htmlFor="file">Your file:</label>{" "}
                    <Widget
                      publicKey={process.env.UPLOADCARE_PUBLIC_KEY}
                      id="file"
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
