import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
  github?: string
  linkedin?: string
  twitter?: string
}

export function TeamCard({ name, role, image, bio, github, linkedin, twitter }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
        <p>{bio}</p>
      </CardContent>
      <CardFooter className="p-4 flex gap-2">
        {github && (
          <Button variant="ghost" size="icon" asChild>
            <Link href={github} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
        )}
        {linkedin && (
          <Button variant="ghost" size="icon" asChild>
            <Link href={linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        )}
        {twitter && (
          <Button variant="ghost" size="icon" asChild>
            <Link href={twitter} target="_blank" rel="noreferrer">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
