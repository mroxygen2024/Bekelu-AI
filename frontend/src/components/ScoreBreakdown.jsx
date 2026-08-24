import { formatters } from '../utils/formatters';

const ScoreBreakdown = ({ breakdown }) => {
  const categories = [
    { key: 'ats', label: 'ATS \u1260\u1295\u1275\u127F' },
    { key: 'content', label: '\u1260\u127D\u12AB\u1275 \u1349\u1325\u1271' },
    { key: 'experience', label: '\u1265\u1275\u122B \u130D\u1276\u1293\u1275' },
    { key: 'skills', label: '\u1348\u1275\u1273\u1275' },
    { key: 'projects', label: '\u1353\u1275\u134D\u1275\u12AF\u1349\u1375' },
    { key: 'formatting', label: '\u134C\u1295\u12B3 \u1273\u1276\u1293\u1295' },
    { key: 'clarity', label: '\u130D\u1276\u1293\u1275' },
    { key: 'impact', label: '\u1349\u1325\u134E\u1275\u1275\u1348' },
    { key: 'career_positioning', label: '\u1265\u1275\u122B \u1260\u1275\u1348' },
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">{'\u1273\u1349\u1275\u1276 \u1273\u1276\u1293\u1275'}</h3>
      
      <div className="space-y-3">
        {categories.map(({ key, label }) => {
          const score = breakdown[key];
          return (
            <div key={key} className="flex items-center gap-4">
              <div className="w-32 text-sm text-gray-600">{label}</div>
              <div className="flex-1">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      score >= 80
                        ? 'bg-green-500'
                        : score >= 60
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
              <div className={`w-12 text-right font-medium ${formatters.getScoreColor(score)}`}>
                {score}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScoreBreakdown;
