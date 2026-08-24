import { useState } from 'react';
import { useResumeReview } from '../hooks/useResumeReview';
import FileUpload from '../components/FileUpload';
import TargetJobForm from '../components/TargetJobForm';
import ReviewHeader from '../components/ReviewHeader';
import ScoreOverview from '../components/ScoreOverview';
import ScoreBreakdown from '../components/ScoreBreakdown';
import PriorityFixes from '../components/PriorityFixes';
import ATSReview from '../components/ATSReview';
import SummaryReview from '../components/SummaryReview';
import ExperienceReview from '../components/ExperienceReview';
import BulletReview from '../components/BulletReview';
import SkillsReview from '../components/SkillsReview';
import ProjectsReview from '../components/ProjectsReview';
import FormattingReview from '../components/FormattingReview';
import CareerPositioning from '../components/CareerPositioning';
import JobMatchReview from '../components/JobMatchReview';
import ReviewActions from '../components/ReviewActions';

const Home = () => {
  const {
    resume,
    review,
    loading,
    error,
    step,
    uploadResume,
    startReview,
    reset,
  } = useResumeReview();
  
  const [activeTab, setActiveTab] = useState('overview');
  
  const handleFileSelect = async (file) => {
    await uploadResume(file);
  };
  
  const handleReview = async (targetRole, jobDescription) => {
    await startReview(targetRole, jobDescription);
  };
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: '\uD83D\uDCCA' },
    { id: 'ats', label: 'ATS', icon: '\uD83D\uDD0D' },
    { id: 'content', label: 'Content', icon: '\uD83D\uDCC4' },
    { id: 'experience', label: 'Experience', icon: '\uD83D\uDCBC' },
    { id: 'skills', label: 'Skills', icon: '\u26A1' },
    { id: 'formatting', label: 'Formatting', icon: '\u2728' },
  ];
  
  return (
    <div className="min-h-screen animated-gradient">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <ReviewHeader />
        
        {error && (
          <div className="glass rounded-2xl border border-red-200 bg-red-50/80 text-red-700 px-6 py-4 mb-6 animate-slide-down">
            <div className="flex items-center gap-3">
              <span className="text-xl">{'\u26A0\uFE0F'}</span>
              <p>{error}</p>
            </div>
          </div>
        )}
        
        {step === 'upload' && (
          <div className="glass rounded-3xl shadow-xl p-8 mb-6 animate-fade-in card-hover">
            <FileUpload onFileSelect={handleFileSelect} disabled={loading} />
            
            {loading && (
              <div className="mt-6 text-center animate-pulse">
                <div className="inline-flex items-center gap-3 bg-primary-50 text-primary-700 px-6 py-3 rounded-full">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="font-medium">Uploading file...</span>
                </div>
              </div>
            )}
          </div>
        )}
        
        {step === 'review' && resume && (
          <div className="glass rounded-3xl shadow-xl p-8 mb-6 animate-slide-up">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <span className="text-3xl">{'\u2705'}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Resume Uploaded!
              </h2>
              <p className="text-gray-600">
                {resume.filename} uploaded &bull; {resume.file_size} bytes
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <TargetJobForm onSubmit={handleReview} disabled={loading} />
            </div>
            
            {loading && (
              <div className="mt-6 text-center animate-pulse">
                <div className="inline-flex items-center gap-3 bg-accent-50 text-accent-700 px-6 py-3 rounded-full">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="font-medium">Reviewing your resume...</span>
                </div>
                <p className="text-sm text-gray-500 mt-3">This may take a moment</p>
              </div>
            )}
          </div>
        )}
        
        {step === 'results' && review && (
          <div className="animate-fade-in">
            <div className="glass rounded-2xl shadow-lg mb-6 overflow-hidden">
              <div className="flex border-b border-gray-100">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-4 px-3 text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                    }`}
                  >
                    <span className="block text-lg mb-1">{tab.icon}</span>
                    <span className="hidden sm:block">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="animate-slide-up">
              {activeTab === 'overview' && (
                <>
                  <ScoreOverview
                    overall={review.overall}
                    candidate={review.candidate}
                  />
                  <ScoreBreakdown breakdown={review.score_breakdown} />
                  <PriorityFixes priorities={review.overall.top_priorities} />
                </>
              )}
              
              {activeTab === 'ats' && (
                <ATSReview atsReview={review.ats_review} />
              )}
              
              {activeTab === 'content' && (
                <>
                  <SummaryReview summaryReview={review.summary_review} />
                  <ProjectsReview projectsReview={review.projects_review} />
                </>
              )}
              
              {activeTab === 'experience' && (
                <>
                  <ExperienceReview experienceReview={review.experience_review} />
                  <BulletReview bulletReviews={review.bullet_reviews} />
                </>
              )}
              
              {activeTab === 'skills' && (
                <SkillsReview skillsReview={review.skills_review} />
              )}
              
              {activeTab === 'formatting' && (
                <>
                  <FormattingReview formattingReview={review.formatting_review} />
                  <CareerPositioning careerPositioning={review.career_positioning} />
                </>
              )}
              
              {review.target_job_analysis && (
                <JobMatchReview targetJobAnalysis={review.target_job_analysis} />
              )}
              
              <ReviewActions onReset={reset} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
