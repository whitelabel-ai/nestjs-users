import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AuthenticatedRequest } from '../interfaces/authenticated-user.interface';
import { UserDto } from './dto/user.dto';
import { OrganizationRoleGuard } from '../auth/guards/organization-manager.guard';
import { OrganizationMemberRole } from '@prisma/client';
import { Roles } from '../auth/decorators/roles.decorator';
import { AdminGuard } from '../auth/guards/admin.guard';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiCreatedResponse({ type: UserEntity, isArray: true })
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req: AuthenticatedRequest) {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: UserEntity })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @UseGuards(OrganizationRoleGuard)
  @Roles(OrganizationMemberRole.MANAGER)
  @Get('organization/:organizationId')
  @ApiResponse({ status: 200, type: [UserDto] })
  async getUsersByOrganizationId(
    @Param('organizationId') organizationId: string,
  ) {
    return this.usersService.getUsersByOrganizationId(organizationId);
  }
}
