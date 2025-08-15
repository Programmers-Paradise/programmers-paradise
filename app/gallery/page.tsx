import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="text-center">
            <Badge className="mb-4">Media Gallery</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Capturing Our Journey</h1>
            <p className="text-muted-foreground md:text-lg max-w-[700px] mx-auto">
              Browse through photos and videos from our events, workshops, hackathons, and other activities at
              Programmers' Paradise.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Tabs Section */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="events" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="workshops">Workshops</TabsTrigger>
              <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
              <TabsTrigger value="campus">Campus Life</TabsTrigger>
            </TabsList>

            <TabsContent value="events" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Event Gallery Items */}
                {Array.from({ length: 9 }).map((_, i) => (
                  <Dialog key={`event-${i}`}>
                    <DialogTrigger asChild>
                      <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                        <div className="aspect-square relative overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=400&width=400&text=Event+${i + 1}`}
                            alt={`Event photo ${i + 1}`}
                            width={400}
                            height={400}
                            className="object-cover transition-transform hover:scale-105"
                          />
                        </div>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>Tech Fest 2024 - Day {i + 1}</DialogTitle>
                        <DialogDescription>Annual technical festival at CSVTU UTD-1 Bhilai</DialogDescription>
                      </DialogHeader>
                      <div className="relative aspect-video overflow-hidden rounded-md">
                        <Image
                          src={`/placeholder.svg?height=600&width=1000&text=Event+${i + 1}`}
                          alt={`Event photo ${i + 1}`}
                          width={1000}
                          height={600}
                          className="object-cover"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button variant="outline">Load More</Button>
              </div>
            </TabsContent>

            <TabsContent value="workshops" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Workshop Gallery Items */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <Dialog key={`workshop-${i}`}>
                    <DialogTrigger asChild>
                      <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                        <div className="aspect-square relative overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=400&width=400&text=Workshop+${i + 1}`}
                            alt={`Workshop photo ${i + 1}`}
                            width={400}
                            height={400}
                            className="object-cover transition-transform hover:scale-105"
                          />
                        </div>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>AI/ML Workshop Series - Session {i + 1}</DialogTitle>
                        <DialogDescription>Hands-on workshop on machine learning fundamentals</DialogDescription>
                      </DialogHeader>
                      <div className="relative aspect-video overflow-hidden rounded-md">
                        <Image
                          src={`/placeholder.svg?height=600&width=1000&text=Workshop+${i + 1}`}
                          alt={`Workshop photo ${i + 1}`}
                          width={1000}
                          height={600}
                          className="object-cover"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button variant="outline">Load More</Button>
              </div>
            </TabsContent>

            <TabsContent value="hackathons" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Hackathon Gallery Items */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <Dialog key={`hackathon-${i}`}>
                    <DialogTrigger asChild>
                      <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                        <div className="aspect-square relative overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=400&width=400&text=Hackathon+${i + 1}`}
                            alt={`Hackathon photo ${i + 1}`}
                            width={400}
                            height={400}
                            className="object-cover transition-transform hover:scale-105"
                          />
                        </div>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>Code Fusion 2024 - Day {i + 1}</DialogTitle>
                        <DialogDescription>48-hour hackathon for innovative solutions</DialogDescription>
                      </DialogHeader>
                      <div className="relative aspect-video overflow-hidden rounded-md">
                        <Image
                          src={`/placeholder.svg?height=600&width=1000&text=Hackathon+${i + 1}`}
                          alt={`Hackathon photo ${i + 1}`}
                          width={1000}
                          height={600}
                          className="object-cover"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button variant="outline">Load More</Button>
              </div>
            </TabsContent>

            <TabsContent value="campus" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Campus Life Gallery Items */}
                {Array.from({ length: 9 }).map((_, i) => (
                  <Dialog key={`campus-${i}`}>
                    <DialogTrigger asChild>
                      <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                        <div className="aspect-square relative overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=400&width=400&text=Campus+${i + 1}`}
                            alt={`Campus photo ${i + 1}`}
                            width={400}
                            height={400}
                            className="object-cover transition-transform hover:scale-105"
                          />
                        </div>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>Campus Life at CSVTU UTD-1</DialogTitle>
                        <DialogDescription>Moments from our technical society activities</DialogDescription>
                      </DialogHeader>
                      <div className="relative aspect-video overflow-hidden rounded-md">
                        <Image
                          src={`/placeholder.svg?height=600&width=1000&text=Campus+${i + 1}`}
                          alt={`Campus photo ${i + 1}`}
                          width={1000}
                          height={600}
                          className="object-cover"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button variant="outline">Load More</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Featured Videos</h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Watch highlights from our recent events and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video Card 1 */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-t-lg">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 h-12 w-12 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </div>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Tech+Fest+Highlights"
                  alt="Tech Fest Highlights"
                  width={400}
                  height={200}
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-lg mb-1">Tech Fest 2024 Highlights</h3>
                <p className="text-sm text-muted-foreground">
                  A recap of our annual technical festival featuring competitions, workshops, and guest lectures.
                </p>
              </CardContent>
            </Card>

            {/* Video Card 2 */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-t-lg">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 h-12 w-12 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </div>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Hackathon+Journey"
                  alt="Hackathon Journey"
                  width={400}
                  height={200}
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-lg mb-1">Code Fusion Hackathon Journey</h3>
                <p className="text-sm text-muted-foreground">
                  Follow the 48-hour journey of teams building innovative solutions during our flagship hackathon.
                </p>
              </CardContent>
            </Card>

            {/* Video Card 3 */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-t-lg">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 h-12 w-12 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </div>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Interview+Series"
                  alt="Interview Series"
                  width={400}
                  height={200}
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-lg mb-1">Tech Talks: Interview Series</h3>
                <p className="text-sm text-muted-foreground">
                  Interviews with industry experts and alumni sharing insights and career advice.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/gallery/videos">View All Videos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Event Albums Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Event Albums</h2>
              <p className="text-muted-foreground mt-2">Browse complete photo collections from our events</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Album Card 1 */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Tech+Fest+2024"
                  alt="Tech Fest 2024"
                  width={400}
                  height={200}
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="font-medium text-white">Tech Fest 2024</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">March 2024</span>
                  <Badge>42 Photos</Badge>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/gallery/albums/tech-fest-2024">View Album</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Album Card 2 */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Code+Fusion+Hackathon"
                  alt="Code Fusion Hackathon"
                  width={400}
                  height={200}
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="font-medium text-white">Code Fusion Hackathon</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">February 2024</span>
                  <Badge>36 Photos</Badge>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/gallery/albums/code-fusion-2024">View Album</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Album Card 3 */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=AI+Workshop+Series"
                  alt="AI Workshop Series"
                  width={400}
                  height={200}
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="font-medium text-white">AI Workshop Series</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">January 2024</span>
                  <Badge>28 Photos</Badge>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/gallery/albums/ai-workshop-2024">View Album</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Album Card 4 */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Industry+Visit"
                  alt="Industry Visit"
                  width={400}
                  height={200}
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="font-medium text-white">Industry Visit - Tech Park</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">December 2023</span>
                  <Badge>24 Photos</Badge>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/gallery/albums/industry-visit-2023">View Album</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Album Card 5 */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Robotics+Competition"
                  alt="Robotics Competition"
                  width={400}
                  height={200}
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="font-medium text-white">Robotics Competition</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">November 2023</span>
                  <Badge>32 Photos</Badge>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/gallery/albums/robotics-competition-2023">View Album</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Album Card 6 */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Orientation+Day"
                  alt="Orientation Day"
                  width={400}
                  height={200}
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="font-medium text-white">Freshers' Orientation</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">October 2023</span>
                  <Badge>45 Photos</Badge>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/gallery/albums/orientation-2023">View Album</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/gallery/albums">View All Albums</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Submit Photos Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Have photos to share?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
              If you've captured moments from our events or activities, we'd love to include them in our gallery. Share
              your photos with the Programmers' Paradise community!
            </p>
            <Button size="lg" asChild>
              <Link href="/gallery/submit">Submit Photos</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
