import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <Section bgColor="cream">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 mt-12 mb-12"
        >
          <h1 className="font-serif text-3xl mb-6 text-center gradient-text">Sign In</h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-soul-stone mb-1">Email</label>
              <input type="email" id="email" className="w-full border border-soul-cream rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue" placeholder="you@email.com" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-soul-stone mb-1">Password</label>
              <input type="password" id="password" className="w-full border border-soul-cream rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-soul-blue" placeholder="••••••••" />
            </div>
            <div className="flex justify-between items-center">
              <Link to="#" className="text-soul-blue hover:underline text-sm">Forgot password?</Link>
            </div>
            <Button type="submit" className="w-full bg-soul-blue hover:bg-soul-blue-accent text-white">Sign In</Button>
            <Button type="button" className="w-full bg-soul-gold hover:bg-soul-gold-accent text-white" onClick={() => navigate("/admin")}>Demo Login</Button>
          </form>
        </motion.div>
      </Section>
    </PageLayout>
  );
};

export default SignIn; 