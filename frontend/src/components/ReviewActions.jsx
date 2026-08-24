const ReviewActions = ({ onReset }) => {
  const downloadReview = () => {
    // TODO: Implement PDF download
    alert('PDF download will be implemented soon');
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        ድርጊቶች
      </h3>
      
      <div className="flex gap-4">
        <button
          onClick={onReset}
          className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          አዲስ ሪዝዩሜ ይስalian
        </button>
        
        <button
          onClick={downloadReview}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          ማረ寇er PDF አስalian
        </button>
      </div>
    </div>
  );
};

export default ReviewActions;
