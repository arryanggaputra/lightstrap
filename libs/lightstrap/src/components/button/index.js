let variants = ['primary', 'secondary', 'success', 'danger', 'info', 'warning'];

let buttonVariants = variants.reduce((allVariant, variant) => {
  let textColor = 'text-black';
  if (!['warning', 'info'].includes(variant)) {
    textColor = 'text-white';
  }

  allVariant[`.btn-${variant}`] = {
    [`@apply ${textColor} bg-${variant} hover:bg-${variant}-dark focus:ring-opacity-40 focus:ring-${variant} border-${variant}`]:
      {},
    [`&.active`]: {
      [`@apply bg-${variant}-dark`]: {},
    },
  };

  allVariant[`.btn-outline-${variant}`] = {
    [`@apply hover:bg-${variant} hover:${textColor} text-${variant} focus:ring-${variant} focus:ring-opacity-40  border-${variant}`]:
      {},
  };

  return allVariant;
}, {});

const buttons = {
  '.btn': {
    '@apply text-black px-3 py-2 focus:ring-4 rounded-md border inline-block':
      {},
    [`&.disabled, &:disabled`]: {
      [`@apply pointer-events-none bg-opacity-25 border-opacity-5 text-opacity-75`]:
        {},
    },
  },
  '.btn-dark': {
    '@apply text-white bg-black focus:ring-opacity-40 focus:ring-black border-black':
      {},
  },
  '.btn-link': {
    '@apply text-primary underline bg-transparent focus:ring-opacity-40 focus:ring-primary border-transparent':
      {},
  },

  /**
   * button outline
   */
  '.btn-outline-light': {
    '@apply hover:bg-gray-100 hover:text-black text-gray-100 focus:ring-gray-200 focus:ring-opacity-40 border-gray-100':
      {},
  },
  '.btn-outline-dark': {
    '@apply hover:bg-black hover:text-white text-black focus:ring-black focus:ring-opacity-40 border-black':
      {},
  },

  '.btn-lg': {
    '@apply text-xl px-4 py-2': {},
  },

  '.btn-sm': {
    '@apply text-xs py-[0.25rem] px-[0.5rem] rounded-[0.2rem]': {},
  },

  ...buttonVariants,
};

module.exports = buttons;
