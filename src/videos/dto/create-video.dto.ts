export class CreateVideoDto {
  link: string;
  title: string;
  thumbnail: string;
  summary: string;
  type: 'Tutorial' | 'Documentary' | 'Lecture' | 'Conference Talk';
  isValid: boolean;
}
