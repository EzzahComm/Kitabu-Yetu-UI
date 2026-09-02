import type { Metadata } from "next";
import {
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  BanknotesIcon,
  ClipboardDocumentListIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";

import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Cta } from "@/components/Cta";

import benefitOneImg from "../../../public/img/benefit-one.png";
import benefitTwoImg from "../../../public/img/benefit-two.png";

export const metadata: Metadata = {
  title: "How it works — Kitabu Yetu",
  description:
    "From an M-Pesa payment to the member's updated balance and the journal entry behind it — how a contribution reaches the group's books.",
};

export default function HowItWorksPage() {
  return (
    <>
      <SectionTitle
        preTitle="How it works"
        title="From M-Pesa to your books, in one motion"
        titleAs="h1"
      >
        The payment and the record of the payment are the same event. Nobody
        retypes anything, and nobody reconciles a statement the night before the
        meeting.
      </SectionTitle>

      <Benefits data={theFlow} />

      <SectionTitle
        preTitle="Watch it happen"
        title="A contribution posted end to end"
      >
        From the payment to the member&apos;s updated balance and the journal
        entry behind it — the whole path in a couple of minutes.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <Benefits imgPos="right" data={theEdges} />

      <Cta />
    </>
  );
}

const theFlow = {
  title: "Three steps, and none of them are yours",
  desc: "A member pays the way they already pay. Everything after that happens because the payment happened.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Member pays",
      desc: "An STK prompt straight to their phone, or your PayBill quoting their membership number. Anyone can pay for a member — a spouse, a child, a well-wisher — and it still lands in the right place.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Payment is matched",
      desc: "Safaricom's Daraja callback is verified before anything is written down, then matched to the member by their membership number or the STK request that started it.",
      icon: <ShieldCheckIcon />,
    },
    {
      title: "The records update",
      desc: "Split into savings, welfare and loan repayment by the rules your group set once, posted to the ledger with Safaricom's fee, and confirmed to the member.",
      icon: <BookOpenIcon />,
    },
  ],
};

const theEdges = {
  title: "What it will not do",
  desc: "A payment in the wrong member's account is a far worse problem than a payment in a queue.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "It never guesses",
      desc: "A PayBill payment that arrives without a usable reference is not attached to whoever seems likely. It waits in an unrouted queue and shows on your dashboard as a task until someone assigns it.",
      icon: <ClipboardDocumentListIcon />,
    },
    {
      title: "Cash still counts",
      desc: "Not every group is cashless. Contributions taken in cash at the meeting are recorded by hand and post to exactly the same ledger.",
      icon: <BanknotesIcon />,
    },
    {
      title: "Money goes out the same way",
      desc: "Loan disbursements, welfare payouts and dividends are sent to a member's phone by B2C — approved first, posted with Safaricom's fee, and confirmed to the member.",
      icon: <ArrowTrendingUpIcon />,
    },
  ],
};
