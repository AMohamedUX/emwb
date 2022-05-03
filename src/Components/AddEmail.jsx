import { Stack, TextContainer, Button, Card } from "@shopify/polaris"
const AddEmail = ({ id, address, onDelete }) => {
    return (
        <Card.Section>
            <Stack>
                <Stack.Item fill>
                    <TextContainer>{address}</TextContainer>
                </Stack.Item>
                <Stack.Item>
                    <Button onClick={() => onDelete(id)} plain destructive>Delete</Button>
                </Stack.Item>
            </Stack>
        </Card.Section>
    )
}
export default AddEmail