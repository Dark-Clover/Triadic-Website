"use server"

import { Resend } from "resend"

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        message: "Please fill in all fields",
      }
    }

    // Basic email validation
    if (!email.includes("@")) {
      return {
        success: false,
        message: "Please enter a valid email address",
      }
    }

    // Send email using Resend with verified domain
    const { data, error } = await resend.emails.send({
      from: "Triadic Marketing <contact@triadicmarketing.com>", // Using your verified domain
      to: ["info@triadicmarketing.com"], // Sending directly to your business email
      subject: `New Contact Form: ${subject}`,
      reply_to: email,
      text: `
CONTACT FORM SUBMISSION

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    })

    // Handle Resend API response
    if (error) {
      console.error("Resend API error:", error)
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      }
    }

    // Return success response
    return {
      success: true,
      message: "Message sent successfully! We will get back to you soon.",
    }
  } catch (error) {
    // Log any unexpected errors
    console.error("Unexpected error in sendEmail:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
