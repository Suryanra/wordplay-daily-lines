
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { SquareStack } from "lucide-react";
import flashcardsData from '../data/flashcards.json';

const Flashcards = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (id: number) => {
    setFlippedCards(prev =>
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-outfit font-semibold flex items-center gap-2">
        <SquareStack className="h-6 w-6" />
        Practice Cards
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {flashcardsData.cards.map((card) => (
          <Card
            key={card.id}
            className="cursor-pointer transition-all duration-500 transform-gpu"
            onClick={() => toggleCard(card.id)}
          >
            <CardContent className="p-6 min-h-[200px] flex items-center justify-center">
              <div className="text-center">
                {flippedCards.includes(card.id) ? (
                  <>
                    <p className="text-green-600 font-medium mb-4">{card.correct}</p>
                    <p className="text-sm text-gray-600">{card.explanation}</p>
                  </>
                ) : (
                  <p className="text-red-600">{card.incorrect}</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Flashcards;
