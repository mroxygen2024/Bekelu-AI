const ReviewActions = ({ onReset }) => {
  const downloadReview = () => {
    alert('PDF \u1270\u1276\u127D\u1276\u1295 \u1349\u1275\u1273 \u127D\u1205');
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        {'\u126D\u1275\u1237\u1295\u1275\u1273\u1275'}
      </h3>
      
      <div className="flex gap-4 flex-wrap">
        <button
          onClick={onReset}
          className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          {'\u1270\u1275\u1273\u1275 \u1265\u127D\u12AB\u121B \u1275\u134D\u1275\u134D'}
        </button>
        
        <button
          onClick={downloadReview}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {'\u1263\u1245\u1275\u1237\u1248\u130D\u1273\u1295 PDF \u1270\u1276\u127D\u1276\u1295'}
        </button>
      </div>
    </div>
  );
};

export default ReviewActions;
