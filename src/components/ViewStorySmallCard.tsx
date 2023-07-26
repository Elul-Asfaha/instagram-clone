const ViewStorySmallCard = () => {
    return (
        <div className='h-[40%] w-[12%] border border-black bg-white rounded-xl flex flex-col gap-2 items-center justify-center'>
            <div className='w-[50px] h-[50px] rounded-full overflow-hidden flex bg-gray-500'>
                {"image"}
            </div>
            <div>user_name</div>
            <div>time</div>
        </div>
    );
};

export default ViewStorySmallCard;
