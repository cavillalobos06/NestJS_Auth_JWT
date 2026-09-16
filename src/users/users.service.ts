import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UserDao } from './dao/user.dao.js';
import { User } from './entities/user.entity.js';
import bcryptjs from 'bcryptjs';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Injectable()
export class UsersService {
  constructor(private readonly userDao: UserDao) {}

  async create(createUserDto: CreateUserDto) {
    const userExists = await this.userDao.findByEmail(createUserDto.email);

    if (userExists) {
      throw new ConflictException('El correo ya se encuentra registrado');
    }

    const hashedPassword = await bcryptjs.hash(createUserDto.password, 10);

    return await this.userDao.saveUser({
      ...createUserDto,
      password: hashedPassword,
    });
  }

  async findAll(): Promise<User[]>{
    return await this.userDao.findAll()
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userDao.findByEmail(email);
    if (!user) {
      throw new NotFoundException('El usuario no existe');
    }

    return user;
  }

  async findById(id: number): Promise<User> {
    const user = await this.userDao.findById(id);
    if (!user) {
      throw new NotFoundException(
        `El usuario con el id:${id} no se encuentra registrado`,
      );
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User>{
    const user = await this.userDao.findById(id)

    if(!user){
      throw new NotFoundException(`El usuario con el id:${id} no existe`)
    }

    if(updateUserDto.password){
        updateUserDto.password = await bcryptjs.hash(updateUserDto.password, 10)
    }

    await this.userDao.updateUser(id, updateUserDto)

    return await this.findById(id)
  }

  async delete(id: number){
    await this.userDao.delete(id)
  }
}
