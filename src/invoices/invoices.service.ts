import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async findAll(page: number, limit: number) {
    return this.prisma.invoice.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async findOne(id: number) {
    return this.prisma.invoice.findUnique({ where: { id } });
  }

  async totalByDueDate() {
    return this.prisma.invoice.aggregate({
      _sum: { amount: true },
    });
  }
}
