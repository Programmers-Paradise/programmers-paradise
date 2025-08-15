import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Code, Cpu, Database, FileCode2, type LucideIcon, Trophy } from "lucide-react"

export default function AIMLClubPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">AI & ML Club</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the frontiers of artificial intelligence and machine learning through hands-on projects,
            workshops, and collaborative research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">About Our Club</h2>
            <p className="text-muted-foreground">
              The AI & ML Club is dedicated to fostering a community of students passionate about artificial
              intelligence and machine learning. We provide a platform for learning, experimentation, and innovation in
              these cutting-edge fields.
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
              alt="AI & ML Club members working on a project"
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
              Interested in AI and machine learning? Join our club to learn, collaborate, and innovate with like-minded
              peers.
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
    title: "Deep Learning",
    description: "Exploring neural networks, CNN, RNN, and transformer architectures for various applications.",
    icon: Cpu,
  },
  {
    title: "Computer Vision",
    description: "Working with image recognition, object detection, and visual data processing.",
    icon: FileCode2,
  },
  {
    title: "Natural Language Processing",
    description: "Building applications that understand, interpret, and generate human language.",
    icon: Code,
  },
  {
    title: "Data Science",
    description: "Analyzing and visualizing data to extract meaningful insights and patterns.",
    icon: Database,
  },
]

const activities = [
  {
    title: "Weekly Workshops",
    description: "Hands-on sessions covering various AI & ML topics, from basics to advanced techniques.",
  },
  {
    title: "Hackathons",
    description: "Regular coding competitions focused on solving real-world problems using AI & ML.",
  },
  {
    title: "Research Groups",
    description: "Collaborative research on cutting-edge AI & ML topics with faculty mentorship.",
  },
  {
    title: "Industry Talks",
    description: "Guest lectures from industry professionals sharing insights and career advice.",
  },
  {
    title: "Project Showcases",
    description: "Opportunities to demonstrate your AI & ML projects to peers and industry partners.",
  },
  {
    title: "Study Groups",
    description: "Peer-led learning sessions to master complex AI & ML concepts and algorithms.",
  },
]

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Club President",
    bio: "ML researcher specializing in computer vision",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Samira Patel",
    role: "Vice President",
    bio: "NLP enthusiast with industry experience",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Marcus Chen",
    role: "Technical Lead",
    bio: "Deep learning specialist and Kaggle competitor",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Leila Rodriguez",
    role: "Workshop Coordinator",
    bio: "Passionate about making AI accessible to beginners",
    avatar: "/placeholder.svg?height=200&width=200",
  },
]

const projects = [
  {
    title: "Emotion Recognition System",
    description: "A deep learning model that recognizes human emotions from facial expressions in real-time.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["TensorFlow", "OpenCV", "Python", "React"],
  },
  {
    title: "Smart Document Analyzer",
    description:
      "An NLP-based tool that extracts, categorizes, and summarizes information from various document types.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["PyTorch", "BERT", "Flask", "JavaScript"],
  },
  {
    title: "Predictive Healthcare Assistant",
    description: "An AI system that predicts potential health issues based on patient data and symptoms.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Scikit-learn", "Pandas", "Django", "D3.js"],
  },
  {
    title: "Autonomous Drone Navigation",
    description: "A reinforcement learning system that enables drones to navigate complex environments autonomously.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["PyTorch", "ROS", "C++", "Computer Vision"],
  },
]

const achievements = [
  {
    title: "National AI Challenge - First Place",
    date: "November 2023",
    description:
      "Our team won first place in the National AI Challenge with our innovative solution for sustainable urban planning using machine learning.",
  },
  {
    title: "Research Paper Published in ICML",
    date: "July 2023",
    description:
      "Our club members' research on 'Efficient Transformer Architectures for Edge Devices' was accepted and published at the International Conference on Machine Learning.",
  },
  {
    title: "Industry Partnership with TechCorp",
    date: "March 2023",
    description:
      "Secured a major partnership with TechCorp to provide internship opportunities and funding for club projects.",
  },
  {
    title: "University Innovation Grant",
    date: "January 2023",
    description:
      "Received a $50,000 grant from the university to develop AI solutions for campus sustainability initiatives.",
  },
]

const events = [
  {
    title: "Introduction to Neural Networks Workshop",
    date: "June 10, 2023 | 3:00 PM - 5:00 PM",
    description: "A beginner-friendly workshop covering the fundamentals of neural networks with hands-on exercises.",
    link: "/events",
  },
  {
    title: "AI Ethics Panel Discussion",
    date: "June 17, 2023 | 4:00 PM - 6:00 PM",
    description: "Join industry experts and academics for a discussion on ethical considerations in AI development.",
    link: "/events",
  },
  {
    title: "Summer AI Hackathon",
    date: "July 1-2, 2023 | 9:00 AM - 9:00 PM",
    description: "A 48-hour coding competition to build innovative AI solutions for environmental challenges.",
    link: "/events",
  },
]
