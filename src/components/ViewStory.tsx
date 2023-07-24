import { Modal } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
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
            <div className='h-screen w-full flex justify-center items-center bg-black/95'>
                <div
                    className='absolute inset-y-0 flex justify-between px-5 text-white text-3xl  top-5 cursor-pointer w-full h-fit'
                    onClick={handleStoryModalClose}
                >
                    <p>Instagram</p>
                    <AiOutlineClose />
                </div>
                <div className='w-[27%] h-[97%] rounded-xl bg-white'></div>
            </div>
        </Modal>
    );
};

export default ViewStory;
