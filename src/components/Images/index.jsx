import bag from "../../images/bag.jpg";
import blanket from "../../images/blanket.jpg";
import book from "../../images/book.jpg";
import mugs from "../../images/mugs.jpg";
import vase from "../../images/vase.jpg";

import { StyledImageContainer } from "./styles";

const Images = () => {
  return (
    <StyledImageContainer>
      <img src={bag} alt="bag" />;
    </StyledImageContainer>
  );
};

export default Images;
