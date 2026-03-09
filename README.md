# TalonPro Portal - HTML Prototype

A modern, interactive HTML/CSS/JavaScript prototype for a Housing Communication & Case Management Platform.

## Overview

This is a **UI wireframe prototype for demo purposes only**. It does not integrate any APIs, backend services, or databases. All functionality is simulated using mock JavaScript data.

## Features

### Core Pages
- **Dashboard** - Overview with action center, recent activity, and tasks
- **Guest List** - Browse and search all guests
- **Guest Detail** - Comprehensive guest/case management with tabs
- **Tasks** - Task management with filtering
- **Documents** - Document library with search
- **Templates** - Message template management
- **Automation Rules** - Workflow automation configuration

### AI Features (Simulated)

#### 1. AI Case Summary
- Located at the top of the Guest Detail page
- Displays AI-generated summary of case activity
- **"Regenerate Summary"** button shows alternate AI-generated summaries
- Collapsible section

#### 2. AI Reply Generator
- In the Messages tab, click **"Generate AI Reply"**
- Shows 3 suggested replies based on conversation context
- Click any suggestion to auto-fill the message input

#### 3. Message Categorization
- Each message displays a category badge:
  - Maintenance
  - Billing
  - Extension
  - Document Request

#### 4. Sentiment Indicators
- Guest messages show sentiment:
  - 🟢 Positive
  - ⚪ Neutral
  - 🔴 Negative

#### 5. Receipt AI Extraction
- In the Receipts tab, click the magic wand icon (🪄)
- Shows AI-extracted data from receipt:
  - Vendor
  - Amount
  - Date
  - Category

#### 6. AI Follow-Up Recommendations
- Sidebar widget on Guest Detail page
- Shows prioritized action suggestions:
  - Follow up with vendor
  - Send status updates
  - Check approvals
  - Confirm dates

#### 7. AI Template Generator
- In Templates page, click **"AI Generate Template"**
- Specify:
  - Purpose/description
  - Tone (Professional, Friendly, Formal, Casual)
  - Length (Short, Medium, Long)
- Generates template text instantly
- **"Regenerate"** for alternate versions
- **"Use This Template"** to insert into form

#### 8. AI Automation Rules
- In Rules page, click **"AI Rule Suggestions"**
- Shows recommended automation rules with confidence scores
- Click **"Apply"** to add rule to active rules

## Technology Stack

- **HTML5** - Page structure
- **Tailwind CSS** (CDN) - Styling framework
- **Vanilla JavaScript** - Interactivity
- **Font Awesome** - Icons
- **Mock Data** - Local JavaScript arrays

## File Structure

```
prototype/
├── index.html              # Dashboard
├── guest-list.html         # Guest listing
├── guest-detail.html       # Guest detail with tabs & AI features
├── tasks.html              # Task management
├── documents.html          # Document library
├── templates.html          # Message templates with AI generation
├── rules.html              # Automation rules with AI suggestions
├── style.css               # Custom styles
├── app.js                  # Main JavaScript logic
├── data.js                 # Mock data
├── sample-data/            # Sample JSON files
│   ├── guests.json
│   ├── messages.json
│   ├── tasks.json
│   └── ai-features.json
└── README.md               # This file
```

## How to Use

### Running the Prototype

1. **Open any HTML file in a web browser:**
   ```bash
   open prototype/index.html
   ```
   or simply double-click any .html file

2. **Navigate using:**
   - Left sidebar menu
   - Clickable links in tables
   - Modal popups for forms

### Testing AI Features

#### Test AI Case Summary
1. Open `guest-detail.html`
2. View AI summary at top of page
3. Click **"Regenerate Summary"** to see alternate version

#### Test AI Reply Generator
1. Open `guest-detail.html`
2. Click **"Messages"** tab
3. Click **"Generate AI Reply"** button
4. Click any suggested reply to insert it

#### Test AI Template Generator
1. Open `templates.html`
2. Click **"AI Generate Template"**
3. Enter description, select tone/length
4. Click **"Generate Template"**
5. View generated template
6. Click **"Use This Template"** to insert

#### Test AI Automation Rules
1. Open `rules.html`
2. Click **"AI Rule Suggestions"**
3. View 4 suggested rules with confidence scores
4. Click **"Apply"** on any rule

#### Test Receipt AI Extraction
1. Open `guest-detail.html`
2. Click **"Receipts"** tab
3. Click magic wand icon (🪄) on any receipt
4. View AI-extracted data

## Mock Data

All data is stored in `data.js` with the following arrays:

- `guests` - Guest/case information
- `messages` - Conversation threads with categories & sentiment
- `tasks` - Task items
- `documents` - Document records
- `receipts` - Receipt records with AI extraction
- `templates` - Message templates
- `automationRules` - Workflow rules
- `recentActivity` - Dashboard activity feed
- `aiCaseSummaries` - AI-generated summaries (2 versions)
- `aiSuggestedReplies` - AI reply suggestions
- `aiFollowUpRecommendations` - AI action recommendations
- `timelineEvents` - Case timeline

Sample JSON files are also provided in `sample-data/` folder for reference.

## UI Components

### Modals
- Create Case
- Create Task
- Upload Document
- Upload Receipt
- Create Template
- Create Rule
- Send Message
- Template Selector
- AI Template Generator

### Interactive Elements
- Collapsible sections (click header to expand/collapse)
- Tabs (switch content without reload)
- Filters (task status, document category)
- Search bars (guests, documents)
- Status badges
- AI suggestion cards (clickable)

## Customization

### Changing Colors
Edit `style.css` and modify the color classes:
- `.btn-primary` - Primary button color
- `.badge-*` - Badge colors
- `.ai-badge` - AI feature indicator

### Adding Mock Data
Edit `data.js` and add items to the arrays:
```javascript
guests.push({
    id: 5,
    firstName: 'New',
    lastName: 'Guest',
    // ... other fields
});
```

### Adding AI Features
1. Add data to relevant arrays in `data.js`
2. Create UI components in HTML
3. Add loading functions in `app.js`

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Any modern browser with JavaScript enabled

## Limitations

⚠️ **This is a prototype only:**
- No data persistence (refresh clears state)
- No backend integration
- No real AI processing
- All AI features use pre-written mock responses
- Forms don't actually save data
- No authentication/security

## Design Inspiration

UI modeled after enterprise SaaS platforms like:
- Zendesk
- Salesforce
- Intercom
- HubSpot

## Future Enhancements (Not Implemented)

If building a real application, you would add:
- Backend API (Node.js, Python, etc.)
- Database (PostgreSQL, MongoDB)
- Real AI integration (OpenAI, Claude API)
- User authentication
- File upload/storage
- Email/SMS integration
- Real-time notifications
- Data persistence
- Multi-user collaboration
- Mobile responsive design improvements

## License

This is a demonstration prototype for evaluation purposes only.

## Support

For questions or issues with the prototype, please review the code comments in:
- `app.js` - JavaScript logic
- `data.js` - Data structure
- `style.css` - Styling details

---

**Created:** 2025
**Version:** 1.0
**Purpose:** UI/UX Demonstration
