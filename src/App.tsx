import { useState } from "react";
import Feed from "./components/Feed.tsx";
import Menu from "./components/Menu.tsx";
function App() {
    const profile = "https://picsum.photos/id/64/200/300";
    return (
        <div className='min-h-screen '>
            <Menu />
        </div>
    );
}

export default App;
