import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppController2 }from './user.controller'; 
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, AppController2],
  providers: [AppService],
})
export class AppModule {}
