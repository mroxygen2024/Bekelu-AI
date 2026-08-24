import { useState } from 'react';
import { formatters } from '../utils/formatters';

const BulletReview = ({ bulletReviews }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  if (!bulletReviews || bulletReviews.length === 0) return null;
  
  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
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
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        {'\uD83D\uDCDD'} {'\u1265\u1275\u134D\u130D \u1263\u1245\u1275\u1237\u1248\u130D\u1273\u1295'}
      </h3>
      
      <div className="space-y-4">
        {bulletReviews.map((bullet, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">{'\u1273\u1275\u12AB\u1273:'}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${formatters.getPriorityColor('medium')}`}>
                  {getProblemTypeLabel(bullet.problem_type)}
                </span>
              </div>
              <p className="text-gray-700 italic bg-gray-50 p-2 rounded">
                &ldquo;{bullet.original}&rdquo;
              </p>
            </div>
            
            <div className="mb-3">
              <span className="text-sm font-medium text-red-600">{'\u1348\u134D\u1295:'}</span>
              <p className="text-gray-600 text-sm">{bullet.problem}</p>
            </div>
            
            <div className="mb-3">
              <span className="text-sm font-medium text-blue-600">{'\u1273\u1349\u1349\u1275\u1349\u1348 \u1270\u12A8\u1349\u1349\u1285\u1293\u1275 \u127D\u1205:'}</span>
              <p className="text-gray-600 text-sm">{bullet.explanation}</p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-green-700">{'\u1349\u1349\u1308\u1349\u1275 \u1349\u1325\u1275\u1349\u134D:'}</span>
                <button
                  onClick={() => copyToClipboard(bullet.suggestion, index)}
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  {copiedIndex === index ? '\u2705 \u1349\u1275\u1347\u134D!' : '\uD83D\uDCCB \u134D\u1244\u1275'}
                </button>
              </div>
              <p className="text-gray-700">&ldquo;{bullet.suggestion}&rdquo;</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BulletReview;
