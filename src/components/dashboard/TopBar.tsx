"use client";

import { IconMenu, IconBell, IconUserCircle } from "@tabler/icons-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface TopBarProps {
  onMenuClick: () => void;
}

/**
 * Top bar component
 * Shows menu button, notifications, theme toggle, and user menu
 */
export function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <div className="h-16 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 flex items-center justify-between px-4 sm:px-6 lg:px-8">
      {/* Left: Menu button (mobile only) */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
        aria-label="Toggle sidebar"
      >
        <IconMenu size={24} className="text-gray-600 dark:text-gray-400" />
      </button>

      {/* Center: Spacer */}
      <div className="flex-1" />

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button
          className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
          aria-label="Notifications"
        >
          <IconBell size={24} className="text-gray-600 dark:text-gray-400" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* User Menu */}
        <button
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
          aria-label="User menu"
        >
          <IconUserCircle size={24} className="text-gray-600 dark:text-gray-400" />
        </button>
      </div>
    </div>
  );
}
