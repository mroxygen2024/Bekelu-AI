const ExperienceReview = ({ experienceReview }) => {
  if (!experienceReview || experienceReview.length === 0) return null;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        {'\u1265\u1275\u122B \u130D\u1276\u1293\u1275 \u1263\u1245\u1275\u1237\u1248\u130D\u1273\u1295'}
      </h3>
      
      <div className="space-y-6">
        {experienceReview.map((exp, index) => (
          <div key={index} className="border-b pb-4 last:border-b-0">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-medium text-gray-800">{exp.position}</h4>
                <p className="text-sm text-gray-600">{exp.company}</p>
              </div>
              <span className={`text-lg font-bold ${
                exp.score >= 80 ? 'text-green-600' :
                exp.score >= 60 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {exp.score}
              </span>
            </div>
            
            {exp.strengths.length > 0 && (
              <div className="mb-2">
                <p className="text-sm font-medium text-green-700">{'\u2713'} {'\u1260\u1275\u12F3\u1349\u1275 \u1273\u1276\u1293\u1275:'}</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {exp.strengths.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {exp.problems.length > 0 && (
              <div className="mb-2">
                <p className="text-sm font-medium text-red-700">{'\u26A0'} {'\u1348\u134D\u1293\u1275:'}</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {exp.problems.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {exp.recommendations.length > 0 && (
              <div>
                <p className="text-sm font-medium text-blue-700">{'\uD83D\uDCA1'} {'\u1273\u1348\u1275\u1273:'}</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {exp.recommendations.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceReview;
