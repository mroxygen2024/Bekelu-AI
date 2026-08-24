const API_BASE = '/api';

export const api = {
  async uploadResume(file) {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch(`${API_BASE}/resumes/upload`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to upload resume');
    }
    
    return response.json();
  },
  
  async getResume(resumeId) {
    const response = await fetch(`${API_BASE}/resumes/${resumeId}`);
    
    if (!response.ok) {
      throw new Error('Failed to get resume');
    }
    
    return response.json();
  },
  
  async reviewResume(resumeId, targetRole = null, jobDescription = null) {
    const response = await fetch(`${API_BASE}/resumes/${resumeId}/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        target_role: targetRole,
        job_description: jobDescription,
      }),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to review resume');
    }
    
    return response.json();
  },
  
  async deleteResume(resumeId) {
    const response = await fetch(`${API_BASE}/resumes/${resumeId}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete resume');
    }
    
    return response.json();
  },
  
  async healthCheck() {
    const response = await fetch(`${API_BASE}/health`);
    return response.json();
  }
};
