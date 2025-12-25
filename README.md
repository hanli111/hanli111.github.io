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
npm start
```

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

