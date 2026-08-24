const API_BASE = '/api';

export const api = {
  async uploadResume(file) {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch(`${API_BASE}/resumes/upload`, {
      method: 'POST',
      body: formData,
    });
    
    const text = await response.text();
    
    if (!response.ok) {
      try {
        const error = JSON.parse(text);
        throw new Error(error.detail || 'Failed to upload resume');
      } catch (e) {
        if (e.message.includes('Failed to')) throw e;
        throw new Error(`Upload failed (${response.status})`);
      }
    }
    
    return JSON.parse(text);
  },
  
  async getResume(resumeId) {
    const response = await fetch(`${API_BASE}/resumes/${resumeId}`);
    const text = await response.text();
    
    if (!response.ok) {
      throw new Error('Failed to get resume');
    }
    
    return JSON.parse(text);
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
    
    const text = await response.text();
    
    if (!response.ok) {
      try {
        const error = JSON.parse(text);
        throw new Error(error.detail || 'Failed to review resume');
      } catch (e) {
        if (e.message.includes('Failed to')) throw e;
        throw new Error(`Review failed (${response.status})`);
      }
    }
    
    return JSON.parse(text);
  },
  
  async deleteResume(resumeId) {
    const response = await fetch(`${API_BASE}/resumes/${resumeId}`, {
      method: 'DELETE',
    });
    
    const text = await response.text();
    
    if (!response.ok) {
      throw new Error('Failed to delete resume');
    }
    
    return JSON.parse(text);
  },
  
  async healthCheck() {
    const response = await fetch(`${API_BASE}/health`);
    const text = await response.text();
    return JSON.parse(text);
  }
};
