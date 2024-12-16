"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";
import { Calendar, Phone } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="w-full py-12 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2 text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Professional Cleaning Services
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Leave the dirt to us. Your space awaits our expert service!
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8">
          <Tabs defaultValue="standard" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="standard">Standard Clean</TabsTrigger>
              <TabsTrigger value="deep">Deep Clean</TabsTrigger>
            </TabsList>
            <TabsContent value="standard" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Domestic Home Services</CardTitle>
                  <CardDescription>
                    Each reset includes kitchen, lounge, hall, stairs & landing
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-4">
                    {[
                      { rooms: "1 BED | 1 BATH", price: "£45" },
                      { rooms: "2 BED | 1 BATH", price: "£55" },
                      { rooms: "3 BED | 1 BATH", price: "£65" },
                      { rooms: "4 BED | 2 BATH", price: "£70" },
                      { rooms: "5 BED | 2 BATH", price: "£80" },
                      { rooms: "6 BED | 2 BATH", price: "£100" },
                    ].map((item) => (
                      <div
                        key={item.rooms}
                        className="flex items-center justify-between"
                      >
                        <span className="font-medium">{item.rooms}</span>
                        <span className="font-bold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Additional Services</h4>
                    <div className="grid gap-2">
                      {[
                        { service: "Shower | Bath Ensuite", price: "£20" },
                        { service: "Shower | Bath STD Size", price: "£40" },
                        { service: "Offices | Lounges", price: "£25" },
                        {
                          service: "Dining Room | Dressing Rooms",
                          price: "£30",
                        },
                      ].map((item) => (
                        <div
                          key={item.service}
                          className="flex items-center justify-between text-sm"
                        >
                          <span>{item.service}</span>
                          <span>{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="deep" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Deep Cleaning Services</CardTitle>
                  <CardDescription>
                    Includes thorough cleaning of all specified areas
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-4">
                    {[
                      { rooms: "1 BED | 1 BATH", price: "£220" },
                      { rooms: "2 BED | 1 BATH", price: "£280" },
                      { rooms: "3 BED | 1 BATH", price: "£320" },
                      { rooms: "4 BED | 2 BATH", price: "£400" },
                      { rooms: "5 BED | 2 BATH", price: "£550" },
                      { rooms: "6 BED | 2 BATH", price: "£650" },
                    ].map((item) => (
                      <div
                        key={item.rooms}
                        className="flex items-center justify-between"
                      >
                        <span className="font-medium">{item.rooms}</span>
                        <span className="font-bold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Additional Services</h4>
                    <div className="grid gap-2">
                      {[
                        { service: "Bath | Shower En Suite", price: "£35" },
                        {
                          service: "Bath & Shower Room STD Size",
                          price: "£65",
                        },
                        { service: "Lounges | Dining Rooms", price: "£45" },
                        { service: "Offices | Dressing Rooms", price: "£40" },
                      ].map((item) => (
                        <div
                          key={item.service}
                          className="flex items-center justify-between text-sm"
                        >
                          <span>{item.service}</span>
                          <span>{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Oven Cleaning</h4>
                    <div className="grid gap-2">
                      {[
                        { service: "Single Oven", price: "£55" },
                        { service: "Large Oven", price: "£90" },
                        { service: "Racks x2", price: "£15" },
                        { service: "Racks x4", price: "£30" },
                      ].map((item) => (
                        <div
                          key={item.service}
                          className="flex items-center justify-between text-sm"
                        >
                          <span>{item.service}</span>
                          <span>{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <div className="mt-8 flex gap-4 w-full">
            <Button>
              Book <Calendar />
            </Button>
            <Button variant={"secondary"}>
              Call <Phone />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
