import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function NewslettersPage() {
  const newsletters = [
    {
      month: "January",
      year: 2025,
      summary: "Updates on our latest school partnerships and Woman of the Month feature.",
      link: "#",
    },
    {
      month: "December",
      year: 2024,
      summary: "Holiday initiatives, year-end review, and Woman of the Month feature.",
      link: "#",
    },
    {
      month: "November",
      year: 2024,
      summary: "Thanksgiving drive results and Woman of the Month feature.",
      link: "#",
    },
    {
      month: "October",
      year: 2024,
      summary: "Fall campaign updates and Woman of the Month feature.",
      link: "#",
    },
    {
      month: "September",
      year: 2024,
      summary: "Back to school initiatives and Woman of the Month feature.",
      link: "#",
    },
    {
      month: "August",
      year: 2024,
      summary: "Summer program recap and Woman of the Month feature.",
      link: "#",
    },
  ]

  return (
    <div className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-pink-800 mb-4">Monthly Newsletters</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Stay updated with our monthly newsletters featuring news surrounding period poverty, menstrual care, and our
            Woman of the Month spotlights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsletters.map((newsletter, index) => (
            <Card key={index} className="border-pink-200 hover:border-pink-400 transition-colors">
              <CardHeader className="pb-4">
                <CardTitle className="text-pink-800">
                  {newsletter.month} {newsletter.year}
                </CardTitle>
                <CardDescription>Monthly Newsletter</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{newsletter.summary}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full border-pink-800 text-pink-800 hover:bg-pink-50">
                  <Link href={newsletter.link}>
                    <FileText className="mr-2 h-4 w-4" />
                    Read Newsletter
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-pink-800 mb-4">Newsletter Archive</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Looking for older newsletters? Check out our complete archive to see our journey from the beginning.
          </p>
          <Button asChild className="bg-pink-800 hover:bg-pink-700 text-white">
            <Link href="#">View All Newsletters</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
