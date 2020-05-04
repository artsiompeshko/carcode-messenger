const getDefaultNumber = dealer =>
  dealer.dealerPhoneNumbers.find(phone => phone.label === 'sales').number || dealer.dealerPhoneNumbers[0].number;

const findByNumber = (dealers, phoneNumber) =>
  dealers?.find(dealer => dealer.dealerPhoneNumbers.some(({ number }) => number === phoneNumber));

export default {
  getDefaultNumber,
  findByNumber,
};
