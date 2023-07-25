import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistrationModule } from './registration/registration.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/registration'), RegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
