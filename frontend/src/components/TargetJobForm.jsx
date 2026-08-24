import { useState } from 'react';

const TargetJobForm = ({ onSubmit, disabled }) => {
  const [targetRole, setTargetRole] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(targetRole || null, jobDescription || null);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {'\u1278\u1213\u1275\u122B \u1265\u1275\u122B \u1235\u1275\u1340\u1275\u1308\u1276 (\u1270\u1275\u1263\u1295\u1275\u127D)'}
        </label>
        <input
          type="text"
          value={targetRole}
          onChange={(e) => setTargetRole(e.target.value)}
          placeholder="{'\u1265\u1260 \u1263\u1348\u1275: Backend Engineer'}"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={disabled}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {'\u1265\u1275\u122B \u1265\u1275\u1346\u1275\u1273\u1275 (\u1270\u1275\u1263\u1295\u1275\u127D)'}
        </label>
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="{'\u1278\u1213\u1275\u122B \u1265\u1275\u1346\u1275\u1273\u1275 \u1270\u12A8\u1275\u12DA \u1275\u1273\u1273\u1275...'}"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          disabled={disabled}
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
        disabled={disabled}
      >
        {'\u1265\u127D\u12AB\u121B\u1285\u1276 \u1275\u1273\u130D\u1275\u1273\u1275 \u1273\u1276\u127D\u1273'}
      </button>
    </form>
  );
};

export default TargetJobForm;
