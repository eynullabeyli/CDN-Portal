import { Module } from '@nestjs/common';
import { UserInformationController } from './../user.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [UserInformationController],
  providers: [],
})
export class AppModule {}
