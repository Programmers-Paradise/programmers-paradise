import { TeamCard } from "@/components/team-card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="text-center">
            <Badge className="mb-4">Our Team</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Meet the Minds Behind Programmers&apos; Paradise
            </h1>
            <p className="text-muted-foreground md:text-lg max-w-[700px] mx-auto">
              Our dedicated team of tech enthusiasts, innovators, and leaders
              working together to create a vibrant technical community at CSVTU
              UTD-1 Bhilai.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="core" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="core">Core Team</TabsTrigger>
              <TabsTrigger value="club">Club Leads</TabsTrigger>
              <TabsTrigger value="mentors">Mentors</TabsTrigger>
            </TabsList>

            <TabsContent value="core" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <TeamCard
                  name="Rahul Sharma"
                  role="President"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Computer Science student passionate about AI and machine learning. Leading the society's initiatives since 2023."
                  github="https://github.com"
                  linkedin="https://linkedin.com"
                  twitter="https://twitter.com"
                />
                <TeamCard
                  name="Priya Patel"
                  role="Vice President"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Electronics engineering student with expertise in IoT and embedded systems. Manages society operations and events."
                  github="https://github.com"
                  linkedin="https://linkedin.com"
                />
                <TeamCard
                  name="Amit Kumar"
                  role="General Secretary"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Information Technology student focused on web development and UI/UX design. Coordinates between different clubs."
                  linkedin="https://linkedin.com"
                  twitter="https://twitter.com"
                />
                <TeamCard
                  name="Neha Singh"
                  role="Treasurer"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Computer Science student with interest in blockchain and finance. Manages society funds and sponsorships."
                  github="https://github.com"
                  linkedin="https://linkedin.com"
                />
                <TeamCard
                  name="Vikram Joshi"
                  role="Technical Head"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Final year Computer Science student specializing in system architecture and cloud computing."
                  github="https://github.com"
                  linkedin="https://linkedin.com"
                />
                <TeamCard
                  name="Ananya Gupta"
                  role="Creative Head"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Design enthusiast with skills in graphic design and UI/UX. Creates visual content for society events."
                  linkedin="https://linkedin.com"
                  twitter="https://twitter.com"
                />
                <TeamCard
                  name="Rohan Verma"
                  role="PR & Outreach Head"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Communication expert managing external relations and partnerships with industry and other colleges."
                  linkedin="https://linkedin.com"
                  twitter="https://twitter.com"
                />
                <TeamCard
                  name="Sanya Kapoor"
                  role="Event Coordinator"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Organized and detail-oriented student managing the planning and execution of all society events."
                  github="https://github.com"
                  linkedin="https://linkedin.com"
                />
              </div>
            </TabsContent>

            <TabsContent value="club" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <TeamCard
                  name="Arjun Mehta"
                  role="Programming & Workshop Club Lead"
                  image="/placeholder.svg?height=300&width=300"
                  bio="AI/ML enthusiast with experience in organizing technical workshops and hands-on sessions."
                  github="https://github.com"
                  linkedin="https://linkedin.com"
                />
                <TeamCard
                  name="Divya Sharma"
                  role="Competitive Programming Club Lead"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Algorithmic problem solver with participation in multiple national coding competitions."
                  github="https://github.com"
                  linkedin="https://linkedin.com"
                />
                <TeamCard
                  name="Manoj Kumar Sinha"
                  role="Nextronix (Robotics Club) Lead"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Robotics and IoT specialist with experience in building automated systems and devices."
                  github="https://github.com"
                  linkedin="https://linkedin.com"
                />
                <TeamCard
                  name="Meera Desai"
                  role="Matlab Club Lead"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Engineering simulation expert with strong mathematical modeling and problem-solving skills."
                  linkedin="https://linkedin.com"
                />
                <TeamCard
                  name="Karan Malhotra"
                  role="Blockchain & Web3 Club Lead"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Blockchain developer with experience in smart contracts and decentralized applications."
                  github="https://github.com"
                  linkedin="https://linkedin.com"
                />
                <TeamCard
                  name="Tanya Khanna"
                  role="PR & Outreach Club Lead"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Communication specialist managing community engagement and industry collaborations."
                  linkedin="https://linkedin.com"
                  twitter="https://twitter.com"
                />
              </div>
            </TabsContent>

            <TabsContent value="mentors" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <TeamCard
                  name="Dr. Rajesh Kumar"
                  role="Faculty Advisor"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Professor of Computer Science with expertise in AI and machine learning. Guides the society's technical initiatives."
                  linkedin="https://linkedin.com"
                />
                <TeamCard
                  name="Prof. Sunita Verma"
                  role="Faculty Mentor"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Associate Professor of Electronics Engineering specializing in embedded systems and IoT."
                  linkedin="https://linkedin.com"
                />
                <TeamCard
                  name="Aditya Sharma"
                  role="Industry Mentor"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Senior Software Engineer at Google with expertise in cloud computing and distributed systems."
                  github="https://github.com"
                  linkedin="https://linkedin.com"
                />
                <TeamCard
                  name="Nisha Patel"
                  role="Industry Mentor"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Product Manager at Microsoft with experience in building tech products and team leadership."
                  linkedin="https://linkedin.com"
                  twitter="https://twitter.com"
                />
                <TeamCard
                  name="Vivek Gupta"
                  role="Alumni Mentor"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Former society president now working as a Data Scientist at Amazon. Guides AI/ML initiatives."
                  github="https://github.com"
                  linkedin="https://linkedin.com"
                />
                <TeamCard
                  name="Ritu Jain"
                  role="Alumni Mentor"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Former technical head now working as a Blockchain Developer at a leading startup."
                  github="https://github.com"
                  linkedin="https://linkedin.com"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Join Our Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
              Interested in becoming a part of Programmers' Paradise team? We're
              always looking for passionate individuals to join our community
              and help organize events, workshops, and initiatives.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/join"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
