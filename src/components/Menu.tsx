import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { BsSearch, BsInstagram } from "react-icons/bs";
import { FaRegCompass } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import NavItems from "./NavItems";
import { useState } from "react";
const Menu = () => {
    const icons = [
        { name: "Instagram", icon: <BsInstagram /> },
        { name: "Home", icon: <AiOutlineHome /> },
        { name: "Search", icon: <BsSearch /> },
        { name: "Discover", icon: <FaRegCompass /> },
        { name: "Messages", icon: <FiMessageSquare /> },
        { name: "Notifications", icon: <AiOutlineHeart /> },
        { name: "Create", icon: <CiSquarePlus /> },
    ];
    const [currentLink, setCurrentLink] = useState<string>("Home");
    const displayIcons = icons.map((items, id) => (
        <div onClick={() => setCurrentLink(items.name)}>
            <NavItems
                key={id}
                name={items.name}
                icon={items.icon}
                active={currentLink}
            />
        </div>
    ));

    return (
        <div className='relative hidden md:block'>
            <div className='fixed bg-white flex flex-col p-5 justify-between h-[100vh] border-r w-fit lg:w-[17.72%]'>
                <div className='flex flex-col gap-1'>
                    {displayIcons}

                    <div onClick={() => setCurrentLink("Profile")}>
                        <NavItems
                            key='profile'
                            name={"Profile"}
                            active={currentLink}
                        />
                    </div>
                </div>
                <div onClick={() => setCurrentLink("More")}>
                    <NavItems
                        key='settings'
                        name={"More"}
                        icon={<RxHamburgerMenu />}
                        active={currentLink}
                    />
                </div>
            </div>
        </div>
    );
};

export default Menu;
