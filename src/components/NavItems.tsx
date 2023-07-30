import { Badge } from "@mui/material";
import InstagramSvg from "../assets/InstagramSvg";
import { Link } from "react-router-dom";
type navData = {
    name: string;
    icon?: React.ReactNode;
    active?: string;
    navigate?: string | undefined;
    action?: () => void;
};
const NavItems = ({ name, icon, active, navigate, action }: navData) => {
    const profile = "https://picsum.photos/id/237/200/300";
    const newNotification = true;
    return (
        <div className=''>
            {navigate ? (
                <Link
                    to={
                        name === "Profile"
                            ? `${navigate}/${"elul_asfaha"}`
                            : navigate
                    }
                >
                    <div
                        className={`text-[25px] cursor-pointer rounded-md flex gap-5 justify-center lg:justify-start items-center p-3 ${
                            name === "Instagram" ? "my-4" : "hover:bg-gray-100"
                        } ${active === name ? "font-bold" : ""} `}
                    >
                        <span className='text-3xl'>
                            {name === "Instagram" ? (
                                <div>
                                    <div className='hidden md:block lg:hidden'>
                                        {icon}
                                    </div>
                                    <div className='hidden md:hidden lg:block'>
                                        <InstagramSvg />
                                    </div>
                                </div>
                            ) : name === "Profile" ? (
                                <div className='rounded-full h-[30px] w-[30px] overflow-hidden flex bg-gray-200 '>
                                    <img
                                        src={profile}
                                        alt=''
                                        className='container'
                                    />
                                </div>
                            ) : (
                                icon
                            )}
                        </span>
                        <span className='hidden text-base lg:block'>
                            {name === "Instagram" ? "" : name}
                        </span>
                    </div>
                </Link>
            ) : (
                <div
                    onClick={action}
                    className={`text-[25px] cursor-pointer rounded-md hover:bg-gray-100 flex gap-5 justify-center lg:justify-start items-center p-3 ${
                        active === name ? "font-bold" : ""
                    }`}
                >
                    {name === "Messages" || name === "Notifications" ? (
                        <div className='flex gap-5'>
                            <Badge
                                badgeContent={1}
                                color='warning'
                                invisible={!newNotification}
                            >
                                {icon}
                            </Badge>
                            <span className='hidden text-base lg:block'>
                                {name}
                            </span>
                        </div>
                    ) : (
                        <div className='flex gap-5'>
                            <span className='text-3xl'>{icon}</span>
                            <span className='hidden text-base lg:block'>
                                {name}
                            </span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default NavItems;
