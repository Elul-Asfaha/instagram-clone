import { Badge } from "@mui/material";
import React from "react";
type navData = {
    name: string;
    icon?: React.ReactNode;
    active: string;
};
const NavItems = ({ name, icon, active }: navData) => {
    const profile = "https://picsum.photos/id/237/200/300";
    const newNotification = true;

    return (
        <div
            className={`flex gap-5 justify-center lg:justify-start items-center p-3 cursor-pointer rounded-md hover:bg-gray-100 w-full ${
                name === "Instagram" ? "my-3" : ""
            } ${active === name ? "font-bold" : ""}`}
        >
            <div className='text-[25px]'>
                {name === "Profile" ? (
                    <div className='rounded-full h-[30px] w-[30px] overflow-hidden  bg-gray-200 '>
                        <img src={profile} alt='' className='container' />
                    </div>
                ) : name === "Messages" || name === "Notifications" ? (
                    <Badge
                        badgeContent={0}
                        color='warning'
                        invisible={!newNotification}
                    >
                        {icon}
                    </Badge>
                ) : (
                    icon
                )}
            </div>

            <span className='hidden lg:block'>{name}</span>
        </div>
    );
};

export default NavItems;
