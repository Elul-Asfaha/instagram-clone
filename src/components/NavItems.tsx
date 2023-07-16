import React from "react";
const NavItems = ({ name, icon }) => {
    const profile = "https://picsum.photos/id/237/200/300";

    return (
        <div
            className={`flex gap-5 justify-center lg:justify-start items-center p-3 cursor-pointer rounded-md hover:bg-gray-300 w-full ${
                name === "Instagram" ? "my-5" : ""
            }`}
        >
            <div className='text-[25px]'>
                {name === "Profile" ? (
                    <div className='rounded-full h-[30px] w-[30px] overflow-hidden'>
                        <img
                            src={profile}
                            alt=''
                            srcset=''
                            className='container'
                        />
                    </div>
                ) : (
                    icon
                )}
            </div>

            <span className='hidden lg:block'>{name}</span>
        </div>
    );
};

export default NavItems;
