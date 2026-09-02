import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <>
      <Hero />
      <SectionTitle
        preTitle="What Kitabu Yetu is"
        title="Your group&apos;s records. Finally in one place."
      >
        Members, money, payments and reports live together, instead of a
        notebook, a spreadsheet and an M-Pesa statement that somebody has to
        check against each other the night before every meeting.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Payments"
        title="From M-Pesa to your books, in one motion"
      >
        A member pays by STK prompt or PayBill, Safaricom&apos;s callback is
        verified and matched to them, and the split into savings, welfare and
        loan repayment posts to the ledger — and a payment that arrives without
        a usable reference waits in a queue rather than being guessed at.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="What groups say about Kitabu Yetu"
      >
        Treasurers, chairpersons and NGO coordinators on what changed once the
        group&apos;s book moved online.
      </SectionTitle>

      <Testimonials />

      <div id="pricing">
        <SectionTitle
          preTitle="Pricing"
          title="One price a month, for the whole group"
        >
          Two products, one bill. Take the full book with Kitabu Yetu, or SMS
          reminders on their own with Chama Reminder. Every price below is the
          price the system actually charges.
        </SectionTitle>

        <Pricing />
      </div>

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        What treasurers, chairpersons and NGO coordinators ask us most often.
      </SectionTitle>

      <Faq />
      <Cta />
    </>
  );
}
