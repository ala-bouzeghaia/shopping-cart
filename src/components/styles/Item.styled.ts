import styled from "styled-components";

//TODO: Add description when clicked on cart
// change Cart style and
// add shopping icon and ratings
// reposition shopping icon in navbar
//TODO: change colors

export const StyledItem = styled.div`
  display: flex;
  //justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  position: relative;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }

  /* button {
    border-radius: 0 0 20px 20px;
    width: 100%;
    position: absolute;
    bottom: 0;

    &:hover {
      background-color: lightblue;
    }
  } */

  .img-container {
    height: 250px;

    img {
      width: 100%;
      height: 100%;
      //max-height: 250px;
      object-fit: contain;
      border-radius: 0 0 20px 20px;
      padding: 1rem;
    }
  }

  .description-container {
    padding: 0 1rem;
    margin-bottom: 20px;
    height: 100%;
    div {
      display: flex;
      justify-content: space-between;
      div {
        flex-direction: column;
      }
    }
    h3 {
      margin: 0;
    }
    /* .icon-container {
      //background-color: lightblue;
      border-radius: 50%;
      border: 1px solid red; 
    }*/
  }
  .button {
    height: 64px;
    border-radius: 50%;
    background-color: lightblue;
    &:hover {
      background-color: lightskyblue;
    }
  }
`;
