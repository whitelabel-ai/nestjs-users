import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateOrganizationDto {
  @ApiProperty()
  @MinLength(1, {
    message: 'el nombre de la organizacion debe de ser de al menos 1 caracter',
  })
  @IsString()
  name!: string;
}
