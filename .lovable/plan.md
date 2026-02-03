

# Update Portfolio Content Plan

## Overview
Update the portfolio with Ayush's actual bio, lifestyle description, and contact information. The contact form will be simplified to show only contact details without the message form.

---

## Changes Summary

### 1. About Me Section (`AboutSection.tsx`)

**Update "Who I Am" bio to:**
> "I am a 2nd year Computer Science student learning Java, OOPS and Web Development. I enjoy converting problem statements into working applications and improving my backend + frontend skills."

**Add lifestyle paragraph:**
> "I follow a simple and focused lifestyle centered around learning, consistency, and self-improvement. I enjoy building projects, exploring new ideas in technology, and continuously upgrading my skills."

---

### 2. Contact Section (`ContactSection.tsx`)

**Remove the contact form entirely** - delete the form card with name, email, subject, and message fields.

**Update contact information to:**
- **Email**: ayushsinghrajawat8@gmail.com
- **Phone**: +91 6261597001
- **Location**: Bhopal, India

**Simplify layout** - center the contact info cards since there's no form on the left anymore.

---

### 3. Footer & Hero Section (`Footer.tsx`, `HeroSection.tsx`)

**Update email link** to use the correct email: ayushsinghrajawat8@gmail.com

---

## Technical Details

| File | Changes |
|------|---------|
| `AboutSection.tsx` | Replace bio paragraphs with student background and lifestyle description |
| `ContactSection.tsx` | Remove form component, update contact info, center layout |
| `Footer.tsx` | Update email link |
| `HeroSection.tsx` | Update email link in social icons |

---

## Notes
- The database table for contact messages will remain but won't be used since the form is removed
- The contact section will become a simple information display with animated cards
- All animations and styling will be preserved

