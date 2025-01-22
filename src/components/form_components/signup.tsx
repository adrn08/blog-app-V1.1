"use client";

import * as React from "react";
import Link from "next/link";

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

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log("Email:", email);
    // console.log("Password:", password);
    alert(
      `Successfully Registered \n\nYour Email: ${email}\nYour Password: ${password}`
    );
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create Profile</CardTitle>
          <CardDescription>
            Why look at stars when you can become one?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">pasword</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />{" "}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/" passHref>
            <Button asChild variant="customblack">
              <span>Cancel</span>
            </Button>
          </Link>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default SignUp;
