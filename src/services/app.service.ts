import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma-service';

@Injectable()
export class AppService {

  getHello() {
    return {
      message: 'Hello World!',
    };
  }
}
