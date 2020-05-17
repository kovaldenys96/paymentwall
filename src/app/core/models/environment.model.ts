import { RequestOptions } from './request-options.model';

export interface Environment {
  name: string;
  production: boolean;
  traceRoutes: boolean;
  paymentwallApiUrl: string;
  paymentwallApiKey: string;
  apiConfig: EnvironmentApiConfig;
}

export interface EnvironmentApiConfig {
  paymentwall: {
    getPaymentSystems: RequestOptions,
  };
}
