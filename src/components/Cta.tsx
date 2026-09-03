import React from "react";
import Link from "next/link";
import { Container } from "@/components/Container";

interface CtaAction {
  text: string;
  href: string;
}

interface CtaProps {
  title?: string;
  subtitle?: string;
  /** Extra line under the subtitle, e.g. a "not sure where to start?" nudge. */
  note?: string;
  /** Small print under the buttons. */
  footnote?: string;
  primary?: CtaAction;
  secondary?: CtaAction;
}

/**
 * Closing call to action. Every prop defaults to the copy this block has always
 * carried, so pages that render <Cta /> bare are unchanged.
 */
export const Cta = (props: Readonly<CtaProps>) => {
  const {
    title = "Ready to bring your group's records together?",
    subtitle = "Pay by M-Pesa, from KES 150 a month, with no lock-in period.",
    note,
    footnote,
    primary = { text: "Get Started", href: "/contact" },
    secondary,
  } = props;

  return (
    <Container className="mb-20">
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">{title}</h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            {subtitle}
          </p>
          {note && (
            <p className="mt-3 text-white text-opacity-80">{note}</p>
          )}
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <Link
              href={primary.href}
              className="inline-block py-3 text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {primary.text}
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-block py-3 text-lg font-medium text-center text-white border border-white rounded-md px-7 lg:px-10 lg:py-5 hover:bg-white hover:bg-opacity-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {secondary.text}
              </Link>
            )}
          </div>
          {footnote && (
            <p className="mt-4 text-sm text-white text-opacity-80">{footnote}</p>
          )}
        </div>
      </div>
    </Container>
  );
};
