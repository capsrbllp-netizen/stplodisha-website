# Siba Toughened Private Limited — Website

Static site (HTML/CSS/JS) with a Vercel serverless function (`api/contact.js`) that emails contact-form enquiries to `sibatoughened@gmail.com`.

## Deploy steps (no coding required)

1. **Create a Gmail App Password** (so the contact form can send mail through your Gmail account):
   - Go to https://myaccount.google.com/security
   - Turn on 2-Step Verification if not already on
   - Go to "App Passwords" → create one for "Mail" → copy the 16-character password

2. **Push this folder to GitHub**:
   - Create a new repository on github.com (e.g. `stplodisha-website`)
   - Upload all files in this folder to that repository (GitHub's "Add file → Upload files" works fine, no command line needed)

3. **Import into Vercel**:
   - Go to vercel.com → sign in with GitHub
   - "Add New Project" → select the `stplodisha-website` repo → Deploy

4. **Add environment variables in Vercel** (Project → Settings → Environment Variables):
   - `GMAIL_USER` = the Gmail address sending the mail (can be `sibatoughened@gmail.com` itself)
   - `GMAIL_APP_PASSWORD` = the 16-character app password from step 1
   - Redeploy after adding these

5. **Connect your domain (stplodisha.com)**:
   - Vercel Project → Settings → Domains → add `stplodisha.com`
   - Vercel will show 1–2 DNS records (A record / CNAME) to add
   - Go to GoDaddy → DNS settings for stplodisha.com → add those records
   - Wait up to a few hours for it to go live
