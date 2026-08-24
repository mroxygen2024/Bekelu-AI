const FormattingReview = ({ formattingReview }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        {'\u134C\u1295\u12B3 \u1273\u1276\u1293\u1295 \u1263\u1245\u1275\u1237\u1248\u130D\u1273\u1295'}
      </h3>
      
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold">{formattingReview.score}</span>
        <span className="text-gray-500">/100</span>
      </div>
      
      {formattingReview.strengths.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-green-700 mb-2">{'\u2713'} {'\u1260\u1275\u12F3\u1349\u1275 \u1273\u1276\u1293\u1275:'}</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {formattingReview.strengths.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      
      {formattingReview.problems.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-red-700 mb-2">{'\u26A0'} {'\u1348\u134D\u1293\u1275:'}</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {formattingReview.problems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      
      {formattingReview.recommendations.length > 0 && (
        <div>
          <h4 className="font-medium text-blue-700 mb-2">{'\uD83D\uDCA1'} {'\u1273\u1348\u1275\u1273:'}</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {formattingReview.recommendations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FormattingReview;
