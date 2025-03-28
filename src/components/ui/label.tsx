// 📄 src/components/ui/label.tsx

import * as React from "react";

/**
 * Label Component - Bootstrap uyumlu
 * @param required => zorunlu alan işareti gösterir (*)
 */
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = "", children, required, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={`form-label fw-semibold d-block mb-1 ${className}`}
        {...props}
      >
        {children}
        {required && <span className="text-danger ms-1">*</span>}
      </label>
    );
  }
);

Label.displayName = "Label";

export { Label };
