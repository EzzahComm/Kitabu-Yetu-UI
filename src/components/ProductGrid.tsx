import React from "react";
import Link from "next/link";
import { Container } from "@/components/Container";

interface ProductCard {
  name: string;
  tagline: string;
  desc: string;
  cta: { text: string; href: string };
}

/**
 * The four solutions, as cards. Card styling matches Pricing's PlanCard so the
 * two grids read as the same system.
 */
export const ProductGrid = () => {
  return (
    <Container className="mb-20">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.name}
            className="flex flex-col p-7 bg-gray-50 rounded-2xl dark:bg-trueGray-800"
          >
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
              {product.name}
            </h3>
            <p className="mt-2 font-medium text-gray-700 dark:text-gray-300">
              {product.tagline}
            </p>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              {product.desc}
            </p>
            <div className="mt-auto pt-7">
              <Link
                href={product.cta.href}
                className="inline-block w-full px-6 py-3 font-medium text-center text-indigo-600 bg-white border border-indigo-600 rounded-md dark:bg-trueGray-800 dark:text-indigo-400 dark:border-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              >
                {product.cta.text}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const products: ProductCard[] = [
  {
    name: "Bookkeeper",
    tagline: "Your group's financial record.",
    desc: "Manage members, contributions, loans, expenses, investments, income-generating activities, M-Pesa payments and reporting.",
    cta: { text: "Explore Bookkeeper", href: "/products#bookkeeper" },
  },
  {
    name: "Chama Reminder",
    tagline: "Keep members engaged and contributions on track.",
    desc: "Send reminders, announcements, birthday messages and SMS campaigns.",
    cta: { text: "Explore Chama Reminder", href: "/products#chama-reminder" },
  },
  {
    name: "Fundraise / Changi$ha",
    tagline: "Raise money for groups, projects and community initiatives.",
    desc: "Create fundraising campaigns and connect contributors to causes that matter.",
    cta: { text: "Explore Fundraise", href: "/products#fundraise" },
  },
  {
    name: "Enterprise",
    tagline: "Manage many groups from one place.",
    desc: "Give organizations visibility across groups, programs, finances, activities and impact.",
    cta: { text: "Explore Enterprise", href: "/products#enterprise" },
  },
];

export default ProductGrid;
