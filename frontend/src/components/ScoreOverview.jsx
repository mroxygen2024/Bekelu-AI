import { formatters } from '../utils/formatters';

const ScoreOverview = ({ overall, candidate }) => {
  const getScoreGradient = (score) => {
    if (score >= 80) return 'from-emerald-400 to-teal-500';
    if (score >= 60) return 'from-amber-400 to-orange-500';
    return 'from-rose-400 to-red-500';
  };
  
  return (
    <div className="glass rounded-3xl shadow-xl p-8 mb-6 card-hover">
      {/* Candidate Info */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full mb-4 shadow-lg">
          <span className="text-2xl font-bold text-white">
            {(candidate.name || '\u1265\u127D\u12AB\u121B').charAt(0)}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          {candidate.name || '\u1265\u127D\u12AB\u121B \u1263\u1245\u1275\u1237\u1248\u130D\u1273\u1295'}
        </h2>
        {candidate.current_title && (
          <p className="text-gray-500 mt-1">{candidate.current_title}</p>
        )}
      </div>
      
      {/* Score Circle */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-gray-100"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="url(#scoreGradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${(overall.score / 100) * 351.86} 351.86`}
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#d946ef" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold gradient-text">{overall.score}</span>
            <span className="text-sm text-gray-500">/100</span>
          </div>
        </div>
      </div>
      
      {/* Summary */}
      <p className="text-gray-600 text-center mb-6 leading-relaxed">
        {overall.summary}
      </p>
      
      {/* Strengths */}
      {overall.strengths.length > 0 && (
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-5">
          <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <span className="text-lg">{'\u2728'}</span>
            {'\u1349\u1348\u134D\u1308\u1295 \u1273\u1276\u1293\u1275'}
          </h3>
          <div className="space-y-2">
            {overall.strengths.map((strength, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-primary-500 mt-1">{'\u2713'}</span>
                <span className="text-gray-600 text-sm">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoreOverview;
