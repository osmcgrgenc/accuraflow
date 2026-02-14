'use server';

import { generateInsightsFlow } from '@/ai/flows';
import { z } from 'zod';

const InputSchema = z.array(z.object({
  customer: z.string(),
  revenue: z.number(),
  status: z.string(),
}));

export async function generateDashboardInsights(data: z.infer<typeof InputSchema>) {
  try {
    const insights = await generateInsightsFlow(data);
    return { success: true, data: insights };
  } catch (error) {
    console.error("Genkit flow error:", error);
    return { success: false, error: "AI analizi sırasında bir hata oluştu." };
  }
}
