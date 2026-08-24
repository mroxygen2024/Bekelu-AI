const ProjectsReview = ({ projectsReview }) => {
  if (!projectsReview || projectsReview.length === 0) return null;
  
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald-600 bg-emerald-50';
    if (score >= 60) return 'text-amber-600 bg-amber-50';
    return 'text-rose-600 bg-rose-50';
  };
  
  return (
    <div className="glass rounded-3xl shadow-xl p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\uD83D\uDCE6'}</span>
        {'\u1353\u1275\u134D\u1275\u12AF\u1349\u1375 \u1263\u1245\u1275\u1237\u1248\u130D\u1273\u1295'}
      </h3>
      
      <div className="space-y-4">
        {projectsReview.map((project, index) => (
          <div key={index} className="border border-gray-100 rounded-2xl p-5 hover:border-primary-200 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-accent-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white text-lg">{'\uD83C\uDFAF'}</span>
                </div>
                <h4 className="font-semibold text-gray-800">{project.name}</h4>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${getScoreColor(project.score)}`}>
                {project.score}
              </span>
            </div>
            
            {project.strengths.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-2">{'\u1260\u1275\u12F3\u1349\u1275 \u1273\u1276\u1293\u1275'}</p>
                <ul className="space-y-1">
                  {project.strengths.map((s, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">{'\u2022'}</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.problems.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-rose-600 uppercase tracking-wide mb-2">{'\u1348\u134D\u1293\u1275'}</p>
                <ul className="space-y-1">
                  {project.problems.map((p, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-rose-400 mt-1">{'\u2022'}</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.recommendations.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">{'\u1273\u1348\u1275\u1273'}</p>
                <ul className="space-y-1">
                  {project.recommendations.map((r, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-primary-400 mt-1">{'\u2022'}</span>
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
