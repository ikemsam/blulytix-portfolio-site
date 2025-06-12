"use client";

import { useTheme } from '../../../components/ThemeProvider';
import { useTranslations } from 'next-intl';

// This data is now fully populated from your resume PDF.
const resumeData = {
  name: "Samuel Ikem",
  title: "Data Scientist & AI/ML Engineer",
  location: "Gdynia, Poland",
  email: "ikemsamuel66@gmail.com",
  linkedin: "linkedin.com/in/samuelikem",
  github: "github.com/ikemsam",
  experience: [
    { id: "blulytix", period: "Jan 2023 - Present" },
    { id: "teamInternet", period: "Feb 2025 - May 2025" },
    { id: "telus", period: "Jul 2024 - Dec 2024" },
    { id: "amazon", period: "Aug 2022 - Jul 2024" }
  ],
  // RESTORED PROJECTS SECTION
  projects: [
    {
        name: "Advanced RAG Chatbot for Career Consulting",
        description: "Built a domain-specific chatbot using LangChain that implements advanced Retrieval-Augmented Generation (RAG) and function calling. The system uses World Economic Forum reports and real-time job market data to provide insightful career advice."
    },
    {
        name: "AI-Powered Interview Preparation Tool",
        description: "Developed and deployed a specialized tool using OpenAI API and advanced prompt engineering to help users prepare for technical interviews, simulating various interviewer personas. The application was containerized with Docker and deployed on AWS for scalability."
    },
    {
        name: "Home Credit Default Risk Model (FinTech POC)",
        description: "Engineered and deployed a machine learning model on Google Cloud Platform to predict loan default risk, demonstrating end-to-end MLOps capabilities for a FinTech proof-of-concept."
    },
    {
        name: "Spaceship Titanic Competition (Top Performer)",
        description: "Achieved a competitive score of 0.79+ by applying advanced feature engineering, handling mixed data types (numeric, categorical, NLP), and ensembling multiple models like XGBoost."
    }
  ],
  // RESTORED EDUCATION SECTION
  education: [
    { degree: "Data Science and AI Program", institution: "Turing College", period: "Apr 2024 - Present" },
    { degree: "IAPP AI Governance Professional (AIGP) Training", institution: "Purpose and Means", period: "Completed Feb 2025" },
    { degree: "Data Analysis With Python/Machine Learning Bootcamp", institution: "ALX Academy, Warsaw Poland", period: "Oct 2023 - Feb 2024" },
    { degree: "Bachelor's in Logistics and Supply Chain Management", institution: "Międzynarodowa Wyższa Szkoła Logistyki i Transportu", period: "Mar 2021 - Mar 2024" },
  ],
  skills: {
    ml_ops: ["TensorFlow", "Scikit-learn", "PyTorch", "XGBoost", "AWS SageMaker", "Docker", "CI/CD", "FastAPI", "RAG", "Git", "IaC Principles", "Transformer Models"],
    data_analysis: ["SQL", "ETL Pipelines", "Boto3", "AWS QuickSight", "Looker Studio", "Excel", "Python (Pandas, Seaborn)", "A/B Testing", "Tableau", "Power BI"],
    compliance_ethics: ["AI Governance", "Model Risk Assessment", "NIST AI RMF", "GDPR"],
  },
  languages: [
    { id: "english", levelId: "native", flag: "🇬🇧" },
    { id: "german", levelId: "advanced", flag: "🇩🇪" },
    { id: "polish", levelId: "progressing", flag: "🇵🇱" }
  ]
};

export default function ResumePage() {
  const { theme } = useTheme();
  const t = useTranslations('ResumePage');

  return (
    <div className={`min-h-screen w-full ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 p-6 rounded-xl bg-gray-400/10 dark:bg-black/20 backdrop-blur-sm border border-white/10">
            <div className="text-left mb-6 sm:mb-0">
                <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#2A8CFC] to-[#FF6B6B] bg-clip-text text-transparent">
                    {resumeData.name}
                </h1>
                <p className="mt-2 text-xl md:text-2xl font-semibold">{resumeData.title}</p>
                <div className="mt-3 text-sm opacity-80 flex flex-wrap gap-x-4 gap-y-1">
                    <span>{resumeData.location}</span>
                    <a href={`mailto:${resumeData.email}`} className="hover:text-[#2A8CFC]">{resumeData.email}</a>
                </div>
            </div>
            {/* The corrected link to the PDF file in the /public folder */}
            <a href="/Samuel_Ikem_Resume.pdf" download="Samuel_Ikem_Resume.pdf" rel="noopener noreferrer" target="_blank">
                <button className="bg-[#2A8CFC] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                    {t('downloadButton')}
                </button>
            </a>
        </div>
        
        <div className="space-y-12">
            <div className="p-6 rounded-xl bg-gray-400/10 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold border-b-2 border-[#2A8CFC] pb-2 mb-4">{t('summaryTitle')}</h2>
                <p className="text-lg leading-relaxed">{t('summaryContent')}</p>
            </div>

            {/* RESTORED PROJECTS SECTION */}
            <div className="p-6 rounded-xl bg-gray-400/10 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold border-b-2 border-[#2A8CFC] pb-2 mb-6">{t('projectsTitle')}</h2>
                <div className="space-y-6">
                    {resumeData.projects.map((project, index) => (
                        <div key={index} className="last:mb-0">
                            <h3 className="text-xl font-bold">{project.name}</h3>
                            <p className="opacity-90 mt-1">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-400/10 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold border-b-2 border-[#2A8CFC] pb-2 mb-6">{t('experienceTitle')}</h2>
                {resumeData.experience.map((job) => (
                    <div key={job.id} className="mb-6 last:mb-0">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                            <h3 className="text-xl font-bold">{t(`experience.${job.id}.role`)}</h3>
                            <p className="font-mono text-sm opacity-70 mt-1 sm:mt-0">{job.period}</p>
                        </div>
                        <p className="text-lg font-semibold text-[#2A8CFC] mb-2">{t(`experience.${job.id}.company`)}</p>
                        <p className="opacity-90">{t(`experience.${job.id}.description`)}</p>
                    </div>
                ))}
            </div>
        
            <div className="p-6 rounded-xl bg-gray-400/10 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold border-b-2 border-[#2A8CFC] pb-2 mb-6">{t('educationTitle')}</h2>
                 {resumeData.education.map((edu, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                            <h3 className="text-xl font-bold">{edu.degree}</h3>
                             <p className="font-mono text-sm opacity-70 mt-1 sm:mt-0">{edu.period}</p>
                        </div>
                        <p className="text-lg font-semibold text-[#2A8CFC]">{edu.institution}</p>
                    </div>
                ))}
            </div>

            <div className="p-6 rounded-xl bg-gray-400/10 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold border-b-2 border-[#2A8CFC] pb-2 mb-4">{t('skillsTitle')}</h2>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-3">{t('skills.mlOps')}</h3>
                        <div className="flex flex-wrap gap-2">
                            {resumeData.skills.ml_ops.map(skill => <span key={skill} className={`text-sm font-medium px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-[#2A8CFC]/20 text-[#9ecbff]' : 'bg-[#2A8CFC]/20 text-blue-800'}`}>{skill}</span>)}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-3">{t('skills.dataAnalysis')}</h3>
                         <div className="flex flex-wrap gap-2">
                            {resumeData.skills.data_analysis.map(skill => <span key={skill} className={`text-sm font-medium px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>{skill}</span>)}
                        </div>
                    </div>
                     <div>
                        <h3 className="text-xl font-semibold mb-3">{t('skills.compliance')}</h3>
                         <div className="flex flex-wrap gap-2">
                            {resumeData.skills.compliance_ethics.map(skill => <span key={skill} className={`text-sm font-medium px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-[#FF6B6B]/20 text-[#ff9b9b]' : 'bg-[#FF6B6B]/20 text-red-800'}`}>{skill}</span>)}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">{t('skills.languages')}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {resumeData.languages.map(lang => (
                                 <div key={lang.id} className={`p-4 rounded-lg flex items-center gap-4 ${theme === 'dark' ? 'bg-gray-800/60' : 'bg-gray-100/60'}`}>
                                    <span className="text-3xl">{lang.flag}</span>
                                    <div>
                                        <p className="font-bold">{t(`languages.${lang.id}`)}</p>
                                        <p className="text-sm opacity-80">{t(`languages.${lang.levelId}`)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
