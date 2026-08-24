import { formatters } from '../utils/formatters';

const ScoreBreakdown = ({ breakdown }) => {
  const categories = [
    { key: 'ats', label: 'ATS \u1260\u1295\u1275\u127F', icon: '\uD83D\uDD0D' },
    { key: 'content', label: '\u1260\u127D\u12AB\u1275 \u1349\u1325\u1271', icon: '\uD83D\uDCC4' },
    { key: 'experience', label: '\u1265\u1275\u122B \u130D\u1276\u1293\u1275', icon: '\uD83D\uDCBC' },
    { key: 'skills', label: '\u1348\u1275\u1273\u1275', icon: '\u26A1' },
    { key: 'projects', label: '\u1353\u1275\u134D\u1275\u12AF\u1349\u1375', icon: '\uD83D\uDCE6' },
    { key: 'formatting', label: '\u134C\u1295\u12B3 \u1273\u1276\u1293\u1295', icon: '\u2728' },
    { key: 'clarity', label: '\u130D\u1276\u1293\u1275', icon: '\uD83D\uDCA1' },
    { key: 'impact', label: '\u1349\u1325\u134E\u1275\u1275\u1348', icon: '\uD83D\uDCA5' },
    { key: 'career_positioning', label: '\u1265\u1275\u122B \u1260\u1275\u1348', icon: '\uD83C\uDFAF' },
  ];
  
  const getBarColor = (score) => {
    if (score >= 80) return 'from-emerald-400 to-teal-500';
    if (score >= 60) return 'from-amber-400 to-orange-500';
    return 'from-rose-400 to-red-500';
  };
  
  return (
    <div className="glass rounded-3xl shadow-xl p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\uD83D\uDCCA'}</span>
        {'\u1273\u1349\u1275\u1276 \u1273\u1276\u1293\u1275'}
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
                <span className={`text-sm font-bold ${formatters.getScoreColor(score)}`}>
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
