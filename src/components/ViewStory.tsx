import { Modal } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import ViewStorySmallCard from "./ViewStorySmallCard";
type ViewStoryTypes = {
    showStoryModal: boolean;
    handleStoryModalClose: () => void;
};
const ViewStory = ({
    showStoryModal,
    handleStoryModalClose,
}: ViewStoryTypes) => {
    return (
        <Modal open={showStoryModal} onClose={handleStoryModalClose}>
            <div className='h-screen w-full gap-5 flex justify-center items-center bg-black/95'>
                <div className='flex gap-3 items-center justify-center w-[100%] h-[100%]'>
                    <ViewStorySmallCard />
                    <ViewStorySmallCard />
                    <div className='w-[27%] h-[97%] rounded-xl bg-white'></div>
                    <ViewStorySmallCard />
                    <ViewStorySmallCard />
                </div>

                <div className='absolute inset-y-5 text-3xl text-white w-full flex justify-between items-center px-5 h-fit'>
                    <p>instagram</p>
                    <div
                        className='cursor-pointer'
                        onClick={handleStoryModalClose}
                    >
                        <AiOutlineClose />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ViewStory;
