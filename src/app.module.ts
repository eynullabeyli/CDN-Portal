import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserInformationController }from './user.controller'; 
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, UserInformationController],
  providers: [AppService],
})
export class AppModule {}
