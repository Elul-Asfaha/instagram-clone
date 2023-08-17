import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { MdKeyboardBackspace, MdPermMedia } from "react-icons/md";
import Modal from "@mui/material/Modal";

type UploadProfileType = {
    preview: string;
};
type UploadPropType = {
    modalToggled: boolean;
    closeModal: () => void;
};
const UploadProfile = ({ modalToggled, closeModal }: UploadPropType) => {
    const [uploaded, setUploaded] = useState<UploadProfileType[]>([]);
    const onDrop = useCallback(<T extends File>(acceptedFiles: T[] | []) => {
        if (acceptedFiles?.length) {
            setUploaded((previousFiles) => [
                ...previousFiles,
                ...acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                ),
            ]);
        }
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });
    const handleClearUpload = () => {
        setUploaded([]);
    };
    return (
        <div>
            <Modal
                open={modalToggled}
                onClose={closeModal}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                {!uploaded.length ? (
                    <div className='flex h-full items-center justify-center'>
                        <div className='rounded-xl text-black w-[85%] min-w-[300px] md:w-[50%] h-[400px] md:h-[50%] bg-white'>
                            <p className='text-center border-b py-4 font-semibold'>
                                Create new post
                            </p>
                            <div {...getRootProps()} className='h-full'>
                                <input {...getInputProps()} />
                                {isDragActive ? (
                                    <div className='text-center text-xl font-semibold flex justify-center items-center w-full h-full'>
                                        <p>Drop the files here ...</p>
                                    </div>
                                ) : (
                                    <div className='text-center flex h-full flex-col items-center justify-center gap-4'>
                                        <div className='text-4xl text-black'>
                                            <MdPermMedia />
                                        </div>
                                        <p className='text-xl font-semibold'>
                                            Drag photos and videos here
                                        </p>
                                        <p className='bg-blue-600 py-2 px-3 rounded-md text-white cursor-pointer'>
                                            Select From Computer
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='rounded-xl text-black w-[85%] min-w-[300px] md:w-[50%] h-[400px] md:h-[50%] bg-white'>
                        <div className='flex items-center justify-between font-semibold px-3'>
                            <div
                                onClick={() => handleClearUpload()}
                                className='text-left text-2xl border-b py-4  cursor-pointer'
                            >
                                <MdKeyboardBackspace />
                            </div>
                            <div className='text-lg cursor-pointer'>Post</div>
                        </div>
                        <div className='h-full'>
                            <div className='text-center flex w-full bg-gray-200 h-full flex-col items-center justify-center gap-4'>
                                {uploaded != null &&
                                    uploaded.map((file) => (
                                        <img
                                            src={file?.preview}
                                            alt=''
                                            className='container bg-red-200 h-full w-full'
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default UploadProfile;
