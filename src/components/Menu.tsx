import React from "react";
import { BiMoviePlay } from "react-icons/bi";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { BsSearch, BsInstagram } from "react-icons/bs";
import { FaRegCompass } from "react-icons/fa";
import { CiSquarePlus, CiMenuBurger } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import NavItems from "./NavItems";

const Menu = () => {
    const icons = [
        { name: "Instagram", icon: <BsInstagram /> },
        { name: "Home", icon: <AiFillHome /> },
        { name: "Search", icon: <BsSearch /> },
        { name: "Discover", icon: <FaRegCompass /> },
        { name: "Messages", icon: <FiMessageSquare /> },
        { name: "Notifications", icon: <AiOutlineHeart /> },
        { name: "Create", icon: <CiSquarePlus /> },
    ];

    const displayIcons = icons.map((items, id) => (
        <NavItems key={id} name={items.name} icon={items.icon} />
    ));

    return (
        <div className='flex flex-col p-5 justify-between h-screen border-r w-fit'>
            <div className='flex flex-col gap-1'>
                {displayIcons}

                <div>
                    <NavItems key='profile' name={"Profile"} />
                </div>
            </div>
            <div>
                <NavItems
                    key='settings'
                    name={"More"}
                    icon={<CiMenuBurger />}
                />
            </div>
        </div>
    );
};

export default Menu;
