# 📈 FX Trade Journal & Execution Calendar

A professional, web-based Progressive Web App (PWA) designed for forex traders to log positions, track execution performance, manage risk metrics, and review chart setups via an interactive calendar map.

---

## 🚀 Features

* **📊 Execution Dashboard:** Real-time KPI tracking for Total Net P/L, Win Rate, Profit Factor, and Average Risk-to-Reward (R:R) ratios.
* **📅 Monthly Execution Calendar:** Visual heat-map of trade executions mapped across days, color-coded by daily profit/loss.
* **🖼️ Market Structure Image Uploads:** Attach and preview chart screenshots directly in your trade logs and calendar view using local Base64 encoding.
* **📱 Progressive Web App (PWA):** Fully installable as a standalone application on desktop and mobile devices with offline caching support via Service Workers.
* **🔄 Live Tab Synchronization:** Instant multi-tab updates using `localStorage` event listeners.
* **📥 CSV Data Export:** Export your complete trading history straight to a spreadsheet.

---

## 🛠️ Built With

* **HTML5 & CSS3** (Structure & Layout)
* **Tailwind CSS CDN** (Modern utility-first styling)
* **JavaScript (ES6+)** (Application logic & state management)
* **Lucide Icons** (UI iconography)
* **Web APIs** (`localStorage`, `FileReader`, `Service Workers`)

---

## 📁 Project Structure

```text
paull/
├── PAUL TRADE J.html   # Main Dashboard & Trade Logging Terminal
├── calender.html       # Monthly Execution Calendar View
├── manifest.json       # PWA Application Manifest & Metadata
├── sw.js               # Service Worker for Caching & Offline Support
├── offline.html        # Offline Fallback View
└── LOGO.png            # Application Icon/Logo
