const CareerPositioning = ({ careerPositioning }) => {
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald-400';
    if (score >= 60) return 'text-amber-400';
    return 'text-rose-400';
  };

  return (
    <div className="glass rounded-3xl shadow-card p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-white/90 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\uD83C\uDFAF'}</span>
        Career Positioning
      </h3>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <svg className="w-20 h-20 transform -rotate-90">
            <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="6" fill="none" className="text-white/5" />
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

      <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 mb-5">
        <p className="text-white/50 leading-relaxed text-sm">{careerPositioning.assessment}</p>
      </div>

      {careerPositioning.recommendations.length > 0 && (
        <div>
          <h4 className="font-semibold text-primary-400 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-primary-500/15 rounded-full flex items-center justify-center text-sm">{'\uD83D\uDCA1'}</span>
            Recommendations
          </h4>
          <div className="space-y-2">
            {careerPositioning.recommendations.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-white/50 text-sm">
                <span className="text-primary-400/60 mt-0.5">{'\u2022'}</span>
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
