import type { Metadata } from "next";
import {
  HeartIcon,
  BuildingOffice2Icon,
  ShoppingBagIcon,
  ClipboardDocumentListIcon,
  ChartBarSquareIcon,
  UserGroupIcon,
  BanknotesIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Cta } from "@/components/Cta";

import benefitOneImg from "../../../public/img/benefit-one.png";
import benefitTwoImg from "../../../public/img/benefit-two.png";

export const metadata: Metadata = {
  title: "Ecosystem — Kitabu Yetu",
  description:
    "Donors, multigroup organizations, the marketplace and funded programs — the people and institutions that work with groups on Kitabu Yetu.",
};

export default function EcosystemPage() {
  return (
    <>
      <SectionTitle
        preTitle="Ecosystem"
        title="A group is rarely on its own"
        titleAs="h1"
      >
        Behind most groups sits a funder, a network or a programme that needs to
        know the money landed where it was meant to. They read the same ledger
        the group keeps, rather than a report assembled after the fact.
      </SectionTitle>

      <div id="donors">
        <Benefits data={donors} />
      </div>

      <div id="multigroup">
        <Benefits imgPos="right" data={multigroup} />
      </div>

      <div id="marketplace">
        <Benefits data={marketplace} />
      </div>

      <div id="programs">
        <Benefits imgPos="right" data={programs} />
      </div>

      <Cta />
    </>
  );
}

const donors = {
  title: "Donors",
  desc: "Money given to a group should be traceable to what it did there. Donors see the group's own records rather than a summary written for them.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Follow the money to the group",
      desc: "Disbursements are recorded against the group that received them, and against the members they reached.",
      icon: <HeartIcon />,
    },
    {
      title: "Reporting off the ledger",
      desc: "The figures in the report are the figures in the books, so nobody rebuilds them in a spreadsheet at the end of a quarter.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "The group keeps its own book",
      desc: "Funding is one part of a group's record, not a separate system the treasurer has to keep in step.",
      icon: <BanknotesIcon />,
    },
  ],
};

const multigroup = {
  title: "Multigroup Organizations",
  desc: "NGOs, networks, church bodies and apex organizations that support many groups at once, from one account.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Every group in one view",
      desc: "Linked groups under a single organization account, each keeping its own ledger and its own committee.",
      icon: <BuildingOffice2Icon />,
    },
    {
      title: "Staff, not shared logins",
      desc: "Your coordinators get their own accounts and their own access, rather than passing one password around.",
      icon: <UserGroupIcon />,
    },
    {
      title: "A portfolio you can report on",
      desc: "Reports across the groups you support, built from what each group actually recorded.",
      icon: <GlobeAltIcon />,
    },
  ],
};

const marketplace = {
  title: "Marketplace",
  desc: "Groups already buy things together — inputs, stock, services, insurance. The marketplace is where those offers meet the groups, and it is the part of the ecosystem still being built.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Offers that reach a group, not an individual",
      desc: "A committee decides together, so an offer has to be visible to the whole group rather than one member's phone.",
      icon: <ShoppingBagIcon />,
    },
    {
      title: "Paid for from the group's account",
      desc: "A purchase the group makes is a transaction in the group's book like any other.",
      icon: <BanknotesIcon />,
    },
    {
      title: "In progress",
      desc: "This is the newest part of the ecosystem. Talk to us if you want your offer in front of groups as it opens.",
      icon: <ClipboardDocumentListIcon />,
    },
  ],
};

const programs = {
  title: "Programs",
  desc: "A funded programme running across many groups: its own rules, its own disbursements, and reporting that does not depend on chasing every group for numbers.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "One programme, many groups",
      desc: "Run a programme across the groups enrolled in it, with each group's participation recorded in its own book.",
      icon: <ClipboardDocumentListIcon />,
    },
    {
      title: "Disbursements that leave a trail",
      desc: "What went out, to which group, and what it was for — recorded when it happens rather than reconstructed later.",
      icon: <BanknotesIcon />,
    },
    {
      title: "Reports the funder can check",
      desc: "Programme reporting built from the groups' ledgers, with the audit trail still attached.",
      icon: <ChartBarSquareIcon />,
    },
  ],
};
