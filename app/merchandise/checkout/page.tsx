"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const productMap: Record<
  string,
  { title: string; price: number; image: string }
> = {
  "pp-tee-black": {
    title: "Programmers' Paradise Tee (Black)",
    price: 499,
    image: "/placeholder-logo.png",
  },
  "pp-hoodie": {
    title: "Programmers' Paradise Hoodie",
    price: 999,
    image: "/placeholder-logo.png",
  },
  "pp-sticker-pack": {
    title: "Sticker Pack",
    price: 149,
    image: "/placeholder.svg",
  },
};

function getCart(): { id: string; quantity: number }[] {
  try {
    const raw = localStorage.getItem("pp_cart");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function setCart(cart: { id: string; quantity: number }[]) {
  try {
    localStorage.setItem("pp_cart", JSON.stringify(cart));
  } catch {}
}

export default function CheckoutPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [cart, setCartState] = React.useState<
    { id: string; quantity: number }[]
  >([]);

  React.useEffect(() => {
    setCartState(getCart());
  }, []);

  const updateQuantity = (id: string, delta: number) => {
    const next = cart
      .map((c) =>
        c.id === id ? { ...c, quantity: Math.max(0, c.quantity + delta) } : c
      )
      .filter((c) => c.quantity > 0);
    setCart(next);
    setCartState(next);
    try {
      window.dispatchEvent(
        new CustomEvent("pp_cart_changed", { detail: next })
      );
    } catch {}
  };

  const removeItem = (id: string) => {
    const next = cart.filter((c) => c.id !== id);
    setCart(next);
    setCartState(next);
    try {
      window.dispatchEvent(
        new CustomEvent("pp_cart_changed", { detail: next })
      );
    } catch {}
  };

  const subtotal = cart.reduce(
    (s, c) => s + (productMap[c.id]?.price || 0) * c.quantity,
    0
  );

  const placeOrder = () => {
    // In a real app you'd call an API here. We'll simply clear the cart and show a toast.
    setCart([]);
    setCartState([]);
    try {
      window.dispatchEvent(new CustomEvent("pp_cart_changed", { detail: [] }));
    } catch {}
    toast({
      title: "Order placed",
      description: "Thank you — your order was placed (demo).",
    });
    router.push("/merchandise");
  };

  if (!cart.length) {
    return (
      <main className="container py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <p className="text-muted-foreground mt-4">Your cart is empty.</p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/merchandise">Browse Merchandise</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <div className="mt-6 space-y-4">
          {cart.map((c) => {
            const info = productMap[c.id];
            return (
              <div
                key={c.id}
                className="flex items-center gap-4 rounded-md border p-4"
              >
                <div className="relative h-20 w-20 rounded bg-muted overflow-hidden">
                  <Image
                    src={info.image}
                    alt={info.title}
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-medium">{info.title}</div>
                  <div className="text-sm text-muted-foreground">
                    Price: ₹{info.price}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(c.id, -1)}
                  >
                    -
                  </Button>
                  <div className="px-3">{c.quantity}</div>
                  <Button size="sm" onClick={() => updateQuantity(c.id, 1)}>
                    +
                  </Button>
                </div>
                <div className="w-32 text-right font-semibold">
                  ₹{info.price * c.quantity}
                </div>
                <div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => removeItem(c.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-lg">Subtotal</div>
          <div className="text-xl font-bold">₹{subtotal}</div>
        </div>

        <div className="mt-6 flex gap-3">
          <Button onClick={placeOrder}>Place Order</Button>
          <Button variant="outline" asChild>
            <Link href="/merchandise">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
