const ReviewHeader = () => {
  return (
    <div className="text-center mb-10 animate-fade-in">
      {/* Logo */}
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-400 to-accent-500 rounded-2xl shadow-lg mb-6 float">
        <span className="text-4xl">{'\uD83D\uDCCB'}</span>
      </div>
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
        <span className="gradient-text">{'\u1265\u127D\u12AB\u121B'}</span>
        <span className="text-gray-800"> {'\u1263\u1245\u1275\u1237\u1248\u130D\u1273\u1295'}</span>
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        {'\u1265\u127D\u12AB\u121B\u1285\u1276 \u1275\u1273\u130D\u1275\u1273\u1275 \u1263\u1245\u1275\u1237\u1248\u130D\u1273\u1295 \u1275\u1273\u1275'} &bull; {'\u1270\u1348\u1348 \u1349\u1325\u134E\u1275\u1275\u1348 \u1265\u1275\u12F3\u1349\u1275'}
      </p>
      
      {/* Decorative dots */}
      <div className="flex justify-center gap-2 mt-6">
        <div className="w-2 h-2 bg-primary-400 rounded-full pulse-glow"></div>
        <div className="w-2 h-2 bg-accent-400 rounded-full pulse-glow" style={{animationDelay: '0.2s'}}></div>
        <div className="w-2 h-2 bg-primary-400 rounded-full pulse-glow" style={{animationDelay: '0.4s'}}></div>
      </div>
    </div>
  );
};

export default ReviewHeader;
