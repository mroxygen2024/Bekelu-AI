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
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <ReviewHeader />

        {/* Error State */}
        {error && (
          <div className="glass rounded-2xl border border-red-500/30 bg-red-500/10 text-red-300 px-6 py-4 mb-6 animate-slide-down">
            <div className="flex items-center gap-3">
              <span className="text-xl">{'\u26A0\uFE0F'}</span>
              <p className="text-sm font-medium">{error}</p>
            </div>
          </div>
        )}

        {/* Upload Step */}
        {step === 'upload' && (
          <div className="glass rounded-3xl shadow-card p-8 mb-6 animate-fade-in card-hover">
            <FileUpload onFileSelect={handleFileSelect} disabled={loading} />

            {loading && (
              <div className="mt-6 text-center animate-pulse">
                <div className="inline-flex items-center gap-3 bg-primary-500/10 text-primary-300 px-6 py-3 rounded-full border border-primary-500/20">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="font-medium text-sm">Uploading file...</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Review Step */}
        {step === 'review' && resume && (
          <div className="glass rounded-3xl shadow-card p-8 mb-6 animate-slide-up">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/15 rounded-full mb-4 border border-emerald-500/20">
                <span className="text-3xl">{'\u2705'}</span>
              </div>
              <h2 className="text-2xl font-bold text-white/90 mb-2">
                Resume Uploaded!
              </h2>
              <p className="text-white/40 text-sm">
                {resume.filename} &bull; {(resume.file_size / 1024).toFixed(1)} KB
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <TargetJobForm onSubmit={handleReview} disabled={loading} />
            </div>

            {loading && (
              <div className="mt-6 text-center animate-pulse">
                <div className="inline-flex items-center gap-3 bg-primary-500/10 text-primary-300 px-6 py-3 rounded-full border border-primary-500/20">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="font-medium text-sm">Reviewing your resume...</span>
                </div>
                <p className="text-xs text-white/30 mt-3">This may take a moment</p>
              </div>
            )}
          </div>
        )}

        {/* Results Step */}
        {step === 'results' && review && (
          <div className="animate-fade-in">
            {/* Tab Navigation */}
            <div className="glass rounded-2xl shadow-card mb-6 overflow-hidden">
              <div className="flex border-b border-white/5">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-4 px-3 text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-primary-600/20 text-primary-300 border-b-2 border-primary-500'
                        : 'text-white/40 hover:bg-white/5 hover:text-white/60'
                    }`}
                  >
                    <span className="block text-lg mb-1">{tab.icon}</span>
                    <span className="hidden sm:block text-xs">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
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
