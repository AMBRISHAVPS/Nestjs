import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Register } from './Schemas/registration.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectModel(Register.name)
    private RegisterModel: mongoose.Model<Register>,
  ) {}

  async getall(): Promise<Register[]> {
    return this.RegisterModel.find().exec();
  }

  async create(register: Register) {
    const res = await this.RegisterModel.create(register);
    return res.save();
  }

  async getbyid(id: String) {
    return await this.RegisterModel.findById(id).exec();
  }

  async update(id: String, register: Register) {
    return await this.RegisterModel.findByIdAndUpdate(id, register, {
      new: true,
    });
  }

  async delete(id: String) {
    await this.RegisterModel.findByIdAndDelete(id);
  }
}
