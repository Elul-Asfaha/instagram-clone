import Feed from "./components/Feed.tsx";
import Menu from "./components/Menu.tsx";
function App() {
    return (
        <div className='min-h-screen flex'>
            <Menu />
            <Feed />
        </div>
    );
}

export default App;
