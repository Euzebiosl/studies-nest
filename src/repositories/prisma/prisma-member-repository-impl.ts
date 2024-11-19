import { MembersRepository } from '../members-repository';
import { MemberDto } from '../../dtos/member-dto';
import { member } from '@prisma/client';
import { PrismaService } from '../../database/prisma-service';
import { randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaMemberRepositoryImpl implements MembersRepository {
  constructor(private prisma: PrismaService) {}

  createMember(newMember: MemberDto): Promise<member> {
    return this.prisma.member.create({
      data: {
        id: randomUUID(),
        name: newMember.name,
        memberFunction: newMember.memberFunction,
      },
    });
  }

  getMembers(): Promise<member[]> {
    return this.prisma.member.findMany();
  }
}
