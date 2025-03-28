import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap"; // Bootstrap bileşenlerini import ediyoruz
import { Rocket, CheckCircle2, ShieldCheck } from "lucide-react"; // Kullanacağımız ikonları import ediyoruz

const Features = () => {
  // Özellikler dizisi
  const features = [
    {
      icon: <Rocket className="w-6 h-6" />, 
      title: "Otomatik Süreçler", 
      description: "Sözleşmelerinizi hızlıca oluşturun, onaylayın ve izleyin. Gereksiz adımları yapay zeka ile ortadan kaldırın."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Doğruluk ve Hız", 
      description: "Gelişmiş analiz altyapısı sayesinde hataları azaltın, karar alma sürecini hızlandırın."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Veri Güvenliği", 
      description: "AES-256 ile şifrelenmiş verileriniz, tam güvenlik altında saklanır ve sadece size özel erişimle yönetilir."
    }
  ];

  return (
    <div className="bg-light py-5">
      <Container>
        {/* Başlık */}
        <Row className="mb-5 text-center">
          <Col>
            <h1 className="display-4 text-dark">Neden ASYP?</h1>
            <p className="lead text-muted">ASYP ile sözleşme yönetim süreçlerinizi çok daha verimli ve güvenli bir şekilde yönetin.</p>
          </Col>
        </Row>

        {/* Özellikler Listesi */}
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} md={4}>
              <Card className="shadow-sm border-light">
                <Card.Body className="text-center">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <Card.Title className="h5 mb-3">{feature.title}</Card.Title>
                  <Card.Text className="text-muted">{feature.description}</Card.Text>
                  <Button variant="primary">Daha Fazla Bilgi</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Features;
