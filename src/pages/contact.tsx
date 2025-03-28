import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap"; // Bootstrap bileşenleri import ediyoruz

const Contact = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        {/* Başlık */}
        <Row className="mb-5">
          <Col>
            <h1 className="text-center text-dark display-4">İletişim</h1>
            <p className="text-center text-muted">
              ASYP ile ilgili sorularınız veya işbirliği talepleriniz için bizimle iletişime geçebilirsiniz.
            </p>
          </Col>
        </Row>

        {/* İletişim Formu */}
        <Row>
          <Col md={8} className="mx-auto">
            <Form>
              <Form.Group className="mb-4" controlId="formName">
                <Form.Label>Adınız</Form.Label>
                <Form.Control type="text" placeholder="Adınızı girin" required />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label>E-posta</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="E-posta adresinizi girin"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formSubject">
                <Form.Label>Konu</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Mesajınızın konusunu girin"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label>Mesajınız</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Mesajınızı buraya yazın"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Gönder
              </Button>
            </Form>
          </Col>
        </Row>

        {/* İletişim Bilgileri */}
        <Row className="mt-5">
          <Col>
            <h2 className="text-center text-dark">Bize Ulaşın</h2>
            <p className="text-center text-muted">
              Aşağıdaki bilgileri kullanarak bize ulaşabilirsiniz:
            </p>
            <div className="text-center">
              <p>
                <strong>E-posta:</strong> support@asyp.com
              </p>
              <p>
                <strong>Telefon:</strong> +90 123 456 7890
              </p>
              <p>
                <strong>Adres:</strong> 71-75 Shelton Street, Covent Garden, London
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
