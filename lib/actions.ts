"use server"

import { redirect } from "next/navigation"

interface FormState {
 message?: string
 error?: string
 success?: boolean
}

interface FormData {
 serviceType: string
 companyName: string
 email: string
 phone: string
 websiteUrl: string
 companySize: string
 industry: string
 timeline: string
 description: string
 complianceStandards: string[]
 budget: string
 additionalServices: string[]
 firstName?: string
 lastName?: string
}

export async function submitPentestForm(
 prevState: FormState,
 formData: FormData
): Promise<FormState> {
 try {
 // Validate required fields
 if (!formData.serviceType) {
 return { error: "Service type is required", success: false }
 }
 if (!formData.companyName || !formData.email) {
 return { error: "Company name and email are required", success: false }
 }

 // Prepare HubSpot submission data
 const hubspotData = {
 fields: [
 { name: "email", value: formData.email },
 { name: "company", value: formData.companyName },
 { name: "phone", value: formData.phone || "" },
 { name: "website", value: formData.websiteUrl || "" },
 { name: "firstname", value: formData.firstName || "" },
 { name: "lastname", value: formData.lastName || "" },
 // Custom fields for pentest form
 { name: "service_type", value: formData.serviceType },
 { name: "company_size", value: formData.companySize },
 { name: "industry", value: formData.industry },
 { name: "timeline", value: formData.timeline },
 { name: "description", value: formData.description },
 { name: "compliance_standards", value: formData.complianceStandards.join(", ") },
 { name: "budget", value: formData.budget },
 { name: "additional_services", value: formData.additionalServices.join(", ") },
 ],
 }

 // Submit to HubSpot
 const response = await fetch("https://api.hsforms.com/submissions/v3/integration/submit/139628088/ffa0bc0c-7bbb-46c6-8459-3dcfdc476b50", {
 method: "POST",
 headers: {
 "Content-Type": "application/json",
 "Authorization": `Bearer ${process.env.HUBSPOT_API_KEY}`,
 },
 body: JSON.stringify(hubspotData),
 })

 if (!response.ok) {
 const errorText = await response.text()
 console.error("HubSpot submission failed:", errorText)
 return { 
 error: "Failed to submit form. Please try again or contact us directly.", 
 success: false 
 }
 }

 const result = await response.json()
 console.log("HubSpot submission successful:", result)

 return { 
 message: "Thank you for your submission! We'll be in touch within 24 hours.", 
 success: true 
 }
 } catch (error) {
 console.error("Form submission error:", error)
 return { 
 error: "An unexpected error occurred. Please try again or contact us directly.", 
 success: false 
 }
 }
}