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
        pageSlug: "/demo_videos",
        pageIcon: "FaHome",
        pageTitle: "Demo Videos",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        pageId: 1,
        pageSlug: "/giro_status",
        pageIcon: "FaCalculator",
        pageTitle: "GIRO Application Status",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        pageId: 2,
        pageSlug: "/transaction_history",
        pageIcon: "FaHome",
        pageTitle: "Transaction History Statement",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        pageId: 3,
        pageSlug: "/contribution_history",
        pageIcon: "FaHome",
        pageTitle: "Contribution History Statement",
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
        pageSlug: "/contact_information",
        pageIcon: "FaHome",
        pageTitle: "Contact Information",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        pageId: 5,
        pageSlug: "/topup_retirement",
        pageIcon: "FaHome",
        pageTitle: "Top up my Retirement Account",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        pageId: 6,
        pageSlug: "/repay_education",
        pageIcon: "FaHome",
        pageTitle: "Repayment of Education Loan",
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
        pageSlug: "/appointment",
        pageIcon: "FaHome",
        pageTitle: "CPF Appointment Service",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        pageId: 8,
        pageSlug: "/medical_appointment",
        pageIcon: "FaHome",
        pageTitle: "CPF e-Medical Appointment Service",
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
 * @returns {Page} page data of given pageID
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
 * @returns {Page[]} page data of given pageID
 */
const getAllPageInfor = () => {
  const allPages = [];

  for (let { categoryPages } of dictionary) {
    for (let page of categoryPages) {
      allPages.push(page);
    }
  }

  return allPages;
};

export default dictionary;

export {
  getPageIdFromSlug,
  getCategoryLabelFromId,
  getPageInforFromPageId,
  getAllPageInfor,
};
