import React, { useState } from "react";
import type { CardItem } from "../../../store/API/saleApi";
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

export interface ICardsProps {
 card: CardItem
}

export const Cards = ({
 card,
}: ICardsProps) => {
  const [expanded, setExpanded] = useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {
    id,
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
  } = card
  
  
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt="Property Image"
      />

      <DateOverlay>
        <Typography variant="subtitle1">{state}</Typography>
      </DateOverlay>
      <CardContent>
        <CardHeader title={title} />
        <Typography variant="body2" color="text.secondary">
          {price}
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
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>{purpose}</Typography>
          <Typography paragraph>{rooms}</Typography>
          <Typography paragraph>{area}</Typography>
          <Typography>
           {contactName}
          </Typography>
        </CardContent>
      </Collapse>
    </StyledCard>
  );
};


export default Cards;
