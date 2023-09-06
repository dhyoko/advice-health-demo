import Card from "react-bootstrap/Card";
import { get } from "lodash";

const InfoCard = (props) => {
  const title = get(props, "title", "");
  const subtitle = get(props, "subtitle", "");
  const children = get(props, "children", null);

  return (
    <Card>
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {subtitle && <Card.Subtitle>{subtitle}</Card.Subtitle>}
        {children}
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
