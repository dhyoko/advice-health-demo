import styled from "styled-components";
import { COLORS } from "../../utils/consts";

export const NavWrapper = styled.div`
  nav {
    border-bottom: 1px solid ${COLORS.LIGH_GRAY};
    background-color: ${COLORS.WHITE};

    .navbar-nav {
      align-items: center;

      .nav-item {
        margin-right: 10px;

        a {
          color: ${COLORS.SOFT_BLACK};
          text-decoration: none;

          &:hover {
            color: ${COLORS.SOFT_BLACK_HOVER};
          }
        }
      }
    }
  }
`;

export const ImageWrapper = styled.img`
  height: 35px;
  width: 35px;
  margin: 0 10px 0 20px;
`;
