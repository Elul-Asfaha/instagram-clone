import { Skeleton } from "@mui/material"
import { BsGearWide } from "react-icons/bs"
import ProfileDisplayComponent from "../ProfileDisplayComponent"

type selfProfileType={
    loaded:boolean
    profile: string
}
const SelfProfile=({loaded,profile}:selfProfileType)=>{
    return(<div className='w-full max-w-[1000px] flex flex-col gap-5 md:gap-10'>
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
                    <div className='flex md:hidden justify-evenly items-center'>
                        <Skeleton width={70} sx={{ fontSize: "1.5rem" }} />
                        <Skeleton width={70} sx={{ fontSize: "1.5rem" }} />
                        <Skeleton width={70} sx={{ fontSize: "1.5rem" }} />
                    </div>
                )}
                <ProfileDisplayComponent loaded={loaded} />
            </div>)
                        
}
export default SelfProfile