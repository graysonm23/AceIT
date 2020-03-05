import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
  CustomInput
} from "reactstrap";
import "./modal.css";

const CreateBoardModal = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className="createBoardButton" onClick={toggle}>
        Create Board
      </button>
      <Modal isOpen={modal} toggle={toggle} className="modalBox">
        <ModalHeader toggle={toggle}>Board Creator</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleCustomSelect">Board Rows</Label>
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
              </CustomInput>
            </FormGroup>
            <FormGroup>
              <Label for="ColumnSelect">Board Columns</Label>
              <CustomInput
                type="select"
                id="ColumnSelector"
                name="ColumnSelect"
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
              <Label for="BorderColor">Border Color</Label>
              <CustomInput
                className="colorSelectors"
                type="color"
                value="#00000"
                id="BorderColor"
              ></CustomInput>
            </FormGroup>
            <FormGroup>
              <Label for="BackgroundColor">Background Color</Label>
              <CustomInput
                className="colorSelectors"
                type="color"
                value="#0addbf"
                id="BackgroundColor"
              ></CustomInput>
            </FormGroup>
            <Label for="boardIcon">Board Icon</Label>
            <Input
              type="URL"
              name="boardIcon"
              id="ExampleIcon"
              placeholder="Enter Image URL"
            />
            <Label for="Phrase">Enter Phrase to be Spoken</Label>
            <Input
              type="text"
              name="phrase"
              id="ExamplePhrase"
              placeholder="Enter Phrase"
            />
            <Label for="exampleEmail">Enter Board Label</Label>
            <Input
              type="text"
              name="BoardLabel"
              id="BoardLabel"
              placeholder="Enter Label"
            />
            <FormGroup>
              <Label for="exampleCheckbox"></Label>
              <div>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox"
                  label="Make this my primary board"
                />
              </div>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Create Board
          </Button>{" "}
          <Button outline color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateBoardModal;
