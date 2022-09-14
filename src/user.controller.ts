import { Controller, Get, Header } from '@nestjs/common';

@Controller('/user/credentials')
export class AppController2 {
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
  function(): string {
    return JSON.stringify(this.details)
  }
}
