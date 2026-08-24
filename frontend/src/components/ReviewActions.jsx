const ReviewActions = ({ onReset }) => {
  const downloadReview = () => {
    alert('PDF download coming soon!');
  };

  return (
    <div className="glass rounded-3xl shadow-card p-8 card-hover">
      <h3 className="text-lg font-bold text-white/90 mb-6 flex items-center gap-2">
        <span className="text-xl">{'\uD83D\uDE80'}</span>
        Actions
      </h3>

      <div className="flex gap-4 flex-wrap">
        <button
          onClick={onReset}
          className="flex-1 min-w-[200px] bg-white/5 hover:bg-white/10 text-white/70 hover:text-white/90 border border-white/10 hover:border-white/20 px-6 py-3 rounded-xl transition-all duration-300 font-medium"
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Review Another Resume
          </span>
        </button>

        <button
          onClick={downloadReview}
          className="flex-1 min-w-[200px] bg-primary-600 hover:bg-primary-500 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-glow btn-shine"
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Review PDF
          </span>
        </button>
      </div>
    </div>
  );
};

export default ReviewActions;
