import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Calendar,
  Globe,
  Share2,
  Award,
  Newspaper,
  MessageSquare,
  Camera,
  Presentation,
  FileText,
  Briefcase,
} from "lucide-react"

export default function PROutreachClubPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">PR & Outreach Club</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connecting our technical community with the world through effective communication, events, and outreach
            initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">About Our Club</h2>
            <p className="text-muted-foreground">
              The PR & Outreach Club is dedicated to promoting the activities and achievements of Programmers' Paradise
              to the wider community. We organize events, manage social media, create content, and build relationships
              with industry partners and other educational institutions.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {focusAreas.map((area) => (
                <Card key={area.title} className="border border-muted">
                  <CardHeader className="pb-2">
                    <area.icon className="h-6 w-6 text-primary mb-2" />
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{area.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden h-[400px]">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="PR & Outreach Club members organizing an event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <Tabs defaultValue="activities" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="initiatives">Initiatives</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>
          <TabsContent value="activities" className="space-y-4 pt-4">
            <h3 className="text-2xl font-bold">Our Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activities.map((activity) => (
                <Card key={activity.title} className="border border-muted">
                  <CardHeader>
                    <CardTitle className="text-lg">{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{activity.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="team" className="space-y-4 pt-4">
            <h3 className="text-2xl font-bold">Meet Our Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {teamMembers.map((member) => (
                <Card key={member.name} className="border border-muted">
                  <CardHeader className="text-center pb-2">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-2">
                      <img
                        src={member.avatar || "/placeholder.svg?height=96&width=96"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="initiatives" className="space-y-4 pt-4">
            <h3 className="text-2xl font-bold">Key Initiatives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {initiatives.map((initiative) => (
                <Card key={initiative.title} className="border border-muted">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <initiative.icon className="h-5 w-5 text-primary" />
                      {initiative.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{initiative.description}</CardDescription>
                    <div className="mt-4">
                      <p className="text-sm font-medium">Impact:</p>
                      <p className="text-sm text-muted-foreground">{initiative.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="achievements" className="space-y-4 pt-4">
            <h3 className="text-2xl font-bold">Our Achievements</h3>
            <div className="space-y-6">
              {achievements.map((year, index) => (
                <div key={year.year} className="space-y-4">
                  <h4 className="text-xl font-semibold">{year.year}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {year.items.map((achievement) => (
                      <Card key={achievement.title} className="border border-muted">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Award className="h-5 w-5 text-primary" />
                            {achievement.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{achievement.description}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 space-y-6">
          <h2 className="text-3xl font-bold text-center">Join Our Club</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Interested in public relations, event management, content creation, or community building? Join our PR &
            Outreach Club to develop valuable skills and make an impact!
          </p>
          <div className="flex justify-center pt-4">
            <a
              href="/join"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

const focusAreas = [
  {
    title: "Event Management",
    description: "Planning and executing tech events, workshops, and community gatherings.",
    icon: Calendar,
  },
  {
    title: "Media Relations",
    description: "Building relationships with media outlets to showcase our community's achievements.",
    icon: Newspaper,
  },
  {
    title: "Social Media",
    description: "Managing our online presence across various platforms to engage with our audience.",
    icon: Share2,
  },
  {
    title: "Community Outreach",
    description: "Connecting with schools, colleges, and other tech communities for collaborations.",
    icon: Globe,
  },
]

const activities = [
  {
    title: "Tech Talks & Webinars",
    description:
      "Organizing regular tech talks featuring industry experts and community members to share knowledge and insights.",
  },
  {
    title: "Social Media Campaigns",
    description:
      "Creating engaging content and campaigns to highlight our community's projects, events, and achievements.",
  },
  {
    title: "Press Releases",
    description:
      "Drafting and distributing press releases about major events, achievements, and initiatives to local and tech media.",
  },
  {
    title: "Networking Events",
    description:
      "Facilitating connections between members, alumni, and industry professionals through structured networking sessions.",
  },
  {
    title: "Content Creation",
    description:
      "Producing blogs, newsletters, videos, and podcasts to showcase our community's expertise and activities.",
  },
  {
    title: "Community Partnerships",
    description: "Building relationships with other tech communities, educational institutions, and industry partners.",
  },
]

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Club Lead",
    bio: "Communications major with a passion for technology and community building.",
    avatar: "/placeholder.svg?height=96&width=96",
  },
  {
    name: "Samira Patel",
    role: "Event Coordinator",
    bio: "Experienced in organizing tech conferences and community meetups.",
    avatar: "/placeholder.svg?height=96&width=96",
  },
  {
    name: "Marcus Chen",
    role: "Social Media Manager",
    bio: "Digital marketing enthusiast with expertise in growing online communities.",
    avatar: "/placeholder.svg?height=96&width=96",
  },
  {
    name: "Olivia Rodriguez",
    role: "Content Creator",
    bio: "Skilled writer and videographer documenting our community's journey.",
    avatar: "/placeholder.svg?height=96&width=96",
  },
  {
    name: "Jamal Williams",
    role: "Media Relations",
    bio: "Journalism background with strong connections to tech publications.",
    avatar: "/placeholder.svg?height=96&width=96",
  },
  {
    name: "Emma Thompson",
    role: "Outreach Coordinator",
    bio: "Passionate about connecting students with industry opportunities.",
    avatar: "/placeholder.svg?height=96&width=96",
  },
  {
    name: "David Kim",
    role: "Graphic Designer",
    bio: "Creating visual assets that communicate our community's identity.",
    avatar: "/placeholder.svg?height=96&width=96",
  },
  {
    name: "Priya Sharma",
    role: "Community Ambassador",
    bio: "Representing our club at external events and building partnerships.",
    avatar: "/placeholder.svg?height=96&width=96",
  },
]

const initiatives = [
  {
    title: "Tech Community Newsletter",
    description:
      "A monthly newsletter highlighting achievements, upcoming events, and opportunities within our community and the broader tech ecosystem.",
    impact: "Reaches over 5,000 subscribers including students, alumni, and industry professionals.",
    icon: FileText,
  },
  {
    title: "Annual Tech Showcase",
    description:
      "A flagship event where members present their projects to industry representatives, potential employers, and the wider community.",
    impact: "Last year's showcase resulted in 15 job offers and 3 project sponsorships for our members.",
    icon: Presentation,
  },
  {
    title: "School Outreach Program",
    description:
      "Visits to local schools to introduce students to programming and technology through interactive workshops and demonstrations.",
    impact:
      "Engaged with over 1,000 school students last year, with 30% expressing interest in pursuing tech education.",
    icon: Users,
  },
  {
    title: "Tech Podcast Series",
    description:
      "A podcast featuring interviews with industry leaders, alumni success stories, and discussions on emerging technologies.",
    impact: "Averages 2,500 listeners per episode with listeners from 25 countries.",
    icon: MessageSquare,
  },
  {
    title: "Community Documentation",
    description:
      "Photo and video documentation of all community events, creating a visual history of our growth and achievements.",
    impact: "Created a comprehensive archive that has been used in university publications and recruitment materials.",
    icon: Camera,
  },
  {
    title: "Industry Connect Program",
    description:
      "Building relationships with tech companies for sponsorships, mentorship opportunities, and potential recruitment.",
    impact: "Established partnerships with 12 companies offering internships exclusively to our members.",
    icon: Briefcase,
  },
]

const achievements = [
  {
    year: "2024",
    items: [
      {
        title: "Best Student Community Award",
        description:
          "Recognized by the National Association of Tech Communities for outstanding community engagement and impact.",
      },
      {
        title: "5,000+ Social Media Following",
        description:
          "Grew our online presence across platforms, increasing engagement by 150% compared to previous year.",
      },
      {
        title: "Tech Fest Media Coverage",
        description: "Secured coverage in 3 national tech publications for our annual technology festival.",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Successful Industry Partnership",
        description:
          "Established formal partnerships with 5 leading tech companies for exclusive opportunities for our members.",
      },
      {
        title: "Community Outreach Expansion",
        description:
          "Extended our school outreach program to 10 new schools, introducing programming to over 500 students.",
      },
      {
        title: "Podcast Launch",
        description: "Successfully launched our tech podcast, reaching 10,000+ downloads in the first season.",
      },
      {
        title: "Event Management Excellence",
        description: "Organized 15 successful events with an average attendance of 200+ participants per event.",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        title: "Club Formation",
        description: "Successfully established the PR & Outreach Club with an initial team of 8 dedicated members.",
      },
      {
        title: "First Tech Showcase",
        description: "Organized our inaugural tech showcase featuring 25 student projects with 300+ attendees.",
      },
      {
        title: "Media Relations Framework",
        description: "Developed a comprehensive media relations strategy resulting in coverage in local publications.",
      },
    ],
  },
]
