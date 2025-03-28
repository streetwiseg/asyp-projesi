// 📄 src/components/ui/card.tsx

import * as React from "react";

/**
 * Bootstrap Card Bileşeni
 */
export function Card({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`card shadow-sm rounded-3 ${className}`} {...props}>
      {/* card */}
    </div>
  );
}

/**
 * Card Header
 */
export function CardHeader({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`card-header bg-light fw-semibold ${className}`} {...props}>
      {/* header */}
    </div>
  );
}

/**
 * Card Title
 */
export function CardTitle({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5 className={`card-title ${className}`} {...props}>
      {/* title */}
    </h5>
  );
}

/**
 * Card Content
 */
export function CardContent({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`card-body ${className}`} {...props}>
      {/* content */}
    </div>
  );
}
