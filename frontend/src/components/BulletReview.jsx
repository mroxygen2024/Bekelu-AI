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
      vague: '\u1270\u12A8\u12D3\u1349',
      too_long: '\u1270\u1348\u1348 \u1231\u1275\u12B3',
      too_short: '\u1270\u1348\u1348 \u1270\u12DC\u1275\u12B3',
      no_impact: '\u1349\u1325\u134E\u1275\u1275\u1348 \u1275\u127D\u1349',
      no_metric: '\u1273\u1349\u1275\u1276 \u1275\u127D\u1349',
      weak_action_verb: '\u1260\u1275\u134D\u130D \u1349\u1325\u1275\u1349\u134D\u1295',
      responsibility_only: '\u1349\u1248\u1275\u12B3 \u1270\u1240\u1275',
      repetitive: '\u1349\u1349\u1233\u1263\u1293\u134D',
      unclear: '\u130D\u1276\u1293 \u1275\u127D\u1349',
      technical_without_context: '\u1349\u1275\u12AF\u1275\u1293\u1275\u1275\u1276 \u1270\u1346\u1275\u1273\u1275',
      missing_business_impact: '\u1265\u1275\u12B3 \u1349\u1325\u134E\u1275\u1275\u1348 \u1275\u127D\u1349',
    };
    return labels[type] || type;
  };
  
  return (
    <div className="glass rounded-3xl shadow-xl p-8 mb-6 card-hover">
      <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\uD83D\uDCDD'}</span>
        {'\u1265\u1275\u134D\u130D \u1263\u1245\u1275\u1237\u1248\u130D\u1273\u1295'}
      </h3>
      
      <div className="space-y-4">
        {bulletReviews.map((bullet, index) => (
          <div key={index} className="border border-gray-100 rounded-2xl p-5 hover:border-primary-200 transition-all duration-300">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{'\u1273\u1275\u12AB\u1273'}</span>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getProblemTypeStyle(bullet.problem_type)}`}>
                {getProblemTypeLabel(bullet.problem_type)}
              </span>
            </div>
            
            {/* Original */}
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <p className="text-gray-700 italic">&ldquo;{bullet.original}&rdquo;</p>
            </div>
            
            {/* Problem */}
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center">
                <span className="text-sm">{'\u26A0'}</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-rose-600 uppercase tracking-wide mb-1">{'\u1348\u134D\u1295'}</p>
                <p className="text-gray-600 text-sm">{bullet.problem}</p>
              </div>
            </div>
            
            {/* Explanation */}
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                <span className="text-sm">{'\uD83D\uDCA1'}</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-1">{'\u1273\u1349\u1349\u1275\u1349\u1348 \u1270\u12A8\u1349\u1349\u1285\u1293\u1275 \u127D\u1205'}</p>
                <p className="text-gray-600 text-sm">{bullet.explanation}</p>
              </div>
            </div>
            
            {/* Suggestion */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide flex items-center gap-1">
                  <span>{'\u270D\uFE0F'}</span>
                  {'\u1349\u1349\u1308\u1349\u1275 \u1349\u1325\u1275\u1349\u134D'}
                </p>
                <button
                  onClick={() => copyToClipboard(bullet.suggestion, index)}
                  className="text-xs text-primary-600 hover:text-primary-800 font-medium flex items-center gap-1 transition-colors"
                >
                  {copiedIndex === index ? (
                    <>
                      <span className="text-emerald-500">{'\u2705'}</span> {'\u1349\u1275\u1347\u134D!'}
                    </>
                  ) : (
                    <>
                      <span>{'\uD83D\uDCCB'}</span> {'\u134D\u1244\u1275'}
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
