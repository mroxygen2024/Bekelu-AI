const ReviewHeader = () => {
  return (
    <div className="text-center mb-10 animate-fade-in">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-400 to-accent-500 rounded-2xl shadow-lg mb-6 float">
        <span className="text-4xl">{'\uD83D\uDCCB'}</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
        <span className="gradient-text">Beletu</span>
        <span className="text-gray-800"> AI Resume Reviewer</span>
      </h1>
      
      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        Upload your resume and get an evidence-based review of what's working, what's hurting your resume, and what to improve.
      </p>
      
      <div className="flex justify-center gap-2 mt-6">
        <div className="w-2 h-2 bg-primary-400 rounded-full pulse-glow"></div>
        <div className="w-2 h-2 bg-accent-400 rounded-full pulse-glow" style={{animationDelay: '0.2s'}}></div>
        <div className="w-2 h-2 bg-primary-400 rounded-full pulse-glow" style={{animationDelay: '0.4s'}}></div>
      </div>
    </div>
  );
};

export default ReviewHeader;
