import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Download, Calendar, Newspaper } from "lucide-react"

export default function PressPage() {
  const pressReleases = [
    {
      title: "Local Students Launch Initiative to Combat Period Poverty in Schools",
      date: "March 15, 2024",
      outlet: "San Antonio Express-News",
      summary:
        "Two Basis Shavano students are making waves with their mission to provide free menstrual products in schools across Texas.",
      link: "#",
      image: "/images/1-20-282-29.jpg",
    },
    {
      title: "Young Activists Take on Period Poverty with Innovative Dispenser Program",
      date: "February 28, 2024",
      outlet: "KSAT 12 News",
      summary: "Cycles for Change founders discuss their grassroots approach to menstrual equity in local schools.",
      link: "#",
      image: "/images/1-20-285-29.jpg",
    },
    {
      title: "Breaking Barriers: Students Address Menstrual Health in Education",
      date: "January 20, 2024",
      outlet: "The Rivard Report",
      summary: "A deep dive into how two teenagers are changing the conversation around period poverty.",
      link: "#",
      image: "/images/1-20-286-29.jpg",
    },
  ]

  const mediaKit = [
    {
      title: "High-Resolution Logo Pack",
      description: "PNG and SVG versions of our logo in various formats",
      type: "ZIP File",
    },
    {
      title: "Founder Headshots",
      description: "Professional photos of Dhiya and Anvi for media use",
      type: "ZIP File",
    },
    {
      title: "Fact Sheet",
      description: "Key statistics and information about period poverty",
      type: "PDF",
    },
    {
      title: "Press Release Template",
      description: "Standard press release format with key messaging",
      type: "DOCX",
    },
  ]

  return (
    <div className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-pink-800 mb-4">Press & Media</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Find the latest news coverage, press releases, and media resources about Cycles for Change and our mission
            to eradicate period poverty.
          </p>
        </div>

        {/* Featured Press */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-pink-800 mb-8 text-center">Recent Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressReleases.map((article, index) => (
              <Card key={index} className="border-pink-200 hover:border-pink-400 transition-colors">
                <div className="relative h-48">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-pink-600 mb-2">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </div>
                  <CardTitle className="text-lg text-pink-800">{article.title}</CardTitle>
                  <CardDescription className="font-medium">{article.outlet}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{article.summary}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-pink-800 text-pink-800 hover:bg-pink-50 bg-transparent"
                  >
                    <Link href={article.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Read Article
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Kit */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-pink-800 mb-8 text-center">Media Kit</h2>
          <div className="bg-pink-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-pink-800 mb-2">Resources for Journalists & Media</h3>
              <p className="text-gray-700">
                Download our media kit for high-quality images, logos, and background information about our
                organization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mediaKit.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-pink-800">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <span className="text-xs text-pink-600 bg-pink-100 px-2 py-1 rounded mt-2 inline-block">
                      {item.type}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-pink-800 text-pink-800 hover:bg-pink-50 bg-transparent"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Press Contact */}
        <div className="bg-pink-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Interested in covering our story or interviewing our founders? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="border-white text-pink-800 hover:bg-pink-700 bg-transparent">
              <Link href="mailto:cyclesforchange@gmail.com">
                <Newspaper className="mr-2 h-4 w-4" />
                Contact for Press
              </Link>
            </Button>
            <Button asChild className="bg-white text-pink-800 hover:bg-gray-100">
              <Link href="/contact">Schedule Interview</Link>
            </Button>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-pink-800 mb-8 text-center">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-pink-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-pink-800 rounded-full flex items-center justify-center mx-auto mb-4"></div>
              <h3 className="font-semibold text-pink-800 mb-2">Youth Innovation Award</h3>
              <p className="text-gray-700 text-sm">San Antonio Youth Leadership Council - 2024</p>
            </div>
            <div className="bg-pink-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-pink-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">★</span>
              </div>
              <h3 className="font-semibold text-pink-800 mb-2">Community Impact Recognition</h3>
              <p className="text-gray-700 text-sm">Basis Shavano High School - 2024</p>
            </div>
            <div className="bg-pink-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-pink-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">♦</span>
              </div>
              <h3 className="font-semibold text-pink-800 mb-2">Rising Leaders Award</h3>
              <p className="text-gray-700 text-sm">Texas Youth Advocacy Network - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
