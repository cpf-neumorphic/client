/**
 * Page definition
 * @typedef {Object} Page
 * @property {number} pageId - Page ID
 * @property {string} pageIcon - Card icon
 * @property {string} pageSlug - Page slug
 * @property {string} pageTitle - Page title
 * @property {string} pageDescription - Page description
 */

/**
 * CategoryGroup definition
 * @typedef {Object} CategoryGroup
 * @property {number} categoryId - Category ID
 * @property {string} categoryLabel - Category label
 * @property {Array.<Page>} categoryPages - Pages belonging to the category
 */

/** @type {Array.<CategoryGroup>} */
const dictionary = [
  {
    categoryId: 0,
    categoryLabel: "View",
    categoryPages: [
      {
        pageId: 0,
        pageSlug: "/ordinary_account",
        pageIcon: "FaHome",
        pageTitle: "Ordinary Account (OA)",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        pageId: 1,
        pageSlug: "/special_account",
        pageIcon: "FaCalculator",
        pageTitle: "Special Account (SA)",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        pageId: 2,
        pageSlug: "/medisave_account",
        pageIcon: "FaHome",
        pageTitle: "Medisave Account (MA)",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        pageId: 3,
        pageSlug: "/giro_replayment",
        pageIcon: "FaHome",
        pageTitle: "Apply/change GIRO for Repayment of Education Loan",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
    ],
  },
  {
    categoryId: 1,
    categoryLabel: "Manage",
    categoryPages: [
      {
        pageId: 4,
        pageSlug: "/defer_repayment",
        pageIcon: "FaHome",
        pageTitle: "Defer repayment",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        pageId: 5,
        pageSlug: "/monthly_instalment",
        pageIcon: "FaHome",
        pageTitle: "Change monthly instalment",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        pageId: 6,
        pageSlug: "/cpfis_saq",
        pageIcon: "FaHome",
        pageTitle: "CPFIS Self-Awareness Questionnaire (SAQ) Status",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
    ],
  },
  {
    categoryId: 2,
    categoryLabel: "Appointments",
    categoryPages: [
      {
        pageId: 7,
        pageSlug: "/withdraw",
        pageIcon: "FaHome",
        pageTitle: "Apply to Withdraw",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        pageId: 8,
        pageSlug: "/transfer",
        pageIcon: "FaHome",
        pageTitle: "Apply to Transfer",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
    ],
  },
];

/**
 * Find the corresponding pageId from pageSlug. Will return -1 if not found.
 * @param {string} pageSlug
 * @returns {number} pageId of given pageSlug
 */
const getPageIdFromSlug = (pageSlug) => {
  for (let { categoryPages } of dictionary) {
    for (let page of categoryPages) {
      if (page.pageSlug === pageSlug) return page.pageId;
    }
  }

  return -1; // Not found
};

/**
 * Find the corresponding categoryLabel from categoryId. Will return -1 if not found.
 * @param {number} categoryId
 * @returns {(string|number)} categoryLabel of given categoryId
 */
const getCategoryLabelFromId = (categoryId) => {
  const categoryGroup = dictionary.find((grp) => grp.categoryId === categoryId);

  if (categoryGroup) return categoryGroup.categoryLabel;
  return -1; // Not found
};

/**
 * Find the corresponding pageInfor from pageID. Will return -1 if not found.
 * @param {string} pageId
 * @returns {object} page data of given pageID
 */
const getPageInforFromPageId = (pageId) => {
  for (let { categoryPages } of dictionary) {
    for (let page of categoryPages) {
      if (page.pageId === pageId) return page;
    }
  }

  return -1; // Not found
};

/**
 * Get all page information available. Will return -1 if not found.
 * @returns {object} page data of given pageID
 */
const getAllPageInfor = () => {
  let pageInfor = {};
  for (let { categoryPages } of dictionary) {
    for (let page of categoryPages) {
      pageInfor[page.pageId] = page;
    }
  }
  if (pageInfor) return pageInfor;
  else return -1; // Not found
};

export default dictionary;
export {
  getPageIdFromSlug,
  getCategoryLabelFromId,
  getPageInforFromPageId,
  getAllPageInfor,
};
