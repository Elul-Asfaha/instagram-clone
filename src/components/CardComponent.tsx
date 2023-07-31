import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Box, Skeleton } from "@mui/material";
import { BsSend } from "react-icons/bs";
import { GoBookmarkFill, GoBookmark } from "react-icons/go";
import { useEffect } from "react";

type cardData = {
    profile_image: string;
    profile_name: string;
    comments: number;
    user_name: string;
    like: number;
    caption: string;
};

const CardComponent = ({
    profile_image,
    profile_name,
    comments,
    user_name,
    like,
    caption,
}: cardData) => {
    const [likeCount, setLikeCount] = useState<number>(like);
    const [liked, setLiked] = useState<boolean>(false);
    const [bookmarked, setBookmarked] = useState<boolean>(false);
    const time = 14;
    const [newComment, setNewComment] = useState<string>("");
    const [loaded, setLoaded] = useState<boolean>(false);
    const handleLike = () => {
        liked
            ? setLikeCount((prev) => prev - 1)
            : setLikeCount((prev) => prev + 1);
        setLiked(!liked);
    };
    const handleBookmark = () => {
        setBookmarked(!bookmarked);
    };

    useEffect(() => {
        setTimeout(() => setLoaded(true), 2000);
    }, []);
    return (
        <div className='w-full sm:max-w-[345px] md:max-w-[450px] min-h-[500px] border-b rounded-sm'>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                    }}
                >
                    {loaded ? (
                        <CardMedia
                            sx={{
                                height: "30px",
                                width: "30px",
                                borderRadius: "50%",
                            }}
                            image={profile_image}
                            title='name of page'
                        />
                    ) : (
                        <Skeleton variant='circular' width={30} height={30} />
                    )}

                    <Typography>
                        <span className='font-bold'>
                            {loaded ? profile_name : <Skeleton width={100} />}
                        </span>
                    </Typography>
                    <Typography>
                        {loaded ? time : <Skeleton width={20} />}
                    </Typography>
                </Box>
                <CardActions>
                    <IconButton aria-label='Comments'>
                        <MoreHorizIcon />
                    </IconButton>
                </CardActions>
            </Box>
            {loaded ? (
                <CardMedia
                    sx={{ height: 500, borderRadius: "3px" }}
                    image={profile_image}
                    title={profile_name}
                />
            ) : (
                <Skeleton
                    variant='rectangular'
                    height={400}
                    sx={{ borderRadius: "3px" }}
                />
            )}

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginX: "0px",
                    fontSize: "25px",
                    paddingY: 2,
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <div aria-label='Like' onClick={handleLike}>
                        {liked ? (
                            <AiFillHeart className='text-red-600' />
                        ) : (
                            <AiOutlineHeart />
                        )}
                    </div>

                    <div aria-label='Comments'>
                        <HiOutlineChatBubbleLeft />
                    </div>

                    <div aria-label='Share'>
                        <BsSend />
                    </div>
                </Box>
                <div aria-label='Bookmark' onClick={handleBookmark}>
                    {bookmarked ? (
                        <GoBookmarkFill className='text-blue-700' />
                    ) : (
                        <GoBookmark />
                    )}
                </div>
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
                {loaded ? (
                    <CardMedia
                        sx={{ height: 20, width: 20, borderRadius: "50%" }}
                        image={profile_image}
                        title='profile'
                    />
                ) : (
                    <Skeleton variant='circular' width={20} height={20} />
                )}
                <Typography>
                    Liked by <span className='font-bold'>{user_name}</span> and
                    <span> </span>
                    <span className='font-bold'>
                        {likeCount && likeCount - 1} others
                    </span>
                </Typography>
            </Box>

            <Box>
                {loaded ? (
                    <p className='text-sm'>
                        <span className='font-bold'>{profile_name}</span>{" "}
                        {caption}
                    </p>
                ) : (
                    <div>
                        <div className='flex gap-[3%]'>
                            <p className='w-[20%]'>
                                <Skeleton sx={{ fontSize: "1.5rem" }} />
                            </p>
                            <p className='w-[78%]'>
                                <Skeleton sx={{ fontSize: "1.5rem" }} />
                            </p>
                        </div>
                        <Skeleton variant='rectangular' height={60} />
                    </div>
                )}
            </Box>
            <Box>
                <p className='cursor-pointer flex items-center gap-1'>
                    View all{" "}
                    {loaded ? (
                        comments
                    ) : (
                        <Skeleton width={25} sx={{ fontSize: "1rem" }} />
                    )}{" "}
                    comments
                </p>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingRight: "5px",
                }}
            >
                <textarea
                    className='outline-none py-2 resize-none w-full'
                    placeholder='Add a comment...'
                    onChange={(e) => setNewComment(e.target.value)}
                />
                {newComment && <button>Post</button>}
            </Box>
        </div>
    );
};
export default CardComponent;
