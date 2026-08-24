const ProjectsReview = ({ projectsReview }) => {
  if (!projectsReview || projectsReview.length === 0) return null;

  const getScoreBadge = (score) => {
    if (score >= 80) return 'text-emerald-400 bg-emerald-500/15 border-emerald-500/20';
    if (score >= 60) return 'text-amber-400 bg-amber-500/15 border-amber-500/20';
    return 'text-rose-400 bg-rose-500/15 border-rose-500/20';
  };

  return (
    <div className="glass rounded-3xl shadow-card p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-white/90 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\uD83D\uDCE6'}</span>
        Projects Review
      </h3>

      <div className="space-y-4">
        {projectsReview.map((project, index) => (
          <div key={index} className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 hover:border-primary-500/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-600/20 rounded-xl flex items-center justify-center border border-primary-500/20">
                  <span className="text-white/70 text-lg">{'\uD83C\uDFAF'}</span>
                </div>
                <h4 className="font-semibold text-white/80">{project.name}</h4>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-bold border ${getScoreBadge(project.score)}`}>
                {project.score}
              </span>
            </div>

            {project.strengths.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wide mb-2">Strengths</p>
                <ul className="space-y-1">
                  {project.strengths.map((s, i) => (
                    <li key={i} className="text-sm text-white/50 flex items-start gap-2">
                      <span className="text-emerald-400/40 mt-1">{'\u2022'}</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.problems.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-rose-400 uppercase tracking-wide mb-2">Problems</p>
                <ul className="space-y-1">
                  {project.problems.map((p, i) => (
                    <li key={i} className="text-sm text-white/50 flex items-start gap-2">
                      <span className="text-rose-400/40 mt-1">{'\u2022'}</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.recommendations.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-primary-400 uppercase tracking-wide mb-2">Recommendations</p>
                <ul className="space-y-1">
                  {project.recommendations.map((r, i) => (
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

export default ProjectsReview;
