import React from 'react';
import { RefreshCw, AlertCircle, FileText } from 'lucide-react';
import { useGitHubContent } from '../hooks/useGitHubContent';

interface GitHubMarkdownProps {
  owner: string;
  repo: string;
  path: string;
  branch?: string;
  className?: string;
  showRawContent?: boolean;
}

export const GitHubMarkdown: React.FC<GitHubMarkdownProps> = ({
  owner,
  repo,
  path,
  branch = 'main',
  className = '',
  showRawContent = false
}) => {
  const {
    content,
    htmlContent,
    loading,
    error,
    fetchContent,
    clearError
  } = useGitHubContent({
    owner,
    repo,
    path,
    branch
  });

  const handleRetry = () => {
    clearError();
    fetchContent();
  };

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
          <RefreshCw className="animate-spin" size={20} />
          <span>Loading content from GitHub...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`p-6 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/20 dark:border-red-800 ${className}`}>
        <div className="flex items-start space-x-3">
          <AlertCircle className="text-red-500 mt-1" size={20} />
          <div className="flex-1">
            <h3 className="text-red-800 dark:text-red-200 font-medium mb-2">
              Error Loading Content
            </h3>
            <p className="text-red-700 dark:text-red-300 text-sm mb-3">
              {error}
            </p>
            <div className="text-xs text-red-600 dark:text-red-400 mb-3">
              Repository: {owner}/{repo}<br />
              Path: {path}<br />
              Branch: {branch}
            </div>
            <button
              onClick={handleRetry}
              className="inline-flex items-center space-x-2 px-3 py-1.5 text-sm bg-red-100 hover:bg-red-200 dark:bg-red-800 dark:hover:bg-red-700 text-red-800 dark:text-red-200 rounded-md transition-colors"
            >
              <RefreshCw size={16} />
              <span>Retry</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className={`flex items-center justify-center p-8 text-gray-500 dark:text-gray-400 ${className}`}>
        <div className="flex items-center space-x-2">
          <FileText size={20} />
          <span>No content available</span>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {showRawContent ? (
        <pre className="whitespace-pre-wrap text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {content}
        </pre>
      ) : (
        <div 
          className="prose prose-gray dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      )}
    </div>
  );
}; 