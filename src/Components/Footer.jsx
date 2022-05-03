import React, { useState, useCallback } from "react";
import { Button, Modal, TextField, FooterHelp } from '@shopify/polaris';
const Footer = () => {
  const [text,setText] = useState('')
  const handleTextChange = useCallback((text) => setText(text), []);

  const [active, setActive] = useState(false);
  const handleChange = useCallback(() => setActive(!active), [active]);
  const activator = <FooterHelp>
    Have any feedback? Let us know your thoughts{' '}
    <Button plain onClick={handleChange}>here</Button>
  </FooterHelp>;
  return (
      <Modal
        activator={activator}
        open={active}
        onClose={handleChange}
        title="Submit feedback"
        primaryAction={{
          content: 'Submit',
          onAction: handleChange,
        }}
      >
        <Modal.Section>
          <TextField
          onChange={handleTextChange}
          value={text}
          autoFocus={true}
          />
        </Modal.Section>
      </Modal>
  );
}

export default Footer