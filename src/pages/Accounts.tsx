import { useState } from "react";
import { GoPerson, GoShieldCheck } from "react-icons/go";
import { MdOutlineDisplaySettings } from "react-icons/md";
import { Link, Route, Routes } from "react-router-dom";
import EditProfile from "../components/AccountsComponents/EditProfile";
const Accounts = () => {
    const [activeLink, setActiveLink] = useState<string>("Edit Profile");

    return (
        <div className='w-full lg:ml-[340px] flex flex-col justify-center gap-[70px] pt-[10px] md:pt-[20px] md:pl-[73px]'>
            <p className='px-5 lg:px-0 w-full font-semibold text-2xl text-left'>
                Settings
            </p>
            <div className='w-full lg:max-w-[1000px] mx-auto px-5'>
                <div className='flex w-full min-h-[800px] border'>
                    <div className='w-[25%] border-r'>
                        <div className='h-fit px-5 flex flex-col border-b py-5'>
                            <div className='font-bold'>Meta</div>
                            <p className='font-bold'>Accounts Center</p>
                            <p className='text-[13px]'>
                                Manage your connected experience and account
                                settings across Meta technologies
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
                                    <span>Ad preference</span>
                                </div>
                                <Link
                                    to='/'
                                    className='text-blue-600 text-md font-semibold'
                                >
                                    See more in Accounts center
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <Link
                                to='/accounts'
                                onClick={() => setActiveLink("Edit Profile")}
                                className={`px-5 py-3 ${
                                    activeLink === "Edit Profile"
                                        ? "border-l-2 border-black"
                                        : ""
                                }`}
                            >
                                Edit Profile
                            </Link>
                            <div
                                onClick={() =>
                                    setActiveLink("Apps and Websites")
                                }
                                className={`px-5 py-3 ${
                                    activeLink === "Apps and Websites"
                                        ? "border-l-2 border-black"
                                        : ""
                                }`}
                            >
                                Apps and websites
                            </div>
                            <div
                                onClick={() => setActiveLink("Notifications")}
                                className={`px-5 py-3 ${
                                    activeLink === "Notifications"
                                        ? "border-l-2 border-black"
                                        : ""
                                }`}
                            >
                                Notifications
                            </div>
                            <div
                                onClick={() => setActiveLink("What you see")}
                                className={`px-5 py-3 ${
                                    activeLink === "What you see"
                                        ? "border-l-2 border-black"
                                        : ""
                                }`}
                            >
                                What you see
                            </div>
                            <div
                                onClick={() =>
                                    setActiveLink("Who can see your content")
                                }
                                className={`px-5 py-3 ${
                                    activeLink === "Who can see your content"
                                        ? "border-l-2 border-black"
                                        : ""
                                }`}
                            >
                                Who can see your content
                            </div>
                            <div
                                onClick={() =>
                                    setActiveLink(
                                        "How others can intercat with you"
                                    )
                                }
                                className={`px-5 py-3 ${
                                    activeLink ===
                                    "How others can intercat with you"
                                        ? "border-l-2 border-black"
                                        : ""
                                }`}
                            >
                                How others can intercat with you
                            </div>
                            <div
                                onClick={() => setActiveLink("Supervision")}
                                className={`px-5 py-3 ${
                                    activeLink === "Supervision"
                                        ? "border-l-2 border-black"
                                        : ""
                                }`}
                            >
                                Supervision
                            </div>
                            <div
                                onClick={() => setActiveLink("Help")}
                                className={`px-5 py-3 ${
                                    activeLink === "Help"
                                        ? "border-l-2 border-black"
                                        : ""
                                }`}
                            >
                                Help
                            </div>
                            <div className='px-5 py-3 text-blue-600 text-md font-semibold'>
                                Switch to professional Account
                            </div>
                        </div>
                    </div>
                    <div className='w-[75%]'>
                        <Routes>
                            <Route path='/' element={<EditProfile />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accounts;
