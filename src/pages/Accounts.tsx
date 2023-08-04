import { GoPerson, GoShieldCheck } from "react-icons/go";
import { MdOutlineDisplaySettings } from "react-icons/md";
import { Link } from "react-router-dom";
const Accounts = () => {
    return (
        <div className='w-full lg:ml-[340px] flex flex-col justify-center gap-[70px] pt-[10px] md:pt-[20px] md:pl-[73px]'>
            <p className='h-1 px-5 w-full font-semibold text-3xl text-left'>
                Settings
            </p>
            <div className='w-full px-5'>
                <div className='flex w-full min-h-[800px] border'>
                    <div className='p-5 w-[25%] border-r'>
                        <div className='h-fit'>
                            <div className='font-bold'>Meta</div>
                            <p className='font-bold'>Accounts Center</p>
                            <p className='text-sm'>
                                Manage your connected experience and account
                                settings across Meta technologies across meta
                                technologies
                            </p>
                            <div className='flex flex-col text-sm'>
                                <div className='flex gap-1 items-center'>
                                    <GoPerson /> <span>Personal details</span>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <GoShieldCheck />
                                    <span>Password and security</span>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <MdOutlineDisplaySettings />
                                    <span>ad preference</span>
                                </div>
                                <Link
                                    to='/'
                                    className='text-blue-700 text-md font-semibold'
                                >
                                    See more in Accounts center
                                </Link>
                            </div>
                        </div>
                        <div className=''>asdasdasdasdasdasd</div>
                    </div>
                    <div className='w-[75%]'></div>
                </div>
            </div>
        </div>
    );
};

export default Accounts;
