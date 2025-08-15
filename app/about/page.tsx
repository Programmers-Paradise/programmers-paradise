import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, Target, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge>About Us</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Programmers&apos; Paradise
              </h1>
              <p className="text-muted-foreground md:text-lg">
                The official technical society of CSVTU UTD-1 Bhilai, serving as a hub for tech enthusiasts, coders, and
                innovators across multiple specialized fields of technology.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Programmers' Paradise Team"
                width={600}
                height={400}
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Card className="bg-gradient-to-br from-purple-500/5 to-transparent border-purple-500/20">
              <CardHeader>
                <div className="rounded-full bg-purple-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To foster a vibrant community of tech enthusiasts at CSVTU UTD-1 Bhilai by providing platforms for
                  learning, innovation, and collaboration. We aim to bridge the gap between academic knowledge and
                  industry requirements by organizing workshops, hackathons, and technical events that enhance practical
                  skills and promote a culture of continuous learning and innovation.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-cyan-500/5 to-transparent border-cyan-500/20">
              <CardHeader>
                <div className="rounded-full bg-cyan-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-cyan-500" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To establish Programmers' Paradise as a premier technical society that empowers students to become
                  industry-ready professionals and innovative problem-solvers. We envision creating a collaborative
                  ecosystem where students can explore emerging technologies, develop technical expertise, and
                  contribute to meaningful projects that address real-world challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Clubs Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Our Technical Clubs</h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Explore our specialized clubs across different fields of technology
            </p>
          </div>

          <Tabs defaultValue="programming" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 h-auto">
              <TabsTrigger value="programming" className="py-2">
                AI & ML
              </TabsTrigger>
              <TabsTrigger value="competitive" className="py-2">
                Competitive
              </TabsTrigger>
              <TabsTrigger value="robotics" className="py-2">
                Robotics
              </TabsTrigger>
              <TabsTrigger value="matlab" className="py-2">
                Matlab
              </TabsTrigger>
              <TabsTrigger value="blockchain" className="py-2">
                Blockchain
              </TabsTrigger>
              <TabsTrigger value="pr" className="py-2">
                PR & Outreach
              </TabsTrigger>
            </TabsList>

            <TabsContent value="programming" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI & ML Club</CardTitle>
                  <CardDescription>Artificial Intelligence, Machine Learning, and software development</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The Programming & Workshop Club focuses on practical skills development through hands-on workshops,
                    project-based learning, and expert sessions on cutting-edge technologies like AI, ML, web
                    development, mobile app development, and more.
                  </p>
                  <h4 className="font-medium">Key Activities:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Hands-on workshops on programming languages and frameworks</li>
                    <li>AI and Machine Learning project development</li>
                    <li>Software development bootcamps</li>
                    <li>Industry expert sessions and tech talks</li>
                    <li>Collaborative coding projects</li>
                  </ul>
                  <Button className="mt-4" asChild>
                    <Link href="/clubs/ai-ml">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="competitive" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Competitive Programming Club</CardTitle>
                  <CardDescription>Coding contests, problem-solving, and algorithmic thinking</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The Competitive Programming Club focuses on developing problem-solving skills, algorithmic thinking,
                    and coding efficiency through regular practice sessions, mock competitions, and participation in
                    national and international coding contests.
                  </p>
                  <h4 className="font-medium">Key Activities:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Weekly coding practice sessions</li>
                    <li>Algorithm and data structure workshops</li>
                    <li>Mock coding competitions</li>
                    <li>Participation in contests like ACM ICPC, Google CodeJam, etc.</li>
                    <li>Problem-solving strategy development</li>
                  </ul>
                  <Button className="mt-4" asChild>
                    <Link href="/clubs/competitive-programming">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="robotics" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Nextronix (Robotics Club)</CardTitle>
                  <CardDescription>Robotics, IoT, automation, and embedded systems</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Nextronix is our robotics club that focuses on designing, building, and programming robots, IoT
                    devices, and automated systems. Members work on practical projects that combine hardware and
                    software to create innovative solutions.
                  </p>
                  <h4 className="font-medium">Key Activities:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Robot design and construction</li>
                    <li>IoT project development</li>
                    <li>Embedded systems programming</li>
                    <li>Automation and control systems</li>
                    <li>Participation in robotics competitions</li>
                  </ul>
                  <Button className="mt-4" asChild>
                    <Link href="/clubs/nextronix">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="matlab" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Matlab Club</CardTitle>
                  <CardDescription>Numerical computing, simulations, and engineering problem-solving</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The Matlab Club focuses on numerical computing, simulations, and solving complex engineering
                    problems using MATLAB. Members learn to apply mathematical models to real-world engineering
                    challenges and develop simulation-based solutions.
                  </p>
                  <h4 className="font-medium">Key Activities:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>MATLAB programming fundamentals</li>
                    <li>Engineering simulations and modeling</li>
                    <li>Data analysis and visualization</li>
                    <li>Signal and image processing</li>
                    <li>Control system design</li>
                  </ul>
                  <Button className="mt-4" asChild>
                    <Link href="/clubs/matlab">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="blockchain" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Blockchain & Web3 Club</CardTitle>
                  <CardDescription>dApps, smart contracts, and blockchain technologies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The Blockchain & Web3 Club explores decentralized technologies, smart contracts, and blockchain
                    applications. Members learn about cryptocurrency, decentralized finance, and building applications
                    on blockchain platforms.
                  </p>
                  <h4 className="font-medium">Key Activities:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Blockchain fundamentals and architecture</li>
                    <li>Smart contract development</li>
                    <li>Decentralized application (dApp) building</li>
                    <li>Web3 integration and development</li>
                    <li>Cryptocurrency and DeFi exploration</li>
                  </ul>
                  <Button className="mt-4" asChild>
                    <Link href="/clubs/blockchain-web3">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pr" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>PR & Outreach</CardTitle>
                  <CardDescription>Community engagement, events, and collaborations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The PR & Outreach team manages community engagement, event organization, and collaborations with
                    industry partners. They handle communication, social media, and ensure the society's activities
                    reach a wider audience.
                  </p>
                  <h4 className="font-medium">Key Activities:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Event planning and management</li>
                    <li>Social media and content creation</li>
                    <li>Industry partnerships and collaborations</li>
                    <li>Community building and engagement</li>
                    <li>Branding and promotional activities</li>
                  </ul>
                  <Button className="mt-4" asChild>
                    <Link href="/clubs/pr-outreach">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Our Journey</h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Key milestones in the history of Programmers' Paradise
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="md:text-right md:pr-8">
                    <Badge variant="outline" className="mb-2 inline-flex">
                      <Calendar className="mr-1 h-3 w-3" /> 2020
                    </Badge>
                    <h3 className="text-lg font-medium">Foundation</h3>
                    <p className="text-muted-foreground text-sm">
                      Programmers' Paradise was established with a vision to create a community of tech enthusiasts at
                      CSVTU UTD-1 Bhilai.
                    </p>
                  </div>
                  <div className="md:pl-8">
                    <div className="h-full w-full rounded-lg bg-card overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Foundation of Programmers' Paradise"
                        width={400}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="md:text-right md:pr-8 md:order-1 order-2">
                    <div className="h-full w-full rounded-lg bg-card overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="First Hackathon"
                        width={400}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="md:pl-8 md:order-2 order-1">
                    <Badge variant="outline" className="mb-2 inline-flex">
                      <Calendar className="mr-1 h-3 w-3" /> 2021
                    </Badge>
                    <h3 className="text-lg font-medium">First Hackathon</h3>
                    <p className="text-muted-foreground text-sm">
                      Successfully organized our first 24-hour hackathon with over 100 participants from various
                      colleges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="md:text-right md:pr-8">
                    <Badge variant="outline" className="mb-2 inline-flex">
                      <Calendar className="mr-1 h-3 w-3" /> 2022
                    </Badge>
                    <h3 className="text-lg font-medium">Club Expansion</h3>
                    <p className="text-muted-foreground text-sm">
                      Expanded to six specialized clubs covering different domains of technology to cater to diverse
                      interests.
                    </p>
                  </div>
                  <div className="md:pl-8">
                    <div className="h-full w-full rounded-lg bg-card overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Club Expansion"
                        width={400}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="md:text-right md:pr-8 md:order-1 order-2">
                    <div className="h-full w-full rounded-lg bg-card overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Industry Partnerships"
                        width={400}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="md:pl-8 md:order-2 order-1">
                    <Badge variant="outline" className="mb-2 inline-flex">
                      <Calendar className="mr-1 h-3 w-3" /> 2023
                    </Badge>
                    <h3 className="text-lg font-medium">Industry Partnerships</h3>
                    <p className="text-muted-foreground text-sm">
                      Established partnerships with leading tech companies to provide internship opportunities and
                      industry exposure.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="md:text-right md:pr-8">
                    <Badge variant="outline" className="mb-2 inline-flex">
                      <Calendar className="mr-1 h-3 w-3" /> 2024
                    </Badge>
                    <h3 className="text-lg font-medium">National Recognition</h3>
                    <p className="text-muted-foreground text-sm">
                      Received national recognition for innovative student projects and community initiatives.
                    </p>
                  </div>
                  <div className="md:pl-8">
                    <div className="h-full w-full rounded-lg bg-card overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="National Recognition"
                        width={400}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 6 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="md:text-right md:pr-8 md:order-1 order-2">
                    <div className="h-full w-full rounded-lg bg-card overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Present Day"
                        width={400}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="md:pl-8 md:order-2 order-1">
                    <Badge variant="outline" className="mb-2 inline-flex">
                      <Calendar className="mr-1 h-3 w-3" /> 2025
                    </Badge>
                    <h3 className="text-lg font-medium">Present Day</h3>
                    <p className="text-muted-foreground text-sm">
                      Continuing to grow with over 500 active members, regular events, and a strong alumni network in
                      the tech industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Our Achievements</h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Celebrating our milestones and recognitions over the years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Achievement 1 */}
            <Card>
              <CardHeader>
                <div className="rounded-full bg-amber-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-amber-500" />
                </div>
                <CardTitle>Best Technical Society</CardTitle>
                <CardDescription>State Technical Festival 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Recognized as the Best Technical Society at the State Technical Festival for outstanding contributions
                  to technical education and innovation.
                </p>
              </CardContent>
            </Card>

            {/* Achievement 2 */}
            <Card>
              <CardHeader>
                <div className="rounded-full bg-amber-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-amber-500" />
                </div>
                <CardTitle>Smart India Hackathon Finalists</CardTitle>
                <CardDescription>2022 & 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Multiple teams from our society reached the finals of Smart India Hackathon, with two teams securing
                  the top positions in their respective categories.
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
                <CardDescription>National Technical Symposium 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Received the Innovation Excellence Award for developing sustainable technology solutions addressing
                  real-world problems at the National Technical Symposium.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Join Programmers&apos; Paradise</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
              Be part of a vibrant community of tech enthusiasts and innovators. Explore new technologies, build
              exciting projects, and grow your skills with like-minded peers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">Become a Member</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
