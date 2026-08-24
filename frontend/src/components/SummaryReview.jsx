const SummaryReview = ({ summaryReview }) => {
  if (!summaryReview.present) {
    return (
      <div className="glass rounded-3xl shadow-xl p-8 mb-6 card-hover">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-xl">{'\uD83D\uDCC4'}</span>
          Professional Summary Review
        </h3>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
          <span className="text-2xl">{'\u26A0\uFE0F'}</span>
          <p className="text-amber-800">
            Your resume is missing a professional summary. This is a critical issue.
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="glass rounded-3xl shadow-xl p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\uD83D\uDCC4'}</span>
        Professional Summary Review
      </h3>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <svg className="w-20 h-20 transform -rotate-90">
            <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="6" fill="none" className="text-gray-100" />
            <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"
              strokeDasharray={`${(summaryReview.score / 100) * 201.06} 201.06`}
              className="text-primary-500 transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-primary-600">{summaryReview.score}</span>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">Strengths: {summaryReview.strengths.length}</p>
          <p className="text-sm text-gray-500">Problems: {summaryReview.problems.length}</p>
        </div>
      </div>
      
      {summaryReview.strengths.length > 0 && (
        <div className="mb-5">
          <h4 className="font-semibold text-emerald-700 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-sm">{'\u2713'}</span>
            Strengths
          </h4>
          <div className="space-y-2">
            {summaryReview.strengths.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                <span className="text-emerald-500 mt-0.5">{'\u2022'}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {summaryReview.problems.length > 0 && (
        <div className="mb-5">
          <h4 className="font-semibold text-rose-700 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center text-sm">{'\u2717'}</span>
            Problems
          </h4>
          <div className="space-y-2">
            {summaryReview.problems.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                <span className="text-rose-500 mt-0.5">{'\u2022'}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {summaryReview.suggested_rewrite && (
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-5">
          <h4 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2">
            <span className="text-lg">{'\u270D\uFE0F'}</span>
            Suggested Rewrite
          </h4>
          <p className="text-gray-700 italic leading-relaxed">&ldquo;{summaryReview.suggested_rewrite}&rdquo;</p>
        </div>
      )}
    </div>
  );
};

export default SummaryReview;
