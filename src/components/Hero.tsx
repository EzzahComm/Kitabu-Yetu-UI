"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";
import { Container } from "@/components/Container";
import { signUpUrl } from "@/lib/app-links";
import heroOneImg from "../../public/img/hero-one.jpg";
import heroTwoImg from "../../public/img/hero-two.jpg";

/**
 * The two pitches the hero rotates between. Copy for the second slide is
 * lifted verbatim from the `benefitTwo` entry in data.js, so nothing here is
 * a new marketing claim — it's the same line the page already makes further
 * down, just surfaced earlier.
 *
 * Images are real photos, licensed for commercial use with no attribution
 * required — kept here for provenance:
 * - hero-one.jpg: "Women sitting on a couch" by PICHA Stock, via Pexels
 *   (Pexels License). https://www.pexels.com/photo/women-sitting-on-a-couch-3894375/
 * - hero-two.jpg: "A woman smiles while holding a cell phone" by Hassan
 *   Kibwana, via Unsplash (Unsplash License).
 *   https://unsplash.com/photos/pkrVTwflG-E
 */
const HERO_MESSAGES = [
  {
    id: "run-your-group",
    title: "Run your group. Grow its potential.",
    subtitle:
      "Manage your members, money, investments and communication in one simple platform.",
    image: heroOneImg,
    imageAlt: "A group of women meeting together, laughing and talking",
  },
  {
    id: "savings-pot",
    title: "More than a savings pot",
    subtitle:
      "The group keeps its members informed, puts its money to work, and lets every member check their own record without waiting for a meeting.",
    image: heroTwoImg,
    imageAlt: "A woman smiling while checking her phone",
  },
] as const;

const ROTATION_MS = 6000;

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Respect prefers-reduced-motion: leave the first message on screen
    // instead of auto-rotating.
    if (prefersReducedMotion) return;

    let timer: ReturnType<typeof setInterval> | undefined;

    const start = () => {
      timer = setInterval(() => {
        setIndex((prev) => (prev === 0 ? 1 : 0));
      }, ROTATION_MS);
    };
    const stop = () => {
      if (timer) clearInterval(timer);
      timer = undefined;
    };

    // Don't burn CPU/battery animating a rotation nobody can see.
    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    start();
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [prefersReducedMotion]);

  const current = HERO_MESSAGES[index];

  return (
    <LazyMotion features={domAnimation}>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            {/* Both slides share this grid cell so the taller of the two
                sets the box size during the crossfade — no fixed height,
                no layout jump once the shorter one settles in. */}
            <div className="grid">
              <AnimatePresence>
                <m.div
                  key={current.id}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="col-start-1 row-start-1">
                  <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                    {current.title}
                  </h1>
                  <p className="pt-5 text-xl font-medium leading-normal text-gray-800 lg:text-xl xl:text-2xl dark:text-gray-200">
                    {current.subtitle}
                  </p>
                </m.div>
              </AnimatePresence>
            </div>

            <p className="py-5 text-lg leading-normal text-gray-500 lg:text-lg xl:text-xl dark:text-gray-300">
              Kitabu Yetu helps chamas, welfare groups, SACCOs, investment clubs
              and community organizations manage contributions, loans, expenses,
              payments and income-generating activities — while creating access
              to opportunities that can help them grow.
            </p>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href={signUpUrl()}
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300">
                Get Started
              </a>
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
          <div className="grid">
            <AnimatePresence>
              <m.div
                key={current.id}
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: prefersReducedMotion ? 0 : -40 }}
                transition={{ duration: 0.6, ease: [0.32, 0.94, 0.6, 1] }}
                className="col-start-1 row-start-1">
                <Image
                  src={current.image}
                  width={current.image.width}
                  height={current.image.height}
                  className={"object-cover"}
                  alt={current.imageAlt}
                  loading="eager"
                  placeholder="blur"
                />
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>

      <Container className="mb-20">
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Built for Kenyan groups, on{" "}
            <span className="text-indigo-600">Kenyan rails</span>
          </div>

          <p className="max-w-2xl mx-auto mt-5 text-center text-gray-500 dark:text-gray-400">
            Partner and customer logos go here once we have permission to show
            them. We would rather leave this empty than fill it with names that
            have not agreed to appear.
          </p>
        </div>
      </Container>
    </LazyMotion>
  );
};
