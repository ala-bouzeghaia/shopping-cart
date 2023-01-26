import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarOutlineRoundedIcon from "@material-ui/icons/StarOutlineRounded";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
//Types
import { CartItemType } from "../App";
//Styles
import { StyledItem } from "./styles/Item.styled";
import { StyledButton } from "./styles/Button.styled";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <StyledItem>
      <div className='img-container'>
        <img src={item.image} alt={item.title} />
      </div>

      <div className='description-container'>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div>
          <div className='rating-container'>
            <Rating
              name='rating-star'
              readOnly
              precision={0.1}
              defaultValue={item.rating.rate}
              icon={<StarRoundedIcon />}
              emptyIcon={<StarOutlineRoundedIcon />}
            />
            <h3>${item.price}</h3>
          </div>
          <Button onClick={() => handleAddToCart(item)} className='button'>
            <AddShoppingCartIcon fontSize='large' htmlColor='green' />
          </Button>
        </div>
      </div>
      {/* <Button onClick={() => handleAddToCart(item)}>Add to cart</Button> */}
    </StyledItem>
  );
};

export default Item;
