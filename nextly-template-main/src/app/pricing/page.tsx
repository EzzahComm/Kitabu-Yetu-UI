import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Pricing — Kitabu Yetu",
  description:
    "One price a month for the whole group. Kitabu Yetu from KES 150, Chama Reminder from KES 100, every plan with an SMS allowance included.",
};

export default function PricingPage() {
  return (
    <>
      <SectionTitle
        preTitle="Pricing"
        title="One price a month, for the whole group"
      >
        Two products, one bill. Take the full book with Kitabu Yetu, or SMS
        reminders on their own with Chama Reminder. Every price below is the
        price the system actually charges.
      </SectionTitle>

      <Pricing />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        What treasurers, chairpersons and NGO coordinators ask us most often.
      </SectionTitle>

      <Faq />
      <Cta />
    </>
  );
}
