import { useState } from "react";
import ProfileDisplayComponentMedia from "./ProfileDisplayComponentMedia";
const ProfileDisplayComponent = () => {
    const [displayState, setDisplayState] = useState<string>("Posts");
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='flex py-3 gap-10'>
                <p onClick={() => setDisplayState("posts")}>posts</p>
                <p onClick={() => setDisplayState("saved")}>saved</p>
                <p onClick={() => setDisplayState("tagged")}>tagged</p>
            </div>
            <ProfileDisplayComponentMedia display={displayState} />
        </div>
    );
};

export default ProfileDisplayComponent;
