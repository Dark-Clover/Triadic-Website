"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export type FormState = {
  success: boolean
  message: string
}

export async function sendEmail(formData: FormData): Promise<FormState> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Form validation
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "Please fill in all fields",
    }
  }

  if (!email.includes("@")) {
    return {
      success: false,
      message: "Please enter a valid email address",
    }
  }

  try {
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <contact@triadicmarketing.com>", // Replace with your verified domain email
      to: ["info@triadicmarketing.com"],
      subject: `Contact Form: ${subject}`,
      reply_to: email,
      text: `
    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    
    Message:
    ${message}
  `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      }
    }

    return {
      success: true,
      message: "Message sent successfully! We will get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
