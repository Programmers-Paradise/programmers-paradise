"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "pp-tee-black",
    title: "Programmers' Paradise Tee (Black)",
    price: "499",
    image: "/placeholder-logo.png",
    description: "Soft cotton tee with Programmers' Paradise logo.",
  },
  {
    id: "pp-hoodie",
    title: "Programmers' Paradise Hoodie",
    price: "999",
    image: "/placeholder-logo.png",
    description: "Cozy pullover hoodie with embroidered logo.",
  },
  {
    id: "pp-sticker-pack",
    title: "Sticker Pack",
    price: "149",
    image: "/placeholder.svg",
    description: "A set of logo and mascot stickers.",
  },
];

export default function MerchandisePage() {
  return (
    <main className="container py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold">Merchandise</h1>
        <p className="text-muted-foreground mt-2">
          Grab official Programmers' Paradise gear — tees, hoodies, and stickers.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Badge>Official</Badge>
          <Badge variant="secondary">Limited</Badge>
        </div>
      </div>

      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((p) => (
          <div key={p.id} className="rounded-lg border p-4 flex flex-col">
            <div className="relative h-40 w-full mb-4 overflow-hidden rounded-md bg-muted">
              <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain" />
            </div>
            <h3 className="text-lg font-medium">{p.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 flex-1">{p.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-lg font-semibold">₹{p.price}</div>
              <div className="flex items-center gap-2">
                <Button asChild size="sm">
                  <Link href="#">Buy</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="#">Details</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="max-w-4xl mx-auto mt-10 text-center">
        <p className="text-sm text-muted-foreground">
          Want custom prints or bulk orders? Reach out via the contact page.
        </p>
        <div className="mt-4">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
