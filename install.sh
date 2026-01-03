#!/bin/bash

# Anmar Portfolio - Quick Installation Script
# This script will set up your portfolio website

echo "🎨 Anmar Portfolio - Installation Script"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed."
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🎉 Installation complete!"
echo ""
echo "Next steps:"
echo "1. Edit lib/portfolio-data.ts to add your portfolio items"
echo "2. Update translations in translations/ folder"
echo "3. Add your images to public/images/"
echo "4. Run 'npm run dev' to start development server"
echo ""
echo "📚 Documentation:"
echo "- README.md - General overview"
echo "- IMPLEMENTATION_GUIDE.md - Detailed customization guide"
echo "- DEPLOYMENT_GUIDE.md - Deployment instructions"
echo ""
echo "🚀 To start development:"
echo "   npm run dev"
echo ""
echo "🔨 To build for production:"
echo "   npm run build"
echo ""
