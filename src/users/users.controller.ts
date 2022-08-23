import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { User } from "./entities/user.entity";



@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@ApiOperation({summary: 'Create user'})
	@ApiResponse({status: 200, type: User})
	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		return this.usersService.create(createUserDto)
	}

	@ApiOperation({summary: 'All users'})
	@ApiResponse({status: 200, type: User})
	@Get()
	findAll() {
		return this.usersService.findAll()
	}

	@ApiOperation({summary: 'One user'})
	@ApiResponse({status: 200, type: User})
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.usersService.findOne(+id)
	}

	@ApiOperation({summary: 'Update user'})
	@ApiResponse({status: 200, type: User})
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.usersService.update(+id, updateUserDto)
	}

	@ApiOperation({summary: 'Delete user'})
	@ApiResponse({status: 200, type: User})
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.usersService.remove(+id)
	}
}
