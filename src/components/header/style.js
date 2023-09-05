import styled from "styled-components";
import { COLORS } from "../../utils/consts";

export const NavWrapper = styled.div`
  nav {
    border-bottom: 1px solid ${COLORS.LIGH_GRAY};
    background-color: ${COLORS.WHITE};
  }
`;

export const ImageWrapper = styled.img`
  height: 35px;
  width: 35px;
  margin: 0 10px 0 20px;
`;
