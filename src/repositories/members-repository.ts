import { member } from '@prisma/client';
import { MemberDto } from '../dtos/member-dto';

export abstract class MembersRepository {
  abstract getMembers(): Promise<member[]>;
  abstract createMember(newMember: MemberDto): Promise<member>;
}
