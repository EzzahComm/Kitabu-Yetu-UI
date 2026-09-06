import React from "react";

interface ColumnDef {
  key: string;
  header: string;
  render?: (value: any) => React.ReactNode;
  className?: string;
}

interface DataTableProps {
  columns: ColumnDef[];
  data: Record<string, any>[];
  onRowClick?: (row: Record<string, any>) => void;
  className?: string;
}

/**
 * Data Table component
 * Basic table for displaying structured data
 */
export function DataTable({
  columns,
  data,
  onRowClick,
  className = "",
}: DataTableProps) {
  if (data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-600 dark:text-gray-400">
        No data available
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table
        className={`w-full text-sm border-collapse ${className}`}
      >
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left font-semibold text-gray-900 dark:text-white"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              onClick={() => onRowClick?.(row)}
              className={`border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors ${
                onRowClick ? "cursor-pointer" : ""
              }`}
            >
              {columns.map((column) => (
                <td
                  key={`${rowIdx}-${column.key}`}
                  className={`px-6 py-4 text-gray-900 dark:text-white ${
                    column.className || ""
                  }`}
                >
                  {column.render
                    ? column.render(row[column.key])
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
