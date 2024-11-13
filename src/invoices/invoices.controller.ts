import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';

@Controller('invoices')
export class InvoicesController {
  constructor(private invoicesService: InvoicesService) {}

  @UseGuards(JwtAuthGuard)
  @Get('total')
  totalByDueDate() {
    return this.invoicesService.totalByDueDate();
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query('page') page = '1', @Query('limit') limit = '10') {
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
  
    if (isNaN(pageNum) || isNaN(limitNum)) {
      throw new Error('Page and limit must be valid numbers');
    }
  
    return this.invoicesService.findAll(pageNum, limitNum);
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoicesService.findOne(parseInt(id));
  }
}
