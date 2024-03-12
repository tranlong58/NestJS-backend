import { ApiProperty } from '@nestjs/swagger';

export class RegisterResponseDto {
  @ApiProperty({ example: 'register success' })
  message: string;

  @ApiProperty({
    example: {
      id: 22,
      email: 'longtt194102@gmail.com',
      firstName: 'Long',
      lastName: 'Tran',
      createdAt: '2024-03-08T07:15:15.429Z',
    },
  })
  data: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: string;
  };
}

export class LoginResponseDto {
  @ApiProperty({ example: 'login success' })
  message: string;

  @ApiProperty({ example: 'this token' })
  accessToken: string;

  @ApiProperty({
    example: {
      id: 2,
      email: 'longtt194102@gmail.com',
      firstName: 'Long',
      lastName: 'Tran',
      createdAt: '2024-03-08T07:15:15.429Z',
      updatedAt: '2024-03-08T07:15:15.429Z',
    },
  })
  data: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
  };
}
