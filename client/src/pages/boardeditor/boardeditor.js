import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
  CustomInput,
  FormText,
  Container
} from "reactstrap";
import "./boardeditor.css";
import icon from "../../images/activityIcon.png";
import icon2 from "../../images/goalicon.png";
import icon3 from "../../images/homeicon.png";
import icon4 from "../../images/yes-icon.png";
import icon5 from "../../images/no-icon.png";
import icon6 from "../../images/run-icon.png";
import icon7 from "../../images/music-icon.png";
import icon8 from "../../images/drink-icon.png";
import API from "../../utils/API";
import ls from "local-storage";

const dummyArr = [
  {
    icon: icon,
    title: "Activity"
  },
  {
    icon: icon2,
    title: "Goals"
  },
  {
    icon: icon3,
    title: "Home"
  },
  {
    icon: icon4,
    title: "Yes"
  },
  {
    icon: icon5,
    title: "No"
  },
  {
    icon: icon6,
    title: "Move"
  },
  {
    icon: icon7,
    title: "Music"
  },
  {
    icon: icon8,
    title: "Drink"
  }
];

const Boardeditor = props => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);
  const [label, setLabel] = useState([]);
  const [boardIcon, setIcon] = useState([]);
  const [background_color, setBGColor] = useState([]);
  const [border_color, setBorderColor] = useState([]);
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);

  const toggle = () => setModal(!modal);

  const changeBackdrop = e => {
    let value = e.target.value;
    if (value !== "static") {
      value = JSON.parse(value);
    }
    setBackdrop(value);
  };
  const speakHandler = value => {
    const synth = window.speechSynthesis;
    const speakIt = new SpeechSynthesisUtterance(value);
    synth.speak(speakIt);
  };
  const handleCreateBoardAPI = e => {
    e.preventDefault();
    const tokenObj = {
      token: ls.get("Authorization")
    };
    console.log(tokenObj.token);
    API.boardEditorRoute(tokenObj)
      .then(res => {
        if (res) {
          console.log(res);
          // setBoolToken(true);
        }
      })
      .catch(err => console.log(err));
  };

  const changeKeyboard = e => {
    setKeyboard(e.currentTarget.checked);
  };
  return (
    <div className="signupBackground">
      <Row className="boardRow">
        {dummyArr.map(cardItem => {
          return (
            <Col lg={2} className="boardCol">
              <Card
                tag="a"
                value={cardItem.title}
                onClick={() => {
                  speakHandler(cardItem.title);
                }}
                style={{ cursor: "pointer" }}
                className="boardItem"
              >
                <CardImg top src={cardItem.icon} alt=""></CardImg>
                <CardBody
                  class="boardItemBody"
                  style={{ backgroundColor: "teal" }}
                >
                  <CardTitle className="boardItemTitle">
                    {cardItem.title}
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Boardeditor;
