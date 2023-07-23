import { useCallback, useState, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdPermMedia, MdKeyboardBackspace } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import { newPostContext } from "../App";

const Create = () => {
    const newPostToggler = useContext(newPostContext);
    const [uploaded, setUploaded] = useState<[] | null>(null);
    const onDrop = useCallback((acceptedFiles: []) => {
        setUploaded(acceptedFiles);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });
    const handleClearUpload = () => {
        setUploaded(null);
    };
    return (
        <div className='fixed bg-black/70 flex justify-center items-center top-0 bottom-0 w-full '>
            <button
                onClick={() => newPostToggler?.handleNewPostInvalid()}
                className='absolute text-3xl text-white font-bold w-fit h-fit inset-y-5 right-10'
            >
                <AiOutlineClose />
            </button>

            {!uploaded ? (
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
            ) : (
                <div className='rounded-xl text-black w-[85%] min-w-[300px] md:w-[50%] h-[400px] md:h-[50%] bg-white'>
                    <div
                        onClick={() => handleClearUpload()}
                        className='text-left text-2xl px-3 border-b py-4 font-semibold cursor-pointer'
                    >
                        <MdKeyboardBackspace />
                    </div>
                    <div className='h-full'>
                        <div className='text-center flex w-full bg-gray-200 h-full flex-col items-center justify-center gap-4'>
                            {uploaded != null && (
                                <img
                                    src={uploaded[0]?.path}
                                    alt=''
                                    className='container bg-red-200 h-full w-full'
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Create;
