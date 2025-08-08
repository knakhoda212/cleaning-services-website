# Deploying to Netlify

This guide will help you deploy your cleaning services website to Netlify.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- Your project code pushed to a Git repository

## Deployment Steps

### 1. Prepare Your Repository

Make sure your project is pushed to a Git repository (GitHub, GitLab, or Bitbucket).

### 2. Deploy to Netlify

#### Option A: Deploy via Netlify UI (Recommended)

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Choose your Git provider (GitHub, GitLab, or Bitbucket)
4. Select your repository
5. Configure the build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
6. Click "Deploy site"

#### Option B: Deploy via Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Deploy your site:
   ```bash
   netlify deploy --prod --dir=dist/public
   ```

### 3. Configure Form Handling

After deployment, Netlify will automatically detect your form. To configure form notifications:

1. Go to your Netlify dashboard
2. Navigate to your site
3. Go to "Forms" tab
4. Configure notifications (email, webhook, etc.)

### 4. Custom Domain (Optional)

1. In your Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the instructions to configure your domain

## Build Configuration

The project is configured with:
- **Build command**: `npm run build`
- **Publish directory**: `dist/public`
- **Node version**: 18+ (automatically detected)

## Form Configuration

The booking form uses Netlify Forms with:
- Form name: `booking-form`
- Honeypot protection enabled
- Automatic spam filtering

## Environment Variables

No environment variables are required for the static build.

## Troubleshooting

### Build Fails
- Check that Node.js version is 18+
- Ensure all dependencies are installed
- Verify the build command is correct

### Form Not Working
- Check that the form has `data-netlify="true"` attribute
- Verify the form name matches in the hidden input
- Check Netlify Forms tab for submissions

### Assets Not Loading
- Ensure the `netlify.toml` file is in the root directory
- Check that the redirect rule is working: `/*` → `/index.html`

## Support

If you encounter issues:
1. Check the Netlify build logs
2. Verify your repository is public or Netlify has access
3. Contact Netlify support if needed 