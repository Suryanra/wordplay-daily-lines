
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BookOpenText, MessageSquare, CardStack } from "lucide-react";
import Index from "./pages/Index";
import Flashcards from "./components/Flashcards";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <Link to="/" className="text-xl font-outfit font-semibold text-gray-900">
                  English Learning
                </Link>
                <div className="flex gap-6">
                  <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                    <BookOpenText className="h-5 w-5" />
                    <span>Learn</span>
                  </Link>
                  <Link to="/flashcards" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                    <CardStack className="h-5 w-5" />
                    <span>Practice</span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/flashcards" element={<Flashcards />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
