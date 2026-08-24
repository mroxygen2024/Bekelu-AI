const FormattingReview = ({ formattingReview }) => {
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-rose-600';
  };
  
  return (
    <div className="glass rounded-3xl shadow-xl p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\u2728'}</span>
        Formatting Review
      </h3>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <svg className="w-20 h-20 transform -rotate-90">
            <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="6" fill="none" className="text-gray-100" />
            <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"
              strokeDasharray={`${(formattingReview.score / 100) * 201.06} 201.06`}
              className={`${getScoreColor(formattingReview.score)} transition-all duration-1000`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-xl font-bold ${getScoreColor(formattingReview.score)}`}>{formattingReview.score}</span>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">Strengths: {formattingReview.strengths.length}</p>
          <p className="text-sm text-gray-500">Problems: {formattingReview.problems.length}</p>
        </div>
      </div>
      
      {formattingReview.strengths.length > 0 && (
        <div className="mb-5">
          <h4 className="font-semibold text-emerald-700 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-sm">{'\u2713'}</span>
            Strengths
          </h4>
          <div className="space-y-2">
            {formattingReview.strengths.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                <span className="text-emerald-500 mt-0.5">{'\u2022'}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {formattingReview.problems.length > 0 && (
        <div className="mb-5">
          <h4 className="font-semibold text-rose-700 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center text-sm">{'\u2717'}</span>
            Problems
          </h4>
          <div className="space-y-2">
            {formattingReview.problems.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                <span className="text-rose-500 mt-0.5">{'\u2022'}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {formattingReview.recommendations.length > 0 && (
        <div>
          <h4 className="font-semibold text-primary-700 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-sm">{'\uD83D\uDCA1'}</span>
            Recommendations
          </h4>
          <div className="space-y-2">
            {formattingReview.recommendations.map((item, index) => (
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

export default FormattingReview;
