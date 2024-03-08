import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNoteDto, UpdateNoteDto } from './dto';

@Injectable()
export class NoteService {
  constructor(private prismaService: PrismaService) {}

  async createNote(data: CreateNoteDto, currentUserId: number) {
    const note = await this.prismaService.note.create({
      data: {
        title: data.title,
        description: data.description,
        url: data.url,
        userId: currentUserId,
      },
    });

    return {
      message: 'create note',
      data: note,
    };
  }

  async getAllNote() {
    const notes = await this.prismaService.note.findMany();

    return {
      message: 'get all note',
      data: notes,
    };
  }

  async getNoteById(noteId: number) {
    const note = await this.prismaService.note.findUnique({
      where: {
        id: noteId,
      },
    });

    if (!note) {
      throw new BadRequestException('note not found');
    }

    return {
      message: 'get note by id',
      data: note,
    };
  }

  async updateNoteById(
    noteId: number,
    data: UpdateNoteDto,
    currentUserId: number,
  ) {
    const note = await this.prismaService.note.findUnique({
      where: {
        id: noteId,
      },
    });

    if (!note) {
      throw new BadRequestException('note not found');
    }

    if (note.userId !== currentUserId) {
      throw new BadRequestException('cannot update the note of other user');
    }

    const updatedNoteData: {
      title?: string;
      description?: string;
      url?: string;
    } = {};

    if (data.title) {
      updatedNoteData.title = data.title;
    }

    if (data.description) {
      updatedNoteData.description = data.description;
    }

    if (data.url) {
      updatedNoteData.url = data.url;
    }

    const updatedNote = await this.prismaService.note.update({
      where: {
        id: noteId,
      },
      data: {
        ...updatedNoteData,
      },
    });

    return {
      message: 'update note by id',
      data: updatedNote,
    };
  }

  async deleteNoteById(noteId: number, currentUserId: number) {
    const note = await this.prismaService.note.findUnique({
      where: {
        id: noteId,
      },
    });

    if (!note) {
      throw new BadRequestException('note not found');
    }

    if (note.userId !== currentUserId) {
      throw new BadRequestException('cannot delete the note of other user');
    }

    const deletedNote = await this.prismaService.note.delete({
      where: {
        id: noteId,
      },
    });

    return {
      message: 'delete note by id',
      data: deletedNote,
    };
  }
}
