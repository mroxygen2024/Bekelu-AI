const PriorityFixes = ({ priorities }) => {
  if (!priorities || priorities.length === 0) return null;

  return (
    <div className="glass rounded-3xl shadow-card p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-white/90 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\uD83D\uDD25'}</span>
        Fix These First
      </h3>

      <div className="space-y-3">
        {priorities.map((priority, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 bg-white/[0.03] rounded-xl border border-white/5 hover:border-primary-500/20 transition-all duration-300"
          >
            <div className="flex-shrink-0 w-8 h-8 bg-primary-600/20 border border-primary-500/20 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-primary-300">{index + 1}</span>
            </div>
            <p className="text-white/60 text-sm flex-1 leading-relaxed">{priority}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriorityFixes;
