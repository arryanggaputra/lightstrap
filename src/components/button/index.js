const buttons = {
  ".btn": {
    "@apply px-3 py-2 focus:ring-4 rounded-md border": {},
  },
  ".btn-primary": {
    "@apply text-white bg-primary focus:ring-opacity-40 focus:ring-primary border-primary":
      {},
  },
  ".btn-secondary": {
    "@apply text-white bg-secondary focus:ring-opacity-40 focus:ring-secondary border-secondary":
      {},
  },
  ".btn-success": {
    "@apply text-white bg-success focus:ring-opacity-40 focus:ring-success border-success":
      {},
  },
  ".btn-danger": {
    "@apply text-white bg-danger focus:ring-opacity-40 focus:ring-danger border-danger":
      {},
  },
  ".btn-info": {
    "@apply bg-info focus:ring-opacity-40 focus:ring-info border-info": {},
  },
  ".btn-warning": {
    "@apply bg-warning focus:ring-opacity-40 focus:ring-warning border-warning":
      {},
  },
  ".btn-light": {
    "@apply bg-gray-100 border-gray-100 focus:ring-opacity-40 focus:ring-gray-200":
      {},
  },
  ".btn-dark": {
    "@apply text-white bg-black focus:ring-opacity-40 focus:ring-black border-black":
      {},
  },
  ".btn-link": {
    "@apply text-primary underline bg-transparent focus:ring-opacity-40 focus:ring-primary border-transparent":
      {},
  },

  /**
   * button outline
   */
  ".btn-outline-primary": {
    "@apply hover:bg-primary hover:text-white text-primary focus:ring-primary focus:ring-opacity-40  border-primary":
      {},
  },
  ".btn-outline-secondary": {
    "@apply hover:bg-secondary hover:text-white text-secondary focus:ring-secondary focus:ring-opacity-40 border-secondary":
      {},
  },
  ".btn-outline-success": {
    "@apply hover:bg-success hover:text-white text-success focus:ring-success focus:ring-opacity-40 border-success":
      {},
  },
  ".btn-outline-danger": {
    "@apply hover:bg-danger hover:text-white text-danger focus:ring-danger focus:ring-opacity-40 border-danger":
      {},
  },
  ".btn-outline-info": {
    "@apply hover:bg-info hover:text-black text-info focus:ring-info focus:ring-opacity-40 border-info":
      {},
  },
  ".btn-outline-warning": {
    "@apply hover:bg-warning hover:text-black text-warning focus:ring-warning focus:ring-opacity-40 border-warning":
      {},
  },
  ".btn-outline-light": {
    "@apply hover:bg-gray-100 hover:text-black text-gray-100 focus:ring-gray-200 focus:ring-opacity-40 border-gray-100":
      {},
  },
  ".btn-outline-dark": {
    "@apply hover:bg-black hover:text-white text-black focus:ring-black focus:ring-opacity-40 border-black":
      {},
  },

  ".btn-lg": {
    "@apply text-xl px-4 py-2": {},
  },

  ".btn-sm": {
    "@apply text-xs py-[0.25rem] px-[0.5rem] rounded-[0.2rem]": {},
  },
};

module.exports = buttons;
