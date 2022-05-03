import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import { Route, Routes} from "react-router-dom";
import Configure from "./routes/Configure";
import Account from "./routes/Account";
function App() {
  return (
    <AppProvider>
    <Routes>
        <Route>
          <Route path="/" element={<Configure/>}/>
          <Route path="/account" element={<Account/>}/>
        </Route>
    </Routes>
    </AppProvider>
  );
}
export default App;