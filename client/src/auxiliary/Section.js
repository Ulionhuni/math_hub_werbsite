import NavBar from "../components/NavBar";
import {Card, Col, Container, Row} from "react-bootstrap";

const Section = ({ title, height, bgColor = '#fff' }) => (
    <div style={{
        minHeight: height,
        backgroundColor: bgColor,
        padding: '80px 0',
        borderBottom: '1px solid #eee'
    }}>
        <Container>
            <h2 style={{marginBottom: '40px'}}>{title}</h2>
            <Row>
                {[1, 2, 3].map((item) => (
                    <Col md={4} key={item} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Card {item}</Card.Title>
                                <Card.Text>
                                    This is a sample card in the {title.toLowerCase()} section.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
);
export default Section;