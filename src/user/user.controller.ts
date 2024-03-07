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
    const userId = parseInt(id, 10);
    return this.userService.getUserById(userId);
  }
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  updateUserById(@Param('id') id: string, @Req() request: Request) {
    const userId = parseInt(id, 10);
    return this.userService.updateUserById(userId, request.body);
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  deleteUserById(@Param('id') id: string, @Req() request: Request) {
    const userId = parseInt(id, 10);
    return this.userService.deleteUserById(userId, request.user['id']);
  }
}
