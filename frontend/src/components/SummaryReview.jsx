const SummaryReview = ({ summaryReview }) => {
  if (!summaryReview.present) {
    return (
      <div className="glass rounded-3xl shadow-card p-8 mb-6 card-hover">
        <h3 className="text-lg font-bold text-white/90 mb-4 flex items-center gap-2">
          <span className="text-xl">{'\uD83D\uDCC4'}</span>
          Professional Summary Review
        </h3>
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-start gap-3">
          <span className="text-2xl">{'\u26A0\uFE0F'}</span>
          <p className="text-amber-300 text-sm">
            Your resume is missing a professional summary. This is a critical issue.
          </p>
        </div>
      </div>
    );
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald-400';
    if (score >= 60) return 'text-amber-400';
    return 'text-rose-400';
  };

  return (
    <div className="glass rounded-3xl shadow-card p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-white/90 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\uD83D\uDCC4'}</span>
        Professional Summary Review
      </h3>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <svg className="w-20 h-20 transform -rotate-90">
            <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="6" fill="none" className="text-white/5" />
            <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"
              strokeDasharray={`${(summaryReview.score / 100) * 201.06} 201.06`}
              className={`${getScoreColor(summaryReview.score)} transition-all duration-1000`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-xl font-bold ${getScoreColor(summaryReview.score)}`}>{summaryReview.score}</span>
          </div>
        </div>
        <div>
          <p className="text-sm text-white/40">Strengths: {summaryReview.strengths.length}</p>
          <p className="text-sm text-white/40">Problems: {summaryReview.problems.length}</p>
        </div>
      </div>

      {summaryReview.strengths.length > 0 && (
        <div className="mb-5">
          <h4 className="font-semibold text-emerald-400 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-emerald-500/15 rounded-full flex items-center justify-center text-sm">{'\u2713'}</span>
            Strengths
          </h4>
          <div className="space-y-2">
            {summaryReview.strengths.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-white/50 text-sm">
                <span className="text-emerald-400/60 mt-0.5">{'\u2022'}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {summaryReview.problems.length > 0 && (
        <div className="mb-5">
          <h4 className="font-semibold text-rose-400 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-rose-500/15 rounded-full flex items-center justify-center text-sm">{'\u2717'}</span>
            Problems
          </h4>
          <div className="space-y-2">
            {summaryReview.problems.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-white/50 text-sm">
                <span className="text-rose-400/60 mt-0.5">{'\u2022'}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {summaryReview.suggested_rewrite && (
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5">
          <h4 className="font-semibold text-emerald-300 mb-3 flex items-center gap-2">
            <span className="text-lg">{'\u270D\uFE0F'}</span>
            Suggested Rewrite
          </h4>
          <p className="text-white/60 italic leading-relaxed text-sm">&ldquo;{summaryReview.suggested_rewrite}&rdquo;</p>
        </div>
      )}
    </div>
  );
};

export default SummaryReview;
