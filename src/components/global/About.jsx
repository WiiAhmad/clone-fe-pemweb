import {Link} from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-muted">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Collaborate with your team
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Acme Collaboration is a powerful platform that enables your team
                to work together seamlessly. Share files, edit in real-time, and
                communicate effortlessly.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card className="border-0 shadow-none">
                <CardHeader className="bg-primary p-4 rounded-t-lg">
                  <FileIcon className="w-8 h-8 text-primary-foreground" />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">File Sharing</h3>
                  <p className="text-muted-foreground">
                    Securely share files with your team and collaborate on
                    documents in real-time.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none">
                <CardHeader className="bg-secondary p-4 rounded-t-lg">
                  <FilePenIcon className="w-8 h-8 text-secondary-foreground" />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Real-Time Editing</h3>
                  <p className="text-muted-foreground">
                    Edit documents, spreadsheets, and presentations
                    simultaneously with your team.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none">
                <CardHeader className="bg-accent p-4 rounded-t-lg">
                  <MessageCircleIcon className="w-8 h-8 text-accent-foreground" />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Messaging</h3>
                  <p className="text-muted-foreground">
                    Stay connected with your team through our built-in messaging
                    system.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none">
                <CardHeader className="bg-muted p-4 rounded-t-lg">
                  <DollarSignIcon className="w-8 h-8 text-muted-foreground" />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Pricing</h3>
                  <p className="text-muted-foreground">
                    Choose the plan that fits your team's needs and budget.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why choose Acme Collaboration?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Acme Collaboration is designed to help your team work together
                more efficiently and effectively. With our powerful features and
                intuitive interface, you'll be able to collaborate like never
                before.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card className="border-0 shadow-none">
                <CardHeader className="bg-primary p-4 rounded-t-lg">
                  <ShieldIcon className="w-8 h-8 text-primary-foreground" />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Secure</h3>
                  <p className="text-muted-foreground">
                    Your data is protected with industry-leading security
                    measures.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none">
                <CardHeader className="bg-secondary p-4 rounded-t-lg">
                  <GaugeIcon className="w-8 h-8 text-secondary-foreground" />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Fast</h3>
                  <p className="text-muted-foreground">
                    Blazing-fast performance for seamless collaboration.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none">
                <CardHeader className="bg-accent p-4 rounded-t-lg">
                  <UsersIcon className="w-8 h-8 text-accent-foreground" />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Scalable</h3>
                  <p className="text-muted-foreground">
                    Grow with your team, Acme Collaboration scales with your
                    needs.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none">
                <CardHeader className="bg-muted p-4 rounded-t-lg">
                  <PowerIcon className="w-8 h-8 text-muted-foreground" />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Supported</h3>
                  <p className="text-muted-foreground">
                    Our dedicated support team is here to help you every step of
                    the way.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function FileIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

function FilePenIcon(props) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function GaugeIcon(props) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

function MessageCircleIcon(props) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function PowerIcon(props) {
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
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  );
}

function ShieldIcon(props) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
