const SkillsReview = ({ skillsReview }) => {
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-rose-600';
  };
  
  return (
    <div className="glass rounded-3xl shadow-xl p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\u26A1'}</span>
        Skills Review
      </h3>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <svg className="w-20 h-20 transform -rotate-90">
            <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="6" fill="none" className="text-gray-100" />
            <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"
              strokeDasharray={`${(skillsReview.score / 100) * 201.06} 201.06`}
              className={`${getScoreColor(skillsReview.score)} transition-all duration-1000`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-xl font-bold ${getScoreColor(skillsReview.score)}`}>{skillsReview.score}</span>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">Strengths: {skillsReview.strengths.length}</p>
          <p className="text-sm text-gray-500">Problems: {skillsReview.problems.length}</p>
          <p className="text-sm text-gray-500">Unsupported: {skillsReview.unsupported_skills.length}</p>
        </div>
      </div>
      
      {skillsReview.strengths.length > 0 && (
        <div className="mb-5">
          <h4 className="font-semibold text-emerald-700 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-sm">{'\u2713'}</span>
            Strengths
          </h4>
          <div className="space-y-2">
            {skillsReview.strengths.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                <span className="text-emerald-500 mt-0.5">{'\u2022'}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {skillsReview.problems.length > 0 && (
        <div className="mb-5">
          <h4 className="font-semibold text-rose-700 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center text-sm">{'\u2717'}</span>
            Problems
          </h4>
          <div className="space-y-2">
            {skillsReview.problems.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                <span className="text-rose-500 mt-0.5">{'\u2022'}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {skillsReview.unsupported_skills.length > 0 && (
        <div className="mb-5">
          <h4 className="font-semibold text-amber-700 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-sm">{'\u26A1'}</span>
            Unsupported Skills
          </h4>
          <div className="space-y-2">
            {skillsReview.unsupported_skills.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                <span className="text-amber-500 mt-0.5">{'\u2022'}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {skillsReview.recommendations.length > 0 && (
        <div>
          <h4 className="font-semibold text-primary-700 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-sm">{'\uD83D\uDCA1'}</span>
            Recommendations
          </h4>
          <div className="space-y-2">
            {skillsReview.recommendations.map((item, index) => (
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

export default SkillsReview;
