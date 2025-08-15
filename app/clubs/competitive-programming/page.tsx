import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Code, FileCode2, GraduationCap, type LucideIcon, Trophy, Users } from "lucide-react"

export default function CompetitiveProgrammingClubPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Competitive Programming Club</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharpening algorithmic thinking and problem-solving skills through competitive programming challenges and
            contests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">About Our Club</h2>
            <p className="text-muted-foreground">
              The Competitive Programming Club is dedicated to fostering algorithmic thinking and problem-solving skills
              through regular practice, contests, and collaborative learning. We prepare students for programming
              competitions and technical interviews.
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
              alt="Competitive Programming Club members solving problems"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <Tabs defaultValue="activities" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="contests">Contests</TabsTrigger>
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
                        src={member.avatar || "/placeholder.svg"}
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
          <TabsContent value="contests" className="space-y-4 pt-4">
            <h3 className="text-2xl font-bold">Contest Participation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contests.map((contest) => (
                <Card key={contest.title} className="border border-muted">
                  <CardHeader>
                    <CardTitle>{contest.title}</CardTitle>
                    <CardDescription>{contest.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{contest.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {contest.platforms.map((platform) => (
                        <span key={platform} className="px-2 py-1 bg-muted rounded-md text-xs">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="achievements" className="space-y-4 pt-4">
            <h3 className="text-2xl font-bold">Our Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border border-muted">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    </div>
                    <CardDescription>{achievement.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted rounded-xl p-8 mt-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">Join Our Club</h2>
            <p className="text-muted-foreground">
              Ready to level up your programming skills? Join our club to practice, compete, and grow with fellow coding
              enthusiasts.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button asChild size="lg">
                <Link href="/join">Apply Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {events.map((event) => (
              <Card key={event.title} className="border border-muted">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </div>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={event.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

type FocusArea = {
  title: string
  description: string
  icon: LucideIcon
}

const focusAreas: FocusArea[] = [
  {
    title: "Algorithms",
    description: "Mastering fundamental and advanced algorithms for efficient problem-solving.",
    icon: Code,
  },
  {
    title: "Data Structures",
    description: "Learning optimal data structures for various computational problems.",
    icon: FileCode2,
  },
  {
    title: "Problem Solving",
    description: "Developing strategic approaches to tackle complex programming challenges.",
    icon: GraduationCap,
  },
  {
    title: "Team Competitions",
    description: "Collaborating in teams to solve problems under time constraints.",
    icon: Users,
  },
]

const activities = [
  {
    title: "Weekly Practice Sessions",
    description: "Regular problem-solving sessions covering various algorithms and data structures.",
  },
  {
    title: "Mock Competitions",
    description: "Simulated contest environments to prepare for real competitions.",
  },
  {
    title: "Algorithm Workshops",
    description: "Deep dives into specific algorithms and their applications.",
  },
  {
    title: "Code Reviews",
    description: "Peer review sessions to improve code quality and efficiency.",
  },
  {
    title: "Interview Preparation",
    description: "Sessions focused on technical interview questions from top tech companies.",
  },
  {
    title: "Guest Lectures",
    description: "Talks by competitive programming champions and industry professionals.",
  },
]

const teamMembers = [
  {
    name: "David Kim",
    role: "Club President",
    bio: "ICPC finalist and algorithm specialist",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Priya Sharma",
    role: "Vice President",
    bio: "Google Code Jam semi-finalist",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Jason Wong",
    role: "Training Coordinator",
    bio: "Specialized in dynamic programming and graph algorithms",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Elena Petrova",
    role: "Contest Organizer",
    bio: "Codeforces Master and mathematics enthusiast",
    avatar: "/placeholder.svg?height=200&width=200",
  },
]

const contests = [
  {
    title: "ACM-ICPC Regional Contest",
    date: "October 2023",
    description:
      "Our team participated in the prestigious International Collegiate Programming Contest regional round.",
    platforms: ["C++", "Java", "Python"],
  },
  {
    title: "Google Code Jam",
    date: "April 2023",
    description: "Club members advanced to the second round of Google's annual coding competition.",
    platforms: ["Any Language"],
  },
  {
    title: "Facebook Hacker Cup",
    date: "August 2023",
    description: "Participated in Facebook's international programming competition with strong results.",
    platforms: ["C++", "Python", "JavaScript"],
  },
  {
    title: "Codeforces Contests",
    date: "Monthly",
    description: "Regular participation in Codeforces rounds to improve ratings and problem-solving skills.",
    platforms: ["C++", "Java", "Python"],
  },
]

const achievements = [
  {
    title: "ICPC Regional - 3rd Place",
    date: "November 2023",
    description: "Our team secured 3rd place in the ACM-ICPC Regional Contest, qualifying for the Division Finals.",
  },
  {
    title: "National Coding Olympiad - Gold Medal",
    date: "July 2023",
    description:
      "Two of our members won gold medals at the National Coding Olympiad, showcasing exceptional problem-solving skills.",
  },
  {
    title: "Highest Codeforces Rating",
    date: "September 2023",
    description:
      "Our club member Elena Petrova achieved the highest Codeforces rating in the university's history, reaching Candidate Master status.",
  },
  {
    title: "Inter-University Hackathon - 1st Place",
    date: "March 2023",
    description:
      "Our team won first place in the algorithmic track of the Inter-University Hackathon, solving all problems in record time.",
  },
]

const events = [
  {
    title: "Dynamic Programming Workshop",
    date: "June 12, 2023 | 4:00 PM - 6:00 PM",
    description: "An in-depth workshop on mastering dynamic programming techniques for competitive programming.",
    link: "/events",
  },
  {
    title: "Mock ICPC Contest",
    date: "June 18, 2023 | 10:00 AM - 3:00 PM",
    description: "A simulated ICPC-style contest to prepare for upcoming regional competitions.",
    link: "/events",
  },
  {
    title: "Technical Interview Prep Session",
    date: "June 25, 2023 | 2:00 PM - 4:00 PM",
    description:
      "Practice session focused on algorithmic problems commonly asked in technical interviews at top tech companies.",
    link: "/events",
  },
]
