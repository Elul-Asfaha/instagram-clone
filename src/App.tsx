import Feed from "./components/Feed.tsx";
import Menu from "./components/Menu.tsx";
function App() {
    return (
        <div className='min-screen overscroll-y-none-auto flex'>
            <Menu />
            <Feed />
        </div>
    );
}

export default App;
