import Card from "../Card/Card";
import { CardsContainer } from "./styledComponents";

export default function Cards({ characters, onClose }) {
  return (
    <CardsContainer>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card 
            key={id}
            id={id}
            name={name}
            gender={gender}
            species={species}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </CardsContainer>
  );
}
