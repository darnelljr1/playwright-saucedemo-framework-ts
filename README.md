# Playwright E2E Automation Framework (TypeScript)

## Overview
This repository demonstrates how I design and structure a scalable Playwright end-to-end automation framework using TypeScript.  
The goal of this project is to show clean framework architecture, maintainability, and realistic testing workflows, rather than full test coverage.

The application I'm testing is SauceDemo, used just as a stable surface to demonstrate patterns and structure that translate directly to real production systems.


## What this framework demonstrates
- Page Object Model (POM)  
- Custom Playwright fixtures for clean, reusable test setup  
- Environment-based configuration using `.env` (including credentials)  
- Reusable methods and utility functions to avoid duplication  
- Workflow-based E2E tests that reflect real user behavior  
- Scalable structure designed to support future UI and API test expansion  
- CI-ready execution, with light GitHub Actions exposure in mind  

Planned extension:
- API test coverage integrated alongside UI workflows

