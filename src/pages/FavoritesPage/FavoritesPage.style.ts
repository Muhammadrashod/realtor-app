import styled from "styled-components";
import "../../components/UI/FadeIn/FadeInAnimation.css";

export const StyledFavoritesPage = styled.div`
  animation: fadeIn 2.5s ease-out forwards;
`;

export const FavoriteCardsContainer = styled.div`
 display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 50px; 

  @media (max-width: 530px) {
    grid-template-columns: repeat(2, 1fr); 
  }
`