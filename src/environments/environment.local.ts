import { Environment } from '../app/core/models/environment.model';

const PAYMENTWALL_API_URL = 'http://localhost:4200/assets/json';
/** VirtualBox Safari env */
// const PAYMENTWALL_API_URL = 'http://10.0.2.2:4200/assets/json';

export const environment: Environment = {
  name: 'local',
  production: false,
  traceRoutes: false,
  paymentwallApiUrl: PAYMENTWALL_API_URL,
  paymentwallApiKey: 'paymentwallApiKey',
  apiConfig: {
    paymentwall: {
      getPaymentSystems: {
        method: 'GET',
        uri: `${PAYMENTWALL_API_URL}/paymentwall/paymentSystems.json`,
      },
    },
  },
};
