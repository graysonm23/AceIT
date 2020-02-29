import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';


const ModalExample = (props) => {
    const {
        buttonLabel,
        className
    } = props;


    return (
        <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <FormGroup>
                    <Label for="backdrop">Backdrop value</Label>{' '}
                    <Input type="select" name="backdrop" id="backdrop" onChange={props.changeBackdrop}>
                        <option value="true">true</option>
                        <option value="false">false</option>
                        <option value="static">"static"</option>
                    </Input>
                </FormGroup>
                <FormGroup className="mx-2" check>
                    <Label check>
                        <Input type="checkbox" checked={props.keyboard} onChange={props.changeKeyboard} /> Keyboard
          </Label>
                </FormGroup>
                {' '}
                <Button color="danger" onClick={props.toggle}>{buttonLabel}</Button>
            </Form>
            <Modal isOpen={props.modal} toggle={props.toggle} className={className} backdrop={props.backdrop} keyboard={props.keyboard}>
                <ModalHeader toggle={props.toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;