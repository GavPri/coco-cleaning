import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Heart, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        About Coco Cleaning Services
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2" /> Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Greater Manchester, United Kingdom</p>
            <p className="text-sm text-muted-foreground mt-2">
              Serving the Manchester area
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Phone className="mr-2" /> Contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Mobile:{" "}
              <a
                href="tel:+447584291283"
                className="text-primary hover:underline"
              >
                +44 7584 291283
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:cococleaningservices@yahoo.com"
                className="text-primary hover:underline"
              >
                cococleaningservices@yahoo.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="mr-2 text-yellow-400" /> Customer Reviews
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-2">
            <Link
              href="https://www.facebook.com/profile.php?id=100087234579156&sk=reviews"
              target="_blank"
            >
              <Badge variant="secondary" className="mr-2">
                100% Recommend <ArrowRight className="-rotate-45" />
              </Badge>
              <span className="text-sm text-muted-foreground">
                (28 reviews)
              </span>
            </Link>
          </div>
          <p className="italic">
            "Exceptional service and attention to detail. Highly recommended!"
          </p>
        </CardContent>
      </Card>

      <Card className="mt-6 bg-yellow-50">
        <CardHeader>
          <CardTitle className="flex items-center text-primary">
            <Heart className="mr-2 text-red-500" /> Mercy Cleans Initiative
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            At Coco Cleaning Services, we believe in giving back to our
            community. Through our Mercy Cleans initiative, we provide free
            cleaning services to elderly and sick individuals who need extra
            care and support.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Free cleaning for elderly and sick individuals</li>
            <li>Compassionate care and attention to detail</li>
            <li>Supporting our local Manchester community</li>
          </ul>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Why Choose Coco Cleaning Services?
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 rounded-full p-3 mb-2">
              <Star className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-medium">Quality Service</h3>
            <p className="text-sm text-muted-foreground">
              Attention to detail in every clean
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 rounded-full p-3 mb-2">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-medium">Community Care</h3>
            <p className="text-sm text-muted-foreground">
              Giving back through Mercy Cleans
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 rounded-full p-3 mb-2">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-medium">Local Expertise</h3>
            <p className="text-sm text-muted-foreground">
              Serving Greater Manchester with pride
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
