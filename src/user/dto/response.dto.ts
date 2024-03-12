import { ApiProperty } from '@nestjs/swagger';

export class GetProfileResponseDto {
  @ApiProperty({ example: 'get user profile' })
  message: string;

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

export class GetAllUserResponseDto {
  @ApiProperty({ example: 'get all user' })
  message: string;

  @ApiProperty({
    example: [
      {
        id: 1,
        email: 'longtt194102@gmail.com',
        firstName: 'Long',
        lastName: 'Tran',
        createdAt: '2024-03-08T07:15:15.429Z',
        updatedAt: '2024-03-08T07:15:15.429Z',
        notes: [
          {
            id: 2,
            title: 'New title',
            description: 'hello',
            url: 'fb.com',
            createdAt: '2024-03-08T07:15:15.429Z',
            updatedAt: '2024-03-08T07:15:15.429Z',
            userId: 2,
          },
        ],
      },
    ],
  })
  data: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
    notes: {
      id: number;
      title: string;
      description: string;
      url: string;
      createdAt: string;
      updatedAt: string;
      userId: number;
    }[];
  }[];
}

export class GetUserByIdResponseDto {
  @ApiProperty({ example: 'get user by id' })
  message: string;

  @ApiProperty({
    example: {
      id: 2,
      email: 'chuvanviettung@gmail.com',
      firstName: 'Tung',
      lastName: 'Chu',
      createdAt: '2024-03-08T07:15:15.429Z',
      updatedAt: '2024-03-08T07:15:15.429Z',
      notes: [
        {
          id: 3,
          title: 'New title',
          description: 'hello',
          url: 'fb.com',
          createdAt: '2024-03-08T07:15:15.429Z',
          updatedAt: '2024-03-08T07:15:15.429Z',
          userId: 2,
        },
      ],
    },
  })
  data: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
    notes: {
      id: number;
      title: string;
      description: string;
      url: string;
      createdAt: string;
      updatedAt: string;
      userId: number;
    }[];
  };
}

export class UpdateUserByIdResponseDto {
  @ApiProperty({ example: 'update user by id' })
  message: string;

  @ApiProperty({
    example: {
      id: 21,
      email: 'gfgmtft@gmail.com',
      firstName: 'Hieu',
      lastName: 'Le',
      createdAt: '2024-03-08T03:28:29.944Z',
      updatedAt: '2024-03-08T07:29:18.619Z',
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

export class DeleteUserByIdResponseDto {
  @ApiProperty({ example: 'delete user by id' })
  message: string;

  @ApiProperty({
    example: {
      id: 27,
      email: 'blobla@gmail.com',
      firstName: 'Mike',
      lastName: 'John',
      createdAt: '2024-03-08T06:27:34.754Z',
      updatedAt: '2024-03-08T06:35:15.777Z',
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
