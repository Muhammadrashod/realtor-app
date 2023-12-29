// Cards.tsx

import React, { useState } from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StyledCard, DateOverlay, ExpandMoreStyled } from "./Cards.style";

interface IGetListProps {
  state: string;
  price: number;
  purpose: string;
  title: string;
  location: [level: number, name: string];
  rooms: number;
  baths: number;
  area: number;
  coverPhoto: [id: number, url: string, main: boolean];
  phoneNumber: [mobile: number, phone: number];
  contactName: string;
}

const Cards = ({
  state,
  price,
  purpose,
  title,
  location,
  rooms,
  baths,
  area,
  coverPhoto,
  phoneNumber,
  contactName,
}: IGetListProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="194"
        image="/home.webp"
        alt="Paella dish"
      />
      <DateOverlay>
        <Typography variant="subtitle1">September 14, 2016</Typography>
      </DateOverlay>
      <CardContent>
        <CardHeader title="Paella Dish" />
        <Typography variant="body2" color="text.secondary">
          "Квартира в Джумейра Вилладж Серкл (ДЖВС)，ДжейВиСи Дистрикт 10,
          Плаззо Хайтс, 1 спальня, 7499 AED - 6030023"
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMoreStyled
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMoreStyled>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don't open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </StyledCard>
  );
};

export default Cards;
