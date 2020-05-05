const getDefaultNumber = dealer => dealer.phoneNumberDto.number;

const findByNumber = (dealers, phoneNumber) => dealers?.find(dealer => dealer.phoneNumberDto.number === phoneNumber);

export default {
  getDefaultNumber,
  findByNumber,
};
