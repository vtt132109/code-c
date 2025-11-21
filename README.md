# C-Mastery: Interactive C Learning Platform

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Database Setup**:
   - Ensure you have PostgreSQL running.
   - Create a `.env` file in the root directory with your database connection string:
     ```env
     DATABASE_URL="postgresql://user:password@localhost:5432/c_mastery?schema=public"
     ```
   - Run migrations:
     ```bash
     npx prisma db push
     ```
   - Seed the database:
     ```bash
     npx prisma db seed
     ```

3. **Uncomment Database Code**:
   - Since the project was scaffolded without a live database, some Prisma calls are commented out to ensure the build passes.
   - Uncomment the Prisma instantiation and queries in:
     - `src/app/page.tsx`
     - `src/app/learn/[moduleId]/[problemId]/page.tsx`
     - `src/app/actions.ts`

4. **Run Development Server**:
   ```bash
   npm run dev
   ```

## Features
- **Interactive IDE**: Monaco Editor with syntax highlighting.
- **Curriculum**: Structured modules and lessons.
- **Code Execution**: Integration with Judge0 API.
- **Real-time Feedback**: Instant test case validation.
