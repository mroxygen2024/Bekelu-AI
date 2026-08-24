import { formatters } from '../utils/formatters';

const ATSReview = ({ atsReview }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        ATS ማህደረ ቢሮ ማረ寇er
      </h3>
      
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold">{atsReview.score}</span>
        <span className="text-gray-500">/100</span>
      </div>
      
      {atsReview.strengths.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-green-700 mb-2">✓ ጠቃሚ ነገሮች:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {atsReview.strengths.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      
      {atsReview.risks.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-red-700 mb-2">⚠ የአደጋ ምልክቶች:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {atsReview.risks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      
      {atsReview.recommendations.length > 0 && (
        <div>
          <h4 className="font-medium text-blue-700 mb-2">💡 ምክሮች:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {atsReview.recommendations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ATSReview;
