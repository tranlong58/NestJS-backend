import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteResponseDto {
  @ApiProperty({ example: 'create note' })
  message: string;

  @ApiProperty({
    example: {
      id: 2,
      title: 'The first',
      description: 'Hello world',
      url: 'google.com',
      createdAt: '2024-03-07T04:02:12.401Z',
      updatedAt: '2024-03-07T04:12:36.195Z',
      userId: 2,
    },
  })
  data: {
    id: number;
    title: string;
    description: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    userId: number;
  };
}

export class GetAllNoteResponseDto {
  @ApiProperty({ example: 'get all note' })
  message: string;

  @ApiProperty({
    example: [
      {
        id: 1,
        title: 'My first note 7/3',
        description: "Hello i'm Long",
        url: 'youtube.com',
        createdAt: '2024-03-07T03:58:03.258Z',
        updatedAt: '2024-03-07T03:58:03.258Z',
        userId: 14,
      },
      {
        id: 2,
        title: 'The first',
        description: 'Hello world',
        url: 'google.com',
        createdAt: '2024-03-07T04:02:12.401Z',
        updatedAt: '2024-03-07T04:12:36.195Z',
        userId: 13,
      },
    ],
  })
  data: {
    id: number;
    title: string;
    description: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    userId: number;
  }[];
}

export class GetNoteByIdResponseDto {
  @ApiProperty({ example: 'get note by id' })
  message: string;

  @ApiProperty({
    example: {
      id: 1,
      title: 'My first note 7/3',
      description: "Hello i'm Long",
      url: 'youtube.com',
      createdAt: '2024-03-07T03:58:03.258Z',
      updatedAt: '2024-03-07T03:58:03.258Z',
      userId: 14,
    },
  })
  data: {
    id: number;
    title: string;
    description: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    userId: number;
  };
}

export class UpdateNoteByIdResponseDto {
  @ApiProperty({ example: 'update note by id' })
  message: string;

  @ApiProperty({
    example: {
      id: 1,
      title: 'My first note 7/3',
      description: "Hello i'm Long",
      url: 'youtube.com',
      createdAt: '2024-03-07T03:58:03.258Z',
      updatedAt: '2024-03-07T03:58:03.258Z',
      userId: 14,
    },
  })
  data: {
    id: number;
    title: string;
    description: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    userId: number;
  };
}

export class DeleteNoteByIdResponseDto {
  @ApiProperty({ example: 'delete note by id' })
  message: string;

  @ApiProperty({
    example: {
      id: 1,
      title: 'My first note 7/3',
      description: "Hello i'm Long",
      url: 'youtube.com',
      createdAt: '2024-03-07T03:58:03.258Z',
      updatedAt: '2024-03-07T03:58:03.258Z',
      userId: 14,
    },
  })
  data: {
    id: number;
    title: string;
    description: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    userId: number;
  };
}
