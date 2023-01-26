import styled, { css } from "styled-components";

type HamburgerProps = {
  open: boolean;
};

const navItemsMobile = css`
  background-color: lightblue;
  position: absolute;
  top: 5.5rem;
  height: 80%;
  width: 80%;
  margin: 0 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 100;
  border-radius: 2rem;
  transform: translateX(100%);
`;

export const StyledNav = styled.nav<HamburgerProps>`
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 auto;
    margin: 0 20px;
    ul {
      width: 30%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
    }
    li {
      list-style-type: none;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.dark_blue};
      font-weight: 700;
    }
    div {
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      position: relative;
      ul {
        //display: none;
        background-color: lightblue;
        position: absolute;
        top: 14vh;
        //left: 0;
        height: 70vh;
        width: 100%;
        //margin: 20px 50px;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        z-index: 100;
        border-radius: 2rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        transform: ${({ open }) =>
          open ? "translateX(0)" : "translateX(100vw)"};
        transition: transform 0.5s ease-in;

        a:nth-child(1n) {
          opacity: ${({ open }) => (open ? 1 : 0)};
          transition: opacity 1s ease-in;
        }
      }
      div {
        display: flex;
        margin-right: 0;
      }
    }
  }
`;

export const Hamburger = styled.div<HamburgerProps>`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    cursor: pointer;
    div {
      background-color: ${({ theme }) => theme.colors.dark_blue};
      width: 30px;
      height: 3px;
      margin: 2.5px 0 2.5px 0;
      border-radius: 1rem;
    }
    div:nth-child(1) {
      transform: ${({ open }) =>
        open ? "rotate(-45deg) translate(-5px, 6px)" : ""};
      transition: transform 0.5s ease-in;
    }
    div:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
      transition: opacity 0.5s ease-in;
    }
    div:nth-child(3) {
      transform: ${({ open }) =>
        open ? "rotate(45deg) translate(-5px, -6px)" : ""};
      transition: transform 0.5s ease-in;
    }
  }
`;
