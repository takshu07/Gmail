import Switch from "@mui/material/Switch";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { BrowserRouter  } from "react-router-dom";
import Mail from "./components/mail";
import MailList from "./components/mailList";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="flex flex-row">
         <Sidebar />  
        <MailList/> 
      </div>
           
    </BrowserRouter>
  );
}

export default App;
