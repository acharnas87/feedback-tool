import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const initialSentences = [
  { id: 1, text: "Leadership vision is not clear", type: "improvement", keyword: "Leadership", agreePct: 60 },
  { id: 2, text: "Team collaboration is excellent", type: "good", keyword: "Collaboration", agreePct: 75 },
  { id: 3, text: "My ideas are not valued", type: "improvement", keyword: "Ideas", agreePct: 40 },
  { id: 4, text: "Onboarding process is smooth", type: "good", keyword: "Onboarding", agreePct: 80 },
];

function sentimentColor(type, pct) {
  if (type === "good") return pct > 70 ? "bg-green-300" : "bg-green-100";
  if (type === "improvement") return pct > 70 ? "bg-red-300" : "bg-red-100";
  return "bg-gray-100";
}

export default function FeedbackDemo() {
  const [stream, setStream] = useState([]);
  const [newText, setNewText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const random = initialSentences[Math.floor(Math.random() * initialSentences.length)];
      setStream((prev) => [...prev.slice(-6), { ...random, ts: Date.now() }]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const addNewSentence = () => {
    if (!newText.trim()) return;
    const newSentence = {
      id: Date.now(),
      text: `It seems that ${newText}`,
      type: "improvement",
      keyword: "Custom",
      agreePct: 50,
    };
    setStream((prev) => [...prev, newSentence]);
    setNewText("");
  };

  return (
    <div className="flex gap-4 h-[85%]">
      {/* Stream Area */}
      <div className="flex-1 bg-white rounded-2xl shadow p-4 overflow-y-auto space-y-2">
        {stream.map((s) => (
          <motion.div
            key={s.ts}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className={`p-3 rounded-lg shadow ${sentimentColor(s.type, s.agreePct)}`}
          >
            <div className="flex justify-between">
              <span>{s.text}</span>
              <span className="text-xs">{s.agreePct}% agree</span>
            </div>
          </motion.div>
        ))}

        {/* Add new feedback */}
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            placeholder="Add new feedback..."
            className="flex-1 border rounded px-2 py-1 text-sm"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={addNewSentence} className="px-3 py-1 bg-blue-500 text-white rounded">
            Add
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="w-64 bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-bold mb-3">Summary</h2>
        <ul className="space-y-2">
          {initialSentences.map((s) => (
            <li key={s.id} className={`p-2 rounded ${sentimentColor(s.type, s.agreePct)}`}>
              <div className="flex justify-between">
                <span>{s.keyword}</span>
                <span className="text-sm">{s.agreePct}% agree</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}