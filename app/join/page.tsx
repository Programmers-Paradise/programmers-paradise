"use client";

import type React from "react";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Users,
  Lightbulb,
  Award,
  Cpu,
  Code,
  BookOpen,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

export default function JoinPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rollNumber: "",
    branch: "",
    year: "",
    primaryClub: "",
    secondaryClub: "",
    experience: "",
    reason: "",
    heardFrom: "",
    agreeToTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);

    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      rollNumber: "",
      branch: "",
      year: "",
      primaryClub: "",
      secondaryClub: "",
      experience: "",
      reason: "",
      heardFrom: "",
      agreeToTerms: false,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="text-center">
            <Badge className="mb-4">Join Us</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Become a Member of Programmers&apos; Paradise
            </h1>
            <p className="text-muted-foreground md:text-lg max-w-[700px] mx-auto">
              Join our vibrant community of tech enthusiasts, coders, and
              innovators at CSVTU UTD-1 Bhilai and be a part of exciting events,
              projects, and learning opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">
              Membership Benefits
            </h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Discover the advantages of being a part of Programmers&apos;
              Paradise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-purple-500/5 to-transparent border-purple-500/20">
              <CardHeader>
                <div className="rounded-full bg-purple-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle>Community & Networking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with like-minded tech enthusiasts, build lasting
                  relationships, and expand your professional network with
                  peers, seniors, and industry professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/5 to-transparent border-blue-500/20">
              <CardHeader>
                <div className="rounded-full bg-blue-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle>Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enhance your technical skills through workshops, hands-on
                  projects, competitions, and mentorship from experienced
                  members and industry experts.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/5 to-transparent border-green-500/20">
              <CardHeader>
                <div className="rounded-full bg-green-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle>Recognition & Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Showcase your talents, gain recognition for your work, and
                  access exclusive opportunities like internships, research
                  projects, and industry collaborations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/5 to-transparent border-yellow-500/20">
              <CardHeader>
                <div className="rounded-full bg-yellow-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-yellow-500" />
                </div>
                <CardTitle>Access to Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get access to specialized equipment, software, learning
                  materials, and dedicated workspace for your technical projects
                  and experiments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-500/5 to-transparent border-cyan-500/20">
              <CardHeader>
                <div className="rounded-full bg-cyan-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-cyan-500" />
                </div>
                <CardTitle>Practical Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Apply theoretical knowledge to real-world projects, develop
                  problem-solving skills, and build a portfolio that stands out
                  to future employers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-500/5 to-transparent border-pink-500/20">
              <CardHeader>
                <div className="rounded-full bg-pink-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-pink-500" />
                </div>
                <CardTitle>Leadership Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop leadership, communication, and teamwork skills by
                  organizing events, leading projects, and mentoring junior
                  members.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Technical Clubs
            </h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Choose from our specialized clubs based on your interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Programming & Workshop Club"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>AI & ML Club</CardTitle>
                <CardDescription>
                  Artificial Intelligence, Machine Learning, and software
                  development
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  Learn cutting-edge technologies through hands-on workshops,
                  project-based learning, and expert sessions on AI, ML, web
                  development, and more.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/clubs/ai-ml">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Competitive Programming Club"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Competitive Programming Club</CardTitle>
                <CardDescription>
                  Coding contests, problem-solving, and algorithmic thinking
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  Sharpen your problem-solving skills, participate in coding
                  competitions, and learn efficient algorithms through regular
                  practice sessions and contests.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/clubs/competitive-programming">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Nextronix (Robotics Club)"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Nextronix (Robotics Club)</CardTitle>
                <CardDescription>
                  Robotics, IoT, automation, and embedded systems
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  Build robots, IoT devices, and automated systems through
                  practical projects, competitions, and hands-on experience with
                  hardware and software integration.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="https://nextronixutd.tech/">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Matlab Club"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Matlab Club</CardTitle>
                <CardDescription>
                  Numerical computing, simulations, and engineering
                  problem-solving
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  Master numerical computing, simulations, and solve complex
                  engineering problems using MATLAB through practical
                  applications and project-based learning.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/clubs/matlab">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blockchain & Web3 Club"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Blockchain & Web3 Club</CardTitle>
                <CardDescription>
                  dApps, smart contracts, and blockchain technologies
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  Explore decentralized applications, smart contracts, and
                  cutting-edge blockchain technologies through workshops,
                  projects, and industry collaborations.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/clubs/blockchain-web3">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="PR & Outreach"
                  width={400}
                  height={200}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>PR & Outreach</CardTitle>
                <CardDescription>
                  Community engagement, events, and collaborations
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  Connect with the tech community, organize events, and build
                  partnerships with industry leaders through communication,
                  social media, and event management.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/clubs/pr-outreach">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Types Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">
              Membership Types
            </h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Choose the membership that best suits your interests and
              commitment level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <CardHeader>
                <CardTitle>General Member</CardTitle>
                <CardDescription>
                  For all students interested in technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Basic membership with access to general events, workshops, and
                  resources.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Access to general events and workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Basic learning resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Community forum access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Participation in open competitions</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <div className="w-full text-center">
                  <span className="block text-2xl font-bold mb-2">Free</span>
                  <span className="text-sm text-muted-foreground">
                    No membership fee
                  </span>
                </div>
              </CardFooter>
            </Card>

            <Card className="border-purple-500/40 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                Popular
              </div>
              <CardHeader>
                <CardTitle>Club Member</CardTitle>
                <CardDescription>
                  For students focused on specific tech areas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Specialized membership with access to club-specific resources
                  and activities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>All General Member benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Specialized club workshops and training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Access to club equipment and resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Priority for club projects and competitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Mentorship from senior club members</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <div className="w-full text-center">
                  <span className="block text-2xl font-bold mb-2">₹500</span>
                  <span className="text-sm text-muted-foreground">
                    Annual membership fee
                  </span>
                </div>
              </CardFooter>
            </Card>

            <Card className="border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <CardHeader>
                <CardTitle>Core Team Member</CardTitle>
                <CardDescription>
                  For dedicated students with leadership potential
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Leadership role with responsibilities and additional
                  privileges.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>All Club Member benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Leadership and organizational role</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Direct industry connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Exclusive training opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Certificate of leadership</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <div className="w-full text-center">
                  <span className="block text-2xl font-bold mb-2">
                    By Selection
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Based on performance and interview
                  </span>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">
              Membership Application
            </h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Fill out the form below to apply for membership in
              Programmers&apos; Paradise
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Application Form</CardTitle>
                <CardDescription>
                  Please provide accurate information to help us process your
                  application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="rollNumber">Roll Number</Label>
                        <Input
                          id="rollNumber"
                          name="rollNumber"
                          placeholder="Enter your college roll number"
                          value={formData.rollNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="branch">Branch/Department</Label>
                        <Select
                          value={formData.branch}
                          onValueChange={(value) =>
                            handleSelectChange("branch", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your branch" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cse">
                              Computer Science Engineering
                            </SelectItem>
                            <SelectItem value="it">
                              Information Technology
                            </SelectItem>
                            <SelectItem value="ece">
                              Electronics & Communication
                            </SelectItem>
                            <SelectItem value="ee">
                              Electrical Engineering
                            </SelectItem>
                            <SelectItem value="me">
                              Mechanical Engineering
                            </SelectItem>
                            <SelectItem value="civil">
                              Civil Engineering
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="year">Year of Study</Label>
                        <Select
                          value={formData.year}
                          onValueChange={(value) =>
                            handleSelectChange("year", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1st Year</SelectItem>
                            <SelectItem value="2">2nd Year</SelectItem>
                            <SelectItem value="3">3rd Year</SelectItem>
                            <SelectItem value="4">4th Year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                      Membership Preferences
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="primaryClub">Primary Club Interest</Label>
                      <Select
                        value={formData.primaryClub}
                        onValueChange={(value) =>
                          handleSelectChange("primaryClub", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary club interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="programming">
                            AI & ML Club
                          </SelectItem>
                          <SelectItem value="competitive">
                            Competitive Programming Club
                          </SelectItem>
                          <SelectItem value="robotics">
                            Nextronix (Robotics Club)
                          </SelectItem>
                          <SelectItem value="matlab">Matlab Club</SelectItem>
                          <SelectItem value="blockchain">
                            Blockchain &amp; Web3 Club
                          </SelectItem>
                          <SelectItem value="pr">PR &amp; Outreach</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="secondaryClub">
                        Secondary Club Interest (Optional)
                      </Label>
                      <Select
                        value={formData.secondaryClub}
                        onValueChange={(value) =>
                          handleSelectChange("secondaryClub", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your secondary club interest (optional)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="programming">
                            AI & ML Club
                          </SelectItem>
                          <SelectItem value="competitive">
                            Competitive Programming Club
                          </SelectItem>
                          <SelectItem value="robotics">
                            Nextronix (Robotics Club)
                          </SelectItem>
                          <SelectItem value="matlab">Matlab Club</SelectItem>
                          <SelectItem value="blockchain">
                            Blockchain &amp; Web3 Club
                          </SelectItem>
                          <SelectItem value="pr">PR &amp; Outreach</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Technical Experience</Label>
                      <Textarea
                        id="experience"
                        name="experience"
                        placeholder="Briefly describe your technical skills, experience, and any relevant projects"
                        className="min-h-[100px]"
                        value={formData.experience}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reason">
                        Why do you want to join Programmers' Paradise?
                      </Label>
                      <Textarea
                        id="reason"
                        name="reason"
                        placeholder="Tell us why you want to join and what you hope to achieve as a member"
                        className="min-h-[100px]"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>How did you hear about us?</Label>
                      <RadioGroup
                        value={formData.heardFrom}
                        onValueChange={(value) =>
                          handleSelectChange("heardFrom", value)
                        }
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="friend" id="friend" />
                          <Label htmlFor="friend">Friend or Classmate</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="social" id="social" />
                          <Label htmlFor="social">Social Media</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="event" id="event" />
                          <Label htmlFor="event">College Event</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="faculty" id="faculty" />
                          <Label htmlFor="faculty">Faculty Member</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange("agreeToTerms", checked as boolean)
                      }
                      required
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="agreeToTerms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the terms and conditions
                      </label>
                      <p className="text-sm text-muted-foreground">
                        By submitting this application, I agree to abide by the
                        rules and regulations of Programmers' Paradise.
                      </p>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Find answers to common questions about membership and activities
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Who can join Programmers' Paradise?
                </AccordionTrigger>
                <AccordionContent>
                  Any student enrolled at CSVTU UTD-1 Bhilai can join
                  Programmers' Paradise. We welcome students from all branches
                  and years of study who have an interest in technology, coding,
                  and innovation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is there a membership fee?</AccordionTrigger>
                <AccordionContent>
                  General membership is free. However, specialized club
                  memberships have an annual fee of ₹500 to cover resources,
                  equipment, and activities. This fee helps us maintain our
                  facilities and provide quality experiences for our members.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What if I have no prior technical experience?
                </AccordionTrigger>
                <AccordionContent>
                  No prior experience is required! We welcome beginners and have
                  dedicated workshops and mentorship programs to help you build
                  your skills from the ground up. All you need is enthusiasm and
                  willingness to learn.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How much time commitment is expected?
                </AccordionTrigger>
                <AccordionContent>
                  The time commitment varies based on your level of involvement.
                  General members can participate in events as per their
                  availability. Club members typically dedicate 3-5 hours per
                  week. Core team members have more responsibilities and may
                  need to commit 5-8 hours per week.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Can I join multiple clubs?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can join multiple clubs based on your interests.
                  However, we recommend focusing on one primary club to maximize
                  your learning and contribution. You can always participate in
                  events and workshops from other clubs as well.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  How are core team members selected?
                </AccordionTrigger>
                <AccordionContent>
                  Core team members are selected based on their active
                  participation, dedication, skills, and leadership potential.
                  Selection typically happens at the end of each academic year
                  through an application and interview process. Consistent
                  contribution to club activities significantly increases your
                  chances.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  What resources and facilities are available to members?
                </AccordionTrigger>
                <AccordionContent>
                  Members have access to our dedicated workspace, specialized
                  equipment (like robotics kits, IoT devices, etc.), software
                  licenses, learning materials, and library resources. Club
                  members get priority access to these resources for their
                  projects and activities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>
                  How can I get involved in projects and competitions?
                </AccordionTrigger>
                <AccordionContent>
                  Regular announcements about projects and competitions are made
                  during club meetings and through our communication channels.
                  You can express your interest to club leads or project
                  coordinators. We encourage all members to participate based on
                  their skills and interests.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">
              Member Testimonials
            </h2>
            <p className="text-muted-foreground mt-2 max-w-[700px] mx-auto">
              Hear from our current members about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-purple-500/5 to-transparent border-purple-500/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Rahul Sharma"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">Rahul Sharma</h3>
                    <p className="text-sm text-muted-foreground">
                      Computer Science, 3rd Year
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Joining Programmers' Paradise was the best decision I made in
                  college. The workshops and projects helped me develop
                  practical skills that I couldn't learn in the classroom. I've
                  built an impressive portfolio and even secured an internship
                  through the society's industry connections."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/5 to-transparent border-blue-500/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Priya Patel"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">Priya Patel</h3>
                    <p className="text-sm text-muted-foreground">
                      Electronics Engineering, 2nd Year
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "As someone with no prior coding experience, I was nervous
                  about joining a technical society. But the mentorship program
                  at Nextronix Club helped me learn at my own pace. Now I'm
                  leading a team in the upcoming robotics competition. The
                  supportive community makes all the difference!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/5 to-transparent border-green-500/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Amit Kumar"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">Amit Kumar</h3>
                    <p className="text-sm text-muted-foreground">
                      Information Technology, 4th Year
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Being part of the Competitive Programming Club transformed my
                  problem-solving skills. The regular practice sessions and
                  competitions prepared me well for technical interviews. I
                  recently received job offers from two top tech companies, and
                  I credit a lot of that success to my experience here."
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
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Ready to Begin Your Tech Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
              Join Programmers' Paradise today and be part of a vibrant
              community that will help you grow your skills, build amazing
              projects, and prepare for a successful career in technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                asChild
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Link href="#top">Apply Now</Link>
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
