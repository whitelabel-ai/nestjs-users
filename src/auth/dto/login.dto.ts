import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ required: true, default: 'john.doe@mail.com' })
  email: string;

  @ApiProperty({ required: true, default: 'qwerty' })
  password: string;
}
