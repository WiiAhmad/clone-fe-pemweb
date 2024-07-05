import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="space-y-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Get in Touch</h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          Have a question or want to work together? Fill out the form below and
          we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="mt-10 md:mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                rows={5}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="text-muted-foreground">
              Feel free to reach out to us using the information below.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-muted-foreground" />
              <p>123 Main Street, Anytown USA</p>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-muted-foreground" />
              <p>+1 (555) 555-5555</p>
            </div>
            <div className="flex items-center gap-2">
              <MailOpenIcon className="h-5 w-5 text-muted-foreground" />
              <p>info@acme.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MailOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
