import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	async create(createUserDto: CreateUserDto) {
		return this.prisma.user.create({
			data: createUserDto,
		})
	}

	async findAll() {
		return this.prisma.user.findMany()
	}

	async findOne(id: number) {
		return this.prisma.user.findUnique({
			where: { id },
		})
	}

	async update(id: number, updateUserDto: UpdateUserDto) {
		return this.prisma.user.update({
			data: updateUserDto,
			where: { id }
		})
	}

	async remove(id: number) {
		return this.prisma.user.delete({
			where: { id }
		})
	}
}
