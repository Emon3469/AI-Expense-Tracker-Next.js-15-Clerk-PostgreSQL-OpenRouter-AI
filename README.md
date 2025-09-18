# AI Expense Tracker

A modern, AI-powered expense tracking application built with Next.js, featuring intelligent categorization, insights, and comprehensive expense management capabilities.

<img width="1098" height="897" alt="project4" src="https://github.com/user-attachments/assets/9b91da94-c440-4bcd-b519-0899648b2ea1" />
<img width="1092" height="680" alt="project4_a" src="https://github.com/user-attachments/assets/39cfb7c3-1a24-4040-85b4-f4e71c603911" />


## 🚀 Features

- **AI-Powered Insights**: Get intelligent analysis of your spending patterns
- **Smart Categorization**: Automatic expense categorization suggestions
- **User Authentication**: Secure authentication powered by Clerk
- **Data Visualization**: Interactive charts and graphs for expense tracking
- **Real-time Updates**: Live expense tracking and updates
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Database Integration**: PostgreSQL database with Prisma ORM

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Database**: PostgreSQL with Prisma ORM
- **AI Integration**: OpenRouter API
- **Charts**: Chart.js with React Chart.js 2
- **Icons**: Lucide React
- **Containerization**: Docker & Docker Compose

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

## 🐳 Docker Setup (Recommended)

### Quick Start with Docker Compose

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd ai-expense-tracker-v2
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit the `.env` file with your actual values:
   ```env
   # Database (automatically configured for Docker)
   DATABASE_URL=postgresql://postgres:postgres@postgres:5432/neondb?sslmode=disable
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   
   # OpenRouter API
   OPENROUTER_API_KEY=your_openrouter_api_key
   
   # App URL
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

3. **Run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

4. **Access the application**
   - Open [http://localhost:3000](http://localhost:3000) in your browser
   - The PostgreSQL database will be available on port 5432

### Docker Commands

- **Start services**: `docker-compose up -d`
- **Stop services**: `docker-compose down`
- **View logs**: `docker-compose logs -f`
- **Rebuild and start**: `docker-compose up --build`
- **Run database migrations**: `docker-compose exec app npx prisma migrate deploy`

## 💻 Local Development Setup

If you prefer to run the application locally without Docker:

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up the database**
   ```bash
   npx prisma migrate deploy
   npx prisma generate
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open the application**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ai-expense-tracker-v2/
├── app/                    # Next.js app directory
│   ├── actions/           # Server actions
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── sign-in/           # Authentication pages
│   └── sign-up/
├── components/            # React components
├── contexts/              # React contexts
├── lib/                   # Utility libraries
├── prisma/               # Database schema and migrations
├── public/               # Static assets
├── types/                # TypeScript type definitions
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Multi-service Docker setup
└── .dockerignore         # Docker ignore file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key | Yes |
| `CLERK_SECRET_KEY` | Clerk secret key | Yes |
| `OPENROUTER_API_KEY` | OpenRouter API key for AI features | Yes |
| `NEXT_PUBLIC_APP_URL` | Application URL | Yes |

## 🚀 Deployment

### Vercel Deployment (Recommended)

Vercel is the easiest way to deploy your Next.js application:

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Add deployment configurations"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click "New Project" and import your repository
   - Vercel will automatically detect it's a Next.js project

3. **Configure Environment Variables**
   In your Vercel dashboard, add these environment variables:
   ```
   DATABASE_URL=your_postgresql_connection_string
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   OPENROUTER_API_KEY=your_openrouter_api_key
   NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
   ```

4. **Database Setup**
   - Use [Neon](https://neon.tech), [Supabase](https://supabase.com), or [PlanetScale](https://planetscale.com) for PostgreSQL
   - Run migrations: `npx prisma migrate deploy` (or use Vercel's build command)

### Render Deployment

Deploy on Render with built-in PostgreSQL:

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Add deployment configurations"
   git push origin main
   ```

2. **Deploy to Render**
   - Go to [render.com](https://render.com) and sign in with GitHub
   - Click "New +" → "Blueprint"
   - Connect your repository and use the `render.yaml` configuration

3. **Configure Environment Variables**
   In your Render dashboard, set these environment variables:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   OPENROUTER_API_KEY=your_openrouter_api_key
   NEXT_PUBLIC_APP_URL=https://your-app.onrender.com
   ```

4. **Database**
   - The PostgreSQL database is automatically created via `render.yaml`
   - Migrations run automatically on deployment

### Docker Deployment

1. **Build the Docker image**
   ```bash
   docker build -t ai-expense-tracker .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 --env-file .env ai-expense-tracker
   ```

### Production Deployment Options

For production deployment, consider using:
- **[Vercel](https://vercel.com)** - Recommended for Next.js applications
- **[Render](https://render.com)** - Great for full-stack applications with database
- **[Railway](https://railway.app)** - Simple deployment with database support
- **[DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)** - Scalable cloud deployment
- Any cloud provider with Docker support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-username/ai-expense-tracker-v2/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about your environment and the issue

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) for the amazing React framework
- [Clerk](https://clerk.com) for authentication services
- [Prisma](https://prisma.io) for database management
- [OpenRouter](https://openrouter.ai) for AI capabilities
- [Tailwind CSS](https://tailwindcss.com) for styling
