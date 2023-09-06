import React from "react";
import { Row, Col } from "react-bootstrap";
import { formatISO } from "date-fns";
import { Layout, InfoCard } from "../../components";
import appointmentsMock from "../../mocks/appointment";
import AppointmentPieChart from "./components/appointmentsPieChart";
import { AppointmentCardWrapper } from "./style";

const Dashboard = () => {
  const now = formatISO(new Date(), { representation: "date" });

  return (
    <Layout title="Dashboard">
      <Row>
        <Col
          lg={{
            span: 3,
            order: 1,
          }}
          xs={{
            span: 12,
            order: 2,
          }}
        >
          <AppointmentCardWrapper>
            <InfoCard title={`Agendamentos ${now}`}>
              <AppointmentPieChart appointments={appointmentsMock} />
            </InfoCard>
          </AppointmentCardWrapper>
        </Col>
        <Col
          lg={{
            span: 5,
            order: 1,
          }}
          xs={{
            span: 12,
            order: 3,
          }}
        >
          <InfoCard title="Agendamento"></InfoCard>
        </Col>
        <Col
          lg={{
            span: 4,
            order: 2,
          }}
          xs={{
            span: 12,
            order: 1,
          }}
        >
          <InfoCard title="Teste 2"></InfoCard>
        </Col>
      </Row>
    </Layout>
  );
};

export default Dashboard;
