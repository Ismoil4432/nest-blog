import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'The full name of the User',
  })
  @IsNotEmpty()
  @IsString()
  full_name: string;

  @ApiProperty({
    example: 'john77',
    description: 'The username of the User',
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  // @ApiProperty({
  //   example: 'john77@gmail.com',
  //   description: 'The email of the User',
  // })
  // @IsNotEmpty()
  // @IsEmail()
  // email: string;

  @ApiProperty({
    example: 'Uzbek1&t0n',
    description: 'The password of the User',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
