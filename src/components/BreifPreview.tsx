import Popover from "@mui/material/Popover";
type breifTypes = {
    open: boolean;
    anchor: HTMLElement | null;
    profileImage: string;
    username: string;
    isFollower: boolean;
    close: () => void;
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
            <div className='flex flex-col gap-3 py-3  w-[319px]'>
                <div className='px-2 flex flex-col gap-5'>
                    <div
                        className='flex items-center gap-3 text-sm py-1'
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

                <div>
                    {posts === 0 ? (
                        <div className='flex flex-col p-2 border-y-2 items-center'>
                            <p className='font-bold '>No posts yet</p>
                            <p>
                                When {username} shares photos and reels, you'll
                                see them here.
                            </p>
                        </div>
                    ) : (
                        <div className='flex gap-1 py-1'>
                            <img
                                src='https://picsum.photos/id/237/200/300'
                                className='flex-1 h-[150px] cover'
                            />
                            <img
                                src='https://picsum.photos/id/237/200/300'
                                className='flex-1 h-[150px] cover'
                            />
                            <img
                                src='https://picsum.photos/id/237/200/300'
                                className='flex-1 h-[150px] cover'
                            />
                        </div>
                    )}
                </div>
                <div className='px-2'>
                    <button className='w-full text-white bg-blue-500 text-center rounded-md py-1 '>
                        {isFollower ? "Follow back" : "Follow"}
                    </button>
                </div>
            </div>
        </Popover>
    );
};

export default BreifPreview;
