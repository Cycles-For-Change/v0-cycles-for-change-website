import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, PenLine } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Importance Of Menstrual Equity",
      author: "Dhiyasri Thirumurugan",
      excerpt: "Exploring why menstrual equity is crucial for gender equality and social justice.",
      date: "April 15, 2024",
      image: "/images/1-20-283-29.jpg",
    },
    {
      title: "Why Access to Period Products Matters",
      author: "Harshini Praturi",
      excerpt: "A deep dive into the educational and social impacts of period product accessibility.",
      date: "March 28, 2024",
      image: "/images/1-20-284-29.jpg",
    },
    {
      title: "Breaking the Ice: Let's Talk Menstrual Stigma",
      author: "Harshini Praturi",
      excerpt: "Addressing the taboos and stigmas surrounding menstruation in different cultures.",
      date: "February 12, 2024",
      image: "/images/1.jpg",
    },
    {
      title: "The Impact of Stigma and Lack of Access to Pads",
      author: "Anvi Jakatimath",
      excerpt: "How stigma and limited access to period products affect women's lives globally.",
      date: "January 25, 2024",
      image: "/images/1-20-287-29.jpg",
    },
    {
      title: "How Social Media is Changing Period Stigma in Foreign Nations",
      author: "Steawin Fernando",
      excerpt: "The role of social media in breaking down period taboos across different countries.",
      date: "December 10, 2023",
      image: "/images/1-20-282-29.jpg",
    },
  ]

  return (
    <div className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-pink-800 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Explore articles and insights about period poverty, menstrual equity, and our ongoing initiatives.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden border-pink-200">
            <div className="md:flex">
              <div className="relative h-64 md:h-auto md:w-2/5">
                <Image src="/images/1-20-285-29.jpg" alt="Featured blog post" fill className="object-cover" />
              </div>
              <div className="md:w-3/5 p-6 md:p-8">
                <CardHeader className="p-0 mb-4">
                  <div className="text-sm text-pink-600 mb-2">Featured Post</div>
                  <CardTitle className="text-2xl md:text-3xl text-pink-800">
                    The Importance Of Menstrual Equity
                  </CardTitle>
                  <CardDescription className="text-sm mt-2">By Dhiyasri Thirumurugan | April 15, 2024</CardDescription>
                </CardHeader>
                <CardContent className="p-0 mb-6">
                  <p className="text-gray-700">
                    Menstrual equity refers to the idea that menstrual products should be accessible and affordable for
                    everyone who needs them. This concept goes beyond just providing products; it encompasses education,
                    breaking down stigmas, and creating policies that support menstruators.
                  </p>
                </CardContent>
                <CardFooter className="p-0">
                  <Button asChild className="bg-pink-800 hover:bg-pink-700 text-white">
                    <Link href="https://cyclesforchange.wixsite.com/cycles-for-change/blog">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden border-pink-200 hover:border-pink-400 transition-colors">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-pink-800">{post.title}</CardTitle>
                <CardDescription>
                  By {post.author} | {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-pink-800 text-pink-800 hover:bg-pink-50 bg-transparent"
                >
                  <Link href="#">Read Article</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Submit Blog Post Section */}
        <div className="bg-pink-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-pink-800 mb-4">Share Your Voice</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Have something to say about period poverty or menstrual equity? We welcome guest contributors to share their
            perspectives and experiences.
          </p>
          <Button asChild className="bg-pink-800 hover:bg-pink-700 text-white">
            <Link href="#">
              <PenLine className="mr-2 h-4 w-4" />
              Submit a Blog Post
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
