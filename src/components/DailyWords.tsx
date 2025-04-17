
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpenText, ChevronRight } from "lucide-react";
import wordsData from '../data/dailyWords.json';

const DailyWords = () => {
  const [selectedWord, setSelectedWord] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-outfit font-semibold flex items-center gap-2">
        <BookOpenText className="h-6 w-6" />
        Daily Words
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {wordsData.words.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-outfit font-medium">{item.word}</h3>
                <button
                  onClick={() => setSelectedWord(selectedWord === item.id ? null : item.id)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <ChevronRight className={`h-5 w-5 transform transition-transform ${
                    selectedWord === item.id ? 'rotate-90' : ''
                  }`} />
                </button>
              </div>
              <p className="text-gray-600 mt-2">{item.definition}</p>
              {selectedWord === item.id && (
                <div className="mt-4 space-y-2">
                  {item.examples.map((example, index) => (
                    <p key={index} className="text-sm text-gray-700 p-2 bg-gray-50 rounded">
                      {example}
                    </p>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DailyWords;
