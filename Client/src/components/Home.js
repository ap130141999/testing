import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Card,
  CardBody,
  Button,
  NavbarBrand,
  NavbarText,
  CardImg,
  Container,
  CardHeader,
  Col,
  Row,
} from "reactstrap";

const Home = () => {
  return (
    <div>
      <Navbar color="primary" light expand="md" className="p-2 mb-4">
        <NavbarBrand href="/" style={{ color: "#ffff" }}>
          Byjus Pay
        </NavbarBrand>
        <form className="d-flex w-auto">
          <NavbarText>Simple Text</NavbarText>
        </form>
      </Navbar>
      <Container>
        <Row>
          <Col md="3" style={{ textAlign: "center" }}>
            <Card>
              <CardHeader tag="h6">Byjus Nache</CardHeader>
              <CardBody className="">
                <CardImg
                  top
                  width="100%"
                  src="/assets/318x180.svg"
                  alt="image"
                />
                <div color="white">
                  <Button color="success" className="m-3">
                    <Link to="/Form">Pay</Link>
                  </Button>
                  <Button color="primary">Histoy</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3" style={{ textAlign: "center" }}>
            <Card>
              <CardHeader tag="h6">Byjus Nache</CardHeader>
              <CardBody>
                <div color="white">
                  <Button color="success" className="m-3">
                    Enum Config Page
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
