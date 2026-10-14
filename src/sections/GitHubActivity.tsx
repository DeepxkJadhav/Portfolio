import React, { useState, useEffect } from 'react';
import { OTHER_REPOSITORIES } from '../data/projects';
import { GitHubRepoSnapshot } from '../types';
import { Github, Star, GitFork, ExternalLink, RefreshCw, CheckCircle2 } from 'lucide-react';

export const GitHubActivity: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepoSnapshot[]>(OTHER_REPOSITORIES);
  const [repoCount, setRepoCount] = useState<number>(22);
  const [isLive, setIsLive] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const userRes = await fetch('https://api.github.com/users/DeepxkJadhav');
        if (userRes.ok) {
          const userData = await userRes.json();
          if (userData.public_repos) {
            setRepoCount(userData.public_repos);
          }
        }

        const reposRes = await fetch('https://api.github.com/users/DeepxkJadhav/repos?sort=updated&per_page=30');
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData)) {
            const mapped: GitHubRepoSnapshot[] = reposData.map((r: any) => ({
              name: r.name,
              description: r.description,
              language: r.language,
              stars: r.stargazers_count,
              forks: r.forks_count,
              url: r.html_url,
              updatedAt: r.updated_at ? r.updated_at.split('T')[0] : '2026-10'
            }));
            setRepos(mapped);
            setIsLive(true);
          }
        }
      } catch (err) {
        // Fallback to audited build-time snapshot gracefully
        setIsLive(false);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const filteredRepos = repos.filter(r => 
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (r.description && r.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (r.language && r.language.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="repositories" aria-label="Open Source Repositories" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-surface-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-surface-border gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-accent">
            <Github className="w-4 h-4" />
            <span>04 // Open Source Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            Public Repositories & Tooling
          </h2>
          <p className="text-sm sm:text-base text-text-secondary mt-1 max-w-2xl">
            Complete inventory of public research repositories, tooling experiments, and system prototypes.
          </p>
        </div>

        {/* Live sync badge */}
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-850 border border-surface-border font-mono text-xs">
            {isLive ? (
              <>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-emerald-400">Live GitHub API Sync</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-text-muted" />
                <span className="text-text-muted">Verified Snapshot ({repoCount} Repos)</span>
              </>
            )}
            {loading && <RefreshCw className="w-3 h-3 animate-spin text-accent ml-1" />}
          </div>
        </div>
      </div>

      {/* Filter / Search input */}
      <div className="mb-6 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Filter repositories by name, language, or concept..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:max-w-md px-4 py-2.5 rounded-xl bg-dark-850 border border-surface-border text-xs font-mono text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors"
        />
        <div className="text-xs font-mono text-text-muted self-center">
          Showing {filteredRepos.length} of {repos.length} audited repositories
        </div>
      </div>

      {/* Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRepos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-5 rounded-xl bg-surface-card border border-surface-border hover:border-surface-border-light hover:bg-dark-850 transition-all duration-200 group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-mono font-semibold text-text-primary group-hover:text-accent transition-colors flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-text-muted group-hover:text-accent" />
                  {repo.name}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 mb-4 font-sans">
                {repo.description || 'System codebase and algorithmic implementation.'}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-surface-border/50 text-[11px] font-mono text-text-muted">
              <span className="flex items-center gap-1 text-accent">
                {repo.language && (
                  <>
                    <span className="w-2 h-2 rounded-full bg-accent/80"></span>
                    <span>{repo.language}</span>
                  </>
                )}
              </span>
              <div className="flex items-center gap-3">
                {repo.stars > 0 && (
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400" />
                    <span>{repo.stars}</span>
                  </span>
                )}
                {repo.forks > 0 && (
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    <span>{repo.forks}</span>
                  </span>
                )}
                <span>{repo.updatedAt}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
