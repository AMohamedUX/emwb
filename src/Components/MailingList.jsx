import { useState, useCallback } from "react"
import { Card, Form, Button, TextField, FormLayout, Heading, TextContainer, Layout } from "@shopify/polaris"
import AddEmail from "./AddEmail";
const MailingList = () => {
    const [url, setUrl] = useState('');
    const handleSubmit = useCallback((_event) => setUrl(''), []);
    const handleUrlChange = useCallback((value) => setUrl(value), []);

    const [emails, setEmails] = useState([
        {
            id: 1,
            address: "contact@emailmywebhooks.com"
        },
    ])
    
    const AddEmailsToMailingList = () => {
            setEmails([...emails, {
                id: Math.floor(Math.random() * 10000) + 1,
                address: url,
            }])
        setUrl("")
        }

    const deleteEmail = (id) => {
        if (emails.length > 1) {
            setEmails(emails.filter((email) => email.id !== id))
        } else {
            alert("There must be at least one email in the mailing list")
        }

    }

    return (
        <Layout>
            <Layout.Section oneHalf>
                <Card.Section>
                    <Card.Section>
                        <TextContainer>
                            <Heading>Mailing list</Heading>
                            <p>
                                Add email addresses to the mailing list that will receive notifications. Whenever a notification is triggered, an email will be sent to all the addresses on this list.
                            </p>
                        </TextContainer>
                    </Card.Section>
                </Card.Section>
            </Layout.Section>
            <Layout.Section oneHalf>
                <Card.Section></Card.Section>
                <Card>
                    <Card.Section>
                        <Form onSubmit={handleSubmit}>
                            <FormLayout>
                                <TextField
                                    value={url}
                                    onChange={handleUrlChange}
                                    placeholder="Add an email address"
                                    type="email"
                                    autoComplete="off"
                                    autoFocus={true}
                                    connectedRight={<Button onClick={AddEmailsToMailingList}>Add</Button>}
                                />
                            </FormLayout>
                        </Form>
                    </Card.Section>
                    {emails.map((email) => (
                        <AddEmail key={email.id} address={email.address} id={email.id} onDelete={deleteEmail} />
                    )
                    )}
                </Card>
                <Card.Section></Card.Section>
            </Layout.Section>
        </Layout>
    )

}

export default MailingList
