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
 * @property {string} categoryIcon - CategoryIcon
 * @property {string} categorySlug - Category slug
 * @property {string} categoryTitle - Category label
 * @property {string} categoryDescription - Category description
 * @property {Array.<Page>} categoryPages - Pages belonging to the category
 */

/** @type {Array.<CategoryGroup>} */
const dictionary = [
  {
    categoryId: 0,
    categoryIcon: "FaEye",
    categoryTitle: "View",
    categorySlug: "/view",
    categoryDescription: "Your statements",
    categoryPages: [
      {
        pageId: 0,
        pageSlug: "/demo_videos",
        pageIcon: "FaFileVideo",
        pageTitle: "Demo Videos",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        pageId: 1,
        pageSlug: "/giro_status",
        pageIcon: "FaMoneyCheckAlt",
        pageTitle: "GIRO Application Status",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        pageId: 2,
        pageSlug: "/transaction_history",
        pageIcon: "FaListAlt",
        pageTitle: "Transaction History Statement",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        pageId: 3,
        pageSlug: "/contribution_history",
        pageIcon: "FaListAlt",
        pageTitle: "Contribution History Statement",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
    ],
  },
  {
    categoryId: 1,
    categoryIcon: "FaAddressCard",
    categoryTitle: "Manage",
    categorySlug: "/manage",
    categoryDescription: "Your accounts",
    categoryPages: [
      {
        pageId: 4,
        pageSlug: "/contact_information",
        pageIcon: "FaPhoneSquareAlt",
        pageTitle: "Contact Information",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        pageId: 5,
        pageSlug: "/topup_retirement",
        pageIcon: "FaBlind",
        pageTitle: "Top up my Retirement Account",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        pageId: 6,
        pageSlug: "/repay_education",
        pageIcon: "FaGraduationCap",
        pageTitle: "Repayment of Education Loan",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
    ],
  },
  {
    categoryId: 2,
    categoryIcon: "FaCalendarCheck",
    categoryTitle: "Appointments",
    categorySlug: "/appointments",
    categoryDescription: "Create & modify",
    categoryPages: [
      {
        pageId: 7,
        pageSlug: "/appointment",
        pageIcon: "FaCalendarAlt",
        pageTitle: "CPF Appointment Service",
        pageDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus.",
      },
      {
        pageId: 8,
        pageSlug: "/medical_appointment",
        pageIcon: "FaNotesMedical",
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

  if (categoryGroup) return categoryGroup.categoryTitle;
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
 * Get all page information available.
 * @returns {Page[]} page data of given pageID
 */
const getAllPageInfor = () => {
  /** @type {Page[]} */
  const allPages = [];

  for (let { categoryPages } of dictionary) {
    for (let page of categoryPages) {
      allPages.push(page);
    }
  }

  return allPages;
};

/**
 * Get all category information available.
 * @returns {CategoryGroup[]} page data of given pageID
 */
const getAllCategoryInfor = () => {
  /** @type {CategoryGroup[]} */
  const allCategories = [];

  for (let category of dictionary) {
    allCategories.push(category);
  }

  return allCategories;
};

export default dictionary;

export {
  getPageIdFromSlug,
  getCategoryLabelFromId,
  getPageInforFromPageId,
  getAllPageInfor,
  getAllCategoryInfor,
};
