import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import * as process from 'process';
import { LoginDto, RegisterDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(data: RegisterDto) {
    const hashedPassword = await argon.hash(data.password);

    try {
      const user = await this.prismaService.user.create({
        data: {
          email: data.email,
          hashedPassword,
          firstName: data.firstName,
          lastName: data.lastName,
        },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          createdAt: true,
        },
      });

      return {
        message: 'user register',
        data: user,
      };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ForbiddenException('email already exists');
      }
    }
  }

  async login(data: LoginDto) {
    const user = await this.prismaService.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new ForbiddenException('wrong email or password');
    }

    const isCorrectPassword = await argon.verify(
      user.hashedPassword,
      data.password,
    );

    if (!isCorrectPassword) {
      throw new ForbiddenException('wrong email or password');
    }

    delete user.hashedPassword;

    return {
      message: 'user login',
      accessToken: await this.convertToJwtString(user.id, user.email),
      data: user,
    };
  }

  async convertToJwtString(userId: number, email: string): Promise<string> {
    const payload = {
      id: userId,
      email: email,
    };

    return this.jwtService.signAsync(payload, {
      expiresIn: '90m',
      secret: process.env.JWT_SECRET,
    });
  }
}
