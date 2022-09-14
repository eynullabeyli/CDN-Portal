import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! f';
  }

  login(): string {
    return 'Login ';
  }
}
