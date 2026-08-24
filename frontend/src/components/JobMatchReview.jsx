const JobMatchReview = ({ targetJobAnalysis }) => {
  if (!targetJobAnalysis) return null;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Resume vs Target Job
      </h3>
      
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold text-blue-600">
          {targetJobAnalysis.match_score}%
        </span>
        <span className="text-gray-500">match</span>
      </div>
      
      {targetJobAnalysis.matching_skills.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-green-700 mb-2">Matching Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {targetJobAnalysis.matching_skills.map((skill, index) => (
              <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {targetJobAnalysis.missing_keywords.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-yellow-700 mb-2">Missing Keywords:</h4>
          <div className="flex flex-wrap gap-2">
            {targetJobAnalysis.missing_keywords.map((keyword, index) => (
              <span key={index} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {targetJobAnalysis.recommendations.length > 0 && (
        <div>
          <h4 className="font-medium text-blue-700 mb-2">Recommendations:</h4>
          <ol className="list-decimal list-inside text-gray-600 space-y-1">
            {targetJobAnalysis.recommendations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default JobMatchReview;
