# Personal Website

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Contact Form**: Functional contact form powered by EmailJS
- **Sections**:
  - Hero section with introduction
  - About section with skills and education
  - Experience section with work history
  - Projects showcase
  - Contact form and information

## Getting Started

First, install the dependencies:

```bash
npm install
```

### EmailJS Setup

The contact form uses EmailJS to send emails. To set it up:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an Email Service (Gmail, Outlook, etc.) in the EmailJS dashboard
3. Create an Email Template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_email}}` - Recipient email (your email)
4. Get your credentials from the EmailJS dashboard:
   - Public Key (Account > API Keys)
   - Service ID (Email Services)
   - Template ID (Email Templates)
5. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
```

This will create a static export in the `out` directory, ready for deployment.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

2. **Add EmailJS Secrets:**
   - Go to your repository settings
   - Navigate to "Secrets and variables" > "Actions"
   - Add the following secrets:
     - `EMAILJS_PUBLIC_KEY` - Your EmailJS public key
     - `EMAILJS_SERVICE_ID` - Your EmailJS service ID
     - `EMAILJS_TEMPLATE_ID` - Your EmailJS template ID

3. **Deploy:**
   - Push to the `main` branch (or manually trigger the workflow)
   - GitHub Actions will automatically build and deploy your site
   - Your site will be available at `https://hanli111.github.io`

The workflow will automatically rebuild and redeploy whenever you push changes to the main branch.

## Tech Stack

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **EmailJS**: Email service for contact form
- **React**: UI library

## Project Structure

```
personal-website/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── public/
└── package.json
```

## Customization

You can customize the website by:

1. Updating the content in each component file
2. Modifying colors in `tailwind.config.js`
3. Adjusting animations in component files
4. Adding new sections as needed

## License

MIT

