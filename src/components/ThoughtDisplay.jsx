
const ThoughtDisplay = ({ thoughts }) => {
  return (
    <div className="space-y-10 max-w-3xl mx-auto px-4">
      {thoughts.map((thought) => (
        <div key={thought.id} className="relative">
          {/* Main bubble */}
          <div className="bg-white dark:bg-gray-800 border border-red-300 dark:border-gray-600 rounded-3xl px-6 py-5 shadow-md relative z-10">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{thought.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">by {thought.username}</p>
            <p className="text-gray-700 dark:text-gray-200">{thought.content}</p>
          </div>

          {/* Thought dots below (like 💭) */}
          <div className="absolute-bottom-6 right-6 flex flex-col items-end gap-1 z-0">
            <span className="w-3 h-3 bg-red-300 dark:bg-gray-600 rounded-full mr-2"></span>
            <span className="w-2 h-2 bg-red-300 dark:bg-gray-600 rounded-full mt-1.5 mr-1"></span>
            <span className="w-1.5 h-1.5 bg-red-300 dark:bg-gray-600 rounded-full mt-3 ml-"></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThoughtDisplay;