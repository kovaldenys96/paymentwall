import { CardInfo } from './card-info.model';

export interface PaymentInfo {
  countryCode: string;
  paymentSystem: string;
  cardInfo: CardInfo;
}
