import { AppService } from '../services/app.service';
import { MemberDto } from '../dtos/member-dto';
import { MembersRepository } from '../repositories/members-repository';
export declare class AppController {
    private appService;
    private membersRepository;
    constructor(appService: AppService, membersRepository: MembersRepository);
    getHello(): Promise<{
        message: string;
    }>;
    createMember(memberDto: MemberDto): Promise<{
        name: string;
        memberFunction: string;
        id: string;
        createdAt: Date;
    }>;
    getMembers(): Promise<{
        name: string;
        memberFunction: string;
        id: string;
        createdAt: Date;
    }[]>;
}
