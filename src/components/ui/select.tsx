// 📄 src/components/ui/select.tsx

import * as React from "react";
import { Form } from "react-bootstrap";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  required?: boolean;
  options: SelectOption[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, required, options, className = "", ...props }, ref) => {
    const inputId = React.useId();

    return (
      <div className="mb-3">
        {label && (
          <label htmlFor={inputId} className="form-label fw-semibold">
            {label} {required && <span className="text-danger">*</span>}
          </label>
        )}
        <Form.Select
          ref={ref}
          id={inputId}
          className={`${error ? "is-invalid" : ""} ${className}`}
          required={required}
          {...props}
        >
          <option value="">Seçiniz...</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
