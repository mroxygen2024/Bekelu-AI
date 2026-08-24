import { formatters } from '../utils/formatters';

const PriorityFixes = ({ priorities }) => {
  if (!priorities || priorities.length === 0) return null;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        {'\uD83D\uDD25'} {'\u1275\u127D \u1275\u134E\u1275\u1349\u1273'}
      </h3>
      
      <div className="space-y-3">
        {priorities.map((priority, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
          >
            <span className="text-lg font-bold text-gray-400">
              {index + 1}.
            </span>
            <div className="flex-1">
              <p className="text-gray-800">{priority}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriorityFixes;
