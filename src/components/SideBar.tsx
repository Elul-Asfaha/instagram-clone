import suggestions from "../utility/MOCK_DATA_SUGGESTIONS";
import SidebarItems from "./SidebarItems";
import { LiaCopyright } from "react-icons/lia";
type suggested = {
    profileName: string;
    username: string;
};
const SideBar = ({ profileName, username }: suggested) => {
    const diplaySuggestions = suggestions
        .slice(0, 5)
        .map((items, id) => (
            <SidebarItems
                key={id}
                username={items.username}
                fullName={items.full_name}
                followedBy={items.followed_by}
                post={items.post}
                follower={items.follower}
                following={items.following}
                isFollower={items.isFollower}
                follow={items.follow}
                profileImage={items.profileImg}
            />
        ));
    return (
        <div className='h-fit min-w-[300px] hidden lg:block'>
            <div className='flex items-center gap-4'>
                <div className='w-fit'>
                    <div className='h-[50px] w-[50px] rounded-full overflow-hidden'>
                        <img
                            src='https://picsum.photos/id/237/200/300'
                            alt=''
                            className='cover'
                        />
                    </div>
                </div>
                <div className='flex flex-col w-full text-sm'>
                    <p className='font-bold'>{username}</p>{" "}
                    <p> {profileName}</p>
                </div>
                <div className='w-fit text-blue-500'>switch</div>
            </div>

            <div className='flex justify-between items-center py-3 font-medium'>
                <p className='text-gray-500 '>Suggested for you</p>{" "}
                <p className='text-sm'>See All</p>
            </div>
            <div>{diplaySuggestions}</div>
            <p className='flex items-center gap-1 text-gray-600 text-sm mt-5'>
                <LiaCopyright />
                2023 INSTAGRAM FROM META
            </p>
        </div>
    );
};

export default SideBar;
