const ExperienceReview = ({ experienceReview }) => {
  if (!experienceReview || experienceReview.length === 0) return null;

  const getScoreBadge = (score) => {
    if (score >= 80) return 'text-emerald-400 bg-emerald-500/15 border-emerald-500/20';
    if (score >= 60) return 'text-amber-400 bg-amber-500/15 border-amber-500/20';
    return 'text-rose-400 bg-rose-500/15 border-rose-500/20';
  };

  return (
    <div className="glass rounded-3xl shadow-card p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-white/90 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\uD83D\uDCBC'}</span>
        Work Experience Review
      </h3>

      <div className="space-y-6">
        {experienceReview.map((exp, index) => (
          <div key={index} className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 hover:border-primary-500/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-semibold text-white/80">{exp.position}</h4>
                <p className="text-sm text-white/40">{exp.company}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-bold border ${getScoreBadge(exp.score)}`}>
                {exp.score}
              </span>
            </div>

            {exp.strengths.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wide mb-2 flex items-center gap-1">
                  <span className="w-4 h-4 bg-emerald-500/15 rounded-full flex items-center justify-center text-[10px]">{'\u2713'}</span>
                  Strengths
                </p>
                <ul className="space-y-1">
                  {exp.strengths.map((s, i) => (
                    <li key={i} className="text-sm text-white/50 flex items-start gap-2">
                      <span className="text-emerald-400/40 mt-1">{'\u2022'}</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {exp.problems.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-rose-400 uppercase tracking-wide mb-2 flex items-center gap-1">
                  <span className="w-4 h-4 bg-rose-500/15 rounded-full flex items-center justify-center text-[10px]">{'\u26A0'}</span>
                  Problems
                </p>
                <ul className="space-y-1">
                  {exp.problems.map((p, i) => (
                    <li key={i} className="text-sm text-white/50 flex items-start gap-2">
                      <span className="text-rose-400/40 mt-1">{'\u2022'}</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {exp.recommendations.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-primary-400 uppercase tracking-wide mb-2 flex items-center gap-1">
                  <span className="w-4 h-4 bg-primary-500/15 rounded-full flex items-center justify-center text-[10px]">{'\uD83D\uDCA1'}</span>
                  Recommendations
                </p>
                <ul className="space-y-1">
                  {exp.recommendations.map((r, i) => (
                    <li key={i} className="text-sm text-white/50 flex items-start gap-2">
                      <span className="text-primary-400/40 mt-1">{'\u2022'}</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceReview;
