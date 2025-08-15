import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, MapPin, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function EventsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="text-center">
            <Badge className="mb-4">Events & Workshops</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Upcoming Events</h1>
            <p className="text-muted-foreground md:text-lg max-w-[700px] mx-auto mb-8">
              Join our workshops, hackathons, tech talks, and competitions to learn new skills, build projects, and
              connect with fellow tech enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search events..." className="pl-8" />
              </div>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Tabs Section */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Event Card 1 */}
                <Card>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-green-500 hover:bg-green-600">Registration Open</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="AI/ML Workshop Series"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <Badge>Workshop</Badge>
                    <CardTitle className="mt-4">AI/ML Workshop Series</CardTitle>
                    <CardDescription>Learn the fundamentals of AI and Machine Learning</CardDescription>
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
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-yellow-500 hover:bg-yellow-600">Coming Soon</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Code Fusion 2025"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <Badge>Hackathon</Badge>
                    <CardTitle className="mt-4">Code Fusion 2025</CardTitle>
                    <CardDescription>48-hour hackathon to build innovative solutions</CardDescription>
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
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-blue-500 hover:bg-blue-600">Free Entry</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Web3 & Blockchain Future"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <Badge>Tech Talk</Badge>
                    <CardTitle className="mt-4">Web3 & Blockchain Future</CardTitle>
                    <CardDescription>Industry experts discuss the future of decentralized web</CardDescription>
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

                {/* Event Card 4 */}
                <Card>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Competitive Programming Contest"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <Badge>Competition</Badge>
                    <CardTitle className="mt-4">Competitive Programming Contest</CardTitle>
                    <CardDescription>Test your coding skills in this timed competition</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        <span>April 22, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>1:00 PM - 5:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Computer Lab 2, CSVTU UTD-1</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Register Now</Button>
                  </CardFooter>
                </Card>

                {/* Event Card 5 */}
                <Card>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="IoT Workshop"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <Badge>Workshop</Badge>
                    <CardTitle className="mt-4">IoT Workshop</CardTitle>
                    <CardDescription>Hands-on workshop on building IoT devices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
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

                {/* Event Card 6 */}
                <Card>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Industry Connect"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <Badge>Networking</Badge>
                    <CardTitle className="mt-4">Industry Connect</CardTitle>
                    <CardDescription>Networking event with industry professionals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        <span>May 15, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>4:00 PM - 7:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Conference Hall, CSVTU UTD-1</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Register Now</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="ongoing" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Ongoing Event Card 1 */}
                <Card>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-purple-500 hover:bg-purple-600">In Progress</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="30-Day Coding Challenge"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <Badge>Challenge</Badge>
                    <CardTitle className="mt-4">30-Day Coding Challenge</CardTitle>
                    <CardDescription>Daily coding problems to improve your skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        <span>March 15 - April 15, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Daily Challenges</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Online</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Join Now</Button>
                  </CardFooter>
                </Card>

                {/* Ongoing Event Card 2 */}
                <Card>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-purple-500 hover:bg-purple-600">In Progress</Badge>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Web Development Bootcamp"
                      width={400}
                      height={200}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <Badge>Bootcamp</Badge>
                    <CardTitle className="mt-4">Web Development Bootcamp</CardTitle>
                    <CardDescription>Comprehensive web development training program</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        <span>March 20 - April 20, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Weekends, 10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Computer Science Lab, CSVTU UTD-1</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="secondary">
                      View Schedule
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="past" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Past Event Card 1 */}
                <Card>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg grayscale">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Hackathon 2024"
                      width={400}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <Badge variant="outline">Hackathon</Badge>
                    <CardTitle className="mt-4">Hackathon 2024</CardTitle>
                    <CardDescription>48-hour coding competition</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        <span>February 10-12, 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Main Auditorium, CSVTU UTD-1</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">
                      View Gallery
                    </Button>
                  </CardFooter>
                </Card>

                {/* Past Event Card 2 */}
                <Card>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg grayscale">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="AI Workshop"
                      width={400}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <Badge variant="outline">Workshop</Badge>
                    <CardTitle className="mt-4">AI Workshop</CardTitle>
                    <CardDescription>Introduction to artificial intelligence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        <span>January 15-16, 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Computer Science Lab, CSVTU UTD-1</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">
                      View Gallery
                    </Button>
                  </CardFooter>
                </Card>

                {/* Past Event Card 3 */}
                <Card>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg grayscale">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Tech Fest 2023"
                      width={400}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <Badge variant="outline">Festival</Badge>
                    <CardTitle className="mt-4">Tech Fest 2023</CardTitle>
                    <CardDescription>Annual technical festival</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        <span>November 5-7, 2023</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>CSVTU UTD-1 Campus</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">
                      View Gallery
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Event Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge className="bg-green-500 hover:bg-green-600">Featured Event</Badge>
              <h2 className="text-3xl font-bold tracking-tighter">Code Fusion 2025</h2>
              <p className="text-muted-foreground">
                Join us for our flagship 48-hour hackathon where teams compete to build innovative solutions to
                real-world problems. With mentorship from industry experts, workshops, and amazing prizes, this is an
                event you don't want to miss!
              </p>
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
              <div className="pt-4">
                <Button size="lg" asChild>
                  <Link href="/events/code-fusion-2025">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Code Fusion 2025"
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
            <h2 className="text-3xl font-bold tracking-tight mb-6">Want to host an event with us?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
              If you're interested in collaborating with Programmers' Paradise to host a workshop, hackathon, or tech
              talk, we'd love to hear from you!
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
