const SummaryReview = ({ summaryReview }) => {
  if (!summaryReview.present) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          {'\u1270\u127D\u1270 \u1348\u1295\u127F \u1263\u1245\u1275\u1237\u1248\u130D\u1273\u1295'}
        </h3>
        <p className="text-gray-600">
          {'\u1265\u127D\u12AB\u121B\u1285\u1276 \u1270\u127D\u1270 \u1348\u1295\u127F \u1270\u127D\u1346 \u1275\u127D\u1349 &bull; \u1275\u127D \u1260\u1275\u12F3\u1349\u1275 \u1349\u134D\u1348 \u127D\u1205'}
        </p>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        {'\u1270\u127D\u1270 \u1348\u1295\u127F \u1263\u1245\u1275\u1237\u1248\u130D\u1273\u1295'}
      </h3>
      
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold">{summaryReview.score}</span>
        <span className="text-gray-500">/100</span>
      </div>
      
      {summaryReview.strengths.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-green-700 mb-2">{'\u2713'} {'\u1260\u1275\u12F3\u1349\u1275 \u1273\u1276\u1293\u1275:'}</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {summaryReview.strengths.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      
      {summaryReview.problems.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-red-700 mb-2">{'\u26A0'} {'\u1348\u134D\u1293\u1275:'}</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {summaryReview.problems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      
      {summaryReview.suggested_rewrite && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
          <h4 className="font-medium text-green-800 mb-2">{'\u1349\u1349\u1308\u1349\u1275 \u1349\u1325\u1275\u1349\u134D \u1348\u1295\u127F:'}</h4>
          <p className="text-gray-700 italic">&ldquo;{summaryReview.suggested_rewrite}&rdquo;</p>
        </div>
      )}
    </div>
  );
};

export default SummaryReview;
