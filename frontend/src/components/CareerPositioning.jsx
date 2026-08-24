const CareerPositioning = ({ careerPositioning }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        {'\u1265\u1275\u122B \u1260\u1275\u1348 \u1263\u1245\u1275\u1237\u1248\u130D\u1273\u1295'}
      </h3>
      
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold">{careerPositioning.score}</span>
        <span className="text-gray-500">/100</span>
      </div>
      
      <p className="text-gray-700 mb-4">{careerPositioning.assessment}</p>
      
      {careerPositioning.recommendations.length > 0 && (
        <div>
          <h4 className="font-medium text-blue-700 mb-2">{'\uD83D\uDCA1'} {'\u1273\u1348\u1275\u1273:'}</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {careerPositioning.recommendations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CareerPositioning;
