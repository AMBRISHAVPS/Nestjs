import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { Register } from './Schemas/registration.schema';

@Controller('registration')
export class RegistrationController {
  constructor(private registrationservice: RegistrationService) {}

  @Get()
  async getall(): Promise<Register[]> {
    return this.registrationservice.getall();
  }

  @Post()
  async postregisters(@Body() register: Register) {
    return this.registrationservice.create(register);
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return this.registrationservice.getbyid(id);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() register: Register) {
    return await this.registrationservice.update(id, register);
  }
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.registrationservice.delete(id);
  }
}
