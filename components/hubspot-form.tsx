"use client"

import { useEffect, useRef } from "react"

interface HubSpotFormProps {
  portalId: string
  formId: string
  className?: string
}

export default function HubSpotForm({ portalId, formId, className = "" }: HubSpotFormProps) {
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement("script")
    script.src = "//js.hsforms.net/forms/embed/v2.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if (window.hbspt && formRef.current) {
        window.hbspt.forms.create({
          portalId: portalId,
          formId: formId,
          target: `#hubspot-form-${formId}`,
          css: `
            .hs-form-field label {
              font-weight: 500;
              color: #374151;
              margin-bottom: 0.5rem;
              display: block;
            }
            .hs-form-field input,
            .hs-form-field textarea,
            .hs-form-field select {
              width: 100%;
              padding: 0.75rem;
              border: 1px solid #d1d5db;
              border-radius: 0.375rem;
              font-size: 1rem;
              transition: border-color 0.15s ease-in-out;
            }
            .hs-form-field input:focus,
            .hs-form-field textarea:focus,
            .hs-form-field select:focus {
              outline: none;
              border-color: #ffd700;
              box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
            }
            .hs-submit input {
              background-color: #ffd700;
              color: #000;
              font-weight: 600;
              padding: 0.75rem 2rem;
              border: none;
              border-radius: 0.375rem;
              cursor: pointer;
              transition: background-color 0.15s ease-in-out;
            }
            .hs-submit input:hover {
              background-color: #ffc107;
            }
            .hs-form-field {
              margin-bottom: 1rem;
            }
          `,
        })
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [portalId, formId])

  return <div id={`hubspot-form-${formId}`} ref={formRef} className={className} />
}

// Add type declaration for HubSpot
declare global {
  interface Window {
    hbspt: any
  }
}
