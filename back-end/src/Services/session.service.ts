import prisma from '../prismaConection';
import { is } from 'superstruct';
import bcrypt from  'bcryptjs';
import jwt from 'jsonwebtoken';

import { BadRequestException } from '../HttpExceptions/httpExceptions';
import { LoginDto, LoginDtoType } from '../Dto/login.dto';
import { Users } from '../Models/users.model';
import authConfig from '../Config/auth';

const users = new Users(prisma.user);

export default class SessionService {
    
    static async login(login: LoginDtoType): Promise<string> {
        if (!is(login, LoginDto)) {
            throw new BadRequestException("Email or Password not Found");
        }

        const user = await users.findByEmail(login.email, true);

        if (!user) {
            throw new BadRequestException("User not Found");
        }

        const isSame = await SessionService.checkPassword(login.password, user.password!);
        if (!isSame) {
            throw new BadRequestException("Email or Password does not match");
        }

        return jwt.sign({id: user.id!}, authConfig.secret!, {
            expiresIn: authConfig.expiresIn
        });
    }
    
    private static async checkPassword(password:string, passwordHash: string) : Promise<boolean> {
        return bcrypt.compare(password, passwordHash)
    }
}
