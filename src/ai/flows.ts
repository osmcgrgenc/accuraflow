import { z } from 'zod';
import { ai } from './genkit';

// Input schema: Array of accrual data
export const AccrualDataSchema = z.object({
  customer: z.string(),
  revenue: z.number(),
  status: z.string(),
});

// Output schema: List of insights
export const InsightSchema = z.object({
  type: z.enum(['warning', 'success', 'info']),
  message: z.string(),
  action: z.string().optional(),
});

export const generateInsightsFlow = ai.defineFlow(
  {
    name: 'generateInsights',
    inputSchema: z.array(AccrualDataSchema),
    outputSchema: z.array(InsightSchema),
  },
  async (data) => {
    const prompt = `
      Analyze the following accrual data and generate 3 actionable business insights.
      Focus on anomalies, performance trends, and opportunities.
      
      Data: ${JSON.stringify(data)}
      
      Return the response as a JSON array of objects with 'type' (warning, success, info), 'message' (in Turkish), and optional 'action'.
    `;

    const { output } = await ai.generate({
      prompt: prompt,
      output: { schema: z.array(InsightSchema) }
    });

    if (!output) {
      throw new Error("Failed to generate insights");
    }

    return output;
  }
);
