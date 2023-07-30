import { Badge } from "@mui/material";
import React, { useContext } from "react";
import { newPostContext } from "../App";
import InstagramSvg from "../assets/InstagramSvg";
import { Link } from "react-router-dom";
type navData = {
    name: string;
    icon?: React.ReactNode;
    active?: string;
};
const NavItems = ({ name, icon, active }: navData) => {
    const profile = "https://picsum.photos/id/237/200/300";
    const newNotification = true;
    const newPostToggler = useContext(newPostContext);
    return (
        <div
            className={`flex gap-5 justify-center lg:justify-start items-center p-3 cursor-pointer rounded-md  w-full ${
                name === "Instagram" ? "my-4" : "hover:bg-gray-100"
            } ${active === name ? "font-bold" : ""}`}
            onClick={
                name === "Create"
                    ? () => newPostToggler?.handleNewPostValid()
                    : () => console.log("")
            }
        >
            <div className='text-[25px]'>
                {name === "Profile" ? (
                    <Link to='/profile/elul_asfaha'>
                        <div className='rounded-full h-[30px] w-[30px] overflow-hidden  bg-gray-200 '>
                            <img src={profile} alt='' className='container' />
                        </div>
                    </Link>
                ) : name === "Messages" || name === "Notifications" ? (
                    <Badge
                        badgeContent={1}
                        color='warning'
                        invisible={!newNotification}
                    >
                        {icon}
                    </Badge>
                ) : name == "Instagram" ? (
                    <Link to='/'>
                        <div className='hidden md:block lg:hidden'>{icon}</div>
                        <div className='hidden md:hidden lg:block'>
                            <InstagramSvg />
                        </div>
                    </Link>
                ) : (
                    icon
                )}
            </div>

            <span className='hidden lg:block'>
                {name === "Instagram" ? "" : name === "profile" ? "" : name}
            </span>
        </div>
    );
};

export default NavItems;
