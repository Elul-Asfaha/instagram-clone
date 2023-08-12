import BreifPreview from "./BreifPreview";
import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
type sideBarItemTypes = {
    username: string;
    fullName: string;
    followedBy: string;
    post: number;
    follower: number;
    following: number;
    isFollower: boolean;
    follow: boolean;
    profileImage: string;
};

const SidebarItems = ({
    username,
    fullName,
    // followedBy,
    post,
    follower,
    following,
    isFollower,
    // follow,
    profileImage,
}: sideBarItemTypes) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Box
            aria-owns={open ? "mouse-over-popover" : undefined}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
        >
            <div className='flex items-center gap-4 text-sm py-1' id={username}>
                <div className='w-fit'>
                    <div className='h-[30px] w-[30px] rounded-full overflow-hidden'>
                        <img src={profileImage} alt='' className='cover' />
                    </div>
                </div>
                <Link to={`profile/${username}`} className='flex flex-col w-full'>
                    <p className='font-bold'>{username}</p> <p> {fullName}</p>
                </Link>
                <button className='w-fit text-blue-700 text-right'>
                    {isFollower ? "Follow back" : "Follow"}
                </button>
            </div>
            <BreifPreview
                anchor={anchorEl}
                open={open}
                close={handlePopoverClose}
                username={username}
                fullName={fullName}
                isFollower={isFollower}
                profileImage={profileImage}
                followers={follower}
                posts={post}
                following={following}
            />
        </Box>
    );
};

export default SidebarItems;
