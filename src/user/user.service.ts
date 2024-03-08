import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async getAllUser() {
    const users = await this.prismaService.user.findMany({
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        createdAt: true,
        updatedAt: true,
        notes: true,
      },
    });

    return {
      message: 'get all user',
      data: users,
    };
  }

  async getUserById(userId: number) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        notes: true,
      },
    });

    if (!user) {
      throw new BadRequestException('user not found');
    }

    delete user.hashedPassword;

    return {
      message: 'get user by id',
      data: user,
    };
  }

  async updateUserById(userId: number, data: UpdateUserDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new BadRequestException('user not found');
    }

    const updatedUserData: { firstName?: string; lastName?: string } = {};

    if (data.firstName) {
      updatedUserData.firstName = data.firstName;
    }

    if (data.lastName) {
      updatedUserData.lastName = data.lastName;
    }

    const updatedUser = await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        ...updatedUserData,
      },
    });

    delete updatedUser.hashedPassword;

    return {
      message: 'update user by id',
      data: updatedUser,
    };
  }

  async deleteUserById(userId: number, currentUserId: number) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new BadRequestException('user not found');
    }

    if (userId === currentUserId) {
      throw new BadRequestException('cannot delete yourself');
    }

    const deletedUser = await this.prismaService.user.delete({
      where: {
        id: userId,
      },
    });

    delete deletedUser.hashedPassword;

    return {
      message: 'delete user by id',
      data: deletedUser,
    };
  }
}
