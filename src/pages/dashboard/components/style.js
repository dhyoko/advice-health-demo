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

export const BillingCardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;

  h5 {
    margin-right: 15px;
  }

  h1 {
    font-size: 60px;
  }
`;
