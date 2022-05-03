import { Tabs, Card } from "@shopify/polaris";
import { useEffect, useState, useMemo } from "react";
const Navbar = () => {
    const tabs = useMemo(() => [
        {
            id: 'user-configure',
            content: 'CONFIGURE',
            url: '/'

        },
        {
            id: 'user-account',
            content: 'ACCOUNT',
            url: '/account'
        
        },
    ], []);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const page = window.location.pathname
        setSelected(tabs.findIndex(t => t.url === page) || 0)
    }, [tabs])

    return (
        <Card>
            <Tabs tabs={tabs} selected={selected} fitted />
        </Card>
    );
}

export default Navbar