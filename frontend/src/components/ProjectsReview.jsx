const ProjectsReview = ({ projectsReview }) => {
  if (!projectsReview || projectsReview.length === 0) return null;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        {'\u1353\u1275\u134D\u1275\u12AF\u1349\u1375 \u1263\u1245\u1275\u1237\u1248\u130D\u1273\u1295'}
      </h3>
      
      <div className="space-y-4">
        {projectsReview.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-800">{project.name}</h4>
              <span className={`text-lg font-bold ${
                project.score >= 80 ? 'text-green-600' :
                project.score >= 60 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {project.score}
              </span>
            </div>
            
            {project.strengths.length > 0 && (
              <div className="mb-2">
                <p className="text-sm font-medium text-green-700">{'\u2713'} {'\u1260\u1275\u12F3\u1349\u1275 \u1273\u1276\u1293\u1275:'}</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {project.strengths.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.problems.length > 0 && (
              <div className="mb-2">
                <p className="text-sm font-medium text-red-700">{'\u26A0'} {'\u1348\u134D\u1293\u1275:'}</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {project.problems.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.recommendations.length > 0 && (
              <div>
                <p className="text-sm font-medium text-blue-700">{'\uD83D\uDCA1'} {'\u1273\u1348\u1275\u1273:'}</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {project.recommendations.map((r, i) => (
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

export default ProjectsReview;
