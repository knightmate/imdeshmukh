interface GitHubFileResponse {
  content: string;
  encoding: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
}

export class GitHubApiService {
  private baseUrl = 'https://api.github.com';

  /**
   * Fetch content from a GitHub markdown file
   * @param owner - Repository owner
   * @param repo - Repository name
   * @param path - Path to the markdown file (e.g., 'README.md')
   * @param branch - Branch name (default: 'main')
   * @returns Promise with the decoded content
   */
  async fetchMarkdownContent(
    owner: string,
    repo: string,
    path: string,
    branch: string = 'main'
  ): Promise<string> {
    try {
      const url = `${this.baseUrl}/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
      
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'imdeshmukh-portfolio'
        }
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }

      const data: GitHubFileResponse = await response.json();
      
      if (data.encoding !== 'base64') {
        throw new Error(`Unexpected encoding: ${data.encoding}`);
      }

      // Decode base64 content
      const decodedContent = atob(data.content);
      return decodedContent;
    } catch (error) {
      console.error('Error fetching GitHub content:', error);
      throw error;
    }
  }

  /**
   * Convert markdown content to HTML (basic implementation)
   * You might want to use a proper markdown parser like 'marked' or 'remark'
   * @param markdown - Raw markdown content
   * @returns HTML string
   */
  convertMarkdownToHtml(markdown: string): string {
    // Basic markdown to HTML conversion
    return markdown
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/\n/gim, '<br />');
  }

  /**
   * Fetch and parse markdown content from GitHub
   * @param owner - Repository owner
   * @param repo - Repository name
   * @param path - Path to the markdown file
   * @param branch - Branch name (default: 'main')
   * @returns Promise with parsed HTML content
   */
  async fetchAndParseMarkdown(
    owner: string,
    repo: string,
    path: string,
    branch: string = 'main'
  ): Promise<string> {
    const markdownContent = await this.fetchMarkdownContent(owner, repo, path, branch);
    return this.convertMarkdownToHtml(markdownContent);
  }
}

export const githubApiService = new GitHubApiService(); 