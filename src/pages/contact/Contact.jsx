import { Card, CardHeader, CardContent } from "@/components/ui/card";

function Contact() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Kontak Kami
            </h2>
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
    </div>
  );
}

export default Contact;
