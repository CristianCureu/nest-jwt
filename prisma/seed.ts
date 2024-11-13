// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      password: 'hashedpassword',
      name: 'Test User',
      invoices: {
        create: [
          {
            vendorName: 'Vendor A',
            amount: 100.0,
            dueDate: new Date('2023-12-01'),
            description: 'First invoice description',
            paid: false,
          },
          {
            vendorName: 'Vendor B',
            amount: 250.0,
            dueDate: new Date('2024-01-15'),
            description: 'Second invoice description',
            paid: true,
          },
        ],
      },
    },
  });
  console.log('Seeded user with invoices:', user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
