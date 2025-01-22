import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const HeroSection = () => {
  return (
    <div className="relative w-screen h-screen">
      <Image
        src="/images/stars.jpg"
        alt="Logo"
        layout="fill"
        objectFit="cover"
        className="-z-10"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="relative z-10 flex flex-col items-center justify-center text-white cursor-pointer">
              <h1 className="text-4xl font-bold text-center">
                The Great Adventure Begins
              </h1>
              <span>A Journey To The Stars</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex flex-col items-center justify-center bg-gray-50">
              <div>
                The journey of a thousand miles begins with one step. @Lao Tzu.
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <Button asChild className="mt-4" variant="customblack">
          <Link href="/signup">
            <span>Get Started</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
