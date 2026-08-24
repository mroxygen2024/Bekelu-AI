const ScoreBreakdown = ({ breakdown }) => {
  const categories = [
    { key: 'ats', label: 'ATS Compatibility', icon: '\uD83D\uDD0D' },
    { key: 'content', label: 'Content Quality', icon: '\uD83D\uDCC4' },
    { key: 'experience', label: 'Experience Impact', icon: '\uD83D\uDCBC' },
    { key: 'skills', label: 'Skills', icon: '\u26A1' },
    { key: 'projects', label: 'Projects', icon: '\uD83D\uDCE6' },
    { key: 'formatting', label: 'Formatting', icon: '\u2728' },
    { key: 'clarity', label: 'Clarity', icon: '\uD83D\uDCA1' },
    { key: 'impact', label: 'Impact', icon: '\uD83D\uDCA5' },
    { key: 'career_positioning', label: 'Career Positioning', icon: '\uD83C\uDFAF' },
  ];
  
  const getBarColor = (score) => {
    if (score >= 80) return 'from-emerald-400 to-teal-500';
    if (score >= 60) return 'from-amber-400 to-orange-500';
    return 'from-rose-400 to-red-500';
  };
  
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-rose-600';
  };
  
  return (
    <div className="glass rounded-3xl shadow-xl p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\uD83D\uDCCA'}</span>
        Score Breakdown
      </h3>
      
      <div className="space-y-4">
        {categories.map(({ key, label, icon }) => {
          const score = breakdown[key];
          return (
            <div key={key} className="group">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{icon}</span>
                  <span className="text-sm font-medium text-gray-600">{label}</span>
                </div>
                <span className={`text-sm font-bold ${getScoreColor(score)}`}>
                  {score}
                </span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${getBarColor(score)} score-bar`}
                  style={{ width: `${score}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScoreBreakdown;
