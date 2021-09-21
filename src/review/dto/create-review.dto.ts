import { prop } from '@typegoose/typegoose';

export class CreateReviewDto {
  title: string;
  name: string;
  description: string;
  rating: number;
  productId: string;
}
