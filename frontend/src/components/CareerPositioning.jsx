const CareerPositioning = ({ careerPositioning }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        የስራ ቦታ ማraseesting
      </h3>
      
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold">{careerPositioning.score}</span>
        <span className="text-gray-500">/100</span>
      </div>
      
      <p className="text-gray-700 mb-4">{careerPositioning.assessment}</p>
      
      {careerPositioning.recommendations.length > 0 && (
        <div>
          <h4 className="font-medium text-blue-700 mb-2">💡 ምክሮች:</h4>
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
