---
description: Pull all git repositories in ~/Documents/Code
---

Pull all git repositories in ~/Documents/Code directory:

```bash
find ~/Documents/Code -maxdepth 2 -name ".git" -type d -exec dirname {} \; | while read repo; do echo "=== Pulling $repo ===" && git -C "$repo" pull; done
```

This will:
- Find all git repositories (up to 2 levels deep)
- Pull latest changes from remote for each repo
- Show status for each repository

Use this daily to keep all your projects in sync!
