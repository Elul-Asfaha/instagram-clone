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
    // post,
    // follower,
    // following,
    isFollower,
    // follow,
    profileImage,
}: sideBarItemTypes) => {
    return (
        <div className='flex items-center gap-4 text-sm py-1'>
            <div className='w-fit'>
                <div className='h-[30px] w-[30px] rounded-full overflow-hidden'>
                    <img src={profileImage} alt='' className='cover' />
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <p className='font-bold'>{username}</p> <p> {fullName}</p>
            </div>
            <div className='w-fit text-blue-700 text-right'>
                {isFollower ? "Follow back" : "Follow"}
            </div>
        </div>
    );
};

export default SidebarItems;
