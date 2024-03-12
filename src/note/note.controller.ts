import {
  Controller,
  Get,
  Patch,
  Delete,
  Post,
  UseGuards,
  Req,
  Param,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { NoteService } from './note.service';
import {
  CreateNoteDto,
  CreateNoteResponseDto,
  DeleteNoteByIdResponseDto,
  GetAllNoteResponseDto,
  GetNoteByIdResponseDto,
  UpdateNoteByIdResponseDto,
  UpdateNoteDto,
} from './dto';

@Controller('note')
@ApiTags('Note')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new note' })
  @ApiResponse({
    status: 201,
    description: 'Return created note',
    type: CreateNoteResponseDto,
  })
  @ApiBody({ type: CreateNoteDto })
  createNote(@Req() request: Request, @Body() body: CreateNoteDto) {
    return this.noteService.createNote(body, request.user['id']);
  }

  @Get()
  @ApiOperation({ summary: 'Get all notes' })
  @ApiResponse({
    status: 200,
    description: 'Return all notes',
    type: GetAllNoteResponseDto,
  })
  getAllNote() {
    return this.noteService.getAllNote();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get note by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return note by ID',
    type: GetNoteByIdResponseDto,
  })
  @ApiParam({ name: 'id', type: 'number' })
  getNoteById(@Param('id') id: string) {
    return this.noteService.getNoteById(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update note by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return updated note',
    type: UpdateNoteByIdResponseDto,
  })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiBody({ type: UpdateNoteDto })
  updateNoteById(
    @Param('id') id: string,
    @Req() request: Request,
    @Body() body: UpdateNoteDto,
  ) {
    return this.noteService.updateNoteById(+id, body, request.user['id']);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete note by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return deleted note',
    type: DeleteNoteByIdResponseDto,
  })
  @ApiParam({ name: 'id', type: 'number' })
  deleteNoteById(@Param('id') id: string, @Req() request: Request) {
    return this.noteService.deleteNoteById(+id, request.user['id']);
  }
}
