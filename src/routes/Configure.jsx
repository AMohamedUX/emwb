import { Page } from "@shopify/polaris"
import MailingList from "../Components/MailingList"
import Notifications from "../Components/Notifications"
import Navbar from "../Components/Navbar"

const Configure = () => {
    return (
        <Page>
            <Navbar/>
            <MailingList />
            <Notifications />
        </Page>
    )
}

export default Configure