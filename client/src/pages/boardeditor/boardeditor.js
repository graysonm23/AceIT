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
  FormText
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
    <div class="container-fluid cardStyle">
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        backdrop={backdrop}
        keyboard={keyboard}
      >
        <ModalHeader toggle={toggle}>Create New Board</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleCheckbox">Home</Label>
              <div>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox"
                  label="Homeboard"
                />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="exampleCustomSelect">Rows</Label>
              <CustomInput
                type="select"
                id="exampleCustomSelect"
                name="customSelect"
              >
                <option value="">Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
              </CustomInput>
            </FormGroup>
            <FormGroup>
              <Label for="exampleCustomSelect">Columns</Label>
              <CustomInput
                type="select"
                id="exampleCustomSelect"
                name="customSelect"
              >
                <option value="">Select</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>6</option>
                <option>12</option>
              </CustomInput>
            </FormGroup>
            <FormGroup>
              <Label for="exampleCustomSelect">Color(s)</Label>
              <CustomInput
                type="select"
                id="exampleCustomSelect"
                name="customSelect"
              >
                <option value="">Select</option>
                <option>Value 1</option>
                <option>Value 2</option>
                <option>Value 3</option>
                <option>Value 4</option>
                <option>Value 5</option>
              </CustomInput>
            </FormGroup>
            <Label for="exampleEmail">Icon</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter Icon"
            />
            <Label for="exampleEmail">Phrase</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter Phrase"
            />
            <Label for="exampleEmail">Label</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter Label"
            />
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Row>
        {dummyArr.map(cardItem => {
          return (
            <Col md={3}>
              <Card>
                <CardImg top src={cardItem.icon} alt=""></CardImg>
                <CardBody class="bodyCard" style={{ backgroundColor: "teal" }}>
                  <CardTitle>{cardItem.title}</CardTitle>
                  <CardSubtitle></CardSubtitle>
                  <CardText> </CardText>
                  <Button onClick={toggle}>Click</Button>
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
