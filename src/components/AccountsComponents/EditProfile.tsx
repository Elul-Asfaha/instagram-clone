import React from "react";
import UploadProfile from "./UploadProfile";

const EditProfile = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <UploadProfile modalToggled={open} closeModal={handleClose} />
            <p className='p-4'>Edit Profile</p>
            <div className='flex flex-col px-24 items-center gap-5 h-full'>
                <div className='grid grid-cols-3 w-full items-center gap-10'>
                    <div className='col-span-1 flex justify-end'>
                        <div className='h-[50px] w-[50px] rounded-full overflow-hidden'>
                            <img
                                src='https://picsum.photos/id/237/200/300'
                                alt=''
                                className='cover'
                            />
                        </div>
                    </div>
                    <div className='col-span-2 flex flex-col w-full text-sm'>
                        <p className='font-bold'>user_name</p>{" "}
                        <p
                            className='cursor-pointer text-blue-600 text-md font-semibold'
                            onClick={handleOpen}
                        >
                            Change profile photo
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-3 w-full items-center gap-10'>
                    <div className='col-span-1 flex justify-end font-semibold'>
                        Website
                    </div>
                    <div className='col-span-2 flex flex-col w-full'>
                        <input
                            type='text'
                            className='outline-none bg-gray-200 py-1 px-3 rounded-sm'
                            placeholder='Website'
                        />
                        <p className='text-[13px] mt-1'>
                            Editing your links is only avaliable on mobile.
                            Visit the Instagram app and edit your profile to
                            chnage the websites in your bio.
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-3 w-full items-center gap-10'>
                    <div className='col-span-1 flex justify-end font-semibold'>
                        Bio
                    </div>
                    <div className='col-span-2 flex flex-col w-full'>
                        <textarea
                            className='outline-none py-1 px-3 rounded-sm border border-gray-200'
                            placeholder='Website'
                        />
                        <div className='text-sm mt-1'>0/150</div>
                    </div>
                </div>

                <div className='grid grid-cols-3 w-full items-center gap-10'>
                    <div className='col-span-1 flex justify-end font-semibold'>
                        Gender
                    </div>
                    <div className='col-span-2 flex flex-col w-full'>
                        <input
                            type='text'
                            className='outline-none border border-gray-200 py-1 px-3 rounded-sm'
                            placeholder='Male'
                        />
                        <p className='text-[13px] mt-1'>
                            This won't be part of your public profile
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-3 w-full items-center gap-10'>
                    <div className='col-span-1 flex justify-end font-semibold'>
                        Show account suggestions on profiles
                    </div>
                    <div className='col-span-2 flex w-full items-center gap-2'>
                        <input
                            type='checkbox'
                            className='outline-none bg-gray-200 py-1 px-3 rounded-sm h-fit'
                            placeholder='Website'
                        />
                        <p className='font-semibold'>
                            Choose whether people can see similar account
                            suggestions on your profile, and whether your
                            account can be suggested on other profiles.
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-3 w-full items-center gap-10'>
                    <div className='col-span-1 flex justify-end font-semibold'></div>
                    <div className='col-span-2 flex w-full items-center gap-2'>
                        <button className='font-semibold bg-blue-400 text-white px-3 py-1 rounded-md'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
