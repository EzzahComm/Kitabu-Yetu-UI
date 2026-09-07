"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import {
  IconHome,
  IconUsers,
  IconCoin,
  IconPigMoney,
  IconBriefcase,
  IconHeart,
  IconShare,
  IconTrendingUp,
  IconMoneybag,
  IconFileText,
  IconCalculator,
  IconMessage,
  IconMail,
  IconBell,
  IconTarget,
  IconGift,
  IconUsersGroup,
  IconUserCircle,
  IconSwitchHorizontal,
  IconSettings,
  IconLogout,
} from "@tabler/icons-react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Sidebar navigation component
 * Responsive: full on desktop, drawer on mobile
 */
export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  const NavLink = ({
    href,
    icon: Icon,
    label,
  }: {
    href: string;
    icon: React.ComponentType<any>;
    label: string;
  }) => {
    const active = isActive(href);
    return (
      <Link
        href={href}
        onClick={onClose}
        className={`flex items-center gap-3 px-4 py-2.5 rounded-md transition-colors ${
          active
            ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
      >
        <Icon size={20} className="flex-shrink-0" />
        <span className="text-sm font-medium">{label}</span>
      </Link>
    );
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 transform ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } overflow-y-auto`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-6 border-b border-gray-200 dark:border-gray-700">
            <BrandLogo size={32} />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                Kitabu Yetu
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Bookkeeper
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
            {/* OVERVIEW */}
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase px-4 mb-3">
                Overview
              </p>
              <div className="space-y-1">
                <NavLink href="/dashboard" icon={IconHome} label="Dashboard" />
                <NavLink
                  href="/dashboard/notifications"
                  icon={IconBell}
                  label="Notifications"
                />
              </div>
            </div>

            {/* GROUP MANAGEMENT */}
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase px-4 mb-3 mt-6">
                Group Management
              </p>
              <div className="space-y-1">
                <NavLink href="/dashboard/members" icon={IconUsers} label="Members" />
                <NavLink
                  href="/dashboard/contributions"
                  icon={IconCoin}
                  label="Contributions"
                />
                <NavLink href="/dashboard/savings" icon={IconPigMoney} label="Savings" />
                <NavLink
                  href="/dashboard/loans"
                  icon={IconBriefcase}
                  label="Loans"
                />
                <NavLink href="/dashboard/welfare" icon={IconHeart} label="Welfare" />
                <NavLink href="/dashboard/shares" icon={IconShare} label="Shares" />
                <NavLink
                  href="/dashboard/dividends"
                  icon={IconTrendingUp}
                  label="Dividends"
                />
                <NavLink
                  href="/dashboard/investments"
                  icon={IconMoneybag}
                  label="Investments"
                />
              </div>
            </div>

            {/* FINANCE */}
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase px-4 mb-3 mt-6">
                Finance
              </p>
              <div className="space-y-1">
                <NavLink
                  href="/dashboard/finance/transactions"
                  icon={IconCalculator}
                  label="Transactions"
                />
                <NavLink
                  href="/dashboard/finance/reports"
                  icon={IconFileText}
                  label="Reports"
                />
              </div>
            </div>

            {/* COMMUNICATION */}
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase px-4 mb-3 mt-6">
                Communication
              </p>
              <div className="space-y-1">
                <NavLink
                  href="/dashboard/communication/sms"
                  icon={IconMessage}
                  label="SMS"
                />
                <NavLink
                  href="/dashboard/communication/email"
                  icon={IconMail}
                  label="Email"
                />
              </div>
            </div>

            {/* FUNDRAISE */}
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase px-4 mb-3 mt-6">
                Fundraise
              </p>
              <div className="space-y-1">
                <NavLink
                  href="/dashboard/fundraise/campaigns"
                  icon={IconTarget}
                  label="Campaigns"
                />
                <NavLink
                  href="/dashboard/fundraise/donations"
                  icon={IconGift}
                  label="Donations"
                />
              </div>
            </div>

            {/* CRM */}
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase px-4 mb-3 mt-6">
                CRM
              </p>
              <div className="space-y-1">
                <NavLink
                  href="/dashboard/crm/contacts"
                  icon={IconUsersGroup}
                  label="Contacts"
                />
              </div>
            </div>

            {/* ADMINISTRATION */}
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase px-4 mb-3 mt-6">
                Administration
              </p>
              <div className="space-y-1">
                <NavLink
                  href="/dashboard/settings"
                  icon={IconSettings}
                  label="Settings"
                />
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t border-gray-200 dark:border-gray-700 px-3 py-4 space-y-1">
            <NavLink
              href="/dashboard/account"
              icon={IconUserCircle}
              label="Account"
            />
            <NavLink
              href="/dashboard/organizations"
              icon={IconSwitchHorizontal}
              label="Switch Group"
            />
            <button
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
              onClick={() => {
                /* Handle logout */
              }}
            >
              <IconLogout size={20} className="flex-shrink-0" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
