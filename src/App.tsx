import Feed from "./pages/Feed.tsx";
import Menu from "./components/Menu.tsx";
import Create from "./components/Create.tsx";
import { Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import Profile from "./pages/Profile.tsx";
import Accounts from "./pages/Accounts.tsx";

type PostProviderType = {
    handleNewPostInvalid: () => void;
    handleNewPostValid: () => void;
};
type UserProviderType = {
    user: string;
};

export const newPostContext = createContext<PostProviderType | null>(null);
export const userContext = createContext<UserProviderType | null>(null);

function App() {
    const [newPostToggle, setNewPostToggle] = useState<boolean>(false);
    const [user, setUser] = useState("elul_asfaha");
    const handleNewPostInvalid = () => {
        setNewPostToggle(false);
    };
    const handleNewPostValid = () => {
        setNewPostToggle(true);
    };
    return (
        <div className='flex min-h-screen'>
            <userContext.Provider value={{ user }}>
                <newPostContext.Provider
                    value={{ handleNewPostInvalid, handleNewPostValid }}
                >
                    <Menu />
                    <Routes>
                        <Route path='/profile/:id' element={<Profile />} />
                        <Route path='/:id' element={<Profile />} />
                        <Route path='/' element={<Feed />} />
                        <Route path='/accounts' element={<Accounts />} />
                        <Route path='/saved' element={<Accounts />} />
                        <Route path='/activity' element={<Accounts />} />
                    </Routes>
                    {newPostToggle && <Create />}
                </newPostContext.Provider>
            </userContext.Provider>
        </div>
    );
}

export default App;
