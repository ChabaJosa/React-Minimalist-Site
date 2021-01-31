import React, { useState } from "react";
import { Button, Modal, Form, Segment, TextArea, Select } from "semantic-ui-react";

function ModalExampleDimmer({ btnText }) {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  const options = [
    { key: "r", text: "Referred", value: "referred" },
    { key: "s", text: "Social Media", value: "social media" },
    { key: "o", text: "Online Search", value: "online search" },
  ];

  return (
    <>
      <Button onClick={() => show()}>{btnText}</Button>
      <Modal basic dimmer={"blurring"} open={isShown} onClose={() => hide()}>
        <Modal.Header>
          Contact
        </Modal.Header>
        <Modal.Content>
          Let's see what we can do for you. We're a phone call or whatsapp
          message away!
        </Modal.Content>
        <Modal.Content className="parent-background">
          <Segment inverted>
            <Form inverted>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Name"
                  className="active-form-field"
                  placeholder="Name"
                />
                <Form.Field
                  control={Select}
                  label="How did you hear from us?"
                  options={options}
                  placeholder="From"
                />
              </Form.Group>
              <Form.Field
                control={TextArea}
                label="How can we help?"
                placeholder="Tell us more about you..."
              />
            </Form>
          </Segment>
        </Modal.Content>
        <Modal.Actions>
          <Button basic inverted color="green" onClick={() => hide()}>
            Submit! 
          </Button>
          <Button basic inverted color="red" onClick={() => hide()}>
            No thanks
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default ModalExampleDimmer;
