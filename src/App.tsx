import Feed from "./components/Feed.tsx";
import Menu from "./components/Menu.tsx";
import Create from "./components/Create.tsx";
import { Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";

type PostProviderType = {
    handleNewPostInvalid: () => void;
    handleNewPostValid: () => void;
};
export const newPostContext = createContext<PostProviderType | null>(null);
function App() {
    const [newPostToggle, setNewPostToggle] = useState<boolean>(false);
    const handleNewPostInvalid = () => {
        setNewPostToggle(false);
    };
    const handleNewPostValid = () => {
        setNewPostToggle(true);
    };
    return (
        <div className='screen flex'>
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
