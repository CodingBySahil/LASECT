import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="text-8xl font-heading font-bold text-primary/20 mb-4">
              404
            </div>
            <h1 className="text-3xl font-heading font-bold mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl transition-all hover:shadow-lg hover:scale-105"
              >
                <Home className="w-5 h-5" />
                Go to Homepage
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border font-semibold rounded-xl transition-all hover:bg-muted"
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
