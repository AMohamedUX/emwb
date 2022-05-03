import React from "react"
import NotificationItem from "./NotificationItem";
import Footer from "./Footer";
import { Card, Layout, TextContainer, Heading } from "@shopify/polaris"
const Notifications = () => {
    const webhooks = [
        {
            id: 1,
            content: "Customer creates an account"
        },
        {
            id: 2,
            content: "Customer deletes their account"
        },
        {
            id: 3,
            content: "Customer activates their account"
        },
        {
            id: 4,
            content: "Order is cancelled"
        },
        {
            id: 5,
            content: "Order is created"
        },
        {
            id: 6,
            content: "Order is fulfilled"
        },
        {
            id: 7,
            content: "Product is created"
        },
        {
            id: 8,
            content: "Product is deleted"
        },
        {
            id: 9,
            content: "Product is updated"
        },
        {
            id: 10,
            content: "Refund is created"
        }
    ]
    return (
        <Layout>
            <Layout.Section oneHalf>
                <Card.Section>
                    <Card.Section>
                        <TextContainer>
                            <Heading>Select your notifications</Heading>
                            <p>
                                Subscribe to specific notifications. Notifications get sent as emails whenever an event is triggered on your store.
                            </p>
                        </TextContainer>
                    </Card.Section>
                </Card.Section>
            </Layout.Section>
            <Layout.Section oneHalf>
                <Card.Section></Card.Section>
                <Card>
                    {webhooks.map((webhook) => (
                        <NotificationItem key={webhook.id} content={webhook.content} />
                    ))}
                </Card>
                    <Footer />
            </Layout.Section>
        </Layout>
    )
}

export default Notifications

