
import DailyWords from "@/components/DailyWords";
import Phrases from "@/components/Phrases";

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
      <DailyWords />
      <Phrases />
    </div>
  );
};

export default Index;
