import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

/**
 * Page Header component
 * Displays page title, description, and action buttons
 */
export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h1>
        {description && (
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="mt-4 sm:mt-0 flex gap-3">{actions}</div>}
    </div>
  );
}
