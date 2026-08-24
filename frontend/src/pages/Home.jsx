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
    { id: 'overview', label: '\u1218\u134D\u1275\u122B \u1230\u1295' },
    { id: 'ats', label: 'ATS' },
    { id: 'content', label: '\u1260\u127D\u12AB\u1275' },
    { id: 'experience', label: '\u1265\u1275\u122B \u130D\u1276\u1293\u1275' },
    { id: 'skills', label: '\u1348\u1275\u1273\u1275' },
    { id: 'formatting', label: '\u134C\u1295\u12B3\u1275' },
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <ReviewHeader />
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}
        
        {step === 'upload' && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <FileUpload onFileSelect={handleFileSelect} disabled={loading} />
            
            {loading && (
              <div className="mt-4 text-center">
                <p className="text-gray-600">{'\u1349\u1275\u127D\u121B \u1270\u12A8\u1275\u12DA \u1348\u134D\u1293 \u127D\u1205...'}</p>
              </div>
            )}
          </div>
        )}
        
        {step === 'review' && resume && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {'\u1265\u127D\u12AB\u121B \u1349\u1275\u1273!'}
            </h2>
            <p className="text-gray-600 mb-4">
              {resume.filename} {'\u1349\u1275\u1273'} &bull; {resume.file_size} {'\u1260\u1295\u1275\u127F'}
            </p>
            
            <TargetJobForm onSubmit={handleReview} disabled={loading} />
            
            {loading && (
              <div className="mt-4 text-center">
                <p className="text-gray-600">{'\u1265\u127D\u12AB\u121B \u1270\u12A8\u1275\u12DA \u1263\u1245\u1275\u1237\u1248\u130D\u1273\u1295 \u127D\u1205...'}</p>
                <p className="text-sm text-gray-500">{'\u1275\u127D \u1349\u1295 \u1275\u127D\u130D\u1293\u1295 \u127D\u1205'}</p>
              </div>
            )}
          </div>
        )}
        
        {step === 'results' && review && (
          <div>
            <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
              <div className="flex border-b overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-3 px-4 text-sm font-medium transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            
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
        )}
      </div>
    </div>
  );
};

export default Home;
