import { cookieService } from 'core/cookie';

const getDefaultNumber = dealer => dealer.phoneNumberDto.number;

const findByNumber = (dealers, phoneNumber) => dealers?.find(dealer => dealer.phoneNumberDto.number === phoneNumber);

const mapForSearch = dealers =>
  dealers.map(({ dealerId, dealerName, dealerPhoneNumbers, distanceInMiles, online }) => ({
    dealerId,
    dealerName,
    phoneNumberDto: dealerPhoneNumbers[0],
    distanceInMiles: Math.round(distanceInMiles * 100) / 100,
    rating: Math.random() * (5 - 1) + 1,
    customerInfoDto: {
      visitorId: cookieService.get('visitorId'),
      chatterSessionId: `${cookieService.get('visitorId')}_${performance.now()}`,
    },
  }));

export default {
  getDefaultNumber,
  findByNumber,
  mapForSearch,
};
