# Project Catalog Details

This file contains the complete information, descriptions, feature matrices, and repository URLs for all projects listed in this web development portfolio.

---

## 1. Easy School — Multi-tenant School Management System

- **Live URL**: [easyschool.live](https://easyschool.live)
- **Client Repository**: [GitHub - school-clint](https://github.com/menajpal-design/school-clint.git)
- **Server Repository**: [GitHub - school-server](https://github.com/menajpal-design/school-server.git)
- **Tech Stack**: Next.js, React, Node.js, TypeScript, Express.js, MongoDB, PDFKit, Tailwind CSS
- **Description**: A robust, multi-tenant academic ERP SaaS platform designed to centralize administrative, financial, and educational operations. The system isolates data per tenant (school subdomain) and features integrated payment billing, automatic report card generation, and scheduled SMS notifications.
- **Key Features**:
  - **Multi-Tenant Routing**: Dynamically resolves school tenants based on subdomains with total database and data schema isolation.
  - **Role-Based Access Control (RBAC)**: Distinct views and permission configurations for Administrators, Teachers, Accountants, Guardians, and Students.
  - **Academic ERP & Attendance**: Logs daily class attendance, maps student profiles, and archives academic term grades.
  - **Billing & Stripe POS**: Manages fee collections, invoices, payment history logs, and integrates Stripe checkout callbacks.
  - **Server-Side Document Exporter**: Dynamically streams official report cards and invoice payment receipts using PDFKit.
  - **Scheduled Notification Scripting**: Automatically pushes SMS alerts to guardians about student attendance and fee updates.

---

## 2. Karkhana Management ERP

- **Live URL**: [karkhana.shop](https://www.karkhana.shop/)
- **Client Repository**: [GitHub - karkhana-clint](https://github.com/hd31520/karkhana-clint)
- **Server Repository**: [GitHub - kharkhana-react-server](https://github.com/hd31520/kharkhana-react-server)
- **Tech Stack**: React, Node.js, Express.js, MongoDB, Tailwind CSS
- **Description**: An enterprise-grade manufacturing workflow and stock ERP custom-engineered for factories (karkhanas). It automates raw material inventory, tracks production stages, manages double-entry bookkeeping, and processes worker payrolls based on daily production quotas.
- **Key Features**:
  - **Live Inventory Manager**: Real-time raw material tracking with low-stock warnings, purchase tracking, and alert triggers.
  - **Stage Workflow Tracker**: Monitors products through various factory pipeline stages from input resources to final outputs.
  - **Double-Entry Ledger Bookkeeping**: Detailed factory financial transaction logging detailing manufacturing costs, sales, and net margins.
  - **Quotas & Automated Payroll**: Computes labor wages dynamically based on daily piece-rate worker logs and prints pay slips.
  - **Multi-Company Ledger Mapping**: Organizes distinct ledger reports and inventory logs under separate business units.

---

## 3. MockMiya — AI Interview Simulator

- **Live URL**: [mock-miya.vercel.app](https://mock-miya.vercel.app/)
- **Client Repository**: [GitHub - MockMiya_client](https://github.com/Pullock4981/MockMiya_client.git)
- **Server Repository**: [GitHub - MockMiya_client (Monorepo)](https://github.com/Pullock4981/MockMiya_client.git)
- **Tech Stack**: Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, TypeScript
- **Description**: An AI-powered interview preparation and resume scoring SaaS designed to simulate actual technical interviews. It parses resumes to extract relevant experience, dynamically prompts candidates using voice/video, and provides instant audio analytics and scoring logs.
- **Key Features**:
  - **AI Resume Parser**: Extracts profile metadata to score candidates against job descriptions and suggest keyword additions.
  - **Interactive Interview Simulator**: Dynamic, real-time mock interviews executing via speech-to-text and text-to-speech API engines.
  - **Voice & Facial Scoring**: Grades answer relevance, sentence delivery flow, vocabulary diversity, and candidate facial cues.
  - **Detailed Report Card**: Visual progress dashboards showing candidate performance logs, feedback summaries, and preparation scores.
  - **Custom Job Role Builder**: Builds customizable interview queues based on specific MERN stack, frontend, or backend roles.

---

## 4. FleetMaster Pro — Enterprise Fleet & Operations SaaS

- **Live URL**: [fleet-web.duckdns.org](https://fleet-web.duckdns.org/)
- **Client Repository**: [GitHub - car-manage](https://github.com/menajpal-design/car-manage)
- **Server Repository**: [GitHub - car-manage](https://github.com/menajpal-design/car-manage)
- **Tech Stack**: Next.js, Node.js, Express.js, MongoDB, Socket.io, Tailwind CSS
- **Description**: A premium SaaS platform designed for transport and logistics firms to manage vehicles, drivers, and financial transactions. It features live GPS device telemetry, driver trip logging, interactive team calendars, and automated vehicle-specific profit-and-loss auditing.
- **Key Features**:
  - **Real-time GPS Tracking**: Integrates with physical SinoTrack GPS tracking devices (e.g., ST-901) displaying active routes via Leaflet.
  - **Driver Duty logs**: Driver portal to initiate vehicle trips, log starting/ending odometers, upload fuel receipts, and log issues.
  - **Double-Entry Financial Ledger**: Vehicle-specific ledger capturing trip earnings, repair costs, fuel expenditures, and net returns.
  - **Team Attendance Calendar**: Unified calendar board showing daily dispatcher attendance logs with printable HR ledger exports.
  - **Preventive Maintenance Alerts**: Automatically triggers maintenance warnings based on vehicle odometer thresholds.

---

## 5. PDF Canvas Reader & Translator

- **Live URL**: [pdf-reader-and-transltor.vercel.app](https://pdf-reader-and-transltor.vercel.app/)
- **Client Repository**: [GitHub - pdf-reader-and-transltor](https://github.com/menajpal-design/pdf-reader-and-transltor.git)
- **Server Repository**: [GitHub - pdf-reader-and-transltor](https://github.com/menajpal-design/pdf-reader-and-transltor.git)
- **Tech Stack**: React, Node.js, Express.js, Vite
- **Description**: An advanced web-based PDF document reader and translator. It utilizes HTML5 Canvas to render high-fidelity document views, implements an interactive crop tool for instant OCR text extraction, and overlays real-time translations onto the original layout.
- **Key Features**:
  - **Canvas Page Rendering**: Renders PDF document streams directly onto HTML5 Canvas elements for pixel-perfect quality.
  - **OCR Text Capture**: Integrates selection crop tools to crop portions of a page and perform instant optical character recognition.
  - **Layout-Aware Translate Overlay**: Overlays real-time translated text onto original documents matching layout structures.
  - **PDF Exporter Engine**: Re-compiles document canvas modifications with translation layers into a downloadable PDF format.
  - **Interactive Annotator**: Enables canvas highlighting, custom markup notes, and drawing shapes directly on document layers.

---

## 6. Restaurant Management Online (Petuk)

- **Live URL**: [petuk-22f6f.web.app](https://petuk-22f6f.web.app/)
- **Client Repository**: [GitHub - petuk-clint](https://github.com/hd31520/petuk-clint)
- **Server Repository**: [GitHub - petuk-server](https://github.com/hd31520/petuk-server)
- **Tech Stack**: React, Node.js, Express.js, MongoDB, Tailwind CSS, Firebase
- **Description**: A modern restaurant management and online food ordering SaaS. It includes digital interactive menus, real-time table reservations, secure checkout pipelines, and a kitchen POS board showing pending order tickets for chefs.
- **Key Features**:
  - **Digital Menu System**: Rich menu categories with instant search filters, item variations, and price logs.
  - **Table Reservation Board**: Verifies table arrangements and logs active booking schedules on an interactive calendar.
  - **Chef POS Dashboard**: Live order status ticket tracker with step-by-step progress logging (Pending ➔ Cooking ➔ Completed).
  - **Payment & Order History**: Handles secure JWT customer sessions, shopping cart actions, and archived order history logs.
  - **Admin Analytics Panel**: Visual charts tracking popular foods, total revenue trends, and restaurant traffic.

---

## 7. Pet Adoption Platform

- **Live URL**: [adop-a3a82.web.app](https://adop-a3a82.web.app/)
- **Client Repository**: [GitHub - Pet-Adoption](https://github.com/hd31520/Pet-Adoption)
- **Server Repository**: [GitHub - petadopter-server](https://github.com/hd31520/petadopter-server)
- **Tech Stack**: React, Node.js, Express.js, MongoDB, Tailwind CSS, Firebase
- **Description**: A full-stack pet rescue database and adoption matching platform. It lists homeless animals with comprehensive medical logs, allows users to submit interactive adoption applications, and provides a portal for shelter staff to review and approve matches.
- **Key Features**:
  - **Pet Matching Directory**: Dynamic lists filtering homeless animals by shelter location, breed, age, and medical records.
  - **Adoption Applications**: Structured onboarding forms for prospective adopters to submit verification details.
  - **Shelter Staff Dashboard**: Enables shelter managers to verify matching requests, update pet health records, and schedule meetups.
  - **Community Care Center**: Promotes care guides, local veterinary clinics, volunteer posts, and user discussion forums.
  - **Secure Chat Bridge**: Direct messenger routes enabling verified adopters to securely ask shelter managers questions.
