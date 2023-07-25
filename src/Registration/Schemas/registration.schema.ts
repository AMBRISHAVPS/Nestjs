import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Register {
  @Prop()
  Firstname: String;

  @Prop()
  Lastname: String;

  @Prop()
  Email: String;

  @Prop()
  Password: String;
}
export const RegisterSchema = SchemaFactory.createForClass(Register);
