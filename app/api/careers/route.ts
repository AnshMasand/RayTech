import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const fullName = formData.get('fullName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const position = formData.get('position') as string
    const message = formData.get('message') as string
    const resume = formData.get('resume') as File

    if (!fullName || !email || !position || !resume) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter (using Gmail SMTP as example)
    // You'll need to set up environment variables for email credentials
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
      }
    })

    // Convert resume to buffer for attachment
    const resumeBuffer = Buffer.from(await resume.arrayBuffer())

    // Email to the company
    const companyEmailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'anshmasand1@gmail.com',
      subject: `New Career Application - ${position}`,
      html: `
        <h2>New Career Application Received</h2>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
        <p><strong>Resume:</strong> Please find the attached resume file.</p>
        <hr>
        <p><em>This application was submitted through the RayTech careers page.</em></p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer
        }
      ]
    }

    // Email to the applicant (confirmation)
    const applicantEmailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Thank you for your application to RayTech',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a365d;">Thank you for your application!</h2>
          
          <p>Dear ${fullName},</p>
          
          <p>Thank you for your interest in joining RayTech. We have successfully received your application for the <strong>${position}</strong> position.</p>
          
          <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2d3748; margin-top: 0;">Application Summary:</h3>
            <p><strong>Position:</strong> ${position}</p>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Resume:</strong> ${resume.name}</p>
          </div>
          
          <p>Our team will review your application and contact you if your profile matches our requirements. This process typically takes 5-7 business days.</p>
          
          <p>In the meantime, feel free to learn more about our company and culture on our website.</p>
          
          <p>Best regards,<br>
          <strong>RayTech HR Team</strong><br>
          One of India's largest LED manufacturing facilities</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="font-size: 12px; color: #718096;">
            This is an automated confirmation email. Please do not reply to this email.
            If you have any questions, please contact us at info@raytech.net.in
          </p>
        </div>
      `
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(companyEmailOptions),
      transporter.sendMail(applicantEmailOptions)
    ])

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully' 
    })

  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    )
  }
}