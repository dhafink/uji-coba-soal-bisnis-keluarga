@echo off
cd /d "%~dp0"
echo ==========================================================
echo   Kuis UTS Manajemen Bisnis Keluarga
echo   Buka: http://localhost:8765
echo   Tutup jendela ini untuk menghentikan server.
echo ==========================================================
start "" cmd /c "timeout /t 2 >nul & start http://localhost:8765"
where python >nul 2>nul && (python -m http.server 8765) || (py -m http.server 8765)
