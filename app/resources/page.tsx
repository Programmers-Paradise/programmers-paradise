import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Code, Video, Download, ExternalLink, Star, Filter } from "lucide-react"

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="text-center">
            <Badge className="mb-4">Learning Hub</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Resources & Learning Materials
            </h1>
            <p className="text-muted-foreground md:text-lg max-w-[700px] mx-auto mb-8">
              Explore our curated collection of tutorials, guides, project ideas, and learning materials to enhance your
              technical skills and knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search resources..." className="pl-8" />
              </div>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Tabs Section */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="tutorials" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="projects">Project Ideas</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="tools">Tools & Libraries</TabsTrigger>
            </TabsList>

            <TabsContent value="tutorials" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Tutorial Card 1 */}
                <Card className="flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-green-500 hover:bg-green-600">Beginner</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Introduction to Python"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Tutorial</span>
                    </div>
                    <CardTitle className="mt-2">Introduction to Python Programming</CardTitle>
                    <CardDescription>Learn the basics of Python programming language</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      A comprehensive guide to Python basics, including syntax, data types, control structures,
                      functions, and object-oriented programming concepts.
                    </p>
                    <div className="flex items-center gap-1 mt-4">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <span className="text-xs text-muted-foreground ml-2">(128 ratings)</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/resources/python-introduction">View Tutorial</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Tutorial Card 2 */}
                <Card className="flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-yellow-500 hover:bg-yellow-600">Intermediate</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Web Development with React"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Tutorial</span>
                    </div>
                    <CardTitle className="mt-2">Web Development with React</CardTitle>
                    <CardDescription>Build modern web applications with React</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Learn how to build interactive web applications using React, including components, state
                      management, hooks, and integration with backend services.
                    </p>
                    <div className="flex items-center gap-1 mt-4">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground ml-2">(96 ratings)</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/resources/react-web-development">View Tutorial</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Tutorial Card 3 */}
                <Card className="flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-red-500 hover:bg-red-600">Advanced</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Machine Learning Fundamentals"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Tutorial</span>
                    </div>
                    <CardTitle className="mt-2">Machine Learning Fundamentals</CardTitle>
                    <CardDescription>Introduction to ML algorithms and applications</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Explore the fundamentals of machine learning, including supervised and unsupervised learning,
                      neural networks, and practical implementation using Python libraries.
                    </p>
                    <div className="flex items-center gap-1 mt-4">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <span className="text-xs text-muted-foreground ml-2">(112 ratings)</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/resources/machine-learning-fundamentals">View Tutorial</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Tutorial Card 4 */}
                <Card className="flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-yellow-500 hover:bg-yellow-600">Intermediate</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Arduino Programming"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Tutorial</span>
                    </div>
                    <CardTitle className="mt-2">Arduino Programming for IoT</CardTitle>
                    <CardDescription>Build IoT devices with Arduino</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Learn how to program Arduino microcontrollers for IoT applications, including sensor integration,
                      wireless communication, and building smart devices.
                    </p>
                    <div className="flex items-center gap-1 mt-4">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground ml-2">(87 ratings)</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/resources/arduino-iot">View Tutorial</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Tutorial Card 5 */}
                <Card className="flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-green-500 hover:bg-green-600">Beginner</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Git & GitHub"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Tutorial</span>
                    </div>
                    <CardTitle className="mt-2">Git & GitHub for Beginners</CardTitle>
                    <CardDescription>Version control and collaboration</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      A beginner-friendly guide to version control with Git and collaboration using GitHub, including
                      basic commands, branching, merging, and pull requests.
                    </p>
                    <div className="flex items-center gap-1 mt-4">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <span className="text-xs text-muted-foreground ml-2">(156 ratings)</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/resources/git-github">View Tutorial</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Tutorial Card 6 */}
                <Card className="flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-red-500 hover:bg-red-600">Advanced</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Blockchain Development"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Tutorial</span>
                    </div>
                    <CardTitle className="mt-2">Blockchain Development with Solidity</CardTitle>
                    <CardDescription>Build decentralized applications</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Learn how to develop smart contracts and decentralized applications using Solidity and the
                      Ethereum blockchain, including Web3 integration.
                    </p>
                    <div className="flex items-center gap-1 mt-4">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground ml-2">(78 ratings)</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/resources/blockchain-solidity">View Tutorial</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project Idea Card 1 */}
                <Card className="flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-green-500 hover:bg-green-600">Beginner</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Weather App"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Project Idea</span>
                    </div>
                    <CardTitle className="mt-2">Weather Forecast App</CardTitle>
                    <CardDescription>Build a weather application using APIs</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Create a weather forecast application that fetches data from a weather API and displays current
                      conditions and forecasts for user-selected locations.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline">JavaScript</Badge>
                      <Badge variant="outline">API Integration</Badge>
                      <Badge variant="outline">Frontend</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/resources/projects/weather-app">View Project Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project Idea Card 2 */}
                <Card className="flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-yellow-500 hover:bg-yellow-600">Intermediate</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Smart Home IoT"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Project Idea</span>
                    </div>
                    <CardTitle className="mt-2">Smart Home IoT System</CardTitle>
                    <CardDescription>Build a home automation system with sensors</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Develop a smart home system using Arduino or Raspberry Pi that monitors temperature, humidity, and
                      light levels, and controls appliances based on sensor data.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline">Arduino</Badge>
                      <Badge variant="outline">IoT</Badge>
                      <Badge variant="outline">Sensors</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/resources/projects/smart-home">View Project Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project Idea Card 3 */}
                <Card className="flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-red-500 hover:bg-red-600">Advanced</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Face Recognition"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Project Idea</span>
                    </div>
                    <CardTitle className="mt-2">Face Recognition Attendance System</CardTitle>
                    <CardDescription>Build an automated attendance system using ML</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Create a face recognition system that automatically marks attendance by identifying individuals
                      through a camera feed using machine learning algorithms.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">OpenCV</Badge>
                      <Badge variant="outline">Machine Learning</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/resources/projects/face-recognition">View Project Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project Idea Card 4 */}
                <Card className="flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-yellow-500 hover:bg-yellow-600">Intermediate</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="E-commerce Platform"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Project Idea</span>
                    </div>
                    <CardTitle className="mt-2">E-commerce Platform</CardTitle>
                    <CardDescription>Build a full-stack online store</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Develop a complete e-commerce platform with product listings, shopping cart, user authentication,
                      payment processing, and order management.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">Database</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/resources/projects/ecommerce">View Project Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project Idea Card 5 */}
                <Card className="flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-red-500 hover:bg-red-600">Advanced</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Blockchain Voting"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Project Idea</span>
                    </div>
                    <CardTitle className="mt-2">Blockchain Voting System</CardTitle>
                    <CardDescription>Build a secure and transparent voting platform</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Create a decentralized voting system using blockchain technology to ensure transparency, security,
                      and immutability of votes.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline">Solidity</Badge>
                      <Badge variant="outline">Ethereum</Badge>
                      <Badge variant="outline">Web3</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/resources/projects/blockchain-voting">View Project Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project Idea Card 6 */}
                <Card className="flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-green-500 hover:bg-green-600">Beginner</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Task Manager"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Project Idea</span>
                    </div>
                    <CardTitle className="mt-2">Task Manager Application</CardTitle>
                    <CardDescription>Build a productivity app with CRUD operations</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Develop a task management application that allows users to create, read, update, and delete tasks,
                      with features like due dates, priorities, and categories.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline">HTML/CSS</Badge>
                      <Badge variant="outline">JavaScript</Badge>
                      <Badge variant="outline">Local Storage</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/resources/projects/task-manager">View Project Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="courses" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Course Card 1 */}
                <Card className="flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-purple-500 hover:bg-purple-600">Featured</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Full Stack Development"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Video className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Course</span>
                    </div>
                    <CardTitle className="mt-2">Full Stack Web Development</CardTitle>
                    <CardDescription>Comprehensive web development bootcamp</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      A complete course covering frontend and backend development, including HTML, CSS, JavaScript,
                      React, Node.js, databases, and deployment. including HTML, CSS, JavaScript, React, Node.js,
                      databases, and deployment.
                    </p>
                    <div className="flex items-center gap-1 mt-4">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <span className="text-xs text-muted-foreground ml-2">(215 ratings)</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm font-medium">8 weeks</span>
                      <span className="text-sm font-medium">24 lessons</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/resources/courses/full-stack">View Course</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Course Card 2 */}
                <Card className="flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Data Science"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Video className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Course</span>
                    </div>
                    <CardTitle className="mt-2">Data Science with Python</CardTitle>
                    <CardDescription>Learn data analysis and visualization</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Master data science techniques using Python, including data cleaning, analysis, visualization,
                      statistical methods, and machine learning algorithms.
                    </p>
                    <div className="flex items-center gap-1 mt-4">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground ml-2">(178 ratings)</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm font-medium">6 weeks</span>
                      <span className="text-sm font-medium">18 lessons</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/resources/courses/data-science">View Course</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Course Card 3 */}
                <Card className="flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Mobile App Development"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Video className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Course</span>
                    </div>
                    <CardTitle className="mt-2">Mobile App Development with Flutter</CardTitle>
                    <CardDescription>Build cross-platform mobile applications</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Learn to develop beautiful, responsive mobile applications for iOS and Android using Flutter and
                      Dart programming language.
                    </p>
                    <div className="flex items-center gap-1 mt-4">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <span className="text-xs text-muted-foreground ml-2">(92 ratings)</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm font-medium">10 weeks</span>
                      <span className="text-sm font-medium">30 lessons</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/resources/courses/flutter">View Course</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Course Card 4 */}
                <Card className="flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Cybersecurity"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Video className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Course</span>
                    </div>
                    <CardTitle className="mt-2">Introduction to Cybersecurity</CardTitle>
                    <CardDescription>Learn network security and ethical hacking</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Explore the fundamentals of cybersecurity, including network security, cryptography, threat
                      detection, and ethical hacking techniques.
                    </p>
                    <div className="flex items-center gap-1 mt-4">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <Star className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground ml-2">(145 ratings)</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm font-medium">8 weeks</span>
                      <span className="text-sm font-medium">24 lessons</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/resources/courses/cybersecurity">View Course</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="tools" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Tool Card 1 */}
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Development Tool</span>
                    </div>
                    <CardTitle className="mt-2">Visual Studio Code</CardTitle>
                    <CardDescription>Powerful code editor for multiple languages</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      A lightweight but powerful source code editor that runs on your desktop and is available for
                      Windows, macOS, and Linux. Features built-in support for JavaScript, TypeScript, and Node.js.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline">Code Editor</Badge>
                      <Badge variant="outline">Cross-Platform</Badge>
                      <Badge variant="outline">Extensions</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="flex gap-2" asChild>
                      <Link href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Website
                      </Link>
                    </Button>
                    <Button className="flex gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>

                {/* Tool Card 2 */}
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Development Tool</span>
                    </div>
                    <CardTitle className="mt-2">Git</CardTitle>
                    <CardDescription>Distributed version control system</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Git is a free and open source distributed version control system designed to handle everything
                      from small to very large projects with speed and efficiency.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline">Version Control</Badge>
                      <Badge variant="outline">Collaboration</Badge>
                      <Badge variant="outline">Open Source</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="flex gap-2" asChild>
                      <Link href="https://git-scm.com/" target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Website
                      </Link>
                    </Button>
                    <Button className="flex gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>

                {/* Tool Card 3 */}
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Development Tool</span>
                    </div>
                    <CardTitle className="mt-2">Node.js</CardTitle>
                    <CardDescription>JavaScript runtime environment</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, designed for building
                      scalable network applications.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline">JavaScript</Badge>
                      <Badge variant="outline">Backend</Badge>
                      <Badge variant="outline">Server-Side</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="flex gap-2" asChild>
                      <Link href="https://nodejs.org/" target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Website
                      </Link>
                    </Button>
                    <Button className="flex gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>

                {/* Tool Card 4 */}
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Development Tool</span>
                    </div>
                    <CardTitle className="mt-2">Postman</CardTitle>
                    <CardDescription>API development and testing tool</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Postman is an API platform for building and using APIs. Simplifies each step of the API lifecycle
                      and streamlines collaboration.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline">API Testing</Badge>
                      <Badge variant="outline">Development</Badge>
                      <Badge variant="outline">Collaboration</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="flex gap-2" asChild>
                      <Link href="https://www.postman.com/" target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Website
                      </Link>
                    </Button>
                    <Button className="flex gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>

                {/* Tool Card 5 */}
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Development Tool</span>
                    </div>
                    <CardTitle className="mt-2">Docker</CardTitle>
                    <CardDescription>Containerization platform</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Docker is a platform for developing, shipping, and running applications in containers, allowing
                      for consistent environments across development and production.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline">Containers</Badge>
                      <Badge variant="outline">DevOps</Badge>
                      <Badge variant="outline">Deployment</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="flex gap-2" asChild>
                      <Link href="https://www.docker.com/" target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Website
                      </Link>
                    </Button>
                    <Button className="flex gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>

                {/* Tool Card 6 */}
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Development Tool</span>
                    </div>
                    <CardTitle className="mt-2">Figma</CardTitle>
                    <CardDescription>Collaborative design tool</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Figma is a cloud-based design tool that enables collaborative interface design, prototyping, and
                      code generation for websites and applications.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline">UI/UX</Badge>
                      <Badge variant="outline">Design</Badge>
                      <Badge variant="outline">Collaboration</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="flex gap-2" asChild>
                      <Link href="https://www.figma.com/" target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Website
                      </Link>
                    </Button>
                    <Button className="flex gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Resource Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge className="bg-purple-500 hover:bg-purple-600">Featured Resource</Badge>
              <h2 className="text-3xl font-bold tracking-tighter">Complete Web Development Roadmap</h2>
              <p className="text-muted-foreground">
                A comprehensive guide to becoming a full-stack web developer, from HTML basics to advanced frameworks
                and deployment strategies. This roadmap covers frontend, backend, databases, APIs, authentication, and
                more.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Frontend</Badge>
                <Badge variant="outline">Backend</Badge>
                <Badge variant="outline">Database</Badge>
                <Badge variant="outline">DevOps</Badge>
              </div>
              <div className="pt-4">
                <Button size="lg" asChild>
                  <Link href="/resources/web-development-roadmap">View Roadmap</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Web Development Roadmap"
                width={600}
                height={400}
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Want to contribute to our resources?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
              If you have tutorials, project ideas, or learning materials that you'd like to share with the Programmers'
              Paradise community, we'd love to hear from you!
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
