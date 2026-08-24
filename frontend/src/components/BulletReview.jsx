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
      vague: 'ዕንፋµ¨',
      too_long: 'በጣም ረጅም',
      too_short: 'በጣም አጭር',
      no_impact: 'ተጽዕኖ የለሽ',
      no_metric: 'መጠን የለሽ',
      weak_action_verb: 'የበለጠ ጥንታዊ ጥገና',
      responsibility_only: 'ተግባር ብቻ',
      repetitive: 'ተደጋጋሚ',
      unclear: 'ግልጽ የለሽ',
      technical_without_context: 'ቴክኒካል ያለ ማuhanist',
      missing_business_impact: 'የንግድ ተጽዕኖ የለሽ',
    };
    return labels[type] || type;
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        📝 የ >:: Bullet ማረ寇er
      </h3>
      
      <div className="space-y-4">
        {bulletReviews.map((bullet, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">መነሻ:</span>
                <span className={`text-xs px-2 py-1 rounded-full ${formatters.getPriorityColor('medium')}`}>
                  {getProblemTypeLabel(bullet.problem_type)}
                </span>
              </div>
              <p className="text-gray-700 italic bg-gray-50 p-2 rounded">
                "{bullet.original}"
              </p>
            </div>
            
            <div className="mb-3">
              <span className="text-sm font-medium text-red-600">ችግር:</span>
              <p className="text-gray-600 text-sm">{bullet.problem}</p>
            </div>
            
            <div className="mb-3">
              <span className="text-sm font-medium text-blue-600">ለምን አስፈላጊ ነው:</span>
              <p className="text-gray-600 text-sm">{bullet.explanation}</p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-green-700">የተሻሻለ ጥቅም:</span>
                <button
                  onClick={() => copyToClipboard(bullet.suggestion, index)}
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  {copiedIndex === index ? '✅ ተቀምጧል!' : '📋 ቅዳ'}
                </button>
              </div>
              <p className="text-gray-700">"{bullet.suggestion}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BulletReview;
