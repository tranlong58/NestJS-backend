import {
  Controller,
  Get,
  Patch,
  Delete,
  Post,
  UseGuards,
  Req,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  createNote(@Req() request: Request) {
    return this.noteService.createNote(request.body, request.user['id']);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAllNote() {
    return this.noteService.getAllNote();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  getNoteById(@Param('id') id: string) {
    return this.noteService.getNoteById(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  updateNoteById(@Param('id') id: string, @Req() request: Request) {
    return this.noteService.updateNoteById(
      +id,
      request.body,
      request.user['id'],
    );
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  deleteNoteById(@Param('id') id: string, @Req() request: Request) {
    return this.noteService.deleteNoteById(+id, request.user['id']);
  }
}
