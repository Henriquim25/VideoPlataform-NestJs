import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateVideoDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title: string;

  @IsString()
  @IsOptional()
  description: string | null;

  @IsNotEmpty()
  @MinLength(1)
  @IsInt()
  category_id: number;
}
