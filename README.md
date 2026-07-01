# QA Cypress Framework

A UI test automation framework built with **Cypress**, following industry best practices such as **Page Object Model (POM)**, reusable methods, custom commands and a clean project architecture.

The project demonstrates how to build a maintainable Cypress framework using a real login flow, with focus on code organization and reusability.

---

# 🚀 Technologies

- Cypress
- JavaScript (ES6+)
- Node.js
- Git
- GitHub

---

# 📂 Project Structure

```text
cypress
│
├── e2e
│   └── login.cy.js
│
├── fixtures
│   └── data
│       └── login.json
│
├── pages
│   ├── LoginPage.js
│   └── HomePage.js
│
├── support
│   ├── commands.js
│   └── e2e.js
│
cypress.config.js
package.json
README.md
```

---

# ✅ Features

- Page Object Model (POM)
- Centralized selectors
- Reusable methods
- Custom Cypress Commands
- Fixtures
- Hooks (beforeEach)
- Base URL configuration
- Successful login
- Invalid password validation
- Logout validation

---

# ▶️ Installation

Clone the repository

```bash
git clone https://github.com/valnei-filho/qa-cypress-framework.git
```

Install dependencies

```bash
npm install
```

Run Cypress UI

```bash
npx cypress open
```

Run tests in headless mode

```bash
npx cypress run
```

---

# 📚 Concepts Demonstrated

- UI Test Automation
- Cypress Fundamentals
- Page Object Model
- Page Objects
- Custom Commands
- Fixtures
- Hooks
- Assertions
- Clean Code
- Test Organization
- Reusability
- Git Workflow

---

# 👨‍💻 Author

Developed by **Valnei Rezende**

GitHub:
https://github.com/valnei-filho

---

This repository is part of my QA Automation portfolio and demonstrates the implementation of a scalable UI automation framework using Cypress.
