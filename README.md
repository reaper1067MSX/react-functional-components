# React Functional Components

A modern React application built with TypeScript and Vite, featuring CI/CD pipeline with GitHub Actions and automatic deployment to GitHub Pages.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Development](#development)
  - [Available Scripts](#available-scripts)
  - [ESLint Configuration](#eslint-configuration)
- [Deployment](#deployment)
  - [GitHub Pages Configuration](#github-pages-configuration)
- [CI/CD Pipeline](#cicd-pipeline)
  - [Workflow Configuration](#workflow-configuration)
  - [Pipeline Steps](#pipeline-steps)

## Features

- React 18 with TypeScript support
- Vite build tool for fast development and optimized production builds
- GitHub Actions CI/CD pipeline
- Automated deployment to GitHub Pages
- ESLint configuration for code quality
- Source maps for better debugging experience

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/reaper1067MSX/react-functional-components.git
   cd react-functional-components
   ```

2. Make sure you have Node.js 18.0.0 or higher installed:
   ```sh
   node --version
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

### Package Manager Lock Files

This project uses npm as the package manager. The lock file (`package-lock.json`) ensures consistent installations across environments. 

- Do not delete the lock file
- If using another package manager (yarn, pnpm), convert the lock file appropriately
- Commit lock file changes to version control

## Development

### Available Scripts

- **Development server**:
  ```sh
  npm run dev
  ```
  Runs the TypeScript compiler and starts the Vite development server with HMR.

- **Linting**:
  ```sh
  npm run lint
  ```
  Runs ESLint to check for code quality issues.

- **Production build**:
  ```sh
  npm run build
  ```
  Compiles TypeScript and builds the project for production.

- **Preview production build**:
  ```sh
  npm run preview
  ```
  Previews the production build locally.

### ESLint Configuration

This project uses ESLint for code quality and consistent style. The current configuration supports both JavaScript and TypeScript with React-specific rules.

#### Current Configuration

The ESLint configuration includes:

```js
// eslint.config.js
import { defineConfig } from 'eslint-define-config';
import tseslint from 'typescript-eslint';

export default defineConfig({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['react-refresh'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      project: ['./tsconfig.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  }
});
```

#### Recommended Plugins

For enhanced linting, consider adding these plugins:

```sh
npm install --save-dev eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-react-refresh
```

You can also enhance the configuration with accessibility rules:

```js
// Add to the extends array
'plugin:jsx-a11y/recommended',
```

## Deployment

### GitHub Pages Configuration

The project is configured for automatic deployment to GitHub Pages. The configuration in `vite.config.ts` includes:

```typescript
// Base URL configuration for GitHub Pages deployment
base: '/react-functional-components/',

// Build configuration
build: {
  // Generate source maps for better debugging experience
  sourcemap: true,
  
  // Output directory (default is 'dist')
  outDir: 'dist',
  
  // Clean the output directory before build
  emptyOutDir: true,
}
```

After deployment, the application is available at:
https://reaper1067msx.github.io/react-functional-components/

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment.

### Workflow Configuration

The CI/CD pipeline is defined in `.github/workflows/deploy.yml` and is triggered on:
- Push to the `main` branch
- Pull requests to the `main` branch
- Manual trigger via the GitHub Actions interface or GitHub CLI

### Pipeline Steps

The workflow consists of two main jobs:

**1. Build and Test**:
- Checks out the code
- Sets up Node.js environment
- Installs dependencies
- Lints the code
- Builds the project
- Uploads build artifacts

**2. Deploy to GitHub Pages**:
- Only runs on push events to the `main` branch
- Downloads the build artifacts
- Deploys to GitHub Pages using [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action)

To view the status of workflow runs, go to the "Actions" tab in the GitHub repository.

### Setup and Configuration Guide

This section provides detailed instructions on how to set up and customize the CI/CD pipeline and GitHub Pages deployment.

#### Enabling GitHub Pages

To enable GitHub Pages for your repository:

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages** (under Code and automation)
3. In the **Build and deployment** section:
   - Set **Source** to "GitHub Actions"
4. Save the changes

#### GitHub CLI Commands for CI/CD Management

If you have [GitHub CLI](https://cli.github.com/) installed, you can use these commands to manage and monitor your workflows:

```sh
# List recent workflow runs
gh run list -L 5

# View details of a specific workflow run
gh run view <run-id>

# Watch a workflow run in real-time
gh run watch <run-id>

# View logs of a failed workflow
gh run view <run-id> --log-failed

# Rerun a failed workflow
gh run rerun <run-id>

# Manually trigger the deployment workflow
gh workflow run "Build and Deploy" --ref main
```

#### Manually Triggering Deployments

You can manually trigger the deployment process in several ways:

1. **Using GitHub CLI**:
   ```sh
   gh workflow run "Build and Deploy" --ref main
   ```

2. **Using GitHub Web Interface**:
   - Go to your repository on GitHub
   - Navigate to the **Actions** tab
   - Select the **Build and Deploy** workflow from the left sidebar
   - Click the **Run workflow** button
   - Select the **main** branch and click **Run workflow**

Manual deployments are useful when:
- You need to redeploy without code changes
- You're troubleshooting deployment issues
- The automatic deployment failed for some reason

#### Customizing the Workflow

The workflow is defined in `.github/workflows/deploy.yml`. Here are some common customizations:

1. **Changing the Node.js version**:
   ```yaml
   - name: Setup Node.js
     uses: actions/setup-node@v4
     with:
       node-version: '20' # Change to your preferred version
   ```

2. **Modifying build commands**:
   ```yaml
   - name: Build project
     run: npm run build # Change to your build command
   ```

3. **Changing the deployment branch**:
   ```yaml
   - name: Deploy to GitHub Pages
     uses: JamesIves/github-pages-deploy-action@v4
     with:
       folder: dist
       branch: gh-pages # Change to your preferred branch
   ```

#### Troubleshooting Common Issues

1. **Deployment Failure**:
   - Check if GitHub Pages is enabled in repository settings
   - Ensure the workflow has proper permissions (contents: write)
   - Verify that the build is generating files in the correct folder

2. **Build Failure**:
   - Check for syntax errors in your code
   - Ensure all dependencies are properly installed
   - Verify that your build scripts are correct

3. **Base URL Issues**:
   - If your site has 404 errors or missing assets, check that the base URL in `vite.config.ts` matches your repository name

4. **Blank Page After Deployment**:
   - Check the browser console for errors (F12 in most browsers)
   - Verify that the `gh-pages` branch contains the expected files with `git checkout gh-pages`
   - Clear your browser cache or try in incognito/private mode
   - Check that the assets paths in the HTML file include the correct base URL
   - Try a manual deployment to refresh all files

#### Viewing Deployment Status

To check if your site has been deployed:

1. Go to the **Actions** tab in your repository
2. Click on the latest workflow run
3. If successful, you should see all checkmarks
4. Your site will be available at: `https://<username>.github.io/<repository-name>/`

You can also see deployment history and details in the **Environments** section of your repository.

#### Forcing a Clean Deployment

If you're experiencing issues with your deployed site, you can force a clean deployment:

1. **Delete and recreate the gh-pages branch**:
   ```sh
   # Delete the gh-pages branch locally and remotely
   git branch -D gh-pages # Local deletion (if exists)
   git push origin --delete gh-pages # Remote deletion

   # Then trigger a manual deployment
   gh workflow run "Build and Deploy" --ref main
   ```

2. **Use the single-commit option**:
   The workflow is configured with `single-commit: true` which ensures the deployment branch contains only a single commit with the latest files, reducing potential conflicts.
