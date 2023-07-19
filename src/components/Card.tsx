import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Box } from "@mui/material";
import { BsBookmark, BsSend } from "react-icons/bs";
export default function RecipeReviewCard() {
    const profile = "https://picsum.photos/id/237/200/300";
    const [likeCount, setLikeCount] = useState<number>(0);
    const [liked, setLiked] = useState<boolean>(false);
    const [time, setTime] = useState<number>(14);

    const handleLike = () => {
        liked
            ? setLikeCount((prev) => prev - 1)
            : setLikeCount((prev) => prev + 1);
        setLiked(!liked);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                    <CardMedia
                        sx={{
                            height: "30px",
                            width: "30px",
                            borderRadius: "50%",
                        }}
                        image={profile}
                        title='name of page'
                    />

                    <Typography>
                        <span className='font-bold'>9gag</span>
                    </Typography>
                    <Typography>{time}</Typography>
                </Box>
                <CardActions>
                    <IconButton aria-label='Comments'>
                        <MoreHorizIcon />
                    </IconButton>
                </CardActions>
            </Box>
            <CardMedia
                sx={{ height: 350 }}
                image={profile}
                title='green iguana'
            />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginX: "0px",
                }}
            >
                <Box>
                    <IconButton aria-label='Like' onClick={handleLike}>
                        <FavoriteIcon
                            className={`${liked ? "text-red-500" : ""}`}
                        />
                    </IconButton>

                    <IconButton aria-label='Comments'>
                        <ChatBubbleOutlineIcon />
                    </IconButton>

                    <IconButton aria-label='Share'>
                        <BsSend />
                    </IconButton>
                </Box>
                <IconButton aria-label='Bookmark'>
                    <BsBookmark />
                </IconButton>
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
                <CardMedia
                    sx={{ height: 20, width: 20, borderRadius: "50%" }}
                    image={profile}
                    title='profile'
                />
                <Typography>
                    Liked by {"Name"} and {likeCount} others
                </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
                <Typography>
                    <span className='font-bold'>{"profile name "}</span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsa totam neque at placeat nesciunt dolore ducimus magnam
                </Typography>
            </Box>
            <Box>
                <Typography>View all {"200"} comments</Typography>
            </Box>
            <Box>
                <input
                    type='text'
                    className='outline-none text-lg py-2'
                    placeholder='Add a comment...'
                ></input>
            </Box>
        </Card>
    );
}
