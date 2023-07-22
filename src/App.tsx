import Feed from "./components/Feed.tsx";
import Menu from "./components/Menu.tsx";
import Create from "./components/Create.tsx";
import { Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";

export const newPostContext = createContext();
function App() {
    const [newPostToggle, setNewPostToggle] = useState<boolean>(false);
    const handleNewPostInvalid = () => {
        setNewPostToggle(false);
    };
    const handleNewPostValid = () => {
        setNewPostToggle(true);
    };
    return (
        <div className='min-screen overscroll-y-none-auto flex'>
            <newPostContext.Provider
                value={{ handleNewPostInvalid, handleNewPostValid }}
            >
                <Menu />
                <Routes>
                    <Route path='/' element={<Feed />} />
                </Routes>
                {newPostToggle && <Create />}
            </newPostContext.Provider>
        </div>
    );
}

export default App;
