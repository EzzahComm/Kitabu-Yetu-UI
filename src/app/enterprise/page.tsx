import type { Metadata } from "next";
import Link from "next/link";
import {
  IconBuildingCommunity,
  IconCheckCircle,
  IconTrendingUp,
  IconUsers,
  IconShieldCheck,
  IconCode,
  IconBrush,
  IconPhone,
} from "@tabler/icons-react";

import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Enterprise — Multi-Group Management Platform",
  description:
    "Manage portfolios of community groups from one account. Portfolio dashboards, multi-group reporting, API access and white-label branding.",
};

export default function EnterprisePage() {
  return (
    <>
      {/* Hero */}
      <Container className="mb-20 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            One View Across
            <span className="text-indigo-600 dark:text-indigo-400"> All Your Groups</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            For NGOs, networks and organizations managing many groups.
            Portfolio dashboards, multi-group reporting, and API access.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Contact Us
              <span>→</span>
            </Link>
            <Link
              href="/bookkeeper"
              className="inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
            >
              See Bookkeeper
            </Link>
          </div>
        </div>
      </Container>

      {/* The Problem */}
      <SectionTitle
        preTitle="The Challenge"
        title="Managing many groups is complex"
      >
        How do you keep visibility across 10, 100, or 1000 groups? How do you know if groups
        are using their funds well? How do you give each group independence while keeping
        oversight at the portfolio level?
      </SectionTitle>

      {/* Core Features */}
      <Container className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Built for portfolio management
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {coreFeatures.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Scale & Complexity */}
      <Container className="mb-20 py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Scales from small to massive
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {scales.map((scale) => (
              <div key={scale.title} className="text-center">
                <div className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  {scale.groups}
                </div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {scale.title}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {scale.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Features Detail */}
      <Container className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Enterprise capabilities
        </h2>
        <div className="space-y-8">
          {enterpriseFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 border-l-4 border-indigo-600 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{feature.description}</p>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Who Uses Enterprise */}
      <Container className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Built for organizations like yours
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.name}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg dark:hover:shadow-lg/20 transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {useCase.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{useCase.description}</p>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                Typical: {useCase.typical}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* Pricing */}
      <Container className="mb-20 py-20 bg-gray-900 dark:bg-gray-950 rounded-2xl text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Pricing by Agreement</h2>
          <p className="text-lg text-gray-400 mb-8">
            Enterprise pricing depends on the number of groups, features needed and scale of your portfolio.
            We work with you to find a pricing structure that makes sense for your organization.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <p className="font-semibold text-indigo-400 mb-2">Typically Includes</p>
              <ul className="text-left text-sm text-gray-400 space-y-1">
                <li>✓ All Bookkeeper features</li>
                <li>✓ Portfolio dashboard</li>
                <li>✓ API access</li>
                <li>✓ White-label option</li>
                <li>✓ Dedicated support</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-indigo-400 mb-2">Custom Options</p>
              <ul className="text-left text-sm text-gray-400 space-y-1">
                <li>✓ Custom PayBills</li>
                <li>✓ Integration API</li>
                <li>✓ Bulk reporting</li>
                <li>✓ Training programs</li>
                <li>✓ SLA guarantees</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-indigo-400 mb-2">Flexible Models</p>
              <ul className="text-left text-sm text-gray-400 space-y-1">
                <li>✓ Per-group pricing</li>
                <li>✓ Flat portfolio rate</li>
                <li>✓ Volume discounts</li>
                <li>✓ Annual billing</li>
                <li>✓ Custom terms</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Implementation */}
      <Container className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Smooth implementation
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {implementation.map((step, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-600 text-white font-bold">
                  {idx + 1}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Final CTA */}
      <Cta
        title="Let's talk about your portfolio"
        subtitle="We'll work with you to understand your needs and design an Enterprise solution that fits."
        note="From project scope to implementation to training — we handle the whole journey."
        footnote="Custom pricing · Flexible terms · Dedicated support"
        primary={{ text: "Schedule a Call", href: "/contact" }}
        secondary={{ text: "Download Spec Sheet", href: "/contact" }}
      />
    </>
  );
}

const coreFeatures = [
  {
    title: "Portfolio Dashboard",
    description: "One view across all your groups. See total members, contributions, loans and impact at a glance.",
    icon: <IconBuildingCommunity size={24} className="text-indigo-600 dark:text-indigo-400" />,
  },
  {
    title: "Multi-Group Reporting",
    description: "Reports that roll up across groups, programs or regions. Built from actual group data, not summaries.",
    icon: <IconTrendingUp size={24} className="text-indigo-600 dark:text-indigo-400" />,
  },
  {
    title: "Team Access",
    description: "Staff accounts with role-based permissions. Each person sees only what they need.",
    icon: <IconUsers size={24} className="text-indigo-600 dark:text-indigo-400" />,
  },
  {
    title: "Custom PayBills",
    description: "Enterprise groups collect into their own PayBill, not the Kitabu Yetu one. Full control.",
    icon: <IconPhone size={24} className="text-indigo-600 dark:text-indigo-400" />,
  },
  {
    title: "API Access",
    description: "Connect Kitabu Yetu to your existing systems. Automated reporting, data sync, integrations.",
    icon: <IconCode size={24} className="text-indigo-600 dark:text-indigo-400" />,
  },
  {
    title: "White-Label Branding",
    description: "Your logo and colors. Groups see your organization's brand, not Kitabu Yetu.",
    icon: <IconBrush size={24} className="text-indigo-600 dark:text-indigo-400" />,
  },
];

const scales = [
  {
    groups: "10–50",
    title: "Small Networks",
    description: "Local networks and programs",
  },
  {
    groups: "50–500",
    title: "Growing Organizations",
    description: "Regional programs and initiatives",
  },
  {
    groups: "500+",
    title: "Large Portfolios",
    description: "National networks and movements",
  },
];

const enterpriseFeatures = [
  {
    title: "Portfolio Management",
    description: "Organize groups into programs, regions or categories. Report at any level.",
    icon: <IconBuildingCommunity size={24} className="text-indigo-600 dark:text-indigo-400" />,
    details: [
      "Unlimited groups and hierarchies",
      "Drill-down from portfolio to group to member",
      "Consolidated reporting",
      "Performance tracking across portfolio",
    ],
  },
  {
    title: "Advanced Reporting",
    description: "Reports that go beyond balance sheets. Analyze trends, compare groups, track impact.",
    icon: <IconTrendingUp size={24} className="text-indigo-600 dark:text-indigo-400" />,
    details: [
      "Real-time portfolio dashboards",
      "Custom report builder",
      "Automated report scheduling",
      "Multi-group analysis and benchmarking",
    ],
  },
  {
    title: "Team & Permissions",
    description: "Grant staff access to the groups they manage. Control exactly what they see.",
    icon: <IconUsers size={24} className="text-indigo-600 dark:text-indigo-400" />,
    details: [
      "Unlimited staff accounts",
      "Role-based access control",
      "Group-level permissions",
      "Audit trail of all staff actions",
    ],
  },
  {
    title: "Technical Integration",
    description: "Connect to your existing systems. Automate data sync and reporting.",
    icon: <IconCode size={24} className="text-indigo-600 dark:text-indigo-400" />,
    details: [
      "REST API access",
      "Webhook support for events",
      "Bulk import/export",
      "Custom integration support",
    ],
  },
];

const useCases = [
  {
    name: "NGOs & Development Organizations",
    description: "Manage groups in VSLA, microfinance or community development programs.",
    typical: "50–500 groups",
  },
  {
    name: "Cooperative Networks",
    description: "Oversight of member cooperatives with consolidated reporting to leadership.",
    typical: "100–1000+ coops",
  },
  {
    name: "Government & Donor Programs",
    description: "Funded programs spanning multiple groups, regions or beneficiary populations.",
    typical: "100–5000 groups",
  },
  {
    name: "Faith-Based Organizations",
    description: "Manage savings groups, welfare circles, or development programs in congregations.",
    typical: "10–100 groups",
  },
  {
    name: "Social Enterprises",
    description: "Track impact of group-based social programs with accountability to investors.",
    typical: "50–500 groups",
  },
  {
    name: "Financial Institutions",
    description: "Partner with groups for financial inclusion, credit guarantees, or savings programs.",
    typical: "500–5000+ groups",
  },
];

const implementation = [
  {
    title: "Discovery & Scoping",
    description: "We understand your portfolio structure, workflows and goals. Together we design the solution.",
  },
  {
    title: "Setup & Configuration",
    description: "We configure Kitabu Yetu for your organization. Branding, PayBills, permissions and integrations.",
  },
  {
    title: "Data Migration",
    description: "Bring existing group data from spreadsheets or other systems. We handle the technical heavy lifting.",
  },
  {
    title: "Staff Training",
    description: "Your team learns to use the platform. Tailored training on the features your staff needs.",
  },
  {
    title: "Go Live & Support",
    description: "Launch with confidence. Dedicated support through the first months and beyond.",
  },
];
