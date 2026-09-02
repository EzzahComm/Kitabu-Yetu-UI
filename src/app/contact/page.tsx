import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Contact — Kitabu Yetu",
  description:
    "Talk to Kitabu Yetu about starting a group, moving your records over, or Enterprise for organizations running many groups.",
};

export default function ContactPage() {
  return (
    <>
      <SectionTitle
        preTitle="Contact"
        title="Start a group, or ask us anything first"
      >
        Whether you are moving one chama off paper or running a hundred groups
        across a programme, tell us where you are and we will tell you what
        setting up looks like.
      </SectionTitle>

      <Container className="mb-20">
        <div className="max-w-2xl mx-auto text-lg leading-normal text-center text-gray-500 dark:text-gray-300">
          <div className="mt-4">
            <a
              href="mailto:info@kitabuyetu.co.ke"
              className="hover:text-indigo-500 focus:text-indigo-500 focus:outline-none"
            >
              info@kitabuyetu.co.ke
            </a>
          </div>
          <div className="mt-2">
            <a
              href="tel:+254717548646"
              className="hover:text-indigo-500 focus:text-indigo-500 focus:outline-none"
            >
              +254 717 548 646
            </a>
          </div>
          <div className="mt-2">
            <a
              href="tel:+254738692698"
              className="hover:text-indigo-500 focus:text-indigo-500 focus:outline-none"
            >
              +254 738 692 698
            </a>
          </div>
          <div className="mt-2">Nairobi, Kenya</div>
        </div>
      </Container>
    </>
  );
}
