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
import { Input } from "@/components/ui/input";
import { Search, Filter, Calendar, Clock, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="text-center">
            <Badge className="mb-4">Tech Blog</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Insights, Tutorials & Tech News
            </h1>
            <p className="text-muted-foreground md:text-lg max-w-[700px] mx-auto mb-8">
              Stay updated with the latest in technology, coding tips, project
              showcases, and insights from our community of tech enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-8"
                />
              </div>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                Categories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-12">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="The Future of AI in Education"
                width={600}
                height={400}
                className="object-cover w-full transition-transform hover:scale-105"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge>Featured</Badge>
                <Badge variant="outline">AI & ML</Badge>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">
                The Future of AI in Education: Transforming Learning Experiences
              </h2>
              <p className="text-muted-foreground">
                Explore how artificial intelligence is revolutionizing education
                through personalized learning paths, intelligent tutoring
                systems, and automated assessment tools. Discover the potential
                benefits and challenges of AI integration in educational
                settings.
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Author"
                  />
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Dr. Ananya Rao</p>
                  <p className="text-xs text-muted-foreground">
                    AI Research Lead
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>April 2, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>8 min read</span>
                </div>
              </div>
              <Button asChild>
                <Link href="/blog/future-of-ai-in-education">Read Article</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Latest Articles
              </h2>
              <p className="text-muted-foreground mt-2">
                Fresh insights and tutorials from our community
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Article Card 1 */}
            <Card className="flex flex-col h-full">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Web Development Trends"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Web Dev</Badge>
                </div>
                <CardTitle className="line-clamp-2">
                  Web Development Trends to Watch in 2025
                </CardTitle>
                <CardDescription>
                  Exploring the latest technologies shaping the web
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  From WebAssembly to Edge Computing, discover the emerging
                  technologies and practices that are transforming web
                  development and how they'll impact the industry in 2025 and
                  beyond.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt="Author"
                    />
                    <AvatarFallback>RV</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Rahul Verma</p>
                    <p className="text-xs text-muted-foreground">
                      Web Developer
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>March 28, 2025</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>6 min read</span>
                </div>
              </CardFooter>
            </Card>

            {/* Article Card 2 */}
            <Card className="flex flex-col h-full">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blockchain Applications"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Blockchain</Badge>
                </div>
                <CardTitle className="line-clamp-2">
                  Beyond Cryptocurrency: Practical Blockchain Applications
                </CardTitle>
                <CardDescription>
                  Real-world use cases for blockchain technology
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  Blockchain technology extends far beyond cryptocurrencies.
                  Explore how industries from supply chain to healthcare are
                  leveraging blockchain for transparency, security, and
                  efficiency.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt="Author"
                    />
                    <AvatarFallback>KM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Karan Malhotra</p>
                    <p className="text-xs text-muted-foreground">
                      Blockchain Developer
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>March 25, 2025</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>7 min read</span>
                </div>
              </CardFooter>
            </Card>

            {/* Article Card 3 */}
            <Card className="flex flex-col h-full">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="IoT Security"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">IoT</Badge>
                  <Badge variant="outline">Security</Badge>
                </div>
                <CardTitle className="line-clamp-2">
                  Securing the Internet of Things: Best Practices
                </CardTitle>
                <CardDescription>
                  Protecting connected devices from vulnerabilities
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  As IoT devices proliferate, security concerns grow. Learn
                  essential strategies for securing IoT ecosystems, from
                  encryption and authentication to regular updates and network
                  segmentation.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt="Author"
                    />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Manoj Kumar Sinha</p>
                    <p className="text-xs text-muted-foreground">
                      IoT Specialist
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>March 22, 2025</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>5 min read</span>
                </div>
              </CardFooter>
            </Card>

            {/* Article Card 4 */}
            <Card className="flex flex-col h-full">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Python Data Analysis"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Data Science</Badge>
                </div>
                <CardTitle className="line-clamp-2">
                  Data Analysis with Python: A Beginner's Guide
                </CardTitle>
                <CardDescription>
                  Getting started with data manipulation and visualization
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  This tutorial introduces beginners to data analysis using
                  Python, covering essential libraries like Pandas, NumPy, and
                  Matplotlib with practical examples and step-by-step guidance.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt="Author"
                    />
                    <AvatarFallback>PS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Priya Sharma</p>
                    <p className="text-xs text-muted-foreground">
                      Data Scientist
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>March 20, 2025</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>10 min read</span>
                </div>
              </CardFooter>
            </Card>

            {/* Article Card 5 */}
            <Card className="flex flex-col h-full">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Mobile App Development"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Mobile Dev</Badge>
                </div>
                <CardTitle className="line-clamp-2">
                  Flutter vs React Native: Choosing the Right Framework
                </CardTitle>
                <CardDescription>
                  Comparing popular cross-platform development options
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  Deciding between Flutter and React Native? This comprehensive
                  comparison examines performance, development experience,
                  community support, and use cases to help you make an informed
                  choice.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt="Author"
                    />
                    <AvatarFallback>AK</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Amit Kumar</p>
                    <p className="text-xs text-muted-foreground">
                      Mobile Developer
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>March 18, 2025</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>8 min read</span>
                </div>
              </CardFooter>
            </Card>

            {/* Article Card 6 */}
            <Card className="flex flex-col h-full">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Cybersecurity Tips"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Cybersecurity</Badge>
                </div>
                <CardTitle className="line-clamp-2">
                  Essential Cybersecurity Practices for Developers
                </CardTitle>
                <CardDescription>
                  Building secure applications from the ground up
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  Security should be integrated throughout the development
                  lifecycle. Learn the essential cybersecurity practices every
                  developer should follow to create robust, secure applications.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt="Author"
                    />
                    <AvatarFallback>VJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Vikram Joshi</p>
                    <p className="text-xs text-muted-foreground">
                      Security Expert
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>March 15, 2025</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>9 min read</span>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="flex items-center gap-2">
              Load More Articles
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">
              Browse by Category
            </h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Explore articles by topic to find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Link href="/blog/category/web-development" className="group">
              <Card className="text-center h-full hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                    Web Development
                  </h3>
                  <p className="text-xs text-muted-foreground">24 articles</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/blog/category/mobile-development" className="group">
              <Card className="text-center h-full hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <rect
                        x="5"
                        y="2"
                        width="14"
                        height="20"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="12" y1="18" x2="12" y2="18"></line>
                    </svg>
                  </div>
                  <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                    Mobile Development
                  </h3>
                  <p className="text-xs text-muted-foreground">18 articles</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/blog/category/ai-ml" className="group">
              <Card className="text-center h-full hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5Z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" y1="19" x2="12" y2="22"></line>
                    </svg>
                  </div>
                  <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                    AI & Machine Learning
                  </h3>
                  <p className="text-xs text-muted-foreground">22 articles</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/blog/category/blockchain" className="group">
              <Card className="text-center h-full hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <rect
                        x="2"
                        y="7"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                    Blockchain & Web3
                  </h3>
                  <p className="text-xs text-muted-foreground">15 articles</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/blog/category/iot-robotics" className="group">
              <Card className="text-center h-full hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                      <circle cx="12" cy="5" r="2"></circle>
                      <path d="M12 7v4"></path>
                      <line x1="8" y1="16" x2="8" y2="16"></line>
                      <line x1="16" y1="16" x2="16" y2="16"></line>
                    </svg>
                  </div>
                  <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                    IoT & Robotics
                  </h3>
                  <p className="text-xs text-muted-foreground">12 articles</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/blog/category/cybersecurity" className="group">
              <Card className="text-center h-full hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                    Cybersecurity
                  </h3>
                  <p className="text-xs text-muted-foreground">16 articles</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
              Get the latest articles, tutorials, and tech news delivered
              directly to your inbox. Stay updated with the rapidly evolving
              world of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our{" "}
              <Link href="/privacy" className="underline underline-offset-2">
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from Programmers' Paradise.
            </p>
          </div>
        </div>
      </section>

      {/* Write for Us Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Write for Programmers' Paradise
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
              Share your knowledge and expertise with our community. We welcome
              articles, tutorials, and insights from tech enthusiasts, students,
              and professionals.
            </p>
            <Button size="lg" asChild>
              <Link href="/blog/contribute">Become a Contributor</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
