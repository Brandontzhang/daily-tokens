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
## User Flow diagrams
Rectangles -> actions
Circles -> states
Decisions -> Diamonds
### User Login Flow
Outlining the user login flow, with third party authorization included
  ```mermaid
  flowchart LR
      A(Landing Page)
      A2{Login or Create Account?}
      B["Login
      - Third Party
      - Existing Account"]
      C(Home Page)
      D[Log out]
      E[Create new account with email]
      F(Confirmation page)
      A --> A2
      A2 --> B
      B --> C
      C --> D
      A2 --> E
      E --> F
      F --> C
      D --> A
   ```
### Token Management Flow
Outlining how the user creates buckets, defines token types, adds tokens and view their progress in their activities
  ```mermaid
  flowchart LR
      A(Home Page)
      B[View Summary]
      C[Add Tokens]
      D[View Bucket Details]
      E[Add Bucket]
      F("Summary of all buckets
          - By Label
          - By hours")
      G(Modal for token breakdown + details)
      H(Weekly, Monthly, Overall progress)
      I(Bucket Settings)
      J{Save/Cancel}
      K("Bucket
          - Description
          - Labels
          - Color/Background
          - Week/Month toggle")
      L("Token
          - Color/Background
          - Shape
          - Type (Session/time)
          - Session type details
          - Allowed breakdowns by %")
      A --> B
      A --> C
      A --> D
      A --> E
      B --> F
      C --> G
      D --> H
      H --> I
      E --> I
      I --> K & L --> J
  ```
## Data Flow diagrams 
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
