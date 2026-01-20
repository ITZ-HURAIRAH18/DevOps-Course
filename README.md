"Git & GitHub Comprehensive Guide

## Table of Contents
1. [Git Restore Command](#git-restore-command)
2. [Git Revert Command](#git-revert-command)
3. [Git Reset Command](#git-reset-command)
4. [Git Alias Configuration](#git-alias-configuration)
5. [Branch Management](#branch-management)
6. [Git Amend Command](#git-amend-command)
7. [Git Clone Command](#git-clone-command)
8. [Git Pull & Fetch Commands](#git-pull--fetch-commands)
9. [Deployment Strategies](#deployment-strategies)
10. [Git Diff Command](#git-diff-command)
11. [Skip Git Staging Area](#skip-git-staging-area)
12. [Git Stash Command](#git-stash-command)
13. [User Configuration Management](#user-configuration-management)
14. [Fork & Contribution Workflow](#fork--contribution-workflow)
15. [GitHub Actions Workflows](#github-actions-workflows)
16. [SSH Key Authentication](#ssh-key-authentication)

---

## Git Restore Command

**Command:** `git restore`

**Purpose:** Used to restore/undo changes in the working directory before they are committed.

**When to Use:** When you have made changes in your tracked files but haven't committed them yet.

**Key Points:**
- Discards local modifications to tracked files
- Does not affect committed changes
- Works on working directory changes only

---

## Git Revert Command

**Command:** `git revert <commit-id>`

**Purpose:** Reverts changes from a specific commit by creating a new commit that undoes those changes.

**Usage Steps:**
1. Run `git revert <commit-id>`
2. Editor opens (vi/nano)
3. Save and exit using `:q`

**Finding Commit IDs:**
- `git log` - Shows detailed commit history
- `git log --oneline` - Shows condensed one-line commit history

**Important Characteristics:**
- Creates a NEW commit ID for the revert action
- Preserves the complete history
- The commit you revert to becomes tracked
- Non-destructive operation (history is maintained)

---

## Git Reset Command

**Command:** `git reset`

**Purpose:** Removes commit history by moving the HEAD pointer backward.

**Key Difference from Revert:**
- Revert creates new commit (preserves history)
- Reset removes commit history (destructive operation)

**Common Variants:**
- `git reset --soft <commit-id>` - Keeps changes staged
- `git reset --mixed <commit-id>` - Keeps changes unstaged (default)
- `git reset --hard <commit-id>` - Discards all changes completely

---

## Git Alias Configuration

**Purpose:** Create shortcuts for frequently used Git commands.

### Configuration Levels:
1. **Local** (Repository-specific): `git config --local --edit`
2. **Global** (User-wide): `git config --global --edit`

### Manual Alias Creation:
1. Open config file: `git config --global --edit` or `git config --local --edit`
2. Add aliases in nano/vi editor
3. Save: `CTRL + X` (in nano)

### Command-Line Alias Creation (RECOMMENDED):
```bash
# Global alias
git config --global alias.st status

# Local alias
git config --local alias.st status
```

**Example Usage:**
After creating alias `st` for `status`, you can use:
```bash
git st  # Instead of git status
```

---

## Branch Management

### Viewing Branches
```bash
git branch
* main  # Asterisk shows current branch
```

### Creating Branches
```bash
git branch <branch-name>  # Create new branch
```

### Switching Branches
```bash
# Method 1 (Old, still used)
git checkout <branch-name>

# Method 2 (Modern)
git switch <branch-name>
```

### Create and Switch in One Command
```bash
# Old method
git checkout -b <branch-name>

# Modern method
git switch -c <branch-name>
```

### Merging Branches
```bash
# First, switch to the target branch
git switch main

# Then merge another branch into it
git merge second
```

**Example:** To merge data from `second` branch into `main`:
1. Switch to `main`: `git switch main`
2. Merge: `git merge second`

### Deleting Branches

**Local Branch Deletion:**
```bash
git branch -d <branch-name>
```

**Remote Branch Deletion (GitHub):**
```bash
git push origin --delete <branch-name>
```

---

## Git Amend Command

**Command:** `git commit --amend`

**Purpose:** Modify the most recent commit without creating a new commit.

**Use Cases:**
- Fix typos in commit message
- Add forgotten files to last commit
- Make small code changes to last commit

### Methods:

**Method 1 - With New Message:**
```bash
git commit --amend -m "Updated commit message"
```

**Method 2 - Edit in Editor:**
```bash
git commit --amend
# Editor opens, edit message, then save with :wq
```

**Important:** Only amend commits that haven't been pushed to remote repositories.

---

## Git Clone Command

**Purpose:** Download a complete copy of a remote repository.

### Basic Clone:
```bash
git clone <URL>
```

### Clone Without Initial Folder:
```bash
git clone <URL> .
# The dot (.) clones directly into current directory
```

### Clone Specific Branch:
```bash
git clone -b <branch-name> <URL>
```

---

## Git Pull & Fetch Commands

### Git Pull (Instant Merge)
```bash
git pull
```
- Fetches changes from remote
- Automatically merges into current branch
- Single-step operation

### Git Fetch (Manual Merge)
```bash
# Step 1: Fetch changes
git fetch origin

# Step 2: Check status
git status

# Step 3: Manually merge
git merge origin/main
```

**Key Difference:**
- **Pull** = Fetch + Merge (automatic)
- **Fetch** = Download only (manual merge required)

---

## Deployment Strategies

### Deploy Static Website on GitHub Pages
- Works for HTML, CSS, JavaScript files
- Configure in repository settings
- Enable GitHub Pages from Settings → Pages

### Deploy React App on GitHub
- Requires build process
- Configure deployment settings
- Use GitHub Actions for automated deployment
- Consult documentation for specific framework requirements

---

## Git Diff Command

**Purpose:** View differences between various versions of code.

### Various Diff Commands:

**1. Unstaged Changes:**
```bash
git diff
# Shows differences before 'git add .'
```

**2. Staged Changes:**
```bash
git diff --staged
# Shows differences after 'git add .'
```

**3. Compare with Remote:**
```bash
git diff origin/main
# When committed but not pushed
```

**4. Compare Two Commits:**
```bash
git diff 9b18ba2 adb06cb
# Compare changes between two commit IDs
```

**5. Show Only File Names:**
```bash
git diff --name-only
# Lists only changed file names
```

**6. Color-Coded Word Differences:**
```bash
git diff --color-words
# Shows changes with color highlighting
```

---

## Skip Git Staging Area

**Purpose:** Commit changes directly without using `git add` command.

### Methods:

**Method 1:**
```bash
git commit -a -m "Commit message"
```

**Method 2:**
```bash
git commit -am "Commit message"
```

**Method 3 - Specific File:**
```bash
git commit <filename> -m "Commit message"
# Example: git commit Instruction.txt -m "Updated instructions"
```

**Important:** Only works for tracked files (files already in repository).

---

## Git Stash Command

**Purpose:** Temporarily store uncommitted changes without committing or pushing them.

### Common Stash Operations:

**Save Changes to Stash:**
```bash
git stash
# Output: Saved working directory and index state WIP on main: cc2883e Last Commit
```

**View Stash List:**
```bash
git stash list
# Output: stash@{0}: WIP on main: cc2883e Last Commit
```

**Restore Stash with History:**
```bash
git stash apply
# Keeps stash in history after applying
```

**Restore Stash without History:**
```bash
git stash pop
# Removes stash from history after applying
```

**Clear All Stashes:**
```bash
git stash clear
# Deletes all stashed changes
```

**Use Cases:**
- Switch branches without committing current work
- Store temporary experimental changes
- Save work before pulling updates

---

## User Configuration Management

### View Current User Configuration:
```bash
git config --list
```

### Remove User Credentials:
```bash
# Remove username
git config --global --unset user.name

# Remove email
git config --global --unset user.email
```

### Set User Credentials:
```bash
# Set email
git config --global user.email "your-email@example.com"

# Set username
git config --global user.name "Your Name"
```

### Additional Step:
**Remove from Credential Manager (Windows):**
- Open Control Panel
- Navigate to Credential Manager
- Remove Git/GitHub credentials

**When to Use:**
- Switching between multiple GitHub accounts
- Setting up Git on new machine
- Fixing authentication issues

---

## Fork & Contribution Workflow

**Purpose:** Contribute to projects you don't have write access to.

### Steps:
1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Make changes** in your fork
4. **Push changes** to your fork
5. **Create Pull Request** to original repository
6. **Wait for review** and approval

**Key Concept:** Fork creates a personal copy of someone else's repository under your account.

---

## GitHub Actions Workflows

### 1. Basic Workflow - Print Message on Push

**File Location:** `.github/workflows/main.yml`

```yaml
name: Print Asslamualikum

on:
  push:
    branches:
      - main

jobs:
  say-hello:
    runs-on: ubuntu-latest

    steps:
      - name: Print message
        run: echo "Asslamualikum From Hurairah"
```

**Trigger:** Runs on every push to main branch

---

### 2. Scheduled Workflow - Daily Message

```yaml
name: Daily Asslamualikum Message

on:
  schedule:
    - cron: '37 8 * * *'   # 08:37 UTC = 01:37 PM PKT

jobs:
  print-message:
    runs-on: ubuntu-latest

    steps:
      - name: Print message
        run: echo "Asslamualikum From Hurairah"
```

**Cron Format Explanation:**
```
┌──────── minute (37)
│ ┌────── hour (8 UTC)
│ │ ┌──── day of month (*)
│ │ │ ┌── month (*)
│ │ │ │ ┌─ day of week (*)
│ │ │ │ │
37 8 * * *
```

**Trigger:** Runs daily at 08:37 UTC (01:37 PM Pakistan Time)

---

### 3. React App Deployment Workflow

**Purpose:** Automatically build and deploy React/Vite app on push

```yaml
name: Deploy Vite React App to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install
        working-directory: "Deploy React app on Github pages"

      - name: Build project
        run: npm run build
        working-directory: "Deploy React app on Github pages"

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: "Deploy React app on Github pages/dist"
```

**Key Features:**
- Checks out code
- Sets up Node.js v18
- Installs dependencies
- Builds the project
- Deploys to GitHub Pages

---

### 4. Artifacts & Caching

**Cache:**
- Stores dependencies that don't change frequently
- Makes builds faster
- Example: `node_modules` folder

**Artifacts:**
- Stores build outputs
- Allows downloading build files
- Useful for reviewing production builds

**Benefits:**
- Faster workflow execution
- Reduced build times
- Ability to inspect build outputs

---

### 5. Job Concurrency - Cancel Previous Builds

**Purpose:** Cancel in-progress builds when new commit is pushed

```yaml
name: React Build CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

concurrency:
  group: react-build-${{ github.ref }}
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm install

      - name: Build React app
        run: npm run build
```

**Key Feature:**
- `cancel-in-progress: true` cancels older builds
- Only the latest commit's build runs
- Saves CI/CD minutes
- Faster feedback loop

---

## SSH Key Authentication

**Purpose:** Secure authentication with GitHub without using passwords

**Use Case:** Essential when using multiple GitHub accounts on same machine

### Generate SSH Key:
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

### Steps After Generation:
1. Locate generated SSH key (usually in `~/.ssh/`)
2. Copy public key content (`.pub` file)
3. Add to GitHub:
   - Go to GitHub Settings
   - Navigate to SSH and GPG keys
   - Click "New SSH key"
   - Paste public key content
4. Test connection: `ssh -T git@github.com`

**Benefits:**
- No password required for Git operations
- More secure than HTTPS
- Required for multiple GitHub accounts
- Works seamlessly with Git commands

---

## Summary

This comprehensive guide covers all essential Git and GitHub operations including:
- ✅ Version control commands (restore, revert, reset)
- ✅ Branch management and workflows
- ✅ Configuration and aliases
- ✅ Collaboration features (fork, pull request)
- ✅ Advanced features (stash, amend, diff)
- ✅ GitHub Actions for CI/CD automation
- ✅ Deployment strategies
- ✅ SSH authentication for security

**Best Practices:**
- Commit frequently with meaningful messages
- Use branches for new features
- Pull before pushing to avoid conflicts
- Use SSH keys for secure authentication
- Leverage GitHub Actions for automation
- Keep commit history clean with amend and revert
- Use stash for temporary work storage

---

*Document created from DevOps course instructions - January 2026*" 
