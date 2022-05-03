import React from "react"
import { Card, TextContainer, TextStyle } from "@shopify/polaris"
const EmailPreview = () => {
    return (
        /* To be filled with Mailgun API, placeholder text used. Will require rework */
        <>
        <Card.Section title="Advanced Email Template Preview">
            <TextContainer spacing="tight">
                <p>Get this template now by upgrading your plan</p>
                <br />
                <p><TextStyle variation="strong">A new customer has signed up!</TextStyle></p>
                <p>Hey YourShopifyAppStore,</p>
                <p>A new customer has created an account on your store. Check out your new customer here:</p>
                <br />
            </TextContainer>
            <Card.Subsection>
                <TextContainer spacing="tight">
                    <p><TextStyle variation="strong">Customer:</TextStyle> John Smith</p>
                    <p><TextStyle variation="strong">Email:</TextStyle> john_smith@email.com</p>
                    <p><TextStyle variation="strong">Phone Number::</TextStyle> +12344445555</p>
                    <br/>
                    <p>Regards,</p>
                    <p>Email My Webhooks</p>
                </TextContainer>
            </Card.Subsection>
        </Card.Section>
        <Card.Section title="What your email will look like">
                <TextContainer spacing="tight">
                    <p>With your current plan, you will see this template</p>
                    <br />
                    <p><TextStyle variation="strong">A new customer has signed up!</TextStyle></p>
                    <p>Hey YourShopifyAppStore,</p>
                    <p>A new customer has created an account on your store. Check out your new customer!</p>
                    <br />
                    <p>Regards,</p>
                    <p>Email My Webhooks</p>
                </TextContainer>
            </Card.Section>
        </>
    )
}

export default EmailPreview