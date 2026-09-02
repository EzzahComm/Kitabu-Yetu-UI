import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Legal — Kitabu Yetu",
  description:
    "Terms and conditions, privacy policy and data protection for Kitabu Yetu.",
};

export default function LegalPage() {
  return (
    <>
      <SectionTitle
        preTitle="Legal"
        title="Terms, privacy and data protection"
        titleAs="h1"
      >
        The full documents are being finalised. What follows is what they will
        say, in plain language — and if the final wording differs from this
        page, the final wording is what applies.
      </SectionTitle>

      <div id="terms">
        <SectionTitle preTitle="Terms & Conditions" title="Using Kitabu Yetu">
          Every plan is paid and bought self-service by M-Pesa, billed to the
          group account once a month. You can change plan at any time and it
          activates immediately; there is no lock-in period.
        </SectionTitle>
      </div>

      <div id="privacy">
        <SectionTitle preTitle="Privacy Policy" title="What we hold, and why">
          We hold what the group records: members, their contact details and
          their financial activity in the group. It is used to run the
          group&apos;s book and to send the messages the group asks us to send.
        </SectionTitle>
      </div>

      <div id="data-protection">
        <SectionTitle
          preTitle="Data Protection"
          title="Where a group's records live"
        >
          Data is stored on encrypted servers, and each group&apos;s records are
          isolated at the database level — one group can never read
          another&apos;s. Access inside a group follows the role the group gave
          the person.
        </SectionTitle>
      </div>
    </>
  );
}
