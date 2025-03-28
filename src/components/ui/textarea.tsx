// 📄 src/components/ui/Textarea.tsx

import * as React from "react";
import { cn } from "@/lib/utils";
import { Form } from "react-bootstrap"; // Bootstrap Form bileşeni

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows = 3, ...props }, ref) => {
    return (
      <Form.Control
        as="textarea"
        rows={rows}
        className={cn(
          "form-control border rounded px-3 py-2 text-sm",  // Bootstrap uyumlu
          "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary", // Focus hali
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
