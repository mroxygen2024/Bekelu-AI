const SummaryReview = ({ summaryReview }) => {
  if (!summaryReview.present) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          የሙሉ ገጽታ ማረ寇er
        </h3>
        <p className="text-gray-600">
          ሪዝዩሜዎ የሙሉ ገጽታ አልባствовать • ይህ ከፍተኛ ጥ弊 ነው
        </p>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        የሙሉ ገጽታ ማረ寇er
      </h3>
      
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold">{summaryReview.score}</span>
        <span className="text-gray-500">/100</span>
      </div>
      
      {summaryReview.strengths.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-green-700 mb-2">✓ ጠቃሚ ነገሮች:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {summaryReview.strengths.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      
      {summaryReview.problems.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-red-700 mb-2">⚠ ችግሮች:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {summaryReview.problems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      
      {summaryReview.suggested_rewrite && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
          <h4 className="font-medium text-green-800 mb-2">የተሻሻለ ገጽታ:</h4>
          <p className="text-gray-700 italic">"{summaryReview.suggested_rewrite}"</p>
        </div>
      )}
    </div>
  );
};

export default SummaryReview;
