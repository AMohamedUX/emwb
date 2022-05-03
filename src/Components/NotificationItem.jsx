import React, { useState, useCallback } from "react";
import { CircleTickOutlineMinor } from '@shopify/polaris-icons';
import { Stack, TextContainer, Button, Icon, Card, Modal } from "@shopify/polaris";
import EmailPreview from "./EmailPreview"
const NotificationItem = ({ content }) => {
    const [iconValue, setIconValue] = useState("base")
    const [buttonState, setButtonState] = useState("Add")
    const [buttonColor, setButtonColor] = useState(false)

    const [active, setActive] = useState(false);
    const handleChange = useCallback(() => setActive(!active), [active]);
    const activator = <Button onClick={handleChange} plain>Preview</Button>

    const subscribe = () => {
        if (iconValue === "base") {
            setButtonColor(true)
            setButtonState("Delete")
            setIconValue("primary")
        } else {
            setButtonColor(false)
            setButtonState("Add")
            setIconValue("base")
        }
    }

    return (
        <Card.Section>
            <Stack>
                <Stack.Item>
                    <Icon
                        source={CircleTickOutlineMinor}
                        color={iconValue} />
                </Stack.Item>
                <Stack.Item fill>
                    <TextContainer>{content}</TextContainer>
                </Stack.Item>
                <Stack.Item>
                    <Modal activator={activator}
                        open={active}
                        onClose={handleChange}
                        primaryAction={{
                            content: 'Upgrade Now',
                            onAction: handleChange,
                        }}>
                        <Modal.Section>
                            <EmailPreview/>
                        </Modal.Section>
                        </Modal>
                </Stack.Item>
                <Stack.Item>
                    <Button onClick={subscribe} plain destructive={buttonColor}>{buttonState}</Button>
                </Stack.Item>
            </Stack>
        </Card.Section>
    )
}

export default NotificationItem