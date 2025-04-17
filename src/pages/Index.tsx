
import { Button } from "@/components/ui/button";
import { BookOpenText, MessageSquare, SquareStack } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="space-y-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-outfit font-bold text-gray-900 mb-4">
          Improve Your English
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore daily words, common phrases, and practice your speaking with interactive flashcards.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-center text-center">
          <BookOpenText className="h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-outfit font-semibold mb-3">Daily Words</h2>
          <p className="text-gray-600 mb-6">Learn new English words daily with examples and definitions.</p>
          <Button asChild className="mt-auto bg-blue-600 hover:bg-blue-700">
            <Link to="/daily-words">Explore Words</Link>
          </Button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-center text-center">
          <MessageSquare className="h-12 w-12 text-green-600 mb-4" />
          <h2 className="text-2xl font-outfit font-semibold mb-3">Common Phrases</h2>
          <p className="text-gray-600 mb-6">Master everyday English phrases and their proper usage.</p>
          <Button asChild className="mt-auto bg-green-600 hover:bg-green-700">
            <Link to="/phrases">View Phrases</Link>
          </Button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-center text-center">
          <SquareStack className="h-12 w-12 text-purple-600 mb-4" />
          <h2 className="text-2xl font-outfit font-semibold mb-3">Practice Cards</h2>
          <p className="text-gray-600 mb-6">Test your knowledge with interactive correction flashcards.</p>
          <Button asChild className="mt-auto bg-purple-600 hover:bg-purple-700">
            <Link to="/flashcards">Start Practice</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
