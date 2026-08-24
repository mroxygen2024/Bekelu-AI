import { formatters } from '../utils/formatters';

const ScoreBreakdown = ({ breakdown }) => {
  const categories = [
    { key: 'ats', label: 'ATS ማህደረ ቢሮ' },
    { key: 'content', label: 'የይዘት ጥራት' },
    { key: 'experience', label: 'የስራ ግንኙነት' },
    { key: 'skills', label: 'ክህሎቶች' },
    { key: 'projects', label: 'ፕሮጀክቶች' },
    { key: 'formatting', label: 'ፎርማት ማድረግ' },
    { key: 'clarity', label: 'ግልጽነት' },
    { key: 'impact', label: 'ተጽዕኖ' },
    { key: 'career_positioning', label: 'የስራ ቦታ' },
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">የምንẓ洝 ስኬት</h3>
      
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
