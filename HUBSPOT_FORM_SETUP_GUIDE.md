# HubSpot Complex Pentest Form Setup Guide

## Step 1: Create Custom Properties in HubSpot

Before creating the form, you need to create these custom contact properties in HubSpot:

**Go to:** Settings → Objects → Contacts → Manage Properties → Create Property

### Custom Properties to Create:

1. **Penetration Test Reasons**
   - Name: `pentest_reasons`
   - Label: "Penetration Test Reasons"
   - Type: Multiple checkboxes
   - Options:
     - Regulatory Compliance
     - Security Audit  
     - New Feature Testing
     - Risk Assessment
     - Incident Response
     - Vendor Assessment
     - Cyber Insurance
     - Mergers & Acquisitions
     - Other

2. **Industry Sector**
   - Name: `industry_sector`
   - Label: "Industry Sector"
   - Type: Dropdown select
   - Options:
     - Financial Services
     - Government/Defense
     - Energy/Utilities
     - Technology/IT
     - Telecommunications
     - Healthcare/Pharmaceutical
     - Aerospace/Defense Contractors
     - Maritime/Shipping
     - Academic/Research
     - Critical National Infrastructure
     - Retail & E-commerce
     - Manufacturing
     - Legal Services
     - Other

3. **Selected Threat Actors**
   - Name: `selected_threat_actors`
   - Label: "Selected Threat Actors for Testing"
   - Type: Multiple checkboxes
   - Options:
     - Lazarus Group (APT38) - Financial/SWIFT
     - Carbanak/FIN7 - Payment Systems
     - Cobalt Group - ATM/Payment Cards
     - FIN6 - Point-of-Sale Systems
     - Cozy Bear (APT29) - Government Intelligence
     - Fancy Bear (APT28) - Military Intelligence
     - Comment Crew (APT1) - Government Espionage
     - Turla (APT29) - Government/Diplomatic
     - Kimsuky (APT43) - Government/Defense
     - Sandworm (APT44) - Critical Infrastructure
     - OilRig/Quilin (APT34) - Energy/Government
     - Elfin (APT33) - Aviation/Energy
     - Winnti Group (APT41) - Technology/Supply Chain
     - Stone Panda (APT10) - Technology/IP
     - Deep Panda (APT19) - Technology/Healthcare
     - APT10 - Telecommunications Infrastructure
     - Mustang Panda (APT27) - Telecom/Government
     - Reaper (APT37) - Telecommunications/Media
     - Winnti/APT41 - Healthcare Data/Pharma
     - Wizard Spider - Healthcare Ransomware
     - Emissary Panda (APT27) - Aerospace/Defense
     - Leviathan (APT40) - Maritime/Shipping
     - Charming Kitten (APT35) - Academic/Research
     - Ocean Lotus (APT32) - Academic/Research
     - Equation Group - Critical Infrastructure
     - FIN7 - Retail Point-of-Sale
     - Carbanak - Retail Payment Systems

4. **Employee Count**
   - Name: `employee_count`
   - Label: "Number of Employees"
   - Type: Dropdown select
   - Options:
     - 1-10 employees
     - 11-50 employees
     - 51-200 employees
     - 201-500 employees
     - 501-1,000 employees
     - 1,000+ employees

5. **Physical Locations**
   - Name: `physical_locations`
   - Label: "Physical Locations"
   - Type: Single-line text

6. **Budget Range**
   - Name: `budget_range`
   - Label: "Budget Range"
   - Type: Dropdown select
   - Options:
     - £5,000 - £15,000
     - £15,000 - £30,000
     - £30,000 - £50,000
     - £50,000 - £100,000
     - £100,000+
     - Prefer to discuss

7. **Project Timeline**
   - Name: `project_timeline`
   - Label: "Project Timeline"
   - Type: Dropdown select
   - Options:
     - ASAP (1-2 weeks)
     - Fast track (2-4 weeks)
     - Standard (4-8 weeks)
     - Planned (2-3 months)
     - Flexible timeline

8. **Additional Context**
   - Name: `additional_context`
   - Label: "Additional Information and Context"
   - Type: Multi-line text

## Step 2: Create the Form in HubSpot

**Go to:** Marketing → Lead Capture → Forms → Create Form

1. **Choose "Regular form"**
2. **Add these fields in order:**

### Contact Information Section:
- First Name (required)
- Last Name (required) 
- Email (required)
- Phone Number (optional)
- Company Name (required)
- Job Title (optional)

### Requirements Section:
- Penetration Test Reasons (required, checkbox)
- Industry Sector (required, dropdown)
- Selected Threat Actors (optional, checkbox)

### Organization Details Section:
- Number of Employees (optional, dropdown)
- Physical Locations (optional, text)
- Budget Range (optional, dropdown)
- Project Timeline (required, dropdown)

### Additional Information Section:
- Additional Information and Context (optional, multi-line text)

## Step 3: Form Styling and Settings

### Form Settings:
- **Form name:** "Comprehensive Penetration Test Request"
- **Submit button text:** "Submit Penetration Test Request"
- **Thank you message:** "Thank you for your detailed penetration test request. Our team will review your requirements and contact you within 24 hours with a customized proposal."

### Follow-up Actions:
1. **Email notifications:**
   - Send to: sales@cdsec.co.uk
   - Subject: "New Pentest Request from {firstname} {lastname} at {company}"

2. **Auto-responder:**
   - Send confirmation email to submitter
   - Include next steps and timeline

## Step 4: Get Form ID and Update Website

1. **Copy the Form ID** from the form URL
2. **Update your website** files:
   - Replace `PENTEST_FORM_ID` with your actual form ID
   - Replace `YOUR_PORTAL_ID` with your HubSpot Portal ID

## Step 5: Create Workflows (Optional)

**Go to:** Automation → Workflows

Create workflows to:
- Assign leads to sales team members
- Create deal records automatically
- Set up follow-up sequences
- Score leads based on responses

## Step 6: Test the Integration

1. **Test form submission** with real data
2. **Verify data** appears in HubSpot contacts
3. **Check notifications** are working
4. **Test workflow triggers** (if created)

---

This complex form will capture all the detailed information from your original form while working seamlessly with HubSpot's native functionality!