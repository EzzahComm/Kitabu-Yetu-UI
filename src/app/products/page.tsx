import type { Metadata } from "next";
import {
  BookOpenIcon,
  DevicePhoneMobileIcon,
  ChartBarSquareIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  HandRaisedIcon,
  DocumentTextIcon,
  BuildingOffice2Icon,
  CodeBracketIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/solid";

import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Cta } from "@/components/Cta";

import benefitOneImg from "../../../public/img/benefit-one.png";
import benefitTwoImg from "../../../public/img/benefit-two.png";

export const metadata: Metadata = {
  title: "Products — Kitabu Yetu",
  description:
    "The full book with Kitabu Yetu, SMS reminders on their own with Chama Reminder, fundraising with Changi$ha, and Enterprise for organizations running many groups.",
};

export default function ProductsPage() {
  return (
    <>
      <SectionTitle
        preTitle="Products"
        title="Start where your group is, not where the software wants it"
      >
        Take the full book, or take the messaging on its own and add the book
        later. Whichever you start with, your group, your members and their
        history carry over unchanged.
      </SectionTitle>

      <div id="bookkeeper">
        <Benefits data={bookkeeper} />
      </div>

      <div id="chama-reminder">
        <Benefits imgPos="right" data={chamaReminder} />
      </div>

      <div id="fundraise">
        <Benefits data={fundraise} />
      </div>

      <div id="enterprise">
        <Benefits imgPos="right" data={enterprise} />
      </div>

      <Cta />
    </>
  );
}

const bookkeeper = {
  title: "Bookkeeper — the full book",
  desc: "Members, savings, contributions, loans, welfare, shares and dividends, posted to a double-entry ledger that has to balance before it saves.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Members and their money",
      desc: "One register of members, their roles and their financial activity, current the moment a payment lands.",
      icon: <UserGroupIcon />,
    },
    {
      title: "M-Pesa in and out",
      desc: "PayBill and STK collections post against the right member; loans, welfare and dividends go out by B2C.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Close the month off the ledger",
      desc: "Statements, trial balance and member reports come straight from the books, and a closed period stops changing.",
      icon: <BookOpenIcon />,
    },
  ],
};

const chamaReminder = {
  title: "Chama Reminder — just the messaging",
  desc: "Keep your member list and reach everyone by SMS: contribution reminders, birthday greetings and group announcements, with no ledger to set up.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "A member list that is yours",
      desc: "Names, numbers and groups in one place, ready to send to without rebuilding the list every time.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Reminders that go out on time",
      desc: "Scheduled campaigns and message templates, so the reminder does not depend on somebody remembering.",
      icon: <CalendarDaysIcon />,
    },
    {
      title: "Move up when you are ready",
      desc: "Buy a Kitabu Yetu plan and your chart of accounts is set up then; group, members and message history carry over unchanged.",
      icon: <ArrowTrendingUpIcon />,
    },
  ],
};

const fundraise = {
  title: "Fundraise / Changi$ha — a drive the group can account for",
  desc: "A fundraiser with its own target and its own record, so what came in for the drive never has to be picked back out of the group's ordinary contributions.",
  image: benefitOneImg,
  bullets: [
    {
      title: "One target, one record",
      desc: "Every contribution to the drive is recorded against the campaign rather than mixed into the month's collections.",
      icon: <BanknotesIcon />,
    },
    {
      title: "Anyone can give",
      desc: "A well-wisher who is not a member can contribute, and the payment still lands where it belongs.",
      icon: <HandRaisedIcon />,
    },
    {
      title: "Receipts and a running total",
      desc: "Contributors get a confirmation, and the committee sees where the drive stands without adding up messages.",
      icon: <DocumentTextIcon />,
    },
  ],
};

const enterprise = {
  title: "Enterprise — one connected view across the groups you support",
  desc: "For NGOs, networks and organizations running many groups at once: linked groups under a single account, with pricing agreed across the portfolio.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Linked groups in one portal",
      desc: "Every group you support in a single view, with staff accounts and reports that read off the same ledgers.",
      icon: <BuildingOffice2Icon />,
    },
    {
      title: "Collect into your own PayBill",
      desc: "Enterprise groups collect into their own PayBill rather than through the Kitabu Yetu one.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "API access",
      desc: "Connect the portal to the systems your organization already runs.",
      icon: <CodeBracketIcon />,
    },
    {
      title: "White-label branding",
      desc: "Your logo and your primary colour on the surface your groups use every day.",
      icon: <PaintBrushIcon />,
    },
  ],
};
