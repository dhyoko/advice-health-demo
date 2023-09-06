import styled from "styled-components";
import { COLORS } from "../../../utils/consts";

export const TooltipWrapper = styled.div`
  padding: 12px;
  color: ${COLORS.SOFT_BLACK};
  background: ${COLORS.WHITE};
`;

export const AppointmentCardWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 35px;
    width: 35px;
  }

  .card-info {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
`;
