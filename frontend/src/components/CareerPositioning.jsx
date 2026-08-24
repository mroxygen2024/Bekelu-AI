const CareerPositioning = ({ careerPositioning }) => {
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-rose-600';
  };
  
  return (
    <div className="glass rounded-3xl shadow-xl p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\uD83C\uDFAF'}</span>
        {'\u1265\u1275\u122B \u1260\u1275\u1348 \u1263\u1245\u1275\u1237\u1248\u130D\u1273\u1295'}
      </h3>
      
      {/* Score */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <svg className="w-20 h-20 transform -rotate-90">
            <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="6" fill="none" className="text-gray-100" />
            <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"
              strokeDasharray={`${(careerPositioning.score / 100) * 201.06} 201.06`}
              className={`${getScoreColor(careerPositioning.score)} transition-all duration-1000`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-xl font-bold ${getScoreColor(careerPositioning.score)}`}>{careerPositioning.score}</span>
          </div>
        </div>
      </div>
      
      {/* Assessment */}
      <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-5 mb-5">
        <p className="text-gray-700 leading-relaxed">{careerPositioning.assessment}</p>
      </div>
      
      {/* Recommendations */}
      {careerPositioning.recommendations.length > 0 && (
        <div>
          <h4 className="font-semibold text-primary-700 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-sm">{'\uD83D\uDCA1'}</span>
            {'\u1273\u1348\u1275\u1273'}
          </h4>
          <div className="space-y-2">
            {careerPositioning.recommendations.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                <span className="text-primary-500 mt-0.5">{'\u2022'}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPositioning;
