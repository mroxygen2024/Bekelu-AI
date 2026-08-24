import { useState } from 'react';

const TargetJobForm = ({ onSubmit, disabled }) => {
  const [targetRole, setTargetRole] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(targetRole || null, jobDescription || null);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {'\u1278\u1213\u1275\u122B \u1265\u1275\u122B \u1235\u1275\u1340\u1275\u1308\u1276'} <span className="text-gray-400 font-normal">({'\u1270\u1275\u1263\u1295\u1275\u127D'})</span>
        </label>
        <div className="relative">
          <input
            type="text"
            value={targetRole}
            onChange={(e) => setTargetRole(e.target.value)}
            placeholder={'\u1265\u1260 \u1263\u1348\u1275: Backend Engineer'}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
            disabled={disabled}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {'\u1265\u1275\u122B \u1265\u1275\u1346\u1275\u1273\u1275'} <span className="text-gray-400 font-normal">({'\u1270\u1275\u1263\u1295\u1275\u127D'})</span>
        </label>
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder={'\u1278\u1213\u1275\u122B \u1265\u1275\u1346\u1275\u1273\u1275 \u1270\u12A8\u1275\u12DA \u1275\u1273\u1273\u1275...'}
          rows={4}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
          disabled={disabled}
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-4 rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl btn-shine"
        disabled={disabled}
      >
        <span className="flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          {'\u1265\u127D\u12AB\u121B\u1285\u1276 \u1275\u1273\u130D\u1275\u1273\u1275 \u1273\u1276\u127D\u1273'}
        </span>
      </button>
    </form>
  );
};

export default TargetJobForm;
