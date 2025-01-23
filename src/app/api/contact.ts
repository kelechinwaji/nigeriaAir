"use server";
import ContactUsEmailTemplate from "@/components/template/ContactUsEmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendMessage(res: Record<string, string>) {
  const { name, email, phone_number, message } = res;

  try {
    const result = await resend.emails.send({
      from: email || "no-reply@example.com", // Provide a fallback email
      to: process.env.NEXT_PUBLIC_PRIMARY_EMAIL || "support@example.com",
      subject: "Contact Us Form Submission",
      react: ContactUsEmailTemplate({ name, email, phone_number, message }),
    });

    return { success: true, data: result }; // Return a plain object
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
