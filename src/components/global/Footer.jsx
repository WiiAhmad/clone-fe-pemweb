import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 px-4 lg:px-6 py-6 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

          <div className="col-span-1 lg:col-span-1">
            <div>
              <h4 className="text-lg font-semibold">PT. PUTRA SINAR MAS</h4>
              <p className="text-sm text-gray-600">
                Jl. Raya Pekanbaru No. 10, Pekanbaru, Riau, Indonesia
                <br />
                0812 3456 7890
                <br />
                Vj9XG@example.com
              </p>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <div>
              <h4 className="text-lg font-semibold">Media Sosial</h4>
              <div className="flex gap-4 mt-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <img
                    src="/facebook.png"
                    alt="Facebook"
                    width={50}
                    height={50}
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-400"
                >
                  <img
                    src="/twitter.png"
                    alt="Twitter"
                    width={50}
                    height={50}
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-400"
                >
                  <img
                    src="/instagram.png"
                    alt="Instagram"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
