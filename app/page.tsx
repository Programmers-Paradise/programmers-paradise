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
import {
  CalendarDays,
  Clock,
  MapPin,
  ArrowRight,
  Code,
  Cpu,
  Database,
  Lightbulb,
  Share2,
  Users,
  Github,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 z-0" />
        <div className="container relative z-10 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
          <Badge className="mb-4" variant="outline">
            CSVTU UTD-1 Bhilai
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
            Programmers&apos; Paradise
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground mb-8">
            The official technical society for tech enthusiasts, coders, and
            innovators. Join us to explore, learn, and build the future
            together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/join">Join Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/events">Explore Events</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Featured Events Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Upcoming Events
              </h2>
              <p className="text-muted-foreground mt-2">
                Join our workshops, hackathons, and tech talks
              </p>
            </div>
            <Button variant="ghost" className="group" asChild>
              <Link href="/events" className="flex items-center gap-2">
                View all events
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
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
                <CardTitle className="mt-4">AI/ML Workshop Series</CardTitle>
                <CardDescription>
                  Learn the fundamentals of AI and Machine Learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    <span>April 15-17, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Computer Science Lab, CSVTU UTD-1</span>
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
                  <Badge>Hackathon</Badge>
                  <Badge
                    variant="outline"
                    className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                  >
                    Coming Soon
                  </Badge>
                </div>
                <CardTitle className="mt-4">Code Fusion 2025</CardTitle>
                <CardDescription>
                  48-hour hackathon to build innovative solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    <span>May 5-7, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Starts at 9:00 AM</span>
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
                <CardTitle className="mt-4">Web3 & Blockchain Future</CardTitle>
                <CardDescription>
                  Industry experts discuss the future of decentralized web
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    <span>April 10, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>2:00 PM - 5:00 PM</span>
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
        </div>
      </section>

      {/* Clubs Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Our Technical Clubs
            </h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              Explore our specialized clubs across different fields of
              technology
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Club 1 */}
            <Card className="bg-gradient-to-br from-purple-500/5 to-transparent border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <CardHeader>
                <div className="rounded-full bg-purple-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle>Programming & Workshop Club</CardTitle>
                <CardDescription>
                  AI, ML, and software development workshops
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Learn cutting-edge technologies through hands-on workshops,
                project-based learning, and expert sessions.
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group" asChild>
                  <Link
                    href="/clubs/programming-workshop"
                    className="flex items-center gap-2"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Club 2 */}
            <Card className="bg-gradient-to-br from-blue-500/5 to-transparent border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <CardHeader>
                <div className="rounded-full bg-blue-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle>Competitive Programming Club</CardTitle>
                <CardDescription>
                  Coding contests, problem-solving, and algorithmic thinking
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Sharpen your problem-solving skills, participate in coding
                competitions, and learn efficient algorithms.
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group" asChild>
                  <Link
                    href="/clubs/competitive-programming"
                    className="flex items-center gap-2"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Club 3 */}
            <Card className="bg-gradient-to-br from-green-500/5 to-transparent border-green-500/20 hover:border-green-500/40 transition-colors">
              <CardHeader>
                <div className="rounded-full bg-green-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle>Nextronix (Robotics Club)</CardTitle>
                <CardDescription>
                  Robotics, IoT, automation, and embedded systems
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Build robots, IoT devices, and automated systems through
                practical projects and competitions.
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group" asChild>
                  <Link
                    href="https://nextronixutd.tech/"
                    className="flex items-center gap-2"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Club 4 */}
            <Card className="bg-gradient-to-br from-yellow-500/5 to-transparent border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
              <CardHeader>
                <div className="rounded-full bg-yellow-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-yellow-500" />
                </div>
                <CardTitle>Matlab Club</CardTitle>
                <CardDescription>
                  Numerical computing, simulations, and engineering
                  problem-solving
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Master numerical computing, simulations, and solve complex
                engineering problems using MATLAB.
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group" asChild>
                  <Link
                    href="/clubs/matlab"
                    className="flex items-center gap-2"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Club 5 */}
            <Card className="bg-gradient-to-br from-cyan-500/5 to-transparent border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
              <CardHeader>
                <div className="rounded-full bg-cyan-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Share2 className="h-6 w-6 text-cyan-500" />
                </div>
                <CardTitle>Blockchain & Web3 Club</CardTitle>
                <CardDescription>
                  dApps, smart contracts, and blockchain technologies
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Explore decentralized applications, smart contracts, and
                cutting-edge blockchain technologies.
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group" asChild>
                  <Link
                    href="/clubs/blockchain-web3"
                    className="flex items-center gap-2"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Club 6 */}
            <Card className="bg-gradient-to-br from-pink-500/5 to-transparent border-pink-500/20 hover:border-pink-500/40 transition-colors">
              <CardHeader>
                <div className="rounded-full bg-pink-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-pink-500" />
                </div>
                <CardTitle>PR & Outreach</CardTitle>
                <CardDescription>
                  Community engagement, events, and collaborations
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Connect with the tech community, organize events, and build
                partnerships with industry leaders.
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group" asChild>
                  <Link
                    href="/clubs/pr-outreach"
                    className="flex items-center gap-2"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Featured Projects
              </h2>
              <p className="text-muted-foreground mt-2">
                Innovative solutions built by our members
              </p>
            </div>
            <Button variant="ghost" className="group" asChild>
              <Link href="/projects" className="flex items-center gap-2">
                View all projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <Card>
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Smart Campus IoT Project"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary">IoT</Badge>
                  <Badge variant="secondary">Embedded Systems</Badge>
                </div>
                <CardTitle>Smart Campus IoT System</CardTitle>
                <CardDescription>
                  Automated monitoring system for campus resources
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                An IoT-based solution that monitors electricity usage, water
                levels, and occupancy across campus buildings.
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects/smart-campus">View Details</Link>
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
                  alt="AI Study Assistant"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary">AI</Badge>
                  <Badge variant="secondary">NLP</Badge>
                </div>
                <CardTitle>AI Study Assistant</CardTitle>
                <CardDescription>
                  Personalized learning companion powered by AI
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                An AI-powered application that helps students create
                personalized study plans and provides intelligent tutoring.
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects/ai-study-assistant">View Details</Link>
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
                  alt="Blockchain Voting System"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary">Blockchain</Badge>
                  <Badge variant="secondary">Web3</Badge>
                </div>
                <CardTitle>Blockchain Voting System</CardTitle>
                <CardDescription>
                  Secure and transparent voting platform
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                A decentralized voting system built on blockchain technology for
                secure, transparent, and tamper-proof elections.
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects/blockchain-voting">View Details</Link>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to join the tech revolution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
              Become a part of Programmers' Paradise and unlock endless
              opportunities to learn, build, and grow with like-minded tech
              enthusiasts.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">Join Us Today</Link>
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
