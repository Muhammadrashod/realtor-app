import React, { useState } from "react";
import type { CardItem } from "../../../store/API/saleApi";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { StyledCard, DateOverlay, ExpandMoreStyled } from "./Cards.style";

export interface ICardsProps {
  card: CardItem;
}

export const ExactCard = ({
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
}: CardItem) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt="Property Image"
      />
      <DateOverlay></DateOverlay>
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
          <Typography paragraph>Детали:</Typography>
          <Typography paragraph>{rooms}</Typography>
          <Typography paragraph>{baths}</Typography>
          <Typography paragraph>{area}</Typography>
          <Typography paragraph>{location.level}</Typography>
          <Typography paragraph>{location.name}</Typography>
          <Typography paragraph>{phoneNumber.mobile}</Typography>
          <Typography>{contactName}</Typography>
        </CardContent>
      </Collapse>
    </StyledCard>
  );
};

export default ExactCard;
