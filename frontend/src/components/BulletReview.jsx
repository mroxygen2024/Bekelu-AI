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
      vague: 'bg-white/5 text-white/60 border-white/10',
      too_long: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
      too_short: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
      no_impact: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
      no_metric: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
      weak_action_verb: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
      responsibility_only: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
      repetitive: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
      unclear: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
      technical_without_context: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      missing_business_impact: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
    };
    return styles[type] || 'bg-white/5 text-white/60 border-white/10';
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
    <div className="glass rounded-3xl shadow-card p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-white/90 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\uD83D\uDCDD'}</span>
        Experience Bullet Review
      </h3>

      <div className="space-y-4">
        {bulletReviews.map((bullet, index) => (
          <div key={index} className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 hover:border-primary-500/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-white/30 uppercase tracking-wide">Original</span>
              <span className={`text-xs px-2 py-1 rounded-full font-medium border ${getProblemTypeStyle(bullet.problem_type)}`}>
                {getProblemTypeLabel(bullet.problem_type)}
              </span>
            </div>

            <div className="bg-white/[0.03] rounded-xl p-4 mb-4 border border-white/5">
              <p className="text-white/60 italic text-sm">&ldquo;{bullet.original}&rdquo;</p>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-rose-500/15 rounded-lg flex items-center justify-center border border-rose-500/20">
                <span className="text-sm">{'\u26A0'}</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-rose-400 uppercase tracking-wide mb-1">Problem</p>
                <p className="text-white/50 text-sm">{bullet.problem}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-500/15 rounded-lg flex items-center justify-center border border-primary-500/20">
                <span className="text-sm">{'\uD83D\uDCA1'}</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-primary-400 uppercase tracking-wide mb-1">Why It Matters</p>
                <p className="text-white/50 text-sm">{bullet.explanation}</p>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-emerald-300 uppercase tracking-wide flex items-center gap-1">
                  <span>{'\u270D\uFE0F'}</span>
                  Suggested Improvement
                </p>
                <button
                  onClick={() => copyToClipboard(bullet.suggestion, index)}
                  className="text-xs text-primary-300 hover:text-primary-200 font-medium flex items-center gap-1 transition-colors bg-primary-500/10 hover:bg-primary-500/20 px-2 py-1 rounded-md"
                >
                  {copiedIndex === index ? (
                    <>
                      <span className="text-emerald-400">{'\u2705'}</span> Copied!
                    </>
                  ) : (
                    <>
                      <span>{'\uD83D\uDCCB'}</span> Copy
                    </>
                  )}
                </button>
              </div>
              <p className="text-white/60 italic text-sm">&ldquo;{bullet.suggestion}&rdquo;</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BulletReview;
