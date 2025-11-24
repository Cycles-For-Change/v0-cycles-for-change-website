import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Dhiya Thirumurugan",
      role: "Co-Founder",
      image: "/professional-headshot.png",
    },
    {
      name: "Anvi Jakatimath",
      role: "Co-Founder",
      image: "/professional-headshot.png",
    },
    {
      name: "Erika Engh",
      role: "Blog/Newsletter Head",
      image: "/professional-headshot.png",
    },
    {
      name: "Alex Sacerdote",
      role: "Social Media Manager",
      image: "/professional-headshot.png",
    },
    {
      name: "Aarav Paryemalani",
      role: "Tech Coordinator",
      image: "/professional-headshot.png",
    },
  ]

  return (
    <div className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-pink-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Meet the passionate team behind Cycles for Change and learn about our journey.
          </p>
        </div>

        {/* Founders Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-pink-100">
              <Image src="/professional-portrait.png" alt="Dhiya Thirumurugan" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-pink-800 mb-2">Dhiya Thirumurugan</h2>
              <p className="text-gray-700 leading-relaxed">
                Hey! I'm Dhiya, a passionate student at Basis Shavano who loves dance, debate, writing, and soccer.
                Alongside my friend Anvi, I'm dedicated to ending period poverty. Through our movement, we're striving
                to provide menstrual hygiene products to every woman and girl. Together, we're pushing for a future
                where period poverty is a thing of the past, and everyone can live with dignity. We are passionate
                advocates committed to making periods a stigma-free and accessible experience for everyone.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-pink-100">
              <Image src="/professional-portrait.png" alt="Anvi Jakatimath" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-pink-800 mb-2">Anvi Jakatimath</h2>
              <p className="text-gray-700 leading-relaxed">
                I'm Anvi Jakatimath, an ambitious student at Basis Shavano High School, where I explore a multitude of
                interests. From dance and music to science fairs and golf, I'm always exploring new avenues. I'm excited
                to use my creativity to make a difference. Since third grade, my friend Dhiya and I have been a dynamic
                duo. I'm thrilled to channel our teamwork into advocating for girls' access to period products and
                making a positive impact in our community.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-pink-50 rounded-lg p-8 mb-16">
          <p className="text-lg text-center text-gray-700 leading-relaxed">
            Welcome to our movement! Together, let's dispense dignity, erase taboos, and pave the way for a future where
            period poverty is a thing of the past. We invite you to join us in breaking down barriers and challenging
            the silence surrounding menstruation.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-800 text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-pink-200 overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-pink-800">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
