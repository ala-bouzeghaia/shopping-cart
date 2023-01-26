import styled from "styled-components";

export const StyledCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightblue;
  padding: 20px 0;

  div {
    flex: 1;
    width: 100%;
    div {
      display: flex;
      justify-content: space-between;
      //width: 100%;
    }
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`;
