import React from "react";
import { Card } from "react-bootstrap";
import { get } from "lodash";
import { FaPlus } from "react-icons/fa";
import { reminders } from "../../../mocks/user";
import { ReminderCardWrapper } from "./style";

const ReminderList = (props) => {
  const reminders = get(props, "reminders");
  const className = get(props, "className");
  if (get(reminders, "length") <= 0) {
    return (
      <p className={className}>Você não possui nenhum lembrete cadastrado.</p>
    );
  }
};

const ReminderCard = () => {
  return (
    <ReminderCardWrapper>
      <Card>
        <Card.Body>
          <Card.Title>
            Lembretes
            <FaPlus onClick={() => {}} />
          </Card.Title>
          <ReminderList className="reminder-list" reminders={reminders} />
        </Card.Body>
      </Card>
    </ReminderCardWrapper>
  );
};

export default ReminderCard;
