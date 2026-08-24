export const formatters = {
  formatScore(score) {
    return `${Math.round(score)}/100`;
  },
  
  getScoreColor(score) {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  },
  
  getScoreBgColor(score) {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  },
  
  getPriorityColor(priority) {
    const colors = {
      critical: 'bg-red-100 text-red-800',
      high: 'bg-orange-100 text-orange-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-blue-100 text-blue-800',
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
  },
  
  getPriorityLabel(priority) {
    const labels = {
      critical: '\u1270\u1278\u1293\u1295\u130D\u1263\u1275',
      high: '\u1260\u1275\u12F3\u1349\u1275',
      medium: '\u1273\u1275\u134D\u1273\u1276\u1293\u1275',
      low: '\u1325\u134D\u1349\u1275',
    };
    return labels[priority] || priority;
  },
  
  formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  },
  
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('am-ET');
  }
};
