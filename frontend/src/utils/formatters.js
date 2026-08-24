export const formatters = {
  formatScore(score) {
    return `${Math.round(score)}/100`;
  },

  getScoreColor(score) {
    if (score >= 80) return 'text-emerald-400';
    if (score >= 60) return 'text-amber-400';
    return 'text-rose-400';
  },

  getScoreBgColor(score) {
    if (score >= 80) return 'bg-emerald-500/15';
    if (score >= 60) return 'bg-amber-500/15';
    return 'bg-rose-500/15';
  },

  getPriorityColor(priority) {
    const colors = {
      critical: 'bg-rose-500/15 text-rose-300 border border-rose-500/20',
      high: 'bg-orange-500/15 text-orange-300 border border-orange-500/20',
      medium: 'bg-amber-500/15 text-amber-300 border border-amber-500/20',
      low: 'bg-blue-500/15 text-blue-300 border border-blue-500/20',
    };
    return colors[priority] || 'bg-white/5 text-white/60 border border-white/10';
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
