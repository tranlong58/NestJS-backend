import { Req, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Req() request: Request) {
    return this.authService.register(request.body);
  }

  @Post('login')
  login(@Req() request: Request) {
    return this.authService.login(request.body);
  }
}
