import { BsGearWide } from "react-icons/bs";
import ProfileDisplayComponent from "../components/ProfileDisplayComponent";
import { useEffect, useState, useContext } from "react";
import { Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";
import { userContext } from "../App";
const Profile = () => {
    const profile = "https://picsum.photos/id/237/200/300";
    const [loaded, setLoaded] = useState<boolean>(false);
    const { id } = useParams();
    const [userProfile, setUserProfile] = useState<boolean>(false);
    const providedData = useContext(userContext);
    useEffect(() => {
        id === providedData.user
            ? setUserProfile(true) // if its true it displays users own profile
            : setUserProfile(false); // if its false it displays the user profile provided by the params

        setTimeout(() => {
            setLoaded(true);
        }, 2000);
    }, []);

    return (
        <div className='w-full lg:ml-[340px] flex justify-center gap-[100px] pt-[10px] md:pt-[50px] md:pl-[73px]'>
            <div className='w-full max-w-[1000px] flex flex-col gap-5 md:gap-10'>
                <div className='w-full flex md:flex-row items-center lg:justify-center md:gap-10'>
                    <div className='px-[50px] h-full flex justify-center items-center'>
                        <div className='flex overflow-hidden md:h-[150px] md:w-[150px] h-[80px] w-[80px] rounded-full'>
                            {loaded ? (
                                <img
                                    src={profile}
                                    alt=''
                                    className='container'
                                />
                            ) : (
                                <div className=''>
                                    <div className='hidden md:block'>
                                        <Skeleton
                                            variant='circular'
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                    <div className='block md:hidden'>
                                        <Skeleton
                                            variant='circular'
                                            width={80}
                                            height={80}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
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
                        <div className='hidden md:block'>
                            {loaded ? (
                                <div className='flex gap-5 items-center'>
                                    <div>
                                        <p>
                                            <span className='font-semibold'>
                                                2
                                            </span>{" "}
                                            posts
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <span className='font-semibold'>
                                                213
                                            </span>{" "}
                                            Followers
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <span className='font-semibold'>
                                                369
                                            </span>{" "}
                                            following
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className='flex justify-between'>
                                    <Skeleton
                                        width={90}
                                        sx={{ fontSize: "1.5rem" }}
                                    />{" "}
                                    <Skeleton
                                        width={90}
                                        sx={{ fontSize: "1.5rem" }}
                                    />{" "}
                                    <Skeleton
                                        width={90}
                                        sx={{ fontSize: "1.5rem" }}
                                    />
                                </div>
                            )}
                        </div>
                        {loaded ? (
                            <p className='font-bold'>Name</p>
                        ) : (
                            <Skeleton width={120} sx={{ fontSize: "1.5rem" }} />
                        )}
                    </div>
                </div>

                {loaded ? (
                    <div className='flex md:hidden justify-evenly gap-5 items-center'>
                        <div>
                            <p>
                                <span className='font-semibold'>2</span> posts
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
                ) : (
                    <div className='flex justify-evenly items-center'>
                        <Skeleton width={70} sx={{ fontSize: "1.5rem" }} />
                        <Skeleton width={70} sx={{ fontSize: "1.5rem" }} />
                        <Skeleton width={70} sx={{ fontSize: "1.5rem" }} />
                    </div>
                )}
                <ProfileDisplayComponent loaded={loaded} />
            </div>
        </div>
    );
};

export default Profile;
