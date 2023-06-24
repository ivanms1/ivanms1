import { Bookmark, StarIcon, GitForkIcon } from "lucide-react";

import type { Repository } from "src/services/repositories";

interface RepositoryCardProps {
  repository: Repository;
}

function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <a
      key={repository?.id}
      href={repository?.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-1 rounded border p-4 transition-all hover:-translate-y-1 hover:bg-slate-800"
    >
      <div className="flex items-center gap-1 self-start">
        <Bookmark className="h-4" />
        <span className="text-lg font-semibold">{repository?.name}</span>
      </div>

      <p className="text-sm text-gray-400">{repository?.description}</p>
      <div className="flex gap-2">
        <div className="flex items-center">
          <StarIcon className="h-4" fill="white" stroke="white" />
          <span className="text-sm">{repository?.stargazerCount}</span>
        </div>
        <div className="flex items-center">
          <GitForkIcon className="h-4" />
          <span className="text-sm">{repository?.forkCount}</span>
        </div>
      </div>
    </a>
  );
}

export default RepositoryCard;
