import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="pt-32 pb-20 min-h-screen flex items-center bg-[#0f172a]">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center space-y-6">
            {/* 404 Code */}
            <div className="text-8xl font-heading font-bold text-[#00ffb3]/30 drop-shadow-[0_0_20px_#00ffb3]">
              404
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Page Not Found
            </h1>

            {/* Description */}
            <p className="text-white/80">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#00ffb3] text-[#0f172a] font-semibold rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                <Home className="w-5 h-5" />
                Go to Homepage
              </Link>

              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff9f43] text-black font-semibold rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
