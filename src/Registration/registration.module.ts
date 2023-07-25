import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { RegisterSchema } from './Schemas/registration.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Register',schema:RegisterSchema}])],
  controllers: [RegistrationController],
  providers: [RegistrationService]
})
export class RegistrationModule {}
