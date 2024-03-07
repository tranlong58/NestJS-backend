import {
  Controller,
  Get,
  Patch,
  Delete,
  UseGuards,
  Req,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  profile(@Req() request: Request) {
    return request.user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAllUser() {
    return this.userService.getAllUser();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  updateUserById(@Param('id') id: string, @Req() request: Request) {
    return this.userService.updateUserById(+id, request.body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  deleteUserById(@Param('id') id: string, @Req() request: Request) {
    return this.userService.deleteUserById(+id, request.user['id']);
  }
}
