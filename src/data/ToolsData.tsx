import {
  TrendingUp,
  Landmark,
  Mail,
  Home,
  Wallet,
  Baby,
  Receipt,
  Briefcase,
  Building2,
} from "lucide-react";

export const toolsData = [
  {
    slug: "sip-calculator",
    icon: <TrendingUp size={22} strokeWidth={2.2} />,
    title: "SIP Calculator",
    description:
      "Estimate long-term SIP wealth growth.",
    formula:
      "M = P × [((1 + r)^n - 1) / r] × (1 + r)",
    formulaLabel:
      "Future Value Formula",
    category: "Investment",
    featured: true,
    inputs: [
      {
        key: "monthlyInvestment",
        label: "Monthly SIP",
        value: 5000,
        min: 500,
        max: 100000,
        step: 500,
        prefix: "₹",
      },
      {
        key: "annualReturn",
        label: "Expected Return",
        value: 12,
        min: 1,
        max: 30,
        step: 1,
        suffix: "%",
      },
      {
        key: "years",
        label: "Time Period",
        value: 10,
        min: 1,
        max: 40,
        step: 1,
        suffix: " Years",
      },
    ],
  },

  {
    slug: "fd-calculator",
    icon: <Landmark size={22} strokeWidth={2.2} />,
    title: "Fixed Deposit",
    description:
      "Calculate FD maturity returns.",
    formula:
      "A = P(1 + r/n)^(nt)",
    formulaLabel:
      "Compound Interest Formula",
    category: "Investment",
    inputs: [
      {
        key: "deposit",
        label: "Deposit Amount",
        value: 600000,
        min: 10000,
        max: 5000000,
        step: 10000,
        prefix: "₹",
      },
      {
        key: "interest",
        label: "Interest Rate",
        value: 7.4,
        min: 1,
        max: 15,
        step: 0.1,
        suffix: "%",
      },
      {
        key: "years",
        label: "Duration",
        value: 10,
        min: 1,
        max: 30,
        step: 1,
        suffix: " Years",
      },
    ],
  },

  {
    slug: "ppf-calculator",
    icon: <Mail size={22} strokeWidth={2.2} />,
    title: "PPF",
    description:
      "Estimate tax-free PPF maturity amount.",
    formula:
      "A = P[(1+r)^n - 1] / r",
    formulaLabel:
      "PPF Growth Formula",
    category: "Tax Saving",
    inputs: [
      {
        key: "yearlyDeposit",
        label: "Yearly Deposit",
        value: 150000,
        min: 500,
        max: 150000,
        step: 500,
        prefix: "₹",
      },
      {
        key: "interest",
        label: "Interest Rate",
        value: 7.1,
        min: 1,
        max: 15,
        step: 0.1,
        suffix: "%",
      },
      {
        key: "years",
        label: "Duration",
        value: 15,
        min: 1,
        max: 25,
        step: 1,
        suffix: " Years",
      },
    ],
  },

  {
    slug: "emi-calculator",
    icon: <Home size={22} strokeWidth={2.2} />,
    title: "Loan EMI",
    description:
      "Calculate monthly loan EMI instantly.",
    formula:
      "EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]",
    formulaLabel:
      "Loan EMI Formula",
    category: "Loans",
    featured: true,
    inputs: [
      {
        key: "loanAmount",
        label: "Loan Amount",
        value: 2500000,
        min: 100000,
        max: 50000000,
        step: 50000,
        prefix: "₹",
      },
      {
        key: "interest",
        label: "Interest Rate",
        value: 8.5,
        min: 1,
        max: 20,
        step: 0.1,
        suffix: "%",
      },
      {
        key: "years",
        label: "Tenure",
        value: 20,
        min: 1,
        max: 35,
        step: 1,
        suffix: " Years",
      },
    ],
  },

  {
    slug: "net-worth-calculator",
    icon: <Wallet size={22} strokeWidth={2.2} />,
    title: "Net Worth",
    description:
      "Calculate total assets minus liabilities.",
    formula:
      "Net Worth = Assets - Liabilities",
    formulaLabel:
      "Net Worth Formula",
    category: "Planning",
    featured: true,
    inputs: [
      {
        key: "assets",
        label: "Total Assets",
        value: 24000000,
        min: 100000,
        max: 100000000,
        step: 100000,
        prefix: "₹",
      },
      {
        key: "liabilities",
        label: "Liabilities",
        value: 5800000,
        min: 0,
        max: 100000000,
        step: 100000,
        prefix: "₹",
      },
    ],
  },

  {
    slug: "sukanya-yojana",
    icon: <Baby size={22} strokeWidth={2.2} />,
    title: "Sukanya Samriddhi",
    description:
      "Estimate SSY maturity returns.",
    formula:
      "A = P[(1+r)^n - 1]/r",
    formulaLabel:
      "SSY Formula",
    category: "Government Scheme",
    inputs: [
      {
        key: "yearlyDeposit",
        label: "Yearly Deposit",
        value: 150000,
        min: 1000,
        max: 150000,
        step: 1000,
        prefix: "₹",
      },
      {
        key: "interest",
        label: "Interest Rate",
        value: 8.2,
        min: 1,
        max: 15,
        step: 0.1,
        suffix: "%",
      },
      {
        key: "years",
        label: "Duration",
        value: 21,
        min: 1,
        max: 21,
        step: 1,
        suffix: " Years",
      },
    ],
  },

  {
    slug: "gst-calculator",
    icon: <Receipt size={22} strokeWidth={2.2} />,
    title: "GST",
    description:
      "Calculate GST inclusive and exclusive amounts.",
    formula:
      "GST = (Original Cost × GST%) / 100",
    formulaLabel:
      "GST Formula",
    category: "Tax",
    inputs: [
      {
        key: "amount",
        label: "Base Amount",
        value: 10000,
        min: 100,
        max: 1000000,
        step: 100,
        prefix: "₹",
      },
      {
        key: "gst",
        label: "GST Rate",
        value: 18,
        min: 1,
        max: 28,
        step: 1,
        suffix: "%",
      },
    ],
  },

  {
    slug: "gratuity-calculator",
    icon: <Briefcase size={22} strokeWidth={2.2} />,
    title: "Gratuity",
    description:
      "Estimate gratuity amount based on salary.",
    formula:
      "Gratuity = (15 × Salary × Years) / 26",
    formulaLabel:
      "Gratuity Formula",
    category: "Retirement",
    inputs: [
      {
        key: "salary",
        label: "Last Salary",
        value: 100000,
        min: 10000,
        max: 1000000,
        step: 10000,
        prefix: "₹",
      },
      {
        key: "years",
        label: "Years Worked",
        value: 15,
        min: 1,
        max: 40,
        step: 1,
        suffix: " Years",
      },
    ],
  },

  {
    slug: "rent-receipt",
    icon: <Building2 size={22} strokeWidth={2.2} />,
    title: "Rent Receipt",
    description:
      "Generate HRA-compliant rent receipts instantly.",
    formula:
      "HRA = Min(HRA, Rent - 10% Salary, 50% Salary)",
    formulaLabel:
      "HRA Formula",
    category: "Tax",
    inputs: [
      {
        key: "rent",
        label: "Monthly Rent",
        value: 25000,
        min: 1000,
        max: 200000,
        step: 1000,
        prefix: "₹",
      },
      {
        key: "salary",
        label: "Annual Salary",
        value: 1280000,
        min: 100000,
        max: 10000000,
        step: 50000,
        prefix: "₹",
      },
    ],
  },
];