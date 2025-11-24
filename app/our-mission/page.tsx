import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Instagram } from "lucide-react"

export default function OurMissionPage() {
  return (
    <div className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-pink-800 mb-4">Our Mission</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Learn about our mission to eradicate period poverty and provide free product dispensers to all US schools.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image src="/images/1.jpg" alt="Period product dispenser" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-pink-800 mb-4">Our Journey</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We have started our journey and we plan to expand. We have brought dispensers to our school and hope to
              bring it to others as well. Our mission is to ensure that every student has access to period products when
              they need them, without barriers or stigma.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By providing free product dispensers, we aim to break down barriers and empower individuals to manage
              their menstrual health with dignity and confidence. Our goal is to create a world where period poverty is
              eliminated and menstruation is destigmatized.
            </p>
          </div>
        </div>

        {/* Outreach Section */}
        <div className="bg-pink-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-pink-800 text-center mb-4">Our Impact</h2>
          <p className="text-lg text-center text-gray-700 mb-6">
            The amount of people who benefit with the period products being easily accessible to them is immense.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-xl font-bold text-pink-800 mb-2">Dignity</h3>
              <p className="text-gray-700">
                Providing access to period products helps maintain dignity during menstruation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-xl font-bold text-pink-800 mb-2">Education</h3>
              <p className="text-gray-700">
                Students can focus on learning instead of worrying about period management.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-xl font-bold text-pink-800 mb-2">Equality</h3>
              <p className="text-gray-700">Equal access to period products promotes gender equality in schools.</p>
            </div>
          </div>
        </div>

        {/* Volunteering Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-pink-800 mb-4">Get Involved</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We're gonna need help making product dispensers. Keep an eye on our Instagram for volunteer
                opportunities in the near future! Above is a picture of a flyer we put up in our school to receive
                donations.
              </p>
              <Button asChild className="bg-pink-800 hover:bg-pink-700 text-white">
                <Link href="https://www.instagram.com/cyclesforchange/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" />
                  Follow Us on Instagram
                </Link>
              </Button>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image src="/images/1-20-286-29.jpg" alt="Volunteer flyer" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-pink-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Movement</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Together, we can eradicate period poverty. Whether through donations, volunteering, or spreading awareness,
            your support makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="border-white text-white hover:bg-pink-700 bg-transparent">
              <Link href="mailto:cyclesforchange@gmail.com">Contact Us</Link>
            </Button>
            <Button asChild className="bg-white text-pink-800 hover:bg-gray-100">
              <Link href="/blog">Read Our Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
