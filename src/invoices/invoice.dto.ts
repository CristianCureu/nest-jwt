import { z } from 'zod';

export const CreateInvoiceDto = z.object({
  amount: z.number().min(0),
  dueDate: z.string().transform((date) => new Date(date)),
});

export const InvoiceIdDto = z.object({
  id: z.string().transform((id) => parseInt(id)),
});
