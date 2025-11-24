import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MovingBanner } from "@/components/moving-banner"
import { ParticleBackground } from "@/components/particle-background"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-pink-50 to-white relative">
        <ParticleBackground />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Logo */}
            <div className="relative w-96 h-96 md:w-128 md:h-128 mb-4">
              <Image src="/images/logo.webp" alt="Cycles for Change Logo" fill className="object-contain text-7xl" priority />
            </div>

            {/* Mission Statement */}
            <div className="max-w-3xl mx-auto">
              <h1 className="font-bold tracking-tighter text-pink-800 mb-6 text-7xl">Cycles for Change</h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Founded by two girls who had a driving passion to eradicate Period Poverty. Cycles For Change was
                created for the purpose of providing all US schools with free product dispensers. By providing free
                product dispensers, we aim to break down barriers and empower individuals to manage their menstrual
                health with dignity and confidence. Our hope is to have a big reach so we can make a difference in all
                schools.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-pink-800 hover:bg-pink-700 text-white">
                <Link href="/our-mission">Learn About Our Mission</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-pink-800 text-pink-800 hover:bg-pink-50 bg-transparent"
              >
                <Link href="/about-us">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Banner */}
      <MovingBanner text="Eradicate Period Poverty with us" />

      {/* Impact Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-pink-800 mb-4">Making a Difference</h2>
              <p className="text-gray-700 mb-6">
                At Cycles for Change, we believe that access to menstrual products is a basic right, not a luxury. Our
                mission is to break down barriers and ensure that everyone has access to the products they need.
              </p>
              <Button asChild className="bg-pink-800 hover:bg-pink-700 text-white">
                <Link href="/blog">Read Our Blog</Link>
              </Button>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/banner.jpg"
                alt="Cycles for Change dispenser with supportive messages"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-20 bg-pink-50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-800 mb-4">Stay Updated</h2>
            <p className="text-gray-700 mb-8">
              Follow our journey and stay informed about our latest initiatives, events, and the impact we're making
              together.
            </p>
            <Button asChild className="bg-pink-800 hover:bg-pink-700 text-white">
              <Link href="/newsletters">View Our Newsletters</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
