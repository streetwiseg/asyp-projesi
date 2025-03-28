// 📄 src/components/ui/input.tsx

import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

/**
 * Input Component - Bootstrap Uyumlu
 * @returns Bootstrap form-control + hata yönetimi + label
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, required, className = "", ...props }, ref) => {
    const inputId = React.useId();

    return (
      <div className="mb-3">
        {label && (
          <label htmlFor={inputId} className="form-label fw-semibold d-block mb-1">
            {label} {required && <span className="text-danger">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`form-control ${error ? "is-invalid" : ""} ${className}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          required={required}
          {...props}
        />
        {error && (
          <div id={`${inputId}-error`} className="invalid-feedback">
            {error}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
