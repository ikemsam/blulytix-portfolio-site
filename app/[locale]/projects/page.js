"use client";

import { useTheme } from '../../../components/ThemeProvider';
import { useTranslations } from 'next-intl';

const projectsData = [
  { 
    id: 1, 
    category: "Generative AI & NLP",
    title: "AI-Powered Interview Preparation Coach", 
    description: "Developed and deployed a specialized application to assist users in preparing for technical and behavioral interviews. The tool leverages advanced prompt engineering with the OpenAI API to simulate various interviewer personas and provide tailored feedback.", 
    tags: ["Generative AI", "OpenAI API", "Prompt Engineering", "Python", "Streamlit", "Docker", "AWS"] 
  },
  { 
    id: 2, 
    category: "Generative AI & MLOps",
    title: "Advanced RAG Chatbot for Career Consulting", 
    description: "Built a domain-specific chatbot using LangChain that implements advanced Retrieval-Augmented Generation (RAG) and function calling. The system uses real-time job market data to provide insightful career advice.", 
    tags: ["LangChain", "RAG", "Vector Databases", "LLM", "Python", "MLOps"] 
  },
  { 
    id: 3, 
    category: "Predictive Modeling & Cloud",
    title: "Home Credit Default Risk Model (POC)", 
    description: "Engineered and deployed a machine learning model on Google Cloud Platform to predict loan default risk, demonstrating end-to-end MLOps capabilities for a FinTech proof-of-concept.", 
    tags: ["Machine Learning", "GCP", "API Deployment", "EDA"] 
  },
  { 
    id: 4, 
    category: "Kaggle & Competitive Data Science",
    title: "Spaceship Titanic Competition (Top Performer)", 
    description: "Achieved a competitive score of 0.79+ by applying advanced feature engineering, handling mixed data types, and ensembling multiple models like XGBoost.", 
    tags: ["Kaggle", "XGBoost", "Feature Engineering", "Ensembling"] 
  },
];

export default function ProjectsPage() {
  const { theme } = useTheme();
  const t = useTranslations('ProjectsPage');

  return (
    <div className={`min-h-screen w-full ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#2A8CFC] to-[#FF6B6B] bg-clip-text text-transparent">
                {t('title')}
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl opacity-90">
                {t('subtitle')}
            </p>
        </div>

        <div className="space-y-16">
          {projectsData.map((project) => (
            <div key={project.id} className="p-8 rounded-xl bg-gray-400/10 dark:bg-black/20 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-white/20">
              <p className={`font-semibold text-lg mb-2 ${theme === 'dark' ? 'text-[#2A8CFC]' : 'text-[#FF6B6B]'}`}>{project.category}</p>
              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              <p className="text-base opacity-90 mb-6 leading-relaxed">{project.description}</p>
              <h3 className="font-semibold text-md mb-3">{t('techUsed')}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className={`text-xs font-semibold px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-[#2A8CFC]/20 text-[#9ecbff]' : 'bg-[#2A8CFC]/20 text-blue-800'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
