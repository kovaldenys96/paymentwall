import { Environment } from '../app/core/models/environment.model';

const PAYMENTWALL_API_URL = 'https://api.paymentwall.com/api';

export const environment: Environment = {
  name: 'prod',
  production: true,
  traceRoutes: false,
  paymentwallApiUrl: PAYMENTWALL_API_URL,
  /** Not secure, used just for test */
  paymentwallApiKey: 'd93d5a56e8f7cd92528bc12d165419c9',
  apiConfig: {
    paymentwall: {
      getPaymentSystems: {
        method: 'GET',
        uri: `${PAYMENTWALL_API_URL}/payment-systems`,
      },
    },
  },
};
