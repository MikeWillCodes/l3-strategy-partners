import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  company: z.string().min(1, "Company is required"),
  title: z.string().min(1, "Title is required"),
  email: z.string().email("Please enter a valid email address"),
  country: z.string().min(1, "Please select a country"),
  topic: z.string().min(1, "Please select a topic"),
  details: z.string().min(10, "Please provide at least 10 characters of project details"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    
    // Log the submission (in production, you'd save to database/send email)
    console.log("Contact form submission:", {
      ...validatedData,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"),
    });
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real application, you would:
    // 1. Save the data to a database
    // 2. Send notification emails
    // 3. Integrate with CRM systems
    // 4. Set up automated follow-ups
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for your message. We'll get back to you within 24 hours." 
      },
      { status: 200 }
    );
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Invalid form data", 
          errors: error.issues 
        },
        { status: 400 }
      );
    }
    
    console.error("Contact form error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "An error occurred while processing your request" 
      },
      { status: 500 }
    );
  }
}
