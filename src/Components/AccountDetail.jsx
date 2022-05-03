import { Card, ProgressBar, Stack, Button, TextStyle } from "@shopify/polaris";
import Footer from "./Footer"
const AccountDetail = () => {
    return (
        <>
            <Card title="yourshopifyappstore.myshopify.com">
                <Card.Section>
                    <Stack>
                        <Stack.Item fill>
                            <p>Currrent plan: <TextStyle variation="strong">free</TextStyle></p>
                        </Stack.Item>
                        <Stack.Item>
                            <p>$0.00/month</p>
                        </Stack.Item>
                    </Stack>
                </Card.Section>
                <Card.Section title="MY FEATURES">
                    Monthly emails: 100
                    <br />
                    Advanced email templates: <TextStyle variation="subdued">N/A</TextStyle>
                    <br />
                    Sends emails past limit: <TextStyle variation="subdued">N/A</TextStyle>
                    <br />
                    Cost per 100 emails: <TextStyle variation="subdued">N/A</TextStyle>
                </Card.Section>
                <Card.Section>
                    <p>Current Billing Period: <TextStyle variation="strong">Mon, 04 Apr 2022   -   Wed, 04 May 2022</TextStyle></p>
                </Card.Section>
                <Card.Section title="MONTHLY EMAILS">
                    <Card.Section>
                        <Card.Subsection>
                            <ProgressBar color="primary" progress={75} />
                        </Card.Subsection>
                    </Card.Section>
                </Card.Section>
                <Card.Section>
                    <Card.Subsection>
                        <Stack>
                            <Stack.Item fill>
                                <p>Want to modify or upgrade your plan?</p>
                            </Stack.Item>
                            <Stack.Item>
                                <Button size="slim" primary>Upgrade now</Button>
                            </Stack.Item>
                        </Stack>
                    </Card.Subsection>
                </Card.Section>
            </Card>
            <Footer />
        </>
    )
}

export default AccountDetail