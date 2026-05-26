// /*Version 12*/
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// function App() {
//   const [feedbackList, setFeedbackList] = useState([
//     { id: 1, text: "Leadership vision is unclear", type: "improvement" },
//     { id: 2, text: "Team collaboration is excellent", type: "good" },
//     { id: 3, text: "Onboarding process is smooth", type: "good" },
//   ]);
//   const [newFeedback, setNewFeedback] = useState("");
//   const [highlightId, setHighlightId] = useState(null);

//   const handleAdd = () => {
//     if (newFeedback.trim() === "") return;

//     const newItem = {
//       id: Date.now(),
//       text: newFeedback,
//       type: "improvement",
//     };

//     setFeedbackList([newItem, ...feedbackList]);
//     setHighlightId(newItem.id);
//     setNewFeedback("");
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       handleAdd();
//     }
//   };

//   useEffect(() => {
//     if (highlightId !== null) {
//       const timer = setTimeout(() => setHighlightId(null), 1500);
//       return () => clearTimeout(timer);
//     }
//   }, [highlightId]);

//   return (
//     <div className="min-h-screen w-full bg-gray-50 flex justify-center p-2 sm:p-4">
//       <div className="flex flex-col bg-white shadow rounded-2xl p-4 sm:p-6 w-full max-w-3xl h-screen">
//         {/* Sticky Title */}
//         <h2 className="text-xl font-semibold mb-4 text-black sticky top-0 bg-white z-10 p-2 border-b border-gray-200">
//           Feedback Stream
//         </h2>

//         {/* Scrollable Feedback List */}
//         <div className="flex-1 overflow-y-auto space-y-3 mb-4">
//           <AnimatePresence initial={false}>
//             {feedbackList.map((fb) => (
//               <motion.div
//                 key={fb.id}
//                 initial={{ y: -50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ type: "spring", stiffness: 200, damping: 20 }}
//                 className={`p-3 rounded text-black transition-colors duration-1000 ${
//                   fb.type === "good" ? "bg-green-100" : "bg-red-100"
//                 } ${fb.id === highlightId ? "bg-yellow-200 animate-pulse" : ""}`}
//               >
//                 {fb.text}
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* Input field fixed at bottom */}
//         <div className="sticky bottom-0 bg-white pt-2">
//           <div className="flex gap-2">
//             <input
//               type="text"
//               value={newFeedback}
//               onChange={(e) => setNewFeedback(e.target.value)}
//               onKeyDown={handleKeyDown}
//               className="flex-1 border border-gray-300 rounded px-3 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Add new feedback..."
//             />
//             <button
//               onClick={handleAdd}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Add
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// /*Version 13: added user & project*/
// import React, { useState } from "react";

// function App() {
//   const [feedbackList, setFeedbackList] = useState([
//     { id: 1, text: "Leadership vision is unclear", type: "improvement", user: "Sam", object: "Q3 Planning" },
//     { id: 2, text: "Team collaboration is excellent", type: "good", user: "Jamie", object: "Project Apollo" },
//   ]);

//   const [newFeedback, setNewFeedback] = useState("");
//   const [newUser, setNewUser] = useState("");
//   const [newObject, setNewObject] = useState("");
//   const [isNew, setIsNew] = useState(false);

//   const handleAddFeedback = () => {
//     if (!newFeedback.trim() || !newUser.trim() || !newObject.trim()) return;

//     const newItem = {
//       id: Date.now(),
//       text: newFeedback,
//       type: newFeedback.toLowerCase().includes("good") ? "good" : "improvement", // simple sentiment guess
//       user: newUser,
//       object: newObject,
//     };

//     setFeedbackList([newItem, ...feedbackList]);
//     setNewFeedback("");
//     setNewUser("");
//     setNewObject("");
//     setIsNew(true);

//     setTimeout(() => setIsNew(false), 1000); // reset highlight
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleAddFeedback();
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-gray-50 flex flex-col">
//       {/* Fixed header */}
//       <header className="bg-white shadow p-4 sticky top-0 z-10">
//         <h1 className="text-2xl font-bold">Feedback Stream</h1>
//       </header>

//       {/* Feedback list */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-2">
//         {feedbackList.map((fb) => (
//           <div
//             key={fb.id}
//             className={`p-3 rounded text-black transition-all duration-700 ${
//               fb.type === "good" ? "bg-green-100" : "bg-red-100"
//             } ${isNew && fb.id === feedbackList[0].id ? "animate-pulse" : ""}`}
//           >
//             <div className="font-semibold">{fb.user} → {fb.object}</div>
//             <div>{fb.text}</div>
//           </div>
//         ))}
//       </div>

//       {/* Input form fixed at bottom */}
//       <div className="p-4 bg-white border-t flex flex-col gap-2 md:flex-row">
//         <input
//           type="text"
//           value={newUser}
//           onChange={(e) => setNewUser(e.target.value)}
//           onKeyDown={handleKeyDown}
//           className="flex-1 border rounded px-2 py-1 text-black"
//           placeholder="Your name"
//         />
//         <input
//           type="text"
//           value={newObject}
//           onChange={(e) => setNewObject(e.target.value)}
//           onKeyDown={handleKeyDown}
//           className="flex-1 border rounded px-2 py-1 text-black"
//           placeholder="Object (e.g. Project Apollo)"
//         />
//         <input
//           type="text"
//           value={newFeedback}
//           onChange={(e) => setNewFeedback(e.target.value)}
//           onKeyDown={handleKeyDown}
//           className="flex-1 border rounded px-2 py-1 text-white bg-gray-800"
//           placeholder="Add new feedback..."
//         />
//         <button
//           onClick={handleAddFeedback}
//           className="bg-blue-500 text-white px-4 py-1 rounded"
//         >
//           Add
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

// /*Version 14*/
// import React, { useState } from "react";

// function App() {
//   // Setup state
//   const [username, setUsername] = useState("");
//   const [project, setProject] = useState("");
//   const [isSetupComplete, setIsSetupComplete] = useState(false);

//   // Feedback state
//   const [feedbackList, setFeedbackList] = useState([]);
//   const [newFeedback, setNewFeedback] = useState("");
//   const [isNew, setIsNew] = useState(false);
//   const [isDone, setIsDone] = useState(false);

//   // Handle setup confirm
//   const handleConfirmSetup = () => {
//     if (!username.trim() || !project.trim()) return;
//     setIsSetupComplete(true);
//   };

//   // Handle feedback add
//   const handleAddFeedback = () => {
//     if (!newFeedback.trim() || isDone) return;

//     const newItem = {
//       id: Date.now(),
//       text: newFeedback,
//       type: newFeedback.toLowerCase().includes("good") ? "good" : "improvement",
//       user: username,
//       object: project,
//     };

//     setFeedbackList([newItem, ...feedbackList]);
//     setNewFeedback("");
//     setIsNew(true);
//     setTimeout(() => setIsNew(false), 1000);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") handleAddFeedback();
//   };

//   return (
//     <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-center p-4">
//       {!isSetupComplete ? (
//         // STEP 1: Setup screen
//         <div className="bg-white p-6 rounded-xl shadow w-full max-w-md space-y-4">
//           <h1 className="text-2xl font-bold">Start Feedback Session</h1>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full border rounded px-3 py-2"
//             placeholder="Your name"
//           />
//           <input
//             type="text"
//             value={project}
//             onChange={(e) => setProject(e.target.value)}
//             className="w-full border rounded px-3 py-2"
//             placeholder="Project name"
//           />
//           <button
//             onClick={handleConfirmSetup}
//             className="w-full bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
//             disabled={!username.trim() || !project.trim()}
//           >
//             Confirm
//           </button>
//         </div>
//       ) : (
//         // STEP 2: Feedback screen
//         <div className="min-h-screen w-full bg-gray-50 flex flex-col">
//           {/* Header */}
//           <header className="bg-white shadow p-4 sticky top-0 z-10 flex justify-between items-center">
//             <h1 className="text-2xl font-bold">Feedback Stream</h1>
//             {!isDone && (
//               <button
//                 onClick={() => setIsDone(true)}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Done
//               </button>
//             )}
//           </header>

//           {/* Feedback list */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-2">
//             {feedbackList.map((fb) => (
//               <div
//                 key={fb.id}
//                 className={`p-3 rounded text-black transition-all duration-700 ${
//                   fb.type === "good" ? "bg-green-100" : "bg-red-100"
//                 } ${isNew && fb.id === feedbackList[0].id ? "animate-pulse" : ""}`}
//               >
//                 {fb.text}
//               </div>
//             ))}
//           </div>

//           {/* Input (hidden if Done) */}
//           {!isDone && (
//             <div className="p-4 bg-white border-t flex gap-2">
//               <input
//                 type="text"
//                 value={newFeedback}
//                 onChange={(e) => setNewFeedback(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 className="flex-1 border rounded px-2 py-1 text-white bg-gray-800"
//                 placeholder="Add new feedback..."
//               />
//               <button
//                 onClick={handleAddFeedback}
//                 className="bg-blue-500 text-white px-4 py-1 rounded"
//               >
//                 Add
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// /*Version 15*/
// import React, { useState } from "react";

// function App() {
//   // Setup state
//   const [username, setUsername] = useState("");
//   const [project, setProject] = useState("");
//   const [isSetupComplete, setIsSetupComplete] = useState(false);

//   // Feedback state
//   const [feedbackList, setFeedbackList] = useState([]);
//   const [newFeedback, setNewFeedback] = useState("");
//   const [isNew, setIsNew] = useState(false);
//   const [isDone, setIsDone] = useState(false);

//   // Handle setup confirm
//   const handleConfirmSetup = () => {
//     if (!username.trim() || !project.trim()) return;
//     setIsSetupComplete(true);
//   };

//   // Handle feedback add
//   const handleAddFeedback = () => {
//     if (!newFeedback.trim() || isDone) return;

//     const newItem = {
//       id: Date.now(),
//       text: newFeedback,
//       type: newFeedback.toLowerCase().includes("good") ? "good" : "improvement",
//       user: username,
//       object: project,
//     };

//     setFeedbackList([newItem, ...feedbackList]);
//     setNewFeedback("");
//     setIsNew(true);
//     setTimeout(() => setIsNew(false), 1000);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") handleAddFeedback();
//   };

//   return (
//     <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-center p-4">
//       {!isSetupComplete ? (
//         // STEP 1: Setup screen
//         <div className="bg-white p-6 rounded-xl shadow w-full max-w-md space-y-4">
//           <h1 className="text-2xl font-bold">Start Feedback Session</h1>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full border rounded px-3 py-2"
//             placeholder="Your name"
//           />
//           <input
//             type="text"
//             value={project}
//             onChange={(e) => setProject(e.target.value)}
//             className="w-full border rounded px-3 py-2"
//             placeholder="Project name"
//           />
//           <button
//             onClick={handleConfirmSetup}
//             className="w-full bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
//             disabled={!username.trim() || !project.trim()}
//           >
//             Confirm
//           </button>
//         </div>
//       ) : (
//         // STEP 2: Feedback screen
//         <div className="min-h-screen w-full bg-gray-50 flex flex-col">
//           {/* Header */}
//           <header className="bg-white shadow p-4 sticky top-0 z-10 flex justify-between items-center">
//             <h1 className="text-2xl font-bold">Feedback Stream</h1>
//           </header>

//           {/* Feedback list */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-2">
//             {feedbackList.map((fb) => (
//               <div
//                 key={fb.id}
//                 className={`p-3 rounded text-black transition-all duration-700 ${
//                   fb.type === "good" ? "bg-green-100" : "bg-red-100"
//                 } ${isNew && fb.id === feedbackList[0].id ? "animate-pulse" : ""}`}
//               >
//                 {fb.text}
//               </div>
//             ))}
//           </div>

//           {/* Input (hidden if Done) */}
//           {!isDone && (
//             <div className="p-4 bg-white border-t flex gap-2">
//               <input
//                 type="text"
//                 value={newFeedback}
//                 onChange={(e) => setNewFeedback(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 className="flex-1 border rounded px-2 py-1 text-white bg-gray-800"
//                 placeholder="Add new feedback..."
//               />
//               <button
//                 onClick={handleAddFeedback}
//                 className="bg-blue-500 text-white px-4 py-1 rounded"
//               >
//                 Add
//               </button>
//               <button
//                 onClick={() => setIsDone(true)}
//                 className="bg-black text-white px-4 py-1 rounded"
//               >
//                 Done
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// /*Version 16 -- no good*/
// import React, { useState } from "react";

// function App() {
//   const [user, setUser] = useState("");
//   const [project, setProject] = useState("");
//   const [confirmed, setConfirmed] = useState(false);
//   const [feedbackList, setFeedbackList] = useState([]);
//   const [newFeedback, setNewFeedback] = useState("");
//   const [isDone, setIsDone] = useState(false);

//   const handleConfirm = () => {
//     if (user.trim() && project.trim()) {
//       setConfirmed(true);
//     }
//   };

//   const handleAddFeedback = () => {
//     if (!newFeedback.trim()) return;
//     setFeedbackList((prev) => [
//       { id: Date.now(), text: newFeedback, user, project },
//       ...prev,
//     ]);
//     setNewFeedback("");
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       handleAddFeedback();
//     }
//   };

//   if (!confirmed) {
//     // Intro screen
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="bg-white p-6 rounded-2xl shadow w-full max-w-md">
//           <h1 className="text-xl font-bold mb-4">Start Feedback</h1>
//           <input
//             type="text"
//             value={user}
//             onChange={(e) => setUser(e.target.value)}
//             placeholder="Enter your name"
//             className="w-full border rounded px-2 py-1 mb-3"
//           />
//           <input
//             type="text"
//             value={project}
//             onChange={(e) => setProject(e.target.value)}
//             placeholder="Enter project name"
//             className="w-full border rounded px-2 py-1 mb-3"
//           />
//           <button
//             onClick={handleConfirm}
//             disabled={!user.trim() || !project.trim()}
//             className="w-full bg-blue-500 text-white py-2 rounded disabled:bg-gray-300"
//           >
//             Confirm
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Feedback stream screen
//   return (
//     <div className="min-h-screen w-full bg-gray-50 flex flex-col">
//       {/* Header */}
//       <header className="bg-white shadow p-4 sticky top-0 z-10 flex justify-between items-center">
//         <h1 className="text-2xl font-bold">
//           Feedback for <span className="text-blue-600">{project}</span>
//         </h1>
//       </header>

//       {/* Feedback list */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-2">
//         {feedbackList.map((fb) => (
//           <div
//             key={fb.id}
//             className="p-3 bg-white border rounded shadow-sm animate-slideDown"
//           >
//             {fb.text}
//           </div>
//         ))}
//       </div>

//       {/* Input area (hidden if Done) */}
//       {!isDone && (
//         <div className="p-4 bg-white border-t flex gap-2">
//           <input
//             type="text"
//             value={newFeedback}
//             onChange={(e) => setNewFeedback(e.target.value)}
//             onKeyDown={handleKeyDown}
//             className="flex-1 border rounded px-2 py-1 text-white bg-gray-800"
//             placeholder="Add new feedback..."
//           />
//           <button
//             onClick={handleAddFeedback}
//             className="bg-blue-500 text-white px-4 py-1 rounded"
//           >
//             Add
//           </button>
//           <button
//             onClick={() => setIsDone(true)}
//             className="bg-black text-white px-4 py-1 rounded"
//           >
//             Done
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// /*Version 17*/
// import React, { useState } from "react";

// function App() {
//   const [step, setStep] = useState("start"); // "start" | "feedback"
//   const [username, setUsername] = useState("");
//   const [project, setProject] = useState("");
//   const [feedbackList, setFeedbackList] = useState([]);
//   const [newFeedback, setNewFeedback] = useState("");
//   const [newType, setNewType] = useState("good");
//   const [done, setDone] = useState(false);

//   // Handle adding new feedback
//   const handleAddFeedback = () => {
//     if (!newFeedback.trim() || done) return;
//     const newItem = {
//       id: Date.now(),
//       text: newFeedback,
//       type: newType,
//     };
//     setFeedbackList([newItem, ...feedbackList]); // newest on top
//     setNewFeedback("");
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleAddFeedback();
//     }
//   };

//   // First screen: ask for username + project
//   if (step === "start") {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//         <div className="bg-white shadow rounded-2xl p-8 w-full max-w-md space-y-4">
//           <h1 className="text-2xl font-bold text-gray-900">Welcome</h1>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             className="w-full border rounded px-3 py-2"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Enter project name"
//             className="w-full border rounded px-3 py-2"
//             value={project}
//             onChange={(e) => setProject(e.target.value)}
//           />
//           <button
//             className="bg-blue-500 text-white w-full py-2 rounded font-medium"
//             onClick={() => {
//               if (username && project) setStep("feedback");
//             }}
//           >
//             Start Giving Feedback
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Feedback screen
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Header stays visible */}
//       <div className="bg-white shadow p-4 sticky top-0 z-10">
//         <h2 className="text-xl font-semibold">
//           <span className="text-black">Feedback for</span> {project}
//         </h2>
//       </div>

//       {/* Feedback list */}
//       <div className="flex-1 overflow-y-auto p-6 space-y-3">
//         {feedbackList.map((fb) => (
//           <div
//             key={fb.id}
//             className={`p-3 rounded shadow-sm ${
//               fb.type === "good" ? "bg-green-200" : "bg-red-200"
//             }`}
//           >
//             {fb.text}
//           </div>
//         ))}
//       </div>

//       {/* Input section (hidden when done) */}
//       {!done && (
//         <div className="bg-white p-4 shadow flex gap-2 sticky bottom-0">
//           <input
//             type="text"
//             className="flex-1 border rounded px-3 py-2"
//             placeholder="Add new feedback..."
//             value={newFeedback}
//             onChange={(e) => setNewFeedback(e.target.value)}
//             onKeyDown={handleKeyDown}
//           />
//           <select
//             value={newType}
//             onChange={(e) => setNewType(e.target.value)}
//             className="border rounded px-2 py-1"
//           >
//             <option value="good">Good</option>
//             <option value="improvement">Improvement</option>
//           </select>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//             onClick={handleAddFeedback}
//           >
//             Add
//           </button>
//           <button
//             className="bg-black text-white px-4 py-2 rounded"
//             onClick={() => setDone(true)}
//           >
//             Done
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

/*Version 18*/
import React, { useState, useEffect, useRef } from "react";
import { supabase } from "./supabaseClient";

function App() {
  // App state
  const [step, setStep] = useState("start"); // "start" or "feedback"
  const [username, setUsername] = useState("");
  const [project, setProject] = useState("");
  const [userId, setUserId] = useState(null);
  const [projectId, setProjectId] = useState(null);

  const [feedbackList, setFeedbackList] = useState([]);
  const [newFeedback, setNewFeedback] = useState("");
  const [newType, setNewType] = useState("good");
  const [done, setDone] = useState(false);

  const feedbackEndRef = useRef(null);

  // Scroll to bottom if needed
  useEffect(() => {
    feedbackEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [feedbackList]);

  // Handle start screen submission
  const handleStart = async () => {
    if (!username.trim() || !project.trim()) return;

    // Insert user
    const { data: userData, error: userError } = await supabase
      .from("users")
      .insert([{ name: username }])
      .select()
      .single();
    if (userError) return console.error(userError);

    // Insert project
    const { data: projectData, error: projectError } = await supabase
      .from("projects")
      .insert([{ name: project, user_id: userData.id }])
      .select()
      .single();
    if (projectError) return console.error(projectError);

    setUserId(userData.id);
    setProjectId(projectData.id);
    setStep("feedback");

    // Fetch any existing feedback (optional)
    const { data, error } = await supabase
      .from("feedback")
      .select("*")
      .eq("project_id", projectData.id)
      .order("created_at", { ascending: false });
    if (data) setFeedbackList(data);
  };

  // Handle adding new feedback
  const handleAddFeedback = async () => {
    if (!newFeedback.trim() || done) return;

    const newItem = {
      text: newFeedback,
      type: newType,
      user_id: userId,
      project_id: projectId,
    };

    // Insert into Supabase
    const { data, error } = await supabase.from("feedback").insert([newItem]);
    if (error) return console.error(error);

    // Update local state (newest on top)
    setFeedbackList([ { id: Date.now(), ...newItem }, ...feedbackList ]);
    setNewFeedback("");
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddFeedback();
  };

  // Start screen
  if (step === "start") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome! Enter your info</h1>
        <input
          className="mb-2 p-2 border rounded w-full max-w-xs"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="mb-2 p-2 border rounded w-full max-w-xs"
          placeholder="Project"
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          onClick={handleStart}
        >
          Start
        </button>
      </div>
    );
  }

  // Feedback screen
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 p-4">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-4 sticky top-0 bg-gray-50 z-10">
        <span className="text-black">Feedback for</span> {project}
      </h2>

      {/* Feedback Stream */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {feedbackList.map((fb) => (
          <div
            key={fb.id}
            className={`p-3 rounded ${
              fb.type === "good" ? "bg-green-100 text-black" : "bg-red-100 text-black"
            }`}
          >
            {fb.text}
          </div>
        ))}
        <div ref={feedbackEndRef} />
      </div>

      {/* Input + Add/Done buttons */}
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          className="flex-1 border rounded px-2 py-1 text-white bg-gray-700"
          placeholder="Add new feedback..."
          value={newFeedback}
          onChange={(e) => setNewFeedback(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={done}
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded"
          onClick={handleAddFeedback}
          disabled={done}
        >
          Add
        </button>
        <button
          className="bg-black text-white px-4 py-1 rounded"
          onClick={() => setDone(true)}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default App;
