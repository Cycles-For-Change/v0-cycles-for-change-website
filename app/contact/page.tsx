"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    inquiryType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You would typically send this to your backend or email service
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-pink-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Have questions about our mission? Want to get involved? We'd love to hear from you. Reach out to us using
            the form below or through any of our contact methods.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-pink-200">
              <CardHeader>
                <CardTitle className="text-pink-800">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Type of Inquiry</Label>
                    <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Question</SelectItem>
                        <SelectItem value="volunteer">Volunteer Opportunity</SelectItem>
                        <SelectItem value="partnership">Partnership/Collaboration</SelectItem>
                        <SelectItem value="media">Media/Press Inquiry</SelectItem>
                        <SelectItem value="donation">Donation Information</SelectItem>
                        <SelectItem value="school">School Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="Brief subject line"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-pink-800 hover:bg-pink-700 text-white">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <Card className="border-pink-200">
              <CardHeader>
                <CardTitle className="text-pink-800">Get in Touch</CardTitle>
                <CardDescription>Reach out to us directly through these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-pink-800" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:cyclesforchange2024@gmail.com" className="text-pink-700 hover:text-pink-800">
                      cyclesforchange2024@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-pink-800" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">San Antonio, Texas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-pink-800" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-gray-600">Within 24-48 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="border-pink-200">
              <CardHeader>
                <CardTitle className="text-pink-800">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-pink-800 mb-1">How can I volunteer?</h4>
                  <p className="text-sm text-gray-600">
                    Follow us on Instagram @cycles_for_change for volunteer opportunities and updates on how you can
                    help.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-pink-800 mb-1">Can you bring dispensers to my school?</h4>
                  <p className="text-sm text-gray-600">
                    We're actively expanding! Contact us with your school information and we'll discuss possibilities.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-pink-800 mb-1">How can I donate?</h4>
                  <p className="text-sm text-gray-600">
                    Reach out to us via email for information about donation opportunities and how your contribution can
                    make a difference.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-pink-800 mb-1">Are you looking for partnerships?</h4>
                  <p className="text-sm text-gray-600">
                    Yes! We welcome partnerships with organizations that share our mission. Contact us to discuss
                    collaboration opportunities.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="border-pink-200">
              <CardHeader>
                <CardTitle className="text-pink-800">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">After School Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weekends</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email Response</span>
                    <span className="font-medium">24-48 Hours</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  *Please note: As student-run organization, our response times may vary during exam periods and school
                  breaks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-pink-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-pink-800 mb-4">Ready to Make a Difference?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Whether you're a student, educator, parent, or community member, there are many ways to support our mission
            to eradicate period poverty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-pink-800 hover:bg-pink-700 text-white">
              <a href="https://www.instagram.com/cycles_for_change/" target="_blank" rel="noopener noreferrer">
                Follow Our Journey
              </a>
            </Button>
            <Button asChild variant="outline" className="border-pink-800 text-pink-800 hover:bg-pink-50 bg-transparent">
              <a href="/our-mission">Learn About Our Mission</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
