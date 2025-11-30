import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Music, Youtube, ExternalLink } from "lucide-react"

export default function SocialsPage() {
  const socialPlatforms = [
    {
      name: "Instagram",
      handle: "@cyclesforchange",
      description: "Follow our daily updates, behind-the-scenes content, and volunteer opportunities.",
      followers: "2.5K",
      posts: "150+",
      url: "https://www.instagram.com/cycles_for_change/",
      icon: Instagram,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      stats: [
        { label: "Posts", value: "50+" },
        { label: "Followers", value: "2.5K" },
        { label: "Following", value: "500" },
      ],
    },
    {
      name: "TikTok",
      handle: "@cyclesforchange",
      description: "Educational content, awareness campaigns, and fun videos about menstrual health.",
      followers: "1.8K",
      posts: "75+",
      url: "https://www.tiktok.com/@cycles_for_change",
      icon: Music,
      color: "bg-gradient-to-r from-black to-red-500",
      stats: [
        { label: "Videos", value: "75+" },
        { label: "Views", value: "300k+" },
        { label: "Likes", value: "12K" },
      ],
    },
    {
      name: "Spotify",
      handle: "Cycles for Change Podcast",
      description: "Listen to our podcast featuring discussions on menstrual health, interviews, and more.",
      followers: "320",
      posts: "12 Episodes",
      url: "https://open.spotify.com/show/3HRq5QSof3qgJ72Gkvkjv1",
      icon: Music,
      color: "bg-gradient-to-r from-green-500 to-green-600",
      stats: [
        { label: "Episodes", value: "12" },
        { label: "Followers", value: "320" },
        { label: "Monthly Listeners", value: "500" },
      ],
    },
  ]

  return (
    <div className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-pink-800 mb-4">Follow Our Journey</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Stay connected with Cycles for Change across all our social media platforms. Get updates, educational
            content, and join our community fighting period poverty.
          </p>
        </div>

        {/* Social Media Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {socialPlatforms.map((platform, index) => {
            const IconComponent = platform.icon
            return (
              <Card key={index} className="border-pink-200 hover:border-pink-400 transition-colors overflow-hidden">
                <div className={`h-2 ${platform.color}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${platform.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-pink-800">{platform.name}</CardTitle>
                      <CardDescription className="font-medium">{platform.handle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">{platform.description}</p>

                  {/* Stats */}
                  <div className="flex gap-4">
                    {platform.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="font-bold text-pink-800">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-pink-800 hover:bg-pink-700 text-white">
                    <Link href={platform.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Follow on {platform.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Social Media Guidelines */}
        <div className="bg-pink-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-pink-800 mb-4 text-center">Join the Conversation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-800 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">#</span>
              </div>
              <h3 className="font-semibold text-pink-800 mb-2">Use Our Hashtags</h3>
              <p className="text-sm text-gray-700">#CyclesForChange #PeriodPoverty #MenstrualEquity #BreakTheTaboo</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-800 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">@</span>
              </div>
              <h3 className="font-semibold text-pink-800 mb-2">Tag Us</h3>
              <p className="text-sm text-gray-700">
                Share your support and tag us in your posts to help spread awareness!
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-800 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">💬</span>
              </div>
              <h3 className="font-semibold text-pink-800 mb-2">Engage</h3>
              <p className="text-sm text-gray-700">
                Like, comment, and share our content to help us reach more people.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-pink-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Don't miss any updates! Follow us on all platforms and check out our monthly newsletters for the latest news
            and initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="border-white text-pink-800 hover:bg-pink-700 bg-white">
              <Link href="/newsletters">View Newsletters</Link>
            </Button>
            <Button asChild className="bg-white text-pink-800 hover:bg-gray-100">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
