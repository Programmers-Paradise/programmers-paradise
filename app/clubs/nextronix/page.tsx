import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Cpu,
  Wrench,
  Lightbulb,
  Calendar,
  MapPin,
  Clock,
  Github,
  Award,
  Linkedin,
} from "lucide-react";

export default function NextronixPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge>Robotics Club</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nextronix
              </h1>
              <p className="text-muted-foreground md:text-lg">
                The official robotics and IoT club of Programmers' Paradise at
                CSVTU UTD-1 Bhilai, dedicated to exploring the exciting world of
                robotics, automation, embedded systems, and Internet of Things.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="#join">Join Nextronix</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Nextronix Robotics Club"
                width={600}
                height={400}
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">
              About Nextronix
            </h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Exploring the intersection of hardware and software through
              hands-on projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-green-500/5 to-transparent border-green-500/20">
              <CardHeader>
                <div className="rounded-full bg-green-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle>Robotics & Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Design, build, and program robots for various applications,
                  from simple line followers to complex autonomous systems
                  capable of performing specific tasks.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/5 to-transparent border-green-500/20">
              <CardHeader>
                <div className="rounded-full bg-green-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle>IoT & Embedded Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop Internet of Things devices and embedded systems that
                  connect the physical world to the digital realm, creating
                  smart solutions for real-world problems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/5 to-transparent border-green-500/20">
              <CardHeader>
                <div className="rounded-full bg-green-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle>Innovation & Problem Solving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Apply engineering principles and creative thinking to develop
                  innovative solutions for real-world challenges through
                  robotics and automation technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">What We Do</h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Explore our key activities and learning opportunities
            </p>
          </div>

          <Tabs defaultValue="workshops" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="workshops">Workshops</TabsTrigger>
              <TabsTrigger value="competitions">Competitions</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
            </TabsList>

            <TabsContent value="workshops" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Hands-on Workshops</CardTitle>
                  <CardDescription>
                    Learn through practical, hands-on sessions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Our workshops provide practical, hands-on experience in
                    robotics, IoT, and embedded systems. From beginner to
                    advanced levels, we cover a wide range of topics to help
                    members build their skills.
                  </p>
                  <h4 className="font-medium">Recent Workshops:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Introduction to Arduino Programming</li>
                    <li>Building Autonomous Robots</li>
                    <li>IoT with ESP32 and MQTT</li>
                    <li>PCB Design and Fabrication</li>
                    <li>Sensor Integration and Data Processing</li>
                  </ul>
                  <div className="pt-4">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="Robotics Workshop"
                      width={600}
                      height={300}
                      className="rounded-md object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="competitions" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Robotics Competitions</CardTitle>
                  <CardDescription>
                    Showcase your skills in local and national competitions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We regularly participate in robotics competitions at local,
                    state, and national levels. These competitions provide an
                    excellent opportunity for members to apply their skills,
                    work in teams, and gain recognition.
                  </p>
                  <h4 className="font-medium">Competition Categories:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Line Following Robots</li>
                    <li>Maze Solving Robots</li>
                    <li>Robo Soccer</li>
                    <li>Autonomous Drones</li>
                    <li>IoT Innovation Challenges</li>
                  </ul>
                  <div className="pt-4">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="Robotics Competition"
                      width={600}
                      height={300}
                      className="rounded-md object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="projects" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Collaborative Projects</CardTitle>
                  <CardDescription>
                    Work on innovative projects with fellow enthusiasts
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We encourage members to collaborate on innovative projects
                    that solve real-world problems. These projects help members
                    apply their knowledge, develop teamwork skills, and build an
                    impressive portfolio.
                  </p>
                  <h4 className="font-medium">Project Areas:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Smart Home Automation</li>
                    <li>Agricultural Robotics</li>
                    <li>Healthcare Monitoring Systems</li>
                    <li>Environmental Monitoring</li>
                    <li>Industrial Automation</li>
                  </ul>
                  <div className="pt-4">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="Robotics Projects"
                      width={600}
                      height={300}
                      className="rounded-md object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mentorship" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Mentorship Program</CardTitle>
                  <CardDescription>
                    Learn from experienced members and industry experts
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Our mentorship program connects beginners with experienced
                    members and industry professionals. This program helps new
                    members quickly develop their skills and provides guidance
                    for their projects and career paths.
                  </p>
                  <h4 className="font-medium">Mentorship Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>One-on-one guidance from experienced members</li>
                    <li>Project development support</li>
                    <li>Career advice and industry insights</li>
                    <li>Technical skill development</li>
                    <li>Networking opportunities</li>
                  </ul>
                  <div className="pt-4">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="Mentorship Session"
                      width={600}
                      height={300}
                      className="rounded-md object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Team Section */}
      <section className="flex justify-center gap-4 py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Our Team</h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Meet the passionate individuals leading Nextronix
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/Technical_Team_Photos/MkSinha.webp"
                  alt="Manoj Kumar Sinha"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-xl">Manoj Kumar Sinha</CardTitle>
                <CardDescription>Nextronix - President</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold">Batch:</span> 2024-2028
                  <br />
                  <span className="font-semibold">Branch:</span> CSE(DS)
                  <br />
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:mksinha77756@gmail.com" className="underline">
                    mksinha77756@gmail.com
                  </a>
                  
               
                 
                  
                </p>
              </CardContent>
              <CardFooter className="p-4 flex gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://github.com/mksinha01"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://www.linkedin.com/in/manoj-sinha-a20b81327/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/Technical_Team_Photos/KavyaSahu2.webp"
                  alt="Ananya Gupta"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-xl">Kavya Sahu</CardTitle>
                <CardDescription>
                  Nextronix - Vice President(PR and Outreach)
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold">Batch:</span> 2024-2028
                  <br />
                  <span className="font-semibold">Branch:</span> CSE(AI)
                  <br />
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:kavyasahu.0712@gmail.com"
                    className="underline"
                  >
                    kavyasahu.0712@gmail.com
                  </a>
                  
                </p>
              </CardContent>
              <CardFooter className="p-4 flex gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://github.com/Kavyasahu077"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://www.linkedin.com/in/kavya-sahu-1873a2327"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/Technical_Team_Photos/HridyeshKumar.webp"
                  alt="Vikram Joshi"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-xl">Hridyesh Kumar</CardTitle>
                <CardDescription>
                  Nextronix- Vice President(Design & Technical)
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold">Batch:</span> 2023-2027
                  <br />
                  <span className="font-semibold">Branch:</span> CSE(AI)
                  <br />
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:hkumar0951@gmail.com" className="underline">
                    hkumar0951@gmail.com
                  </a>
                  
                </p>
              </CardContent>
              <CardFooter className="p-4 flex gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://github.com/HridyeshKumar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://www.linkedin.com/in/hridyesh-kumar-10a52028a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="py-12 md:py-16" id="projects">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Innovative robotics and IoT solutions developed by our members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <Card>
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Smart Agriculture System"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary">IoT</Badge>
                  <Badge variant="secondary">Agriculture</Badge>
                </div>
                <CardTitle>Smart Agriculture System</CardTitle>
                <CardDescription>
                  Automated farming with IoT sensors
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  An IoT-based smart agriculture system that monitors soil
                  moisture, temperature, and sunlight to automate irrigation and
                  provide insights for optimal crop growth.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects/smart-agriculture">View Details</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Project Card 2 */}
            <Card>
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Autonomous Delivery Robot"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary">Robotics</Badge>
                  <Badge variant="secondary">Automation</Badge>
                </div>
                <CardTitle>Autonomous Delivery Robot</CardTitle>
                <CardDescription>
                  Campus package delivery system
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  An autonomous robot designed to navigate the campus and
                  deliver packages to specific locations. Features obstacle
                  avoidance, path planning, and secure package compartments.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects/delivery-robot">View Details</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Project Card 3 */}
            <Card>
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Smart Waste Management"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary">IoT</Badge>
                  <Badge variant="secondary">Environment</Badge>
                </div>
                <CardTitle>Smart Waste Management</CardTitle>
                <CardDescription>
                  IoT-based waste collection optimization
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  An intelligent waste management system that uses sensors to
                  monitor fill levels in bins, optimizes collection routes, and
                  promotes recycling through a mobile app.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects/waste-management">View Details</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/projects?category=iot">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Join our workshops, competitions, and tech talks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Event Card 1 */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge>Workshop</Badge>
                  <Badge
                    variant="outline"
                    className="bg-green-500/10 text-green-500 border-green-500/20"
                  >
                    Registration Open
                  </Badge>
                </div>
                <CardTitle className="mt-4">IoT Workshop Series</CardTitle>
                <CardDescription>
                  Hands-on workshop on building IoT devices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>April 28-29, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>10:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Electronics Lab, CSVTU UTD-1</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register Now</Button>
              </CardFooter>
            </Card>

            {/* Event Card 2 */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge>Competition</Badge>
                  <Badge
                    variant="outline"
                    className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                  >
                    Coming Soon
                  </Badge>
                </div>
                <CardTitle className="mt-4">Robo Wars 2025</CardTitle>
                <CardDescription>Annual robotics competition</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>May 15-16, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Main Auditorium, CSVTU UTD-1</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Notify Me
                </Button>
              </CardFooter>
            </Card>

            {/* Event Card 3 */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge>Tech Talk</Badge>
                  <Badge
                    variant="outline"
                    className="bg-blue-500/10 text-blue-500 border-blue-500/20"
                  >
                    Free Entry
                  </Badge>
                </div>
                <CardTitle className="mt-4">Future of Robotics</CardTitle>
                <CardDescription>
                  Industry experts discuss emerging trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>April 20, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>2:00 PM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Seminar Hall, CSVTU UTD-1</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">RSVP Now</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Achievements
            </h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Celebrating our success in competitions and innovation challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Achievement 1 */}
            <Card>
              <CardHeader>
                <div className="rounded-full bg-amber-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-amber-500" />
                </div>
                <CardTitle>National Robotics Championship</CardTitle>
                <CardDescription>1st Place, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Won first place in the National Robotics Championship for our
                  autonomous navigation robot that demonstrated exceptional
                  precision and efficiency.
                </p>
              </CardContent>
            </Card>

            {/* Achievement 2 */}
            <Card>
              <CardHeader>
                <div className="rounded-full bg-amber-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-amber-500" />
                </div>
                <CardTitle>Smart India Hackathon</CardTitle>
                <CardDescription>Finalist, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reached the finals of Smart India Hackathon with our IoT-based
                  smart agriculture system that helps farmers optimize water
                  usage and crop yield.
                </p>
              </CardContent>
            </Card>

            {/* Achievement 3 */}
            <Card>
              <CardHeader>
                <div className="rounded-full bg-amber-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-amber-500" />
                </div>
                <CardTitle>Innovation Excellence Award</CardTitle>
                <CardDescription>
                  State Technical Festival, 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Received the Innovation Excellence Award for our smart waste
                  management system that optimizes collection routes and
                  promotes recycling.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section
        className="py-12 md:py-16 bg-gradient-to-br from-green-500/10 via-transparent to-cyan-500/10"
        id="join"
      >
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Join Nextronix
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
              Become a part of our robotics community and explore the exciting
              world of robotics, IoT, and automation. No prior experience
              required - just bring your enthusiasm and willingness to learn!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
