import { SOCKET_PATH, SOCKET_HOST } from 'core/constants/api.constant';

const getSocketUrl = ({ chatterSessionId, dealerPhoneNumber, visitorId }) =>
  `${SOCKET_HOST}${SOCKET_PATH.replace(':chatterSessionId', chatterSessionId)
    .replace(':dealerPhoneNumber', dealerPhoneNumber)
    .replace(':visitorId', visitorId)}`;

const dialogService = {
  getSocketUrl,
};

export { dialogService };
