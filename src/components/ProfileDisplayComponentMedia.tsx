import posts from "../utility/MOCK_DATA_POSTS";
import tagged from "../utility/MOCK_DATA_TAGGED";
type ProfileDisplayComponentMediaTypes = {
    display: string;
};
const ProfileDisplayComponentMedia = ({
    display,
}: ProfileDisplayComponentMediaTypes) => {
    const displayPosts = posts.map((items) => (
        <div className='flex-1 flex h-[120px] md:h-[250px]'>
            <img src={items.posts} alt='' className='container' />
        </div>
    ));
    const displaytagged = tagged.map((items) => (
        <div className='flex-1 flex h-[120px] md:h-[250px]'>
            <img src={items.posts} alt='' className='container' />
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
