import { Skeleton } from "@mui/material";
import posts from "../utility/MOCK_DATA_POSTS";
import tagged from "../utility/MOCK_DATA_TAGGED";
type ProfileDisplayComponentMediaTypes = {
    display: string;
    loaded: boolean;
};
const ProfileDisplayComponentMedia = ({
    display,
    loaded,
}: ProfileDisplayComponentMediaTypes) => {
    const displayPosts = posts.map((items) => (
        <div key={items.id} className='flex-1 flex h-[120px] md:h-[250px]'>
            {loaded ? (
                <img src={items.posts} alt='' className='container' />
            ) : (
                <div className='flex-1 flex h-[250px]'>
                    <div className='flex flex-1 md:block'>
                        <Skeleton
                            variant='rectangular'
                            height={250}
                            sx={{ flex: 1 }}
                        />
                    </div>
                    <div className='flex flex-1 md:hidden'>
                        <Skeleton
                            variant='rectangular'
                            height={120}
                            sx={{ flex: 1 }}
                        />
                    </div>
                </div>
            )}
        </div>
    ));
    const displaytagged = tagged.map((items) => (
        <div key={items.id} className='flex-1 flex h-[120px] md:h-[250px]'>
            {loaded ? (
                <img src={items.posts} alt='' className='container' />
            ) : (
                <div className='flex-1 flex'>
                    <div className='flex flex-1 md:block'>
                        <Skeleton
                            variant='rectangular'
                            height={250}
                            sx={{ flex: 1 }}
                        />
                    </div>
                    <div className='flex flex-1 md:hidden'>
                        <Skeleton
                            variant='rectangular'
                            height={120}
                            sx={{ flex: 1 }}
                        />
                    </div>
                </div>
            )}
        </div>
    ));
    return (
        <div className='grid grid-cols-3 w-full gap-1'>
            {display === "posts" && displayPosts}
            {display === "tagged" && displaytagged}
        </div>
    );
};

export default ProfileDisplayComponentMedia;
