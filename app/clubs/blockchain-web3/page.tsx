import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Code, Coins, FileCode2, type LucideIcon, Shield, Trophy } from "lucide-react"

export default function BlockchainWeb3ClubPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Blockchain & Web3 Club</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the decentralized future through blockchain technology, smart contracts, and Web3 development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">About Our Club</h2>
            <p className="text-muted-foreground">
              The Blockchain & Web3 Club is dedicated to exploring and developing decentralized applications,
              understanding blockchain fundamentals, and preparing students for careers in this revolutionary technology
              space.
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
              alt="Blockchain & Web3 Club members working on a project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <Tabs defaultValue="activities" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
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
          <TabsContent value="projects" className="space-y-4 pt-4">
            <h3 className="text-2xl font-bold">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card key={project.title} className="border border-muted">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-muted rounded-md text-xs">
                          {tech}
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
              Interested in blockchain technology and Web3 development? Join our club to learn, build, and innovate in
              this revolutionary space.
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
    title: "Smart Contracts",
    description: "Developing and auditing secure smart contracts on various blockchain platforms.",
    icon: FileCode2,
  },
  {
    title: "DApp Development",
    description: "Building decentralized applications with modern Web3 frameworks and tools.",
    icon: Code,
  },
  {
    title: "Blockchain Fundamentals",
    description: "Understanding the core concepts and mechanisms behind blockchain technology.",
    icon: Shield,
  },
  {
    title: "Tokenomics",
    description: "Exploring the economic models and incentive structures in crypto ecosystems.",
    icon: Coins,
  },
]

const activities = [
  {
    title: "Smart Contract Workshops",
    description: "Hands-on sessions for writing and deploying smart contracts on Ethereum and other platforms.",
  },
  {
    title: "Web3 Development Labs",
    description: "Practical labs focused on building decentralized applications with modern tools.",
  },
  {
    title: "Blockchain Fundamentals Series",
    description: "Educational sessions covering the core concepts and mechanisms of blockchain technology.",
  },
  {
    title: "Hackathons",
    description: "Regular hackathons focused on building innovative blockchain solutions.",
  },
  {
    title: "Industry Talks",
    description: "Guest lectures from blockchain professionals and Web3 entrepreneurs.",
  },
  {
    title: "Research Groups",
    description: "Collaborative research on emerging blockchain technologies and use cases.",
  },
]

const teamMembers = [
  {
    name: "Michael Zhang",
    role: "Club President",
    bio: "Ethereum developer and DeFi enthusiast",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Aisha Johnson",
    role: "Vice President",
    bio: "Smart contract security specialist",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Raj Patel",
    role: "Technical Lead",
    bio: "Full-stack Web3 developer with multiple hackathon wins",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Sofia Rodriguez",
    role: "Research Coordinator",
    bio: "Focused on blockchain scalability solutions",
    avatar: "/placeholder.svg?height=200&width=200",
  },
]

const projects = [
  {
    title: "Decentralized Marketplace",
    description: "A peer-to-peer marketplace for digital goods using smart contracts for secure transactions.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Solidity", "React", "IPFS", "Ethers.js"],
  },
  {
    title: "DAO Governance Platform",
    description:
      "A platform for creating and managing decentralized autonomous organizations with customizable voting mechanisms.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Solidity", "The Graph", "Next.js", "Hardhat"],
  },
  {
    title: "NFT Collection Platform",
    description: "A platform for artists to create, mint, and sell NFT collections with royalty mechanisms.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["ERC-721", "IPFS", "React", "Solidity"],
  },
  {
    title: "DeFi Yield Aggregator",
    description: "A smart contract system that optimizes yield farming across multiple DeFi protocols.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Solidity", "Web3.js", "Vue", "Truffle"],
  },
]

const achievements = [
  {
    title: "ETHGlobal Hackathon - First Place",
    date: "October 2023",
    description:
      "Our team won first place at the ETHGlobal Hackathon with our innovative DeFi solution for microloans in developing economies.",
  },
  {
    title: "Smart Contract Audit Challenge - Winners",
    date: "July 2023",
    description:
      "Our security team won the national Smart Contract Audit Challenge by identifying the most vulnerabilities in the target contracts.",
  },
  {
    title: "Web3 Startup Incubation",
    date: "May 2023",
    description:
      "Our project 'DecentraLearn' was selected for incubation by a leading Web3 venture capital firm with $50,000 in initial funding.",
  },
  {
    title: "Blockchain Research Grant",
    date: "February 2023",
    description:
      "Received a $75,000 research grant to develop novel consensus mechanisms for high-throughput blockchain applications.",
  },
]

const events = [
  {
    title: "Solidity Bootcamp",
    date: "June 15, 2023 | 2:00 PM - 5:00 PM",
    description: "A comprehensive workshop on Solidity programming for smart contract development on Ethereum.",
    link: "/events",
  },
  {
    title: "Web3 Career Panel",
    date: "June 22, 2023 | 4:00 PM - 6:00 PM",
    description: "Join professionals from top Web3 companies to discuss career opportunities in the blockchain space.",
    link: "/events",
  },
  {
    title: "DApp Development Hackathon",
    date: "July 8-9, 2023 | 9:00 AM - 9:00 PM",
    description:
      "A 48-hour hackathon focused on building innovative decentralized applications with real-world use cases.",
    link: "/events",
  },
]
