const SkillsReview = ({ skillsReview }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        ክህሎቶች ማረ寇er
      </h3>
      
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold">{skillsReview.score}</span>
        <span className="text-gray-500">/100</span>
      </div>
      
      {skillsReview.strengths.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-green-700 mb-2">✓ ጠቃሚ ነገሮች:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {skillsReview.strengths.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      
      {skillsReview.problems.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-red-700 mb-2">⚠ ችግሮች:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {skillsReview.problems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      
      {skillsReview.unsupported_skills.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-yellow-700 mb-2">⚡ የተጠቃሚ ክህሎቶች:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {skillsReview.unsupported_skills.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      
      {skillsReview.recommendations.length > 0 && (
        <div>
          <h4 className="font-medium text-blue-700 mb-2">💡 ምክሮች:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {skillsReview.recommendations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SkillsReview;
