export default function Contact() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="space-y-6 md:space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center justify-center lg:justify-start">
              <img
                src="/logo.png"
                alt="Acme Collaboration Logo"
                width={100}
                height={100}
                className="logo-footer"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Kontak Kami</h2>
              <p className="text-muted-foreground">
                Atau kunjungi kantor kami di alamat berikut.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPinIcon className="text-muted-foreground mt-1" />
                <div>
                  <p className="font-medium">Alamat kantor</p>
                  <p className="text-muted-foreground">
                    123 Main Street, Anytown USA 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <PhoneIcon className="text-muted-foreground mt-1" />
                <div>
                  <p className="font-medium">Nomor Telepon</p>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MailIcon className="text-muted-foreground mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
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
