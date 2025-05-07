import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { OrganizationService } from './organization.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrganizationDto } from './dto/organization.dto';
import { AdminGuard } from '../auth/guards/admin.guard';

@Controller('organization')
@ApiTags('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @UseGuards(AdminGuard)
  @Post()
  @ApiResponse({ status: 201, type: OrganizationDto })
  async create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationService.create(createOrganizationDto);
  }
}
