import { BsGearWide } from "react-icons/bs";
import ProfileDisplayComponent from "./ProfileDisplayComponent";

const Profile = () => {
    return (
        <div className='w-full lg:ml-[340px] flex justify-center gap-[100px] pt-[10px] md:pt-[50px] md:pl-[73px]'>
            <div className='w-full max-w-[1000px] flex flex-col gap-5 md:gap-10'>
                <div className='w-full flex md:flex-row items-center lg:justify-center md:gap-10'>
                    <div className='px-[50px] h-full flex justify-center items-center'>
                        <div className='md:h-[150px] md:w-[150px] h-[80px] w-[80px] rounded-full ring-1'></div>
                    </div>
                    <div className='h-full flex flex-col gap-5'>
                        <div className='flex flex-wrap md:flex-row gap-5 items-center'>
                            <p>username</p>
                            <p className='bg-gray-300 px-3 py-1 rounded-md'>
                                Edit Profile
                            </p>
                            <p className='bg-gray-300 px-3 py-1 rounded-md'>
                                View archive
                            </p>
                            <div className='flex h-fit md:h-full items-center justify-center p-1'>
                                <BsGearWide />
                            </div>
                        </div>
                        <div className='hidden md:flex gap-5 items-center'>
                            <div>
                                <p>
                                    <span className='font-semibold'>2</span>{" "}
                                    posts
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span className='font-semibold'>213</span>{" "}
                                    Followers
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span className='font-semibold'>369</span>{" "}
                                    following
                                </p>
                            </div>
                        </div>
                        <p className='font-bold'>Name</p>
                    </div>
                </div>
                <div className='flex md:hidden justify-evenly gap-5 items-center'>
                    <div>
                        <p>
                            <span className='font-semibold'>2</span> posts
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className='font-semibold'>213</span> Followers
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className='font-semibold'>369</span> following
                        </p>
                    </div>
                </div>
                <ProfileDisplayComponent />
            </div>
        </div>
    );
};

export default Profile;
