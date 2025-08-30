"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const mainNavItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Events",
    href: "/events",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Merchandise",
    href: "/merchandise",
  },
  {
    title: "Resources",
    href: "/resources",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const clubs = [
  {
    title: "Programming & Workshop Club",
    description: "AI, ML, and software development workshops",
    href: "/clubs/programming-workshop",
  },
  {
    title: "Competitive Programming Club",
    description: "Coding contests, problem-solving, and algorithmic thinking",
    href: "/clubs/competitive-programming",
  },
  {
    title: "Nextronix (Robotics Club)",
    description: "Robotics, IoT, automation, and embedded systems",
    href: "https://nextronixutd.tech/",
  },
  {
    title: "Matlab Club",
    description:
      "Numerical computing, simulations, and engineering problem-solving",
    href: "/clubs/matlab",
  },
  {
    title: "Blockchain & Web3 Club",
    description: "dApps, smart contracts, and blockchain technologies",
    href: "/clubs/blockchain-web3",
  },
  {
    title: "PR & Outreach",
    description: "Community engagement, events, and collaborations",
    href: "/clubs/pr-outreach",
  },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full py-4">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex h-14 items-center justify-between rounded-full px-6 transition-all duration-300 mx-auto max-w-6xl",
            isScrolled
              ? "bg-background/98 backdrop-blur-md border border-border/70 shadow-lg shadow-black/10"
              : "bg-background/90 backdrop-blur-sm border border-border/50 shadow-sm"
          )}
        >
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/PP_Logo.png"
                alt="Programmers' Paradise Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent leading-relaxed py-2 inline-block min-h-[2rem]">
                Programmers&apos; Paradise
              </span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <NavigationMenu>
                <NavigationMenuList>
                  {mainNavItems.map((item) =>
                    item.title === "About" ? (
                      <NavigationMenuItem key={item.title}>
                        <NavigationMenuTrigger>About</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            <li className="row-span-3">
                              <NavigationMenuLink asChild>
                                <Link
                                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500/20 to-cyan-500/20 p-6 no-underline outline-none focus:shadow-md"
                                  href="/about"
                                >
                                  <div className="mb-2 mt-4 text-lg font-medium">
                                    About Us
                                  </div>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                    Learn about Programmers&apos; Paradise and
                                    our mission at CSVTU UTD-1 Bhilai
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            {clubs.map((club) => (
                              <li key={club.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={club.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {club.title}
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {club.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem key={item.title}>
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                            active={pathname === item.href}
                          >
                            {item.title}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    )
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="hidden md:flex">
              <Link href="/join">Join Us</Link>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85vw] sm:w-[350px] pt-10"
              >
                <nav className="flex flex-col gap-4 mt-8">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={cn(
                        "text-foreground/70 transition-colors hover:text-foreground text-lg py-2",
                        pathname === item.href && "text-foreground font-medium"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                  <div className="mt-4 pt-4 border-t">
                    <p className="font-medium mb-2">Our Clubs</p>
                    {clubs.map((club) => (
                      <Link
                        key={club.title}
                        href={club.href}
                        className="text-foreground/70 transition-colors hover:text-foreground block py-2 text-sm"
                      >
                        {club.title}
                      </Link>
                    ))}
                  </div>
                  <Button asChild className="mt-6">
                    <Link href="/join">Join Us</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
