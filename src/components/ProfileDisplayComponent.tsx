import { useState } from "react";
import ProfileDisplayComponentMedia from "./ProfileDisplayComponentMedia";
const ProfileDisplayComponent = () => {
    const [displayState, setDisplayState] = useState<string>("posts");
    return (
        <div
            className='w-full flex flex-col items-center'
            style={{ borderTop: "light-gray solid 1px" }}
        >
            <div className='flex gap-10'>
                <p
                    onClick={() => setDisplayState("posts")}
                    className={`cursor-pointer  py-3 ${
                        displayState === "posts"
                            ? "border-t-2 border-black"
                            : ""
                    }`}
                >
                    posts
                </p>
                <p
                    onClick={() => setDisplayState("saved")}
                    className={`cursor-pointer  py-3 ${
                        displayState === "saved"
                            ? "border-t-2 border-black"
                            : ""
                    }`}
                >
                    saved
                </p>
                <p
                    onClick={() => setDisplayState("tagged")}
                    className={`cursor-pointer  py-3 ${
                        displayState === "tagged"
                            ? "border-t-2 border-black"
                            : ""
                    }`}
                >
                    tagged
                </p>
            </div>
            <ProfileDisplayComponentMedia display={displayState} />
        </div>
    );
};

export default ProfileDisplayComponent;
