const ReviewHeader = () => {
  return (
    <div className="text-center mb-10 animate-fade-in">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-glow mb-6 float">
        <span className="text-4xl">{'\uD83D\uDCCB'}</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
        <span className="gradient-text">Beletu</span>
        <span className="text-white/90"> AI Resume Reviewer</span>
      </h1>

      <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
        Upload your resume and get an evidence-based review of what's working,
        what's hurting your resume, and what to improve.
      </p>

      <div className="flex justify-center gap-2 mt-6">
        <div className="w-2 h-2 bg-primary-500 rounded-full pulse-glow"></div>
        <div className="w-2 h-2 bg-primary-400 rounded-full pulse-glow" style={{ animationDelay: '0.3s' }}></div>
        <div className="w-2 h-2 bg-primary-500 rounded-full pulse-glow" style={{ animationDelay: '0.6s' }}></div>
      </div>
    </div>
  );
};

export default ReviewHeader;
