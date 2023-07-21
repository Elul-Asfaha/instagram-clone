import Popover from "@mui/material/Popover";
type breifTypes = {
    open: boolean;
    anchor: HTMLElement | null;
    profileImage: string;
    username: string;
    isFollower: boolean;
    close: void;
    fullName: string;
    posts: number;
    following: number;
    followers: number;
};

const BreifPreview = ({
    open,
    anchor,
    close,
    username,
    isFollower,
    profileImage,
    fullName,
    followers,
    following,
    posts,
}: breifTypes) => {
    return (
        <Popover
            id='mouse-over-popover'
            sx={{
                pointerEvents: "none",
            }}
            open={open}
            anchorEl={anchor}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            onClose={close}
            disableRestoreFocus
        >
            <div className='p-3'>
                <div>
                    <div
                        className='flex items-center gap-4 text-sm py-1 w-[319px]'
                        id={username}
                    >
                        <div className='w-fit'>
                            <div className='h-[30px] w-[30px] rounded-full overflow-hidden'>
                                <img
                                    src={profileImage}
                                    alt=''
                                    className='cover'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <p className='font-bold'>{username}</p>{" "}
                            <p> {fullName}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex-1 flex flex-col items-center justify-center'>
                            <p className='font-bold'>{posts}</p>
                            <p>posts</p>
                        </div>
                        <div className='flex-1 flex flex-col items-center justify-center'>
                            <p className='font-bold'>{followers}</p>

                            <p>followers</p>
                        </div>
                        <div className='flex-1 flex flex-col items-center justify-center'>
                            <p className='font-bold'>{following}</p>

                            <p>following</p>
                        </div>
                    </div>
                </div>
                <div>posts</div>
                <div className='w-full text-white rounded-lg py-1 bg-blue-600 text-center'>
                    {isFollower ? "Follow back" : "Follow"}
                </div>
            </div>
        </Popover>
    );
};

export default BreifPreview;
