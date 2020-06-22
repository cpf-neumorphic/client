/**
 * Page definition
 * @typedef {Object} Page
 * @property {number} id - Page ID
 * @property {string} icon - Card icon
 * @property {string} slug - Page slug
 * @property {string} title - Page title
 * @property {string} description - Page description
 */

/**
 * CategoryGroup definition
 * @typedef {Object} CategoryGroup
 * @property {number} id - Category ID
 * @property {string} category - Category label
 * @property {Array.<Page>} pages - Pages belonging to the category
 */

/** @type {Array.<CategoryGroup>} */
const dictionary = [
  {
    id: 0,
    category: "View",
    pages: [
      {
        id: 0,
        slug: "/ordinary_account",
        icon: "FaHome",
        title: "Ordinary Account (OA)",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        id: 1,
        slug: "/special_account",
        icon: "FaCalculator",
        title: "Special Account (SA)",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        id: 2,
        slug: "/medisave_account",
        icon: "FaHome",
        title: "Medisave Account (MA)",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        id: 3,
        slug: "/giro_replayment",
        icon: "FaHome",
        title: "Apply/change GIRO for Repayment of Education Loan",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
    ],
  },
  {
    id: 1,
    category: "Manage",
    pages: [
      {
        id: 4,
        slug: "/defer_repayment",
        icon: "FaHome",
        title: "Defer repayment",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        id: 5,
        slug: "/monthly_instalment",
        icon: "FaHome",
        title: "Change monthly instalment",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        id: 6,
        slug: "/cpfis_saq",
        icon: "FaHome",
        title: "CPFIS Self-Awareness Questionnaire (SAQ) Status",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
    ],
  },
  {
    id: 3,
    category: "Appointments",
    pages: [
      {
        id: 7,
        slug: "/withdraw",
        icon: "FaHome",
        title: "Apply to Withdraw",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        id: 8,
        slug: "/transfer",
        icon: "FaHome",
        title: "Apply to Transfer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
    ],
  },
];

export default dictionary;
