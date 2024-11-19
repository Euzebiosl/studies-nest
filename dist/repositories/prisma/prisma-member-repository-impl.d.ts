import { MembersRepository } from '../members-repository';
import { MemberDto } from '../../dtos/member-dto';
import { member } from '@prisma/client';
import { PrismaService } from '../../database/prisma-service';
export declare class PrismaMemberRepositoryImpl implements MembersRepository {
    private prisma;
    constructor(prisma: PrismaService);
    createMember(newMember: MemberDto): Promise<member>;
    getMembers(): Promise<member[]>;
}
