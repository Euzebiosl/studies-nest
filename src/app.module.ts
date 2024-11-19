import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { PrismaService } from './database/prisma-service';
import { MembersRepository } from './repositories/members-repository';
import { PrismaMemberRepositoryImpl } from './repositories/prisma/prisma-member-repository-impl';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: MembersRepository,
      useClass: PrismaMemberRepositoryImpl,
    },
  ],
})
export class AppModule {}
