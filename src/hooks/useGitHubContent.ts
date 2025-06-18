import { useState, useEffect } from 'react';
import { githubApiService } from '../services/githubApi';

interface UseGitHubContentOptions {
  owner: string;
  repo: string;
  path: string;
  branch?: string;
  autoFetch?: boolean;
}

interface UseGitHubContentReturn {
  content: string;
  htmlContent: string;
  loading: boolean;
  error: string | null;
  fetchContent: () => Promise<void>;
  clearError: () => void;
}

export const useGitHubContent = ({
  owner,
  repo,
  path,
  branch = 'main',
  autoFetch = true
}: UseGitHubContentOptions): UseGitHubContentReturn => {
  const [content, setContent] = useState<string>('');
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const markdownContent = await githubApiService.fetchMarkdownContent(owner, repo, path, branch);
      const parsedHtml = githubApiService.convertMarkdownToHtml(markdownContent);
      
      setContent(markdownContent);
      setHtmlContent(parsedHtml);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch content';
      setError(errorMessage);
      console.error('Error fetching GitHub content:', err);
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchContent();
    }
  }, [owner, repo, path, branch, autoFetch]);

  return {
    content,
    htmlContent,
    loading,
    error,
    fetchContent,
    clearError
  };
}; 