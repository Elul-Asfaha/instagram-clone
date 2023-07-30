import { Modal } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import InstagramSvg from "../assets/InstagramSvg";
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
                    <div className='w-[270px] h-[500px] bg-gray-200 md:w-[27%] md:h-[97%] rounded-xl flex'>
                        <img
                            src='https://picsum.photos/id/1/1920/1080'
                            className='cover'
                        />
                    </div>
                </div>

                <div className='absolute inset-y-5 md:text-2xl text-white w-full flex justify-between items-center px-5 h-fit'>
                    <InstagramSvg color='rgb(255, 255, 255)' />
                    <div
                        className='cursor-pointer text-xl'
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
