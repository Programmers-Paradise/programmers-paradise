import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Github, ArrowRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="text-center">
            <Badge className="mb-4">Projects Showcase</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Innovative Projects by Our Members
            </h1>
            <p className="text-muted-foreground md:text-lg max-w-[700px] mx-auto mb-8">
              Explore the creative and technical projects developed by Programmers' Paradise members, showcasing their
              skills, innovation, and problem-solving abilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search projects..." className="pl-8" />
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="mobile">Mobile Apps</SelectItem>
                  <SelectItem value="ai">AI & Machine Learning</SelectItem>
                  <SelectItem value="iot">IoT & Robotics</SelectItem>
                  <SelectItem value="blockchain">Blockchain</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
              <p className="text-muted-foreground mt-2">Highlighted projects that showcase exceptional innovation</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Project 1 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-square md:aspect-auto overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Smart Campus IoT System"
                    width={400}
                    height={400}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary">IoT</Badge>
                      <Badge variant="secondary">Embedded Systems</Badge>
                    </div>
                    <CardTitle>Smart Campus IoT System</CardTitle>
                    <CardDescription>Automated monitoring system for campus resources</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      An IoT-based solution that monitors electricity usage, water levels, and occupancy across campus
                      buildings to optimize resource utilization and reduce waste.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/projects/smart-campus">View Details</Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="https://github.com" target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>

            {/* Featured Project 2 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-square md:aspect-auto overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="AI Study Assistant"
                    width={400}
                    height={400}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary">AI</Badge>
                      <Badge variant="secondary">NLP</Badge>
                    </div>
                    <CardTitle>AI Study Assistant</CardTitle>
                    <CardDescription>Personalized learning companion powered by AI</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      An AI-powered application that helps students create personalized study plans, provides
                      intelligent tutoring, and adapts to individual learning styles.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/projects/ai-study-assistant">View Details</Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="https://github.com" target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">All Projects</h2>
              <p className="text-muted-foreground mt-2">Browse through our collection of student projects</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
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
                <CardDescription>Secure and transparent voting platform</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                A decentralized voting system built on blockchain technology for secure, transparent, and tamper-proof
                elections with verifiable results.
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects/blockchain-voting">View Details</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com" target="_blank" rel="noreferrer">
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
                  alt="Augmented Reality Campus Tour"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary">AR</Badge>
                  <Badge variant="secondary">Mobile</Badge>
                </div>
                <CardTitle>AR Campus Tour</CardTitle>
                <CardDescription>Interactive campus exploration using augmented reality</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                A mobile application that provides an interactive tour of the campus using augmented reality, allowing
                users to explore buildings, facilities, and points of interest with digital overlays.
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects/ar-campus-tour">View Details</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com" target="_blank" rel="noreferrer">
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
                <CardDescription>Automated farming with IoT sensors</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                An IoT-based smart agriculture system that monitors soil moisture, temperature, and sunlight to automate
                irrigation and provide insights for optimal crop growth.
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects/smart-agriculture">View Details</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com" target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Project Card 4 */}
            <Card>
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Health Monitoring Wearable"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary">IoT</Badge>
                  <Badge variant="secondary">Healthcare</Badge>
                </div>
                <CardTitle>Health Monitoring Wearable</CardTitle>
                <CardDescription>Real-time health tracking device</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                A wearable device that monitors vital health parameters like heart rate, blood oxygen, and activity
                levels, with a companion app for tracking and analysis.
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects/health-wearable">View Details</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com" target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Project Card 5 */}
            <Card>
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Language Learning App"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary">Mobile</Badge>
                  <Badge variant="secondary">Education</Badge>
                </div>
                <CardTitle>Language Learning App</CardTitle>
                <CardDescription>Interactive language learning platform</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                A mobile application for learning languages through interactive lessons, speech recognition,
                gamification, and personalized learning paths based on user progress.
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects/language-app">View Details</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com" target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Project Card 6 */}
            <Card>
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Waste Management System"
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
                <CardDescription>IoT-based waste collection optimization</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                An intelligent waste management system that uses sensors to monitor fill levels in bins, optimizes
                collection routes, and promotes recycling through a mobile app.
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects/waste-management">View Details</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com" target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="flex items-center gap-2">
              Load More Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Project Categories Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Project Categories</h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Explore projects by technology domain and interest area
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Category Card 1 */}
            <Card className="bg-gradient-to-br from-purple-500/5 to-transparent border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <CardHeader>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>Frontend, backend, and full-stack web applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Projects focusing on web technologies, including responsive design, progressive web apps, and modern
                  JavaScript frameworks.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group" asChild>
                  <Link href="/projects/category/web" className="flex items-center gap-2">
                    Explore Projects
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Category Card 2 */}
            <Card className="bg-gradient-to-br from-blue-500/5 to-transparent border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <CardHeader>
                <CardTitle>Mobile Applications</CardTitle>
                <CardDescription>iOS, Android, and cross-platform mobile apps</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Projects showcasing mobile application development using native and cross-platform frameworks like
                  React Native and Flutter.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group" asChild>
                  <Link href="/projects/category/mobile" className="flex items-center gap-2">
                    Explore Projects
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Category Card 3 */}
            <Card className="bg-gradient-to-br from-green-500/5 to-transparent border-green-500/20 hover:border-green-500/40 transition-colors">
              <CardHeader>
                <CardTitle>AI & Machine Learning</CardTitle>
                <CardDescription>Intelligent systems and data-driven applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Projects leveraging artificial intelligence, machine learning algorithms, computer vision, and natural
                  language processing.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group" asChild>
                  <Link href="/projects/category/ai" className="flex items-center gap-2">
                    Explore Projects
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Category Card 4 */}
            <Card className="bg-gradient-to-br from-yellow-500/5 to-transparent border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
              <CardHeader>
                <CardTitle>IoT & Robotics</CardTitle>
                <CardDescription>Connected devices and automated systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Projects involving Internet of Things devices, sensors, robotics, automation, and embedded systems
                  development.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group" asChild>
                  <Link href="/projects/category/iot" className="flex items-center gap-2">
                    Explore Projects
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Category Card 5 */}
            <Card className="bg-gradient-to-br from-cyan-500/5 to-transparent border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
              <CardHeader>
                <CardTitle>Blockchain & Web3</CardTitle>
                <CardDescription>Decentralized applications and smart contracts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Projects exploring blockchain technology, cryptocurrencies, decentralized finance, NFTs, and Web3
                  applications.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group" asChild>
                  <Link href="/projects/category/blockchain" className="flex items-center gap-2">
                    Explore Projects
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Category Card 6 */}
            <Card className="bg-gradient-to-br from-pink-500/5 to-transparent border-pink-500/20 hover:border-pink-500/40 transition-colors">
              <CardHeader>
                <CardTitle>Game Development</CardTitle>
                <CardDescription>2D, 3D, and AR/VR games and simulations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Projects showcasing game development using various engines and frameworks, including Unity, Unreal
                  Engine, and web-based game technologies.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group" asChild>
                  <Link href="/projects/category/games" className="flex items-center gap-2">
                    Explore Projects
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Submit Project Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Have a project to showcase?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
              If you're a member of Programmers' Paradise and have completed a project that you'd like to showcase on
              our website, we'd love to feature your work!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/projects/submit">Submit Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/resources/projects">Project Ideas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
