const JobMatchReview = ({ targetJobAnalysis }) => {
  if (!targetJobAnalysis) return null;
  
  return (
    <div className="glass rounded-3xl shadow-xl p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\uD83E\uDDEA'}</span>
        {'\u1265\u127D\u12AB\u121B'} vs {'\u1278\u1213\u1275\u122B \u1265\u1275\u122B'}
      </h3>
      
      {/* Match Score */}
      <div className="flex items-center gap-6 mb-6">
        <div className="relative">
          <svg className="w-24 h-24 transform -rotate-90">
            <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-100" />
            <circle cx="48" cy="48" r="40" stroke="url(#matchGradient)" strokeWidth="8" fill="none" strokeLinecap="round"
              strokeDasharray={`${(targetJobAnalysis.match_score / 100) * 251.33} 251.33`}
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="matchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#d946ef" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold gradient-text">{targetJobAnalysis.match_score}%</span>
            <span className="text-xs text-gray-500">{'\u1349\u1275\u134D\u130D\u1276'}</span>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">{'\u1349\u1349\u134D\u130D\u1276 \u1348\u1275\u1273\u1275'}: {targetJobAnalysis.matching_skills.length}</p>
          <p className="text-sm text-gray-500">{'\u1273\u1275\u134D \u1260\u1275\u1276\u1295'}: {targetJobAnalysis.missing_keywords.length}</p>
        </div>
      </div>
      
      {/* Matching Skills */}
      {targetJobAnalysis.matching_skills.length > 0 && (
        <div className="mb-5">
          <h4 className="font-semibold text-emerald-700 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-sm">{'\u2713'}</span>
            {'\u1349\u1349\u134D\u130D\u1276 \u1348\u1275\u1273\u1275'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {targetJobAnalysis.matching_skills.map((skill, index) => (
              <span key={index} className="bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-sm font-medium">
                {'\u2713'} {skill}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Missing Keywords */}
      {targetJobAnalysis.missing_keywords.length > 0 && (
        <div className="mb-5">
          <h4 className="font-semibold text-amber-700 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-sm">{'!'}</span>
            {'\u1273\u1275\u134D \u1260\u1275\u1276\u1295 \u134D\u1275\u1348\u1293\u1275'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {targetJobAnalysis.missing_keywords.map((keyword, index) => (
              <span key={index} className="bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full text-sm font-medium">
                {'!'} {keyword}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Recommendations */}
      {targetJobAnalysis.recommendations.length > 0 && (
        <div>
          <h4 className="font-semibold text-primary-700 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-sm">{'\uD83D\uDCA1'}</span>
            {'\u1349\u1349\u1308\u1349\u1275 \u127D\u1208\u1349\u1375'}
          </h4>
          <div className="space-y-2">
            {targetJobAnalysis.recommendations.map((item, index) => (
              <div key={index} className="flex items-start gap-3 text-gray-600 text-sm">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-xs font-bold text-primary-700">
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
