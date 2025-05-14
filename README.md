# Profile Map Application

A modern React application for managing and viewing user profiles with interactive map integration. Built with React, Material-UI, Mapbox, and Tailwind CSS.

## Features

- 🗺️ Interactive map integration with Mapbox
- 👥 User profile management with CRUD operations
- 🎨 Modern, responsive UI design
- 🔍 Profile filtering and search functionality
- 📱 Mobile-friendly interface
- ✨ Smooth animations and transitions
- 🎯 Admin dashboard for profile management

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- A Mapbox account and API key

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mapapp
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Mapbox API key:
```env
REACT_APP_MAPBOX_TOKEN=your_mapbox_token_here
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Project Structure

```
src/
├── components/         # React components
│   ├── Layout.jsx     # Main layout component
│   ├── ProfileList.jsx # Profile grid view
│   ├── ProfileDetails.jsx # Individual profile view
│   ├── AdminDashboard.jsx # Admin interface
│   └── NotFound.jsx   # 404 page
├── App.jsx            # Main application component
└── index.css         # Global styles and Tailwind config
```

## Technology Stack

- **Frontend Framework**: React
- **UI Components**: Material-UI
- **Styling**: Tailwind CSS
- **Maps**: Mapbox GL JS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Package Manager**: npm

## Design System

### Colors
- Soft Blue: #4A90E2
- Mint Green: #7ED6C1
- Warm Yellow: #FBC531
- Light Gray: #F5F6FA
- Coral: #FF6B6B

### Typography
- Headings: Poppins
- Body: Inter

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Material-UI for the component library
- Mapbox for the mapping functionality
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for the animations
