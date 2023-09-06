import React from "react";
import { Row, Col } from "react-bootstrap";
import { formatISO } from "date-fns";
import { Layout, InfoCard } from "../../components";
import appointmentsMock from "../../mocks/appointment";
import {
  AppointmentPieChart,
  ServicesBarChart,
  AppointmentsCalendar,
  AppointmentsCardList,
} from "./components";
import { CardWrapper, CalendarWrapper } from "./style";

const Dashboard = () => {
  const now = formatISO(new Date(), { representation: "date" });

  return (
    <Layout title="Dashboard">
      <Row>
        <Col
          xl={{
            span: 8,
            order: 1,
          }}
          xs={{
            span: 12,
            order: 2,
          }}
        >
          <Row>
            <Col xl={5} xs={12}>
              <CardWrapper>
                <InfoCard title={`Agendamentos ${now}`}>
                  <AppointmentPieChart appointments={appointmentsMock} />
                </InfoCard>
              </CardWrapper>
            </Col>
            <Col xl={7} xs={12}>
              <CardWrapper>
                <InfoCard title={`Serviços ${now}`}>
                  <ServicesBarChart appointments={appointmentsMock} />
                </InfoCard>
              </CardWrapper>
            </Col>
          </Row>
        </Col>
        <Col
          xl={{
            span: 4,
            order: 2,
          }}
          xs={{
            span: 12,
            order: 1,
          }}
        >
          <CalendarWrapper>
            <AppointmentsCalendar />
          </CalendarWrapper>
          <h5>Próximos atendimentos: </h5>
          <AppointmentsCardList appointments={appointmentsMock} />
        </Col>
      </Row>
    </Layout>
  );
};

export default Dashboard;
