import { useState } from 'react';

const BulletReview = ({ bulletReviews }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  if (!bulletReviews || bulletReviews.length === 0) return null;
  
  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  const getProblemTypeStyle = (type) => {
    const styles = {
      vague: 'bg-gray-100 text-gray-700',
      too_long: 'bg-amber-100 text-amber-700',
      too_short: 'bg-amber-100 text-amber-700',
      no_impact: 'bg-rose-100 text-rose-700',
      no_metric: 'bg-rose-100 text-rose-700',
      weak_action_verb: 'bg-orange-100 text-orange-700',
      responsibility_only: 'bg-purple-100 text-purple-700',
      repetitive: 'bg-blue-100 text-blue-700',
      unclear: 'bg-indigo-100 text-indigo-700',
      technical_without_context: 'bg-cyan-100 text-cyan-700',
      missing_business_impact: 'bg-pink-100 text-pink-700',
    };
    return styles[type] || 'bg-gray-100 text-gray-700';
  };
  
  const getProblemTypeLabel = (type) => {
    const labels = {
      vague: 'Vague',
      too_long: 'Too Long',
      too_short: 'Too Short',
      no_impact: 'No Impact',
      no_metric: 'No Metric',
      weak_action_verb: 'Weak Verb',
      responsibility_only: 'Duty Only',
      repetitive: 'Repetitive',
      unclear: 'Unclear',
      technical_without_context: 'No Context',
      missing_business_impact: 'Missing Impact',
    };
    return labels[type] || type;
  };
  
  return (
    <div className="glass rounded-3xl shadow-xl p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\uD83D\uDCDD'}</span>
        Experience Bullet Review
      </h3>
      
      <div className="space-y-4">
        {bulletReviews.map((bullet, index) => (
          <div key={index} className="border border-gray-100 rounded-2xl p-5 hover:border-primary-200 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Original</span>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getProblemTypeStyle(bullet.problem_type)}`}>
                {getProblemTypeLabel(bullet.problem_type)}
              </span>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <p className="text-gray-700 italic">&ldquo;{bullet.original}&rdquo;</p>
            </div>
            
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center">
                <span className="text-sm">{'\u26A0'}</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-rose-600 uppercase tracking-wide mb-1">Problem</p>
                <p className="text-gray-600 text-sm">{bullet.problem}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                <span className="text-sm">{'\uD83D\uDCA1'}</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-1">Why It Matters</p>
                <p className="text-gray-600 text-sm">{bullet.explanation}</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide flex items-center gap-1">
                  <span>{'\u270D\uFE0F'}</span>
                  Suggested Improvement
                </p>
                <button
                  onClick={() => copyToClipboard(bullet.suggestion, index)}
                  className="text-xs text-primary-600 hover:text-primary-800 font-medium flex items-center gap-1 transition-colors"
                >
                  {copiedIndex === index ? (
                    <>
                      <span className="text-emerald-500">{'\u2705'}</span> Copied!
                    </>
                  ) : (
                    <>
                      <span>{'\uD83D\uDCCB'}</span> Copy
                    </>
                  )}
                </button>
              </div>
              <p className="text-gray-700 italic">&ldquo;{bullet.suggestion}&rdquo;</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BulletReview;
