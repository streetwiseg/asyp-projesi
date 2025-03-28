import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"; // Bootstrap component'lerini import ediyoruz

const About = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        {/* Başlık */}
        <Row className="mb-5">
          <Col>
            <h1 className="text-center text-dark display-4">Hakkımızda</h1>
            <p className="text-center text-muted">ASYP, Akıllı Sözleşme Yönetimi platformu ile süreçlerinizi kolaylaştırın.</p>
          </Col>
        </Row>

        {/* Şirket Tanıtımı */}
        <Row className="mb-5">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Platform Hakkında</Card.Title>
                <Card.Text>
                  ASYP, şirketlerin sözleşme süreçlerini dijitalleştirerek, daha verimli hale getirmelerine olanak sağlar. Yapay zeka destekli analiz ve raporlama özellikleri ile süreçlerinizi hızlandırabilir ve hataları minimize edebilirsiniz.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Neden ASYP? */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center text-dark">Neden ASYP?</h2>
            <p className="text-center text-muted">
              ASYP, kullanıcı dostu arayüzü, güçlü güvenlik altyapısı ve gelişmiş analiz özellikleri ile iş süreçlerinizi hızlandırır.
            </p>
          </Col>
        </Row>

        {/* Özellikler */}
        <Row className="g-4">
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Otomatik Süreçler</Card.Title>
                <Card.Text>
                  Sözleşmelerinizi hızlıca oluşturun, onaylayın ve izleyin. Gereksiz adımları yapay zeka ile ortadan kaldırın.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Doğruluk ve Hız</Card.Title>
                <Card.Text>
                  Gelişmiş analiz altyapısı sayesinde hataları azaltın, karar alma sürecini hızlandırın.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Veri Güvenliği</Card.Title>
                <Card.Text>
                  AES-256 ile şifrelenmiş verileriniz, tam güvenlik altında saklanır ve sadece size özel erişimle yönetilir.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* İletişim Bilgileri */}
        <Row className="mt-5">
          <Col>
            <h3 className="text-center text-dark">Bize Ulaşın</h3>
            <p className="text-center text-muted">ASYP hakkında daha fazla bilgi almak ve işbirliği yapmak için bizimle iletişime geçebilirsiniz.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
