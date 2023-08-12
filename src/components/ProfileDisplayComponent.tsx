import { useState } from "react";
import ProfileDisplayComponentMedia from "./ProfileDisplayComponentMedia";
type ProfileDispCompType = {
    loaded: boolean;
    viewing?: string
};
const ProfileDisplayComponent = ({ loaded,viewing }: ProfileDispCompType) => {
    const [displayState, setDisplayState] = useState<string>("posts");
    return (
        <div
            className='w-full flex flex-col items-center'
            style={{ borderTop: "light-gray solid 1px" }}
        >
            <div className='flex gap-10'>
                <p
                    onClick={() => setDisplayState("posts")}
                    className={`cursor-pointer  py-1 md:py-3 ${
                        displayState === "posts"
                            ? "border-t-2 border-black"
                            : ""
                    }`}
                >
                    posts
                </p>
                {viewing !="other" && <p
                    onClick={() => setDisplayState("saved")}
                    className={`cursor-pointer  py-1 md:py-3 ${
                        displayState === "saved"
                            ? "border-t-2 border-black"
                            : ""
                    }`}
                >
                    saved
                </p>
                }
                <p
                    onClick={() => setDisplayState("tagged")}
                    className={`cursor-pointer  py-1 md:py-3 ${
                        displayState === "tagged"
                            ? "border-t-2 border-black"
                            : ""
                    }`}
                >
                    tagged
                </p>
            </div>
            <ProfileDisplayComponentMedia
                display={displayState}
                loaded={loaded}
            />
        </div>
    );
};

export default ProfileDisplayComponent;
