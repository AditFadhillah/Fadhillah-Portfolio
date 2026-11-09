# Fadhillah Portfolio

Personal portfolio website for myself, built with React and Vite. It showcases an about section, skills, selected projects (including bachelor and master's projects), and a contact section, and is deployed to GitHub Pages.

## Tech stack

- React + Vite for the app and dev tooling
- React Router for page/project navigation
- Tailwind CSS for styling
- Radix UI and lucide-react for UI components and icons

## CI/CD

CI/CD stands for **Continuous Integration** and **Continuous Deployment**. It means that every change pushed to the repository is automatically checked and published, instead of being built and uploaded by hand.

- **Continuous Integration (CI):** on every push and pull request, GitHub Actions installs the dependencies and builds the site. If the build breaks, you find out before the change reaches the live site.
- **Continuous Deployment (CD):** when a push lands on `main` and the build succeeds, the built files in `dist/` are published to GitHub Pages automatically.

The pipeline is defined in [deploy.yml](.github/workflows/deploy.yml) and has two jobs:

| Job | Runs on | What it does |
|-----|---------|--------------|
| `lint` | every push to `main` and every pull request | Installs dependencies with `npm ci` and runs `npm run lint` |
| `build` | every push to `main` and every pull request, after `lint` succeeds | Installs dependencies with `npm ci`, runs `npm run build`, and uploads `dist/` as the Pages artifact |
| `deploy` | only pushes to `main`, after `build` succeeds | Publishes the uploaded artifact to GitHub Pages |

**Before vs. now:** previously, the site was deployed with a manual `npm run deploy` script (using the `gh-pages` package) that you ran from your own machine. Now GitHub Actions does the build and deploy on its own, from a clean environment, every time you push. The manual script was removed.

**Day-to-day workflow:**

1. Make a change locally and check it with `npm run dev`.
2. Commit and push to `main`.
3. Open the **Actions** tab on GitHub to watch the `build` and `deploy` jobs.
4. When the deploy job is green, the live site is updated.

Pull requests only run the `build` job, so you can check that a change builds before merging it.

## Development

This project uses two official Vite plugins for React, providing HMR and ESLint rules:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
