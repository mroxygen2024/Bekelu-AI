import { formatters } from '../utils/formatters';

const ScoreOverview = ({ overall, candidate }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {candidate.name || '\u1265\u127D\u12AB\u121B \u1263\u1245\u1275\u1237\u1248\u130D\u1273\u1295'}
      </h2>
      {candidate.current_title && (
        <p className="text-gray-600 mb-4">{candidate.current_title}</p>
      )}
      
      <div className="flex items-center gap-4 mb-4">
        <div className={`text-5xl font-bold ${formatters.getScoreColor(overall.score)}`}>
          {overall.score}
        </div>
        <div className="text-gray-500">/100</div>
      </div>
      
      <p className="text-gray-700 mb-4">{overall.summary}</p>
      
      {overall.strengths.length > 0 && (
        <div className="mb-4">
          <h3 className="font-medium text-gray-700 mb-2">{'\u1349\u1348\u134D\u1308\u1295 \u1273\u1276\u1293\u1275:'}</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {overall.strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ScoreOverview;
