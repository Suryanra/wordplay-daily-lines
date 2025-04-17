
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, ChevronRight } from "lucide-react";
import phrasesData from '../data/phrases.json';

const Phrases = () => {
  const [selectedPhrase, setSelectedPhrase] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-outfit font-semibold flex items-center gap-2">
        <MessageSquare className="h-6 w-6" />
        Common Phrases
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {phrasesData.phrases.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-outfit font-medium">{item.phrase}</h3>
                <button
                  onClick={() => setSelectedPhrase(selectedPhrase === item.id ? null : item.id)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <ChevronRight className={`h-5 w-5 transform transition-transform ${
                    selectedPhrase === item.id ? 'rotate-90' : ''
                  }`} />
                </button>
              </div>
              <p className="text-gray-600 mt-2">{item.meaning}</p>
              {selectedPhrase === item.id && (
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

export default Phrases;
