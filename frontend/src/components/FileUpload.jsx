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
      alert('እባክዎ PDF ወይም DOCX ፋይል ይምረጡ');
      return;
    }
    
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      alert('ፋይሉ ታላቅ ነው። ከ 10MB በታች ይምረጡ');
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
      className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
        dragActive
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-300 hover:border-gray-400'
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
      
      <div className="space-y-4">
        <div className="text-6xl">📄</div>
        
        <div>
          <p className="text-lg font-medium text-gray-700">
            ሪዝዩሜዎን እዚህ ይጣሉ
          </p>
          <p className="text-sm text-gray-500 mt-1">
            PDF ወይም DOCX • ከ 10MB በታች
          </p>
        </div>
        
        {selectedFile && (
          <div className="bg-gray-100 rounded-md p-3 inline-block">
            <p className="text-sm text-gray-700">
              ✅ {selectedFile.name}
            </p>
          </div>
        )}
        
        <button
          type="button"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onButtonClick();
          }}
          disabled={disabled}
        >
          ፋይል ይምረጡ
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
