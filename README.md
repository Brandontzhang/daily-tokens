# Daily Tokens Project

# Project Overview 
Create a web app that allows tracking of progress on daily goals 

# Learning Goals
## Design
### System Design
- Use Mermaid to create system design docs 
### UI Design
- Use Figma
### Technologies
- Redux 
- Supabase/Postgres
- Auth0 Integration for user management 

# System Design 
## Mermaid
1. User Flow diagrams
  ```mermaid
  ---
  title: User Login Flow
  --- 
  flowchart LR
      A(Landing Page)
      B("Login Action
      - Third Party
      - Existing Account")
      C(Home Page)
      D(Log out)
      E(Create new account with email)
      F(Confirmation page)
      A --> B
      B --> C
      C --> D
      A --> E
      E --> F
      F --> C
      D --> A
   ```
2. Data Flow diagrams 
  - How the data moves between the frontend, backend, and database 
  - User log in/ log out  [!IMPORTANT] (data flow)
3. State diagrams
  - How the application changes based on the user's actions 
  - log in/log out -> how it affects the app
  - moving between different screens
  - different user settings?
4. Component Interaction Diagrams 
  - How components interact with the data (related to data flow diagrams? Maybe a bit more detailed for each component)
5. Entity-Relationship Diagrams
  - Database design documents (types and tables)

# UI Design
## Figma
- UI Wire frames and mockups (Figma)

# State Diagram Document
# UI Design Document 
