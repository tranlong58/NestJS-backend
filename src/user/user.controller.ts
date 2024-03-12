import {
  Controller,
  Get,
  Patch,
  Delete,
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
} from '@nestjs/swagger';
import { UserService } from './user.service';
import {
  DeleteUserByIdResponseDto,
  GetAllUserResponseDto,
  GetProfileResponseDto,
  GetUserByIdResponseDto,
  UpdateUserByIdResponseDto,
  UpdateUserDto,
} from './dto';

@Controller('user')
@ApiTags('User')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({
    status: 200,
    description: 'Return user profile',
    type: GetProfileResponseDto,
  })
  profile(@Req() request: Request) {
    return {
      message: 'get user profile',
      data: request.user,
    };
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'Return all users',
    type: GetAllUserResponseDto,
  })
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return user by ID',
    type: GetUserByIdResponseDto,
  })
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return updated user',
    type: UpdateUserByIdResponseDto,
  })
  @ApiBody({ type: UpdateUserDto })
  updateUserById(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.updateUserById(+id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return deleted user',
    type: DeleteUserByIdResponseDto,
  })
  deleteUserById(@Param('id') id: string, @Req() request: Request) {
    return this.userService.deleteUserById(+id, request.user['id']);
  }
}
