export const formatters = {
  formatScore(score) {
    return `${Math.round(score)}/100`;
  },
  
  getScoreColor(score) {
    if (score >= 80) return 'text-emerald-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-rose-600';
  },
  
  getScoreBgColor(score) {
    if (score >= 80) return 'bg-emerald-100';
    if (score >= 60) return 'bg-amber-100';
    return 'bg-rose-100';
  },
  
  getPriorityColor(priority) {
    const colors = {
      critical: 'bg-rose-100 text-rose-800',
      high: 'bg-orange-100 text-orange-800',
      medium: 'bg-amber-100 text-amber-800',
      low: 'bg-blue-100 text-blue-800',
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
  },
  
  getPriorityLabel(priority) {
    const labels = {
      critical: 'Critical',
      high: 'High',
      medium: 'Medium',
      low: 'Low',
    };
    return labels[priority] || priority;
  },
  
  formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  },
  
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US');
  }
};
