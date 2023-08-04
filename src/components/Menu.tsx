import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { BsInstagram, BsSearch } from "react-icons/bs";
import { FaRegCompass } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import NavItems from "./NavItems";
import { useContext, useState } from "react";

import SettingsBurgerComponent from "./SettingsBurgerComponent";
import { newPostContext } from "../App";

const Menu = () => {
    const newPostToggler = useContext(newPostContext);
    const handleNotification = () => {
        console.log("Notification");
    };
    const handleMessage = () => {
        console.log("Message");
    };

    const handleSearch = () => {
        console.log("Search");
    };
    const icons = [
        {
            name: "Instagram",
            icon: <BsInstagram />,
            link: "/",
        },
        { name: "Home", icon: <AiOutlineHome />, link: "/" },
        { name: "Search", icon: <BsSearch />, action: handleSearch },
        { name: "Discover", icon: <FaRegCompass />, link: "/discover" },
        {
            name: "Messages",
            icon: <FiMessageSquare />,
            action: handleMessage,
        },
        {
            name: "Notifications",
            icon: <AiOutlineHeart />,
            action: handleNotification,
        },
        {
            name: "Create",
            icon: <CiSquarePlus />,
            action: () => newPostToggler?.handleNewPostValid(),
        },
    ];
    const [currentLink, setCurrentLink] = useState<string>("Home");

    const displayIcons = icons.map((items, id) => (
        <div key={id} onClick={() => setCurrentLink(items.name)}>
            <NavItems
                name={items.name}
                icon={items.icon}
                active={currentLink}
                navigate={items.link}
                action={items.action}
            />
        </div>
    ));

    return (
        <div className='relative hidden md:block'>
            <div className='fixed bg-white flex flex-col px-2 justify-between h-[100vh] border-r w-fit lg:w-[17.72%]'>
                <div className='flex flex-col gap-1'>
                    {displayIcons}

                    <div onClick={() => setCurrentLink("Profile")}>
                        <NavItems
                            key='profile'
                            name={"Profile"}
                            active={currentLink}
                            navigate={"/profile"}
                        />
                    </div>
                </div>

                <SettingsBurgerComponent active={currentLink} />
            </div>
        </div>
    );
};

export default Menu;
