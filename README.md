# 🌿 UW-Madison Campus Sustainability Dashboard

This is a student-built sustainability dashboard for the University of Wisconsin-Madison. It provides visualizations and analytics for electricity usage across residence halls, helping the campus community make more energy-efficient choices.

## 🚀 Features

- 📊 **Energy Usage Visualization:** Dynamic charts showing monthly KWH consumption.
- 🧠 **Insights & Stats:** Metrics like cost per KWH, KWH per sq ft, and energy usage per person.
- 🏆 **Leaderboards:** See which buildings are consuming the most energy.
- 🧩 **Modular Components:** Built with reusable components and clean UI patterns.
- 🕓 **Date Range Selector:** Choose custom time periods for analysis.
- 🌎 **Partner Highlight:** Showcases collaboration with UW offices like Sustainability and Housing.
- 📡 **Live API Integration:** Data pulled from AWS Lambda/DynamoDB backend.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (React) with Tailwind CSS and Framer Motion
- **Charts:** Recharts + custom animated components
- **Icons:** Lucide-react
- **Backend:** AWS Lambda functions (REST API)
- **Database:** DynamoDB
- **Deployment:** Vercel (or your preferred platform)

---

## 📁 Project Structure (Frontend)

```bash
/components
  ├─ ui/                  # UI kit components (card, button, select, etc.)
  ├─ DatePickerWithRange  # Custom date picker component
  └─ PieGraph             # Recharts-based energy pie chart
/pages
  ├─ index.tsx            # Main dashboard
  └─ about.tsx            # About page with mission & methodology
/styles
  └─ globals.css          # Tailwind styles
```

---

## 🌐 API Endpoints

- `/list` – Returns list of all residence halls (name + id)
- `/dorm?dorm={id}&startTime={mm/yyyy}&endTime={mm/yyyy}` – Returns usage and summary stats for one or all dorms

### Sample Response from `/dorm`
```json
{
  "dataItems": [
    { "month": "01/2025", "usageKWH": 12000, "averageUsagePerDorm": 9500 },
    ...
  ],
  "summary": {
    "totalUsage": { "value": 45000, "label": "Total Usage", "change": 12, "direction": "up" },
    "totalCost": { "value": 5400, "label": "Total Cost", "change": 5, "direction": "down" },
    ...
  }
}
```

---

## 🧪 Development Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-org/uw-energy-dashboard.git
   cd uw-energy-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start dev server:**
   ```bash
   npm run dev
   ```

4. **Environment Config (optional):**
   You can create a `.env.local` for API keys or local endpoints.

---

## 📈 Future Improvements

- Real-time data refresh with WebSockets
- Custom analytics for dorm managers
- Integration with water/heat metrics
- Dark mode toggle

---

## 🧑‍💻 Made by Students

This dashboard was created by the **DSSD Madison** student team in collaboration with:
- UW-Madison Office of Sustainability
- UW Housing
- UW-Madison Facilities Planning & Management

---

## 📬 Feedback

If you're a student, faculty, or staff member with ideas or feedback, feel free to reach out or contribute!
