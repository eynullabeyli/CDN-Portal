import { Module } from '@nestjs/common';
import { UserInformationController } from './../user.controller';

@Module({
  imports: [],
  controllers: [UserInformationController],
  providers: [],
})
export class AppModule {}
