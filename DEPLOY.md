# C-Mastery Deployment Guide

## Prerequisites
- Node.js 18+ installed
- Git installed
- PostgreSQL database (recommend Neon.tech for free hosting)
- GitHub account

## 1. Setup GitHub Repository

```bash
# Initialize git if not already done
git init

# Add all files
git add .
git commit -m "feat: complete C-Mastery platform with 30 problems and animations"

# Create new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/c-mastery.git
git branch -M main
git push -u origin main
```

## 2. Environment Variables

Create a `.env` file with:

```env
# Database
DATABASE_URL="postgresql://USER:PASSWORD@HOST/DB?sslmode=require"

# Judge0 API (optional - uses mock if not set)
JUDGE0_API_URL="https://judge0-ce.p.rapidapi.com"
JUDGE0_API_KEY="your-rapidapi-key-here"
```

### Get Free PostgreSQL Database (Neon.tech)
1. Go to https://neon.tech
2. Sign up for free account
3. Create new project
4. Copy connection string to `.env` as `DATABASE_URL`

### Get Judge0 API Key (Optional)
1. Go to https://rapidapi.com/judge0-official/api/judge0-ce
2. Subscribe to free tier (50 requests/day)
3. Copy API key to `.env` as `JUDGE0_API_KEY`

## 3. Deploy to Vercel

### Option A: Via GitHub (Recommended)
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Add environment variables:
   - `DATABASE_URL`
   - `JUDGE0_API_KEY` (optional)
5. Click "Deploy"

### Option B: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

## 4. Database Setup

After deploying:

```bash
# Push schema to database
npx prisma db push

# Seed with 30 problems
npx prisma db seed
```

Or use Vercel CLI:
```bash
vercel env pull .env.local
npx prisma db push
npx prisma db seed
```

## 5. Verify Deployment

1. Visit your Vercel URL
2. Check homepage loads with animations
3. Click on a problem
4. Test "Chạy thử" button
5. Verify tabs (Đề bài, Lý thuyết, Gợi ý for难度 >= 5)

## Production Checklist

- [ ] Database connected and seeded
- [ ] Environment variables set in Vercel
- [ ] Homepage animations working
- [ ] Problem list displays all 30 problems
- [ ] Code editor loads correctly
- [ ] Test cases run (mock or real Judge0)
- [ ] Submit button enabled/disabled correctly
- [ ] Tabs switch properly
- [ ] Back button navigates to homepage

## Custom Domain (Optional)

1. In Vercel dashboard, go to Settings > Domains
2. Add your domain
3. Update DNS settings as instructed

## Monitoring & Analytics

Consider adding:
- Google Analytics
- Sentry for error tracking
- Vercel Analytics (built-in)

## Troubleshooting

### Database Connection Errors
- Check `DATABASE_URL` is correct
- Ensure database allows connections from Vercel IPs
- Verify SSL mode is set correctly

### Build Failures
- Check `package.json` has all dependencies
- Verify Node version (18+)
- Review build logs in Vercel

### Judge0 Not Working
- Verify API key is valid
- Check API quota (free tier: 50/day)
- System falls back to mock responses if API fails

## Updates & Maintenance

To update:
```bash
git add .
git commit -m "update: description"
git push
```

Vercel auto-deploys on push to main branch.

## Performance Tips

1. **Enable caching** - Vercel automatically caches static assets
2. **Optimize images** - Use Next.js Image component
3. **Bundle size** - Monitor with `npm run build`
4. **Database indexing** - Add indexes for frequently queried fields

## Support

Issues? Check:
- Vercel deployment logs
- Browser console for errors
- Database connection status
- API quota limits
