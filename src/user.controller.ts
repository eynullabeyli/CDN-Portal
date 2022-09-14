import { Controller, Get, Post,  Header, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('/user/credentials')
export class UserInformationController {
    details = [
        {
            id: 1,
            username: "yusif",
            fullname: "Yusif Eynullabayli"
        },
        {
            id: 2,
            username: "root",
            fullname: "sudo su"
        }
    ]

    @Get()
    @Header('Content-Type','application/json')
    @HttpCode(200)
    index(@Res() response: Response) {
        response.status(HttpStatus.OK).send(JSON.stringify(this.details));
    }

    @Post()
    create(): string {
        return 'Created 2222';
    }
}
