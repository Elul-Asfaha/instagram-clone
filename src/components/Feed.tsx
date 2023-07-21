import CardComponent from "./CardComponent.tsx";
import data from "../utility/MOCK_DATA.tsx";
import SideBar from "./SideBar.tsx";
import Highlights from "./Highlights.tsx";

const Feed = () => {
    const disp_Data = data.map((items, id) => (
        <CardComponent
            key={id}
            profile_name={items.full_name}
            user_name={items.user_name}
            profile_image={items.profile}
            like={items.likes}
            caption={items.caption}
            comments={items.comments}
        />
    ));
    return (
        <div className='w-full lg:ml-[200px] flex justify-center gap-[100px] pt-[50px]'>
            <div className='w-fit flex flex-col items-center gap-y-5 h-fit'>
                <Highlights />
                {disp_Data}
            </div>
            <SideBar profileName={"Elul Asfaha"} username={"elul_asfaha"} />
        </div>
    );
};

export default Feed;
