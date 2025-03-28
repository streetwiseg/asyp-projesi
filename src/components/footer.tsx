// src/components/Footer.tsx

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5 border-top border-secondary">
      <Container>
        <Row className="gy-4">

          {/* ASYP Logo & Tanım */}
          <Col xs={12} md={3}>
            <h5 className="mb-3 fw-bold">ASYP</h5>
            <p className="text-muted small">
              Akıllı Sözleşme Yönetim Platformu. Kurumsal sözleşmelerinizi kolayca yönetin.
            </p>
          </Col>

          {/* Hızlı Erişim */}
          <Col xs={6} md={3}>
            <h6 className="fw-bold mb-3">Hızlı Erişim</h6>
            <ul className="list-unstyled small">
              <li><a href="/" className="text-white text-decoration-none">Ana Sayfa</a></li>
              <li><a href="/features" className="text-white text-decoration-none">Özellikler</a></li>
              <li><a href="/packages" className="text-white text-decoration-none">Paketler</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">İletişim</a></li>
            </ul>
          </Col>

          {/* Yasal Bilgiler */}
          <Col xs={6} md={3}>
            <h6 className="fw-bold mb-3">Yasal</h6>
            <ul className="list-unstyled small">
              <li><a href="/privacy-policy" className="text-white text-decoration-none">Gizlilik Politikası</a></li>
              <li><a href="/terms" className="text-white text-decoration-none">Kullanım Şartları</a></li>
            </ul>
          </Col>

          {/* İletişim Bilgileri */}
          <Col xs={12} md={3}>
            <h6 className="fw-bold mb-3">İletişim</h6>
            <p className="mb-1 text-muted small">support@asyp.com</p>
            <p className="mb-0 text-muted small">71-75 Shelton Street, London</p>
          </Col>

        </Row>

        <hr className="border-secondary mt-4" />

        <div className="text-center text-muted small">
          © {currentYear} ASYP. Tüm hakları saklıdır.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
