@echo off
echo ============================================
echo   JAYASUBRAMANI Portfolio - Local Test Server
echo ============================================
echo.
echo Starting server at http://localhost:8000
echo Press CTRL+C to stop.
echo.
python -m http.server 8000
pause
