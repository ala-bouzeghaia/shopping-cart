import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { StyledNav, Hamburger } from "./styles/Nav.styled";

type NavProps = {
  badgeContent: number;
  onClickCartIcon: () => void;
};

const Nav: React.FC<NavProps> = ({ badgeContent, onClickCartIcon }) => {
  const [openHamburger, setOpenHamburger] = useState<boolean>(false);

  return (
    <StyledNav open={openHamburger}>
      <div>
        <h1>
          <a href='/'>store</a>
        </h1>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <IconButton onClick={onClickCartIcon}>
              <Badge badgeContent={badgeContent} color='error'>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
            <a href='/'>Cart</a>
          </li>
          <li>
            <a href='/'>Login</a>
          </li>
        </ul>
        <Hamburger
          open={openHamburger}
          onClick={() => {
            setOpenHamburger(!openHamburger);
          }}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>
      </div>
    </StyledNav>
  );
};

export default Nav;
