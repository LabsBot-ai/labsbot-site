# LabsBot.ai — Project Structure / Структура проекта

---

## 1. Overview / Обзор

**EN:**  
This document defines the logical and physical structure of the LabsBot.ai website.
It is intentionally simple and modular to allow easy scaling and refactoring.

**RU:**  
Этот документ описывает логическую и физическую структуру сайта LabsBot.ai.
Структура намеренно простая и модульная, чтобы обеспечить лёгкое масштабирование и рефакторинг.

---

## 2. Root Files / Файлы в корне

**EN:**  
- index.html — main entry point (initially static)
- PROJECT.md — project definition and goals
- SITE_MAP.md — site navigation and page logic
- STRUCTURE.md — project structure (this file)

**RU:**  
- index.html — главная точка входа (на старте статическая)
- PROJECT.md — описание проекта и целей
- SITE_MAP.md — логика страниц и навигации
- STRUCTURE.md — структура проекта (этот файл)

---

## 3. Pages Logic / Логика страниц

**EN:**  
The site starts as a simple static structure and may evolve into a multi-app system.

Initial logical pages:
- Home (index.html)
- Projects (section or separate page later)
- About
- Contact
- Login (placeholder)

**RU:**  
Сайт начинается как простая статическая структура и может эволюционировать в систему из нескольких приложений.

Начальные логические страницы:
- Главная (index.html)
- Проекты (секция или отдельная страница позже)
- О платформе
- Контакты
- Вход (заглушка)

---

## 4. Projects Separation / Разделение проектов

**EN:**  
Each LabsBot project is treated as an independent module.
LabsBot.ai does NOT contain internal business logic of products.

Projects may later be implemented as:
- Separate repositories
- Separate web applications
- Integrated via redirects or shared auth

**RU:**  
Каждый проект LabsBot рассматривается как независимый модуль.
LabsBot.ai НЕ содержит внутренней бизнес-логики продуктов.

Проекты могут быть реализованы как:
- отдельные репозитории
- отдельные веб-приложения
- интеграция через редиректы или общий логин

---

## 5. Scalability Rules / Правила масштабирования

**EN:**  
- No tight coupling between pages and apps
- Static pages can be replaced without backend changes
- Styling can be replaced independently
- Authentication and payments are added later

**RU:**  
- Нет жёсткой связки между страницами и приложениями
- Статические страницы можно заменить без изменения бэкенда
- Стили меняются независимо
- Аутентификация и платежи добавляются позже

---

## 6. Refactoring Strategy / Стратегия переработки

**EN:**  
The site must be easy to:
- redesign
- restructure
- migrate to another framework

Nothing is considered permanent except the project philosophy.

**RU:**  
Сайт должен легко:
- редизайниться
- перестраиваться
- мигрировать на другой фреймворк

Постоянной считается только философия проекта.

---

End of structure definition.