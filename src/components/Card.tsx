import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

export default function RecipeReviewCard() {
    const profile = "https://picsum.photos/id/237/200/300";
    const [likeCount, setLikeCount] = useState<number>(0);
    const [liked, setLiked] = useState<boolean>(false);
    const handleLike = () => {
        liked
            ? setLikeCount((prev) => prev - 1)
            : setLikeCount((prev) => prev + 1);
        setLiked(!liked);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label='settings'>
                        <MoreVertIcon />
                    </IconButton>
                }
                title='Shrimp and Chorizo Paella'
                subheader='September 14, 2016'
            />
            <CardMedia
                component='img'
                height='194'
                image={profile}
                alt='Paella dish'
            />
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='Like'>
                    <FavoriteIcon onClick={() => handleLike()} />
                </IconButton>
                <Typography>{likeCount}</Typography>

                <IconButton aria-label='share'>
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
