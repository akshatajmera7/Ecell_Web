# Theme Update Script

This document lists all files that need theme updates from old colors to new colors.

## Color Mapping:
- OLD: `#0C233C` (old bg) → NEW: `bg-ecell-bg` or `#2a2a2a`
- OLD: `#296685` (old primary) → NEW: `bg-ecell-secondary` or `#6b5fff`  
- OLD: `#FD8916` (old secondary) → NEW: `bg-ecell-primary` or `#d4ff00`
- OLD: `#F5EDE4` (old text) → NEW: `text-ecell-text` or `#ffffff`

## Files Already Updated:
✅ tailwind.config.js
✅ hero.js (Home)
✅ banner.js
✅ initiatives.js  
✅ startups.js
✅ footer.js
✅ Navbar.css
✅ contact.js
✅ events/hero.js
✅ ErrorBoundary.js
✅ team/hero.js

## Files Still Needing Updates:

### High Priority:
- [ ] schedules.js
- [ ] sponsors/companies.js
- [ ] sponsors/hero.js
- [ ] sponsors/companies partners.js
- [ ] sponsors/companies media.js
- [ ] Programs/intro.js
- [ ] Programs/list.js
- [ ] Programs/memory.js
- [ ] StartupConnectForm.js
- [ ] team/team.js
- [ ] team/por.js
- [ ] speakers components
- [ ] launchpad components
- [ ] payment components
- [ ] All lpevents subcomponents

## Search/Replace Patterns:

1. `backgroundColor: '#0C233C'` → `className="bg-ecell-bg"`
2. `backgroundColor: '#296685'` → `className="bg-ecell-secondary"`
3. `backgroundColor: '#FD8916'` → `className="bg-ecell-primary"`
4. `color: '#F5EDE4'` → `className="text-ecell-text"`
5. `borderColor: '#296685'` → `className="border-ecell-secondary"`
6. `borderColor: '#FD8916'` → `className="border-ecell-primary"`
