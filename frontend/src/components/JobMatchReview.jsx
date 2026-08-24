const JobMatchReview = ({ targetJobAnalysis }) => {
  if (!targetJobAnalysis) return null;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        {'\u1265\u127D\u12AB\u121B'} vs {'\u1278\u1213\u1275\u122B \u1265\u1275\u122B'}
      </h3>
      
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold text-blue-600">
          {targetJobAnalysis.match_score}%
        </span>
        <span className="text-gray-500">{'\u1349\u1275\u134D\u130D\u1276'}</span>
      </div>
      
      {targetJobAnalysis.matching_skills.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-green-700 mb-2">{'\u1349\u1349\u134D\u130D\u1276 \u1348\u1275\u1273\u1275:'}</h4>
          <div className="flex flex-wrap gap-2">
            {targetJobAnalysis.matching_skills.map((skill, index) => (
              <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                {'\u2713'} {skill}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {targetJobAnalysis.missing_keywords.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-yellow-700 mb-2">{'\u1273\u1275\u134D \u1260\u1275\u1276\u1295 \u134D\u1275\u1348\u1293\u1275:'}</h4>
          <div className="flex flex-wrap gap-2">
            {targetJobAnalysis.missing_keywords.map((keyword, index) => (
              <span key={index} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                {'!'} {keyword}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {targetJobAnalysis.recommendations.length > 0 && (
        <div>
          <h4 className="font-medium text-blue-700 mb-2">{'\uD83D\uDCA1'} {'\u1349\u1349\u1308\u1349\u1275 \u127D\u1208\u1349\u1375:'}</h4>
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
