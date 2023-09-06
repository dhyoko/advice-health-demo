import styled from "styled-components";
import { COLORS, HEADER_HEIGHT } from "../../utils/consts";

export const ContainerWrapper = styled.div`
  margin-top: ${HEADER_HEIGHT};
  padding: 0 15px;

  .page-title {
    color: ${COLORS.SOFT_BLACK};
  }
`;
