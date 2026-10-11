---
name: open-pr
description: Review the current branch against main, draft a PR description, and open the pull request with gh. Use when the user asks to write a PR description, create/open a PR, or "ship" the current branch.
---

# Open a PR for the current branch

## 1. Inspect the branch
- Run `git status --short` and `git log main..HEAD --format='%h %s%n%b'`.
- Run `git diff main...HEAD --stat` and `git diff main...HEAD`.
- If there are uncommitted changes, tell the user; offer to commit them before continuing.

## 2. Quick review
Read the diff and flag anything worth fixing before the PR goes up, such as:
- typos or grammar in user-facing copy
- names that don't match behaviour (e.g. a "local" formatter that uses UTC)
- leftover debug code, commented-out code, or unrelated changes

Report these briefly and let the user decide. Don't change code unprompted.

## 3. Draft the description
Written for reviewers of the repo. Use this structure:

```
**Title:** <short, imperative, under ~70 chars>

## Summary
- 1-3 bullets on what and why

## Changes
**<area>** (`path/to/file`)
- specific change

## Testing
- how a reviewer can verify it
```

Describe what the diff actually does, nothing more. Link files by path. Show the draft to the user.

## 4. Open the PR
Opening a PR is outward-facing, so only do this once the user has said to go ahead:
1. Commit any remaining changes. End the commit message with the attribution line from the session's system reminder.
2. `git push -u origin HEAD`
3. `gh pr create --base main --title "<title>" --body "<body>"`. End the body with the PR attribution line from the system reminder.
4. Give the user the PR URL.

If the current branch is `main`, stop and ask the user to create a branch first.
