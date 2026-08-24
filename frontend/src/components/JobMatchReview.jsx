const JobMatchReview = ({ targetJobAnalysis }) => {
  if (!targetJobAnalysis) return null;

  return (
    <div className="glass rounded-3xl shadow-card p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-white/90 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\uD83E\uDDEA'}</span>
        Resume vs Target Job
      </h3>

      <div className="flex items-center gap-6 mb-6">
        <div className="relative">
          <svg className="w-24 h-24 transform -rotate-90">
            <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-white/5" />
            <circle cx="48" cy="48" r="40" stroke="url(#matchGradient)" strokeWidth="8" fill="none" strokeLinecap="round"
              strokeDasharray={`${(targetJobAnalysis.match_score / 100) * 251.33} 251.33`}
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="matchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold gradient-text">{targetJobAnalysis.match_score}%</span>
            <span className="text-xs text-white/30">Match</span>
          </div>
        </div>
        <div>
          <p className="text-sm text-white/40">Matching Skills: {targetJobAnalysis.matching_skills.length}</p>
          <p className="text-sm text-white/40">Missing Keywords: {targetJobAnalysis.missing_keywords.length}</p>
        </div>
      </div>

      {targetJobAnalysis.matching_skills.length > 0 && (
        <div className="mb-5">
          <h4 className="font-semibold text-emerald-400 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-emerald-500/15 rounded-full flex items-center justify-center text-sm">{'\u2713'}</span>
            Matching Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {targetJobAnalysis.matching_skills.map((skill, index) => (
              <span key={index} className="bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 px-3 py-1.5 rounded-full text-sm font-medium">
                {'\u2713'} {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {targetJobAnalysis.missing_keywords.length > 0 && (
        <div className="mb-5">
          <h4 className="font-semibold text-amber-400 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-amber-500/15 rounded-full flex items-center justify-center text-sm">{'!'}</span>
            Missing Keywords
          </h4>
          <div className="flex flex-wrap gap-2">
            {targetJobAnalysis.missing_keywords.map((keyword, index) => (
              <span key={index} className="bg-amber-500/15 text-amber-300 border border-amber-500/20 px-3 py-1.5 rounded-full text-sm font-medium">
                {'!'} {keyword}
              </span>
            ))}
          </div>
        </div>
      )}

      {targetJobAnalysis.recommendations.length > 0 && (
        <div>
          <h4 className="font-semibold text-primary-400 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-primary-500/15 rounded-full flex items-center justify-center text-sm">{'\uD83D\uDCA1'}</span>
            Recommended Changes
          </h4>
          <div className="space-y-2">
            {targetJobAnalysis.recommendations.map((item, index) => (
              <div key={index} className="flex items-start gap-3 text-white/50 text-sm">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500/15 rounded-full flex items-center justify-center text-xs font-bold text-primary-300 border border-primary-500/20">
                  {index + 1}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobMatchReview;
