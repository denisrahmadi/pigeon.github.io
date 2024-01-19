import { Routes, Route } from "react-router-dom";
import Chats from "./components/Chats";
import Login from "./components/Login";

function App() {
    return (
        <div style={{ fontFamily: "Avenir" }}>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/chats" element={<Chats />} />
            </Routes>
        </div>
    );
}

export default App;
