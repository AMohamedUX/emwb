import React from "react";
import { Page } from "@shopify/polaris";
import Navbar from "../Components/Navbar";
import AccountDetail from "../Components/AccountDetail";
const Account = () => {
    return (
        <Page>
            <Navbar />
            <AccountDetail/>
        </Page>
    )
}

export default Account