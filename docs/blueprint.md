# **App Name**: AccrualFlow

## Core Features:

- Role-Based Access Control: Secure access for admins, employees, and clients, each with designated permissions.
- CSV Data Import: Import customer data via CSV with validation and error handling, storing valid entries in a MySQL database using Prisma ORM, automatically upserting matched data.
- Manual Data Entry: Allow employees to add manual data such as limits, performance bonuses, and notes via a web panel.
- Formula Engine: Utilize a JSON-based formula engine for versioning, variable definitions, and automated accrual calculations (e.g., revenue * 0.02 - returns * 0.5).
- Accrual Calculation Module: Calculate gross, deduction, and net accruals, with the ability to add performance bonuses.
- Admin Panel: Manage users, customers, contracts, formula versions, and generate reports through the admin panel.
- Customer Panel: Enable customers to view contracts, download/upload CSV files, and access periodic reports.

## Style Guidelines:

- Primary color: Deep blue (#3F51B5) to convey trust and professionalism.
- Background color: Light gray (#F5F5F5), almost white, for a clean and modern feel.
- Accent color: Soft orange (#FFAB40) to highlight key actions and elements.
- Headline font: 'Poppins', a geometric sans-serif, for headings and titles.
- Body font: 'PT Sans', a humanist sans-serif, for readable body text.
- Use simple, consistent icons for navigation and actions.
- Maintain a clear, intuitive layout for easy navigation and data management.
- Incorporate subtle transitions and loading animations to enhance user experience.