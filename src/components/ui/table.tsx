// 📄 src/components/ui/table.tsx

import React from "react";
import { cn } from "@/lib/utils";
import { Table as BootstrapTable } from "react-bootstrap";

/**
 * Table (Tablo Wrapper)
 */
const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="table-responsive">
      <BootstrapTable
        ref={ref}
        className={cn("table table-bordered table-hover table-striped align-middle", className)}
        {...props}
      />
    </div>
  )
);
Table.displayName = "Table";

/**
 * Table Header
 */
const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn("table-light", className)} {...props} />
  )
);
TableHeader.displayName = "TableHeader";

/**
 * Table Body
 */
const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn(className)} {...props} />
  )
);
TableBody.displayName = "TableBody";

/**
 * Table Row
 */
const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr ref={ref} className={cn(className)} {...props} />
  )
);
TableRow.displayName = "TableRow";

/**
 * Table Head Cell
 */
const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th ref={ref} scope="col" className={cn("align-middle", className)} {...props} />
  )
);
TableHead.displayName = "TableHead";

/**
 * Table Data Cell
 */
const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn("align-middle", className)} {...props} />
  )
);
TableCell.displayName = "TableCell";

// ✅ Exports
export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };
