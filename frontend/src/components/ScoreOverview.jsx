const ScoreOverview = ({ overall, candidate }) => {
  return (
    <div className="glass rounded-3xl shadow-card p-8 mb-6 card-hover">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full mb-4 shadow-glow">
          <span className="text-2xl font-bold text-white">
            {(candidate.name || 'Resume').charAt(0)}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-white/90">
          {candidate.name || 'Resume Review'}
        </h2>
        {candidate.current_title && (
          <p className="text-white/40 mt-1">{candidate.current_title}</p>
        )}
      </div>

      {/* Score Circle */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="none" className="text-white/5" />
            <circle cx="64" cy="64" r="56" stroke="url(#scoreGradient)" strokeWidth="8" fill="none" strokeLinecap="round"
              strokeDasharray={`${(overall.score / 100) * 351.86} 351.86`}
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-white">{overall.score}</span>
            <span className="text-sm text-white/30">/100</span>
          </div>
        </div>
      </div>

      <p className="text-white/50 text-center mb-6 leading-relaxed">
        {overall.summary}
      </p>

      {overall.strengths.length > 0 && (
        <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5">
          <h3 className="font-semibold text-white/70 mb-3 flex items-center gap-2">
            <span className="text-lg">{'\u2728'}</span>
            Key Strengths
          </h3>
          <div className="space-y-2">
            {overall.strengths.map((strength, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">{'\u2713'}</span>
                <span className="text-white/50 text-sm">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoreOverview;
