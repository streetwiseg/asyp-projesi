// 📄 src/components/panels/filterPanel.tsx

import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

interface FilterPanelProps {
  search: string;
  onSearchChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
  onReset: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  search,
  onSearchChange,
  status,
  onStatusChange,
  onReset,
}) => {
  return (
    <div className="bg-white rounded shadow-sm p-3 mb-3">
      <Row className="g-2 align-items-end">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Ara (Başlık / ID)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sözleşme ara..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Durum</Form.Label>
            <Form.Select
              value={status}
              onChange={(e) => onStatusChange(e.target.value)}
            >
              <option value="">Tümü</option>
              <option value="active">Aktif</option>
              <option value="expired">Süresi Dolmuş</option>
              <option value="draft">Taslak</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Button variant="secondary" className="w-100" onClick={onReset}>
            Temizle
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default FilterPanel;
