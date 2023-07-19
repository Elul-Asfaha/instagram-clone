type suggested = {
    profile: string;
    username: string;
};
const SideBar = ({ profile, username }: suggested) => {
    return (
        <div className='h-fit min-w-[300px]'>
            <div className='flex items-center gap-3'>
                <div className='w-fit'>
                    <img
                        src=''
                        alt=''
                        className='h-[50px] w-[50px] rounded-full'
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <p>{username}</p> <p> {profile}</p>
                </div>
                <div className='w-fit'>switch</div>
            </div>

            <div className='flex justify-between items-center'>
                <p>suggested for you</p> <p>see all</p>
            </div>
        </div>
    );
};

export default SideBar;
