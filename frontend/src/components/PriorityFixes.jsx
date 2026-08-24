const PriorityFixes = ({ priorities }) => {
  if (!priorities || priorities.length === 0) return null;
  
  return (
    <div className="glass rounded-3xl shadow-xl p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\uD83D\uDD25'}</span>
        Fix These First
      </h3>
      
      <div className="space-y-3">
        {priorities.map((priority, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:border-primary-200 transition-all duration-300"
          >
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-500 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-sm font-bold text-white">{index + 1}</span>
            </div>
            <p className="text-gray-700 flex-1">{priority}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriorityFixes;
