# Coffee Shop Menu Website

A full-stack Next.js application for displaying and managing a coffee shop menu with a public menu page and admin panel.

## Features

- **Public Menu Page**: Browse coffee items organized by category with beautiful cards
- **Admin Panel**: Add, edit, and delete menu items
- **Category Filtering**: Filter menu items by category
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Modern Tech Stack**: Built with Next.js 14, React, TypeScript, and Tailwind CSS

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── menu/
│   │       ├── route.ts              # GET/POST endpoints for menu items
│   │       └── [id]/route.ts         # GET/PUT/DELETE endpoints for individual items
│   ├── admin/
│   │   └── page.tsx                  # Admin panel page
│   ├── menu/
│   │   └── page.tsx                  # Public menu page
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Home page
│   └── globals.css                   # Global styles
├── types/
│   └── menu.ts                       # TypeScript type definitions
└── components/                        # Reusable components (future)

public/                                # Static assets

Configuration Files:
- next.config.js                      # Next.js configuration
- tailwind.config.ts                  # Tailwind CSS configuration
- tsconfig.json                       # TypeScript configuration
- package.json                        # Project dependencies
- .eslintrc.json                      # ESLint configuration
- postcss.config.js                   # PostCSS configuration
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Pages

- **Home** (`/`) - Landing page with welcome message
- **Menu** (`/menu`) - Public menu display with category filtering
- **Admin** (`/admin`) - Management panel to add, edit, and delete menu items

## API Endpoints

### GET /api/menu
Fetch all menu items

### POST /api/menu
Create a new menu item
```json
{
  "name": "Cappuccino",
  "description": "Espresso with steamed milk",
  "price": 4.5,
  "category": "Milk Coffee"
}
```

### GET /api/menu/[id]
Fetch a specific menu item

### PUT /api/menu/[id]
Update a menu item

### DELETE /api/menu/[id]
Delete a menu item

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 18** - UI library

## Database

Currently, the application uses in-memory storage for menu items. For production, integrate with a database like:
- PostgreSQL
- MongoDB
- Prisma ORM

## Future Enhancements

- Database integration
- Authentication for admin panel
- Image uploads for menu items
- Order management system
- Payment integration
- User reviews and ratings
- Search functionality

## License

This project is open source and available for personal use.
