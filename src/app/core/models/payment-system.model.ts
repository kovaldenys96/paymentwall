export class PaymentSystem {
  id: string;
  name: string;
  imgUrl: string;
  psTypeId: number;

  static dtoToModel(dto: any): PaymentSystem {
    return {
      id: dto.id,
      name: dto.name,
      imgUrl: dto.img_url,
      psTypeId: dto.ps_type_id,
    };
  }
}
