import { useState, useRef } from 'react';

const FileUpload = ({ onFileSelect, disabled }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const inputRef = useRef(null);
  
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };
  
  const handleFile = (file) => {
    const validTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword'
    ];
    
    if (!validTypes.includes(file.type)) {
      alert('\u1348\u12B7\u12BD\u1275 PDF \u127D\u1275 DOCX \u1349\u1275\u127D \u1275\u134D\u1275\u134D');
      return;
    }
    
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      alert('\u1349\u1275\u127D\u1276 \u1273\u1275\u1346\u1275\u122B \u127D\u1205 \u1276\u1275\u1270. \u1260 10MB \u1270\u1325\u127D \u1275\u134D\u1275\u134D');
      return;
    }
    
    setSelectedFile(file);
    onFileSelect(file);
  };
  
  const onButtonClick = () => {
    inputRef.current?.click();
  };
  
  return (
    <div
      className={`relative border-2 border-dashed rounded-2xl p-10 text-center transition-all duration-300 ${
        dragActive
          ? 'border-primary-500 bg-primary-50/50 scale-[1.02]'
          : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50/50'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={onButtonClick}
    >
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept=".pdf,.docx,.doc"
        onChange={handleChange}
        disabled={disabled}
      />
      
      <div className="space-y-5">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full transition-all duration-300 ${
          dragActive ? 'bg-primary-100 scale-110' : 'bg-gray-100'
        }`}>
          <span className="text-4xl">{dragActive ? '\uD83D\uDCE5' : '\uD83D\uDCC4'}</span>
        </div>
        
        {/* Text */}
        <div>
          <p className="text-xl font-semibold text-gray-700 mb-2">
            {'\u1265\u127D\u12AB\u121B\u1285\u1276 \u1270\u12A8\u1275\u12DA \u1275\u1273\u1273\u1275'}
          </p>
          <p className="text-sm text-gray-500">
            {'\u1349\u1275\u127D\u121B \u1284\u1275\u127D\u1273 \u1265\u1275\u134D\u130D \u127D\u1275\u122B'} &bull; PDF \u127D\u1275 DOCX &bull; {'\u1260'} 10MB
          </p>
        </div>
        
        {/* Selected file */}
        {selectedFile && (
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full animate-scale-in">
            <span className="text-lg">{'\u2705'}</span>
            <span className="font-medium text-sm">{selectedFile.name}</span>
          </div>
        )}
        
        {/* Upload button */}
        <button
          type="button"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl btn-shine"
          onClick={(e) => {
            e.stopPropagation();
            onButtonClick();
          }}
          disabled={disabled}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          {'\u1349\u1275\u127D \u1275\u134D\u1275\u134D'}
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
