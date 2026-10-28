export const contactTestData = {
  validDetails: {
    street1: 'Tahrir Street',
    street2: 'App 5',
    city: 'Cairo',
    stateProvince: 'Cairo',
    zipPostalCode: '12345',
    country: 'Egypt',
    homePhone: '02234567',
    mobile: '01012345678',
    workPhone: '02234568',
    workEmail: 'test@work.com',
    otherEmail: 'test@other.com'
  },

  invalidData: {
    homePhone: 's',
    mobile: 'w',
    workPhone: 'd',
    workEmail: 'd',
    otherEmail: 'd',
    street1: 'InvalidInvalidInvalidInvalidInvalidInvalidInvalidInvalidInvalidInvalidI',
    street2: 'InvalidInvalidInvalidInvalidInvalidInvalidInvalidInvalidInvalidInvalidI',
    city: 'InvalidInvalidInvalidInvalidInvalidInvalidInvalidInvalidInvalidInvalidI',
    stateProvince: 'InvalidInvalidInvalidInvalidInvalidInvalidInvalidInvalidInvalidInvalidI',
    zipPostalCode: 'Test postall',
    country: 'InvalidInvalidInvalidInvalidInvalidInvalidInvalidInvalidInvalidInvalidI'

  } 
};