import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, CalendarDays, FileCode2, type LucideIcon, LineChart, Trophy, Calculator } from "lucide-react"

export default function MatlabClubPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">MatLab Club</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring mathematical modeling, simulation, and data analysis through MATLAB programming and applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">About Our Club</h2>
            <p className="text-muted-foreground">
              The MatLab Club is dedicated to helping students master MATLAB for scientific computing, data analysis,
              and engineering applications. We provide a collaborative environment for learning and applying MATLAB to
              solve real-world problems.
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
              alt="MatLab Club members working on simulations"
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
            <div className="flex justify-center gap-4">
              {teamMembers.map((member) => (
                <Card key={member.name} className="border border-muted">
                  <CardHeader className="text-center pb-2">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-2">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.position}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-1">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold">Batch:</span> {member.batch}<br />
                      <span className="font-semibold">Branch:</span> {member.branch}<br />
                      <span className="font-semibold">Email:</span> <a href={`mailto:${member.email}`} className="underline">{member.email}</a><br />
                     
                    </div>
                    <div className="flex justify-center gap-2 pt-2">
                      <a href={member.github} target="_blank" rel="noreferrer" className="hover:underline">
                        <img src="/placeholder.svg" alt="GitHub" className="inline-block w-5 h-5 mr-1" />
                        GitHub
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                        <img src="/placeholder.svg" alt="LinkedIn" className="inline-block w-5 h-5 mr-1" />
                        LinkedIn
                      </a>
                    </div>
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
                      {project.applications.map((app) => (
                        <span key={app} className="px-2 py-1 bg-muted rounded-md text-xs">
                          {app}
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
              Interested in mathematical modeling and scientific computing? Join our club to master MATLAB and apply it
              to real-world problems.
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
    title: "Data Analysis",
    description: "Processing and analyzing complex datasets using MATLAB's powerful tools.",
    icon: BarChart3,
  },
  {
    title: "Simulation",
    description: "Creating mathematical models and simulations of physical and engineering systems.",
    icon: LineChart,
  },
  {
    title: "Scientific Computing",
    description: "Solving complex mathematical problems and implementing numerical methods.",
    icon: Calculator,
  },
  {
    title: "Algorithm Development",
    description: "Developing and optimizing algorithms for various scientific applications.",
    icon: FileCode2,
  },
]

const activities = [
  {
    title: "MATLAB Fundamentals Workshops",
    description: "Regular sessions covering the basics of MATLAB programming and its environment.",
  },
  {
    title: "Advanced Toolbox Tutorials",
    description:
      "Deep dives into specialized MATLAB toolboxes like Signal Processing, Image Processing, and Statistics.",
  },
  {
    title: "Project Collaborations",
    description: "Group projects applying MATLAB to solve real-world engineering and scientific problems.",
  },
  {
    title: "Research Support",
    description: "Assistance for students using MATLAB in their research projects and theses.",
  },
  {
    title: "Industry Applications",
    description: "Sessions exploring how MATLAB is used in various industries and career paths.",
  },
  {
    title: "Certification Preparation",
    description: "Study groups and practice sessions for MathWorks certification exams.",
  },
]

const teamMembers = [
  {
    name: "Jai Keshav Sharma",
    position: "President(MATLAB)",
    batch: "2023-2027",
    branch: "CSE(AI)",
    email: "jai.300012723027@csvtu.ac.in",
    github: "https://github.com/Jai-Keshav-Sharma",
    linkedin: "https://www.linkedin.com/in/jai-keshav-sharma",
    image: "/Technical_Team_Photos/JaiKeshavSharma.webp"
  },
]

const projects = [
  {
    title: "Climate Data Analysis Tool",
    description: "A MATLAB application for analyzing and visualizing climate data from multiple sources.",
    image: "/placeholder.svg?height=300&width=500",
    applications: ["Environmental Science", "Data Visualization", "Statistical Analysis"],
  },
  {
    title: "Structural Vibration Simulator",
    description: "A simulation tool for predicting and analyzing vibrations in complex structural systems.",
    image: "/placeholder.svg?height=300&width=500",
    applications: ["Civil Engineering", "Mechanical Engineering", "Physics"],
  },
  {
    title: "Medical Image Processing Suite",
    description: "A collection of MATLAB scripts for processing and analyzing medical imaging data.",
    image: "/placeholder.svg?height=300&width=500",
    applications: ["Biomedical Engineering", "Healthcare", "Computer Vision"],
  },
  {
    title: "Financial Market Predictor",
    description: "A machine learning model implemented in MATLAB for financial market trend prediction.",
    image: "/placeholder.svg?height=300&width=500",
    applications: ["Finance", "Machine Learning", "Time Series Analysis"],
  },
]

const achievements = [
  {
    title: "MathWorks Student Competition - First Place",
    date: "November 2023",
    description:
      "Our team won first place in the annual MathWorks Student Competition with our innovative solution for renewable energy optimization.",
  },
  {
    title: "MATLAB Hackathon Champions",
    date: "July 2023",
    description: "Club members won the national MATLAB Hackathon with their medical image processing application.",
  },
  {
    title: "Research Publication in IEEE Journal",
    date: "May 2023",
    description:
      "Our club's research on signal processing algorithms implemented in MATLAB was published in the prestigious IEEE Transactions journal.",
  },
  {
    title: "University Innovation Grant",
    date: "February 2023",
    description: "Received a $40,000 grant to develop MATLAB-based educational tools for engineering students.",
  },
]

const events = [
  {
    title: "MATLAB for Data Science Workshop",
    date: "June 14, 2023 | 3:00 PM - 5:00 PM",
    description:
      "Learn how to use MATLAB for data preprocessing, analysis, and visualization in data science applications.",
    link: "/events",
  },
  {
    title: "Simulink Fundamentals",
    date: "June 21, 2023 | 2:00 PM - 4:00 PM",
    description: "An introduction to Simulink for modeling, simulating, and analyzing dynamic systems.",
    link: "/events",
  },
  {
    title: "MATLAB App Designer Workshop",
    date: "June 28, 2023 | 3:00 PM - 5:00 PM",
    description:
      "Learn how to create professional applications with graphical user interfaces using MATLAB App Designer.",
    link: "/events",
  },
]
