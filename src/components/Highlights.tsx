import highlights_data from "../utility/MOCK_DATA_HIGHLIGHT";
import { useState } from "react";
import ViewStory from "./ViewStory";
const Highlights = () => {
    const [showStoryModal, setShowStoryModal] = useState<boolean>(false);
    const handleStoryModalOpen = () => {
        setShowStoryModal(!showStoryModal);
    };

    const handleStoryModalClose = () => {
        setShowStoryModal(false);
    };

    const display_highlight = highlights_data.map((items) => (
        <div
            key={items.username}
            className='flex-1 flex flex-col max-w-[75px] overflow-x-hidden'
        >
            <div className='flex w-[75px] h-[75px] p-2'>
                <img
                    src={items.story_image}
                    className='rounded-full outline outline-2 outline-offset-2  container '
                    alt={items.username}
                />
            </div>
            <p className='max-w-[75px] text-center'>{items.username}</p>
        </div>
    ));

    return (
        <div className='w-full md:max-w-[600px] overflow-auto overscroll-x-auto scrollbar-hide pl-5 md:pl-0 md:pr-0 pr-3'>
            <div onClick={handleStoryModalOpen} className='flex gap-1 w-fit'>
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
