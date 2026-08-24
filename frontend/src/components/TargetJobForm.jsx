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
          የመን_AMD ሥራ ርዕስ (አማራጭ)
        </label>
        <input
          type="text"
          value={targetRole}
          onChange={(e) => setTargetRole(e.target.value)}
          placeholder="ለምሳሌ: Backend Engineer"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={disabled}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          የስራ መግለጫ (አማራጭ)
        </label>
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="የመን_AMD ስራ መግለጫ እዚህ ይለጥጡ..."
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
        ሪዝዩሜዎን ይፈትሹ
      </button>
    </form>
  );
};

export default TargetJobForm;
