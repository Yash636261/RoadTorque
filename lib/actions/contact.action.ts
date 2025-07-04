"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(
  formData: z.infer<typeof contactFormSchema>
) {
  try {
    // Validate the form data
    const validatedFields = contactFormSchema.parse(formData);

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Set up auto-responder
    // For now, we'll just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Invalid form data",
        details: error.errors,
      };
    }

    return {
      success: false,
      error: "Failed to submit contact form",
    };
  }
}
