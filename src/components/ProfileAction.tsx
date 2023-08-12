import { Modal } from "@mui/material"
type ProfileActionTypes = {
    showStoryModal: boolean;
    handleProfileModalClose: () => void;
};
const ProfileAction=({ showStoryModal,
    handleProfileModalClose}:ProfileActionTypes)=>{
    
return(
    <Modal open={showStoryModal} onClose={handleProfileModalClose}>
        <div className='h-screen w-full gap-5 flex justify-center items-center bg-black/30 text-white '>
            <div className="bg-white rounded-xl overflow-hidden w-[45%] text-black flex flex-col">
                <button className="py-3 border">Block</button>
                <button className="py-3 border">Restict</button>
                <button className="py-3 border">Report</button>
                <button className="py-3 border">About this Account</button>
                <button className="py-3 border"onClick={handleProfileModalClose}>Cancel</button>
            </div>
        </div>
    </Modal>
    )
}
export default ProfileAction