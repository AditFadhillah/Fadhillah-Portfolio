# Git push guide

## Check what changed

```powershell
git status --short
git diff
git log --oneline -5
```

## A. Push directly to main (small changes)

```powershell
git status --short
git add .
git commit -m "Describe what changed"
git push origin main
```

To add only specific files, use `git add path\to\file` instead of `git add .`.

## B. Pull request flow (bigger changes)

`main` is protected, so use a branch and open a PR.

```powershell
git switch main
git pull origin main
git switch -c feature/short-name
git add .
git commit -m "Describe what changed"
git push -u origin feature/short-name
gh pr create --base main --head feature/short-name --title "Describe what changed" --body "Short summary of the change."
```

Example: removing an unused markdown file

```powershell
git switch main
git pull origin main
git switch -c chore/remove-irrelevant-md
git rm path\to\file.md
git commit -m "Remove irrelevant markdown file"
git push -u origin chore/remove-irrelevant-md
gh pr create --base main --head chore/remove-irrelevant-md --title "Remove irrelevant markdown file" --body "Removes an unused markdown file."
```

After the PR is open, check its checks and merge it on GitHub once `lint`, `test`, and `build` pass:

```powershell
gh pr checks
gh pr view --web
gh pr merge --squash --delete-branch
```

Then update your local `main`:

```powershell
git switch main
git pull origin main
```

## Check the pipeline

```powershell
gh run list --limit 5
gh run view --log-failed
```

## Undo and fix

Undo the last commit but keep the changes staged:

```powershell
git reset --soft HEAD~1
```

Discard changes to one file (cannot be undone):

```powershell
git restore path\to\file
```

Remove a file from git but keep it on disk:

```powershell
git rm --cached path\to\file
```

Undo a commit that is already on `main` with a new commit (safe, no history rewrite):

```powershell
git revert <commit-sha>
git push origin main
```

## Helpful checks

```powershell
git branch -a
git remote -v
git fetch --prune ## Removes local references to branches that no longer exist
```

Do not use `git push --force` on `main`.