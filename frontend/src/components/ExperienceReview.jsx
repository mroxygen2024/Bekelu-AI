const ExperienceReview = ({ experienceReview }) => {
  if (!experienceReview || experienceReview.length === 0) return null;
  
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald-600 bg-emerald-50';
    if (score >= 60) return 'text-amber-600 bg-amber-50';
    return 'text-rose-600 bg-rose-50';
  };
  
  return (
    <div className="glass rounded-3xl shadow-xl p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\uD83D\uDCBC'}</span>
        {'\u1265\u1275\u122B \u130D\u1276\u1293\u1275 \u1263\u1245\u1275\u1237\u1248\u130D\u1273\u1295'}
      </h3>
      
      <div className="space-y-6">
        {experienceReview.map((exp, index) => (
          <div key={index} className="border border-gray-100 rounded-2xl p-5 hover:border-primary-200 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-semibold text-gray-800">{exp.position}</h4>
                <p className="text-sm text-gray-500">{exp.company}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${getScoreColor(exp.score)}`}>
                {exp.score}
              </span>
            </div>
            
            {exp.strengths.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-2 flex items-center gap-1">
                  <span className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center text-[10px]">{'\u2713'}</span>
                  {'\u1260\u1275\u12F3\u1349\u1275 \u1273\u1276\u1293\u1275'}
                </p>
                <ul className="space-y-1">
                  {exp.strengths.map((s, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">{'\u2022'}</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {exp.problems.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-rose-600 uppercase tracking-wide mb-2 flex items-center gap-1">
                  <span className="w-4 h-4 bg-rose-100 rounded-full flex items-center justify-center text-[10px]">{'\u26A0'}</span>
                  {'\u1348\u134D\u1293\u1275'}
                </p>
                <ul className="space-y-1">
                  {exp.problems.map((p, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-rose-400 mt-1">{'\u2022'}</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {exp.recommendations.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2 flex items-center gap-1">
                  <span className="w-4 h-4 bg-primary-100 rounded-full flex items-center justify-center text-[10px]">{'\uD83D\uDCA1'}</span>
                  {'\u1273\u1348\u1275\u1273'}
                </p>
                <ul className="space-y-1">
                  {exp.recommendations.map((r, i) => (
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

export default ExperienceReview;
