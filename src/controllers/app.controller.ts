import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { MemberDto } from '../dtos/member-dto';
import { MembersRepository } from '../repositories/members-repository';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private membersRepository: MembersRepository,
  ) {}

  @Get()
  async getHello() {
    return this.appService.getHello();
  }

  @Post('/createMember')
  async createMember(@Body() memberDto: MemberDto) {
    return this.membersRepository.createMember(memberDto);
  }
}
