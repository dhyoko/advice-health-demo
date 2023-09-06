import React from "react";
import { Row, Col } from "react-bootstrap";
import { formatISO } from "date-fns";
import { Layout, InfoCard } from "../../components";
import appointmentsMock from "../../mocks/appointment";
import AppointmentPieChart from "./components/appointmentsPieChart";
import ServicesBarChart from "./components/servicesBarChart";
import { CardWrapper } from "./style";

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
          <CardWrapper>
            <InfoCard title={`Agendamentos ${now}`}>
              <AppointmentPieChart appointments={appointmentsMock} />
            </InfoCard>
          </CardWrapper>
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
          <CardWrapper>
            <InfoCard title="Serviços">
              <ServicesBarChart appointments={appointmentsMock} />
            </InfoCard>
          </CardWrapper>
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
