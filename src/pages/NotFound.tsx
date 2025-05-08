
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-medium text-soul-stone mb-4 animate-fade-in">404</h1>
        <p className="text-xl md:text-2xl text-soul-stone/80 mb-8 animate-fade-in [animation-delay:200ms]">Page Not Found</p>
        <p className="text-soul-stone/70 max-w-md text-center mb-8 animate-fade-in [animation-delay:400ms]">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link to="/" className="animate-fade-in [animation-delay:600ms]">
          <Button className="bg-soul-sage hover:bg-soul-sage/90 text-white transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
            Return to Home
          </Button>
        </Link>
      </div>
    </PageLayout>
  );
};

export default NotFound;
