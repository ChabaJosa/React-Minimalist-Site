import React, { useState } from "react";
import { Button, Modal } from 'semantic-ui-react'


function ModalExampleDimmer({btnText}) {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <>
      <Button
        onClick={() => show()}
      >
        {btnText}
      </Button>
      <Modal
        basic
        dimmer={'blurring'}
        open={isShown}
        onClose={() => hide()}
      >
        <Modal.Header>We're a phone call or whatsapp message away!</Modal.Header>
        <Modal.Content>
          Let's see what we can do for you. We're a phone call or whatsapp message away!
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => hide()}>
            No thanks!
          </Button>
          <Button positive onClick={() => hide()}>
            Sure!
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default ModalExampleDimmer