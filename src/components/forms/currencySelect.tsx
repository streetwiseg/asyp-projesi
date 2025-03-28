import React from "react";
import { Form } from "react-bootstrap";

interface CurrencySelectProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const currencies = [
  { code: "TRY", label: "Türk Lirası (₺)" },
  { code: "USD", label: "Amerikan Doları ($)" },
  { code: "EUR", label: "Euro (€)" },
  { code: "GBP", label: "Sterlin (£)" },
];

const CurrencySelect: React.FC<CurrencySelectProps> = ({ value, onChange, disabled }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Döviz Birimi</Form.Label>
      <Form.Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      >
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default CurrencySelect;
