import highlights_data from "../utility/MOCK_DATA_HIGHLIGHT";
import { useState, useEffect } from "react";
import ViewStory from "./ViewStory";
import { Skeleton } from "@mui/material";
const Highlights = () => {
    const [showStoryModal, setShowStoryModal] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 2000);
    }, []);
    const handleStoryModalOpen = () => {
        setShowStoryModal(!showStoryModal);
    };

    const handleStoryModalClose = () => {
        setShowStoryModal(false);
    };

    const display_highlight = highlights_data.map((items) => (
        <div
            key={items.username}
            className='flex-1 flex flex-col items-center [75px] py-1 overflow-x-hidden'
            onClick={handleStoryModalOpen}
        >
            <div className='flex w-[75px] h-[75px] mx-2'>
                {loaded ? (
                    <img
                        src={items.story_image}
                        className='rounded-full outline outline-2 outline-offset-2 container bg-gray-100'
                        alt={items.username}
                    />
                ) : (
                    <Skeleton variant='circular' width={75} height={75} />
                )}
            </div>
            <p className='max-w-[75px] text-center'>
                {loaded ? items.username : <Skeleton sx={{ width: "75px" }} />}
            </p>
        </div>
    ));
    useEffect(() => {
        setTimeout(() => setLoaded(true), 2000);
    }, []);
    return (
        <div className='w-full md:max-w-[600px] overflow-auto overscroll-x-auto scrollbar-hide'>
            <div className='flex gap-1 w-fit pl-2 md:pl-0 md:pr-0 pr-3'>
                {display_highlight}
            </div>
            {showStoryModal && (
                <ViewStory
                    handleStoryModalClose={handleStoryModalClose}
                    showStoryModal={showStoryModal}
                />
            )}
        </div>
    );
};

export default Highlights;
