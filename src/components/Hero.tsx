import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";

export const Hero = () => {
  return (
    <Container className="flex flex-wrap mb-20">
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Run your group. Grow its potential.
          </h1>
          <p className="pt-5 text-xl font-medium leading-normal text-gray-800 lg:text-xl xl:text-2xl dark:text-gray-200">
            Manage your members, money, investments and communication in one
            simple platform.
          </p>
          <p className="py-5 text-lg leading-normal text-gray-500 lg:text-lg xl:text-xl dark:text-gray-300">
            Kitabu Yetu helps chamas, welfare groups, SACCOs, investment clubs
            and community organizations manage contributions, loans, expenses,
            payments and income-generating activities — while creating access to
            opportunities that can help them grow.
          </p>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300">
              Get Started
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 text-lg font-medium text-center text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-trueGray-800">
              Talk to Us
            </Link>
          </div>

          <p className="mt-6 text-gray-500 dark:text-gray-400">
            Simple to start · M-Pesa integrated · Secure · Built for Kenyan
            groups
          </p>
          <p className="mt-1 font-medium text-gray-600 dark:text-gray-300">
            From KES 150/month · Pay by M-Pesa
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="">
          <Image
            src={heroImg}
            width="616"
            height="617"
            className={"object-cover"}
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </div>
    </Container>
  );
};
