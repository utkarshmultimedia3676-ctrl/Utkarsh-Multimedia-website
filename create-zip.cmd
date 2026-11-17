@echo off
echo Creating ZIP archive...
powershell -Command "Compress-Archive -Path '*' -DestinationPath 'utkarsh-multimedia-website.zip' -Force"
echo.
echo ✅ Created: utkarsh-multimedia-website.zip
echo 📁 Location: %CD%\utkarsh-multimedia-website.zip
echo.
echo To use:
echo 1. Download the ZIP file
echo 2. Extract it
echo 3. Run: npm install && npm run dev
pause