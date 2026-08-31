import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "About — Kitabu Yetu",
  description:
    "Why Kitabu Yetu exists, who builds it, and what it has changed for the groups using it.",
};

export default function AboutPage() {
  return (
    <Container>
      <div id="our-story">
        <SectionTitle
          preTitle="Our Story"
          title="Most groups already keep good records"
        >
          The trouble was never discipline. It was where the records lived — one
          cash book in one person&apos;s handwriting, a spreadsheet three
          officers all need at once, and an M-Pesa statement somebody matches to
          a list of names the evening before every meeting.
        </SectionTitle>

        <div className="max-w-2xl mx-auto text-lg leading-normal text-center text-gray-500 dark:text-gray-300">
          Kitabu Yetu was built to put those three things in one place: the
          members, the money and the payments, on a ledger that has to balance
          before it saves. The group keeps doing what it already does. The book
          just stops being something one person carries.
        </div>
      </div>

      <div id="team">
        <SectionTitle preTitle="Team" title="The people building it">
          Names and faces go here once everyone has agreed to appear. We would
          rather leave this empty than fill it with people who have not.
        </SectionTitle>
      </div>

      <div id="impact">
        <SectionTitle preTitle="Impact" title="What has actually changed">
          Numbers go here once we can stand behind them — groups on the
          platform, shillings tracked, months closed on time. A figure nobody
          can check is worse than no figure at all.
        </SectionTitle>
      </div>

      <Cta />
    </Container>
  );
}
