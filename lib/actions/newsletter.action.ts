"use server";
import connectDB from "../mongodb";
import Subscriber from "../models/Subscribers";

type NewsletterState = {
  error?: string;
  message?: string;
};

export async function SubscribeToNewsletter(
  previousState: NewsletterState | null,
  formData: FormData
): Promise<NewsletterState> {
  await connectDB();
  const email = formData.get("email");
  const subscriber = await Subscriber.findOne({ email });
  if (subscriber) {
    return { error: "Email already subscribed" };
  }
  await Subscriber.create({ email });
  return { message: "Email subscribed successfully" };
}
