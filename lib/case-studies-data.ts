export interface CaseStudy {
 id: string
 title: string
 slug: string
 excerpt: string
 content: string
 clientName: string
 industry: string
 services: string[]
 completedAt: string
 teamSize: number
 featuredImage?: string
 featured: boolean
 metrics: {
 vulnerabilitiesFixed: number
 complianceAchieved: string
 securityImprovement: string
 }
 testimonial?: {
 quote: string
 author: string
 position: string
 }
}

// Mock data based on the provided case studies
const mockCaseStudies: CaseStudy[] = [
 {
 id: "1",
 title: "Cyber Essentials Plus Certification Success for Financial Planning Firm",
 slug: "burt-financial-planning-cyber-essentials-plus",
 excerpt:
 "How Burt Financial Planning achieved Cyber Essentials Plus certification for the second consecutive year with expert guidance and streamlined processes.",
 content: `
 <h2>Background</h2>
 <p>Conor and the team at Closed Door Security recently had the privilege of working with Burt Financial Planning for the second year in a row to help them achieve the Cyber Essentials & Cyber Essentials Plus certification.</p>
 
 <p>Connel Burt, Director of Burt Financial Planning, reflects on his experience with Closed Door Security, the renewal process and lessons learnt throughout the Cyber Essentials Plus process.</p>

 <h2>Lessons from the CE+ Process</h2>
 <blockquote>
 <p>"I learned that there is much more to cybersecurity than simply having a robust firewall/ransomware. There are lots of ways that folk can gain access to software through various backdoors left open due to not having applications or browsers up to date. Also learned that crooks are constantly learning and finding new ways to gain access to data in an attempt to get round the barriers placed in their way."</p>
 <cite>Connel Burt, Burt Financial Planning</cite>
 </blockquote>

 <h2>One-to-one Support Throughout the Process</h2>
 <blockquote>
 <p>"We received a great deal of support from our dedicated adviser who was able to provide high level guidance as to what was required to get the software up to the standard. Being that I am not from an IT background, our adviser at Closed Door Security was able to point me in the right direction to documents that allowed me to personally fix any issues and avoid paying for additional IT support. Everything is explained in plain English and the PC scans (which have the potential to be complex and cumbersome) were completed quickly."</p>
 <cite>Connel Burt, Burt Financial Planning</cite>
 </blockquote>

 <h2>The Renewal Process</h2>
 <blockquote>
 <p>"The first year process took much longer than the renewal process, purely because it was all new to me and the business and information had to be gathered from new. The renewal process took a fraction of the time and Closed Door Security was proactive in reaching out to me to ensure that our CE+ certificate did not lapse."</p>
 <cite>Connel Burt, Burt Financial Planning</cite>
 </blockquote>

 <h2>Concluding Thoughts</h2>
 <blockquote>
 <p>"I would 100% recommend SJP Partner Practices utilise Closed Door Security to gain their CE+ accreditation. In an organisation where the onus is on the partners to not only obtain certification in the first place but to renew on time – they took this on and their proactivity ensured a stress-free process for myself and staff. The business suffered no downtime and we were able to continue to concentrate on helping our clients whilst the accreditation process was being undertaken."</p>
 <cite>Connel Burt, Burt Financial Planning</cite>
 </blockquote>

 <h2>Key Outcomes</h2>
 <ul>
 <li>Successful Cyber Essentials Plus certification renewal</li>
 <li>Zero business downtime during the certification process</li>
 <li>Enhanced understanding of cybersecurity best practices</li>
 <li>Streamlined renewal process for future certifications</li>
 <li>Cost-effective approach avoiding additional IT support</li>
 </ul>
 `,
 clientName: "Burt Financial Planning",
 industry: "financial",
 services: ["Cyber Essentials Plus", "Compliance Consulting", "Security Assessment"],
 completedAt: "2024-01-15T00:00:00Z",
 teamSize: 2,
 featuredImage: "/images/burt-financial-case-study.png",
 featured: true,
 metrics: {
 vulnerabilitiesFixed: 12,
 complianceAchieved: "100%",
 securityImprovement: "85%",
 },
 testimonial: {
 quote:
 "I would 100% recommend SJP Partner Practices utilise Closed Door Security to gain their CE+ accreditation. Their proactivity ensured a stress-free process for myself and staff.",
 author: "Connel Burt",
 position: "Director",
 },
 },
 {
 id: "2",
 title: "Comprehensive Security Assessment for Leading Cancer Research Organization",
 slug: "cancer-research-wales-security-assessment",
 excerpt:
 "Cancer Research Wales strengthened their cybersecurity posture through comprehensive web application and infrastructure penetration testing, protecting sensitive research data.",
 content: `
 <h2>Introduction</h2>
 <p>With the rise of cyber threats targeting healthcare and research institutions, ensuring robust cyber security measures is paramount. Cancer Research Wales recognised the need to secure its online platforms to protect sensitive information and maintain operational integrity.</p>
 
 <p>Given the sensitive nature of their research data and the potential risks of cyber-attacks, their primary concern lies in the security of their web application and associated infrastructure. They engaged Closed Door Security to conduct a comprehensive web application and infrastructure penetration test to address these concerns.</p>

 <h2>How Closed Door Security Made The Difference</h2>
 
 <h3>Scope of the Engagement: Web Application and Infrastructure Penetration Testing</h3>
 <p>The focus of this engagement was on assessing the cyber security posture of Cancer Research Wales's web application and underlying infrastructure. The objective was to identify and address vulnerabilities that could be exploited by common cyber threats.</p>
 
 <p>William Wright served as the lead tester, overseeing the project and ensuring the quality of findings, while Kieran Heard acted as the primary appraiser.</p>
 
 <p>Using a systematic approach, the team examined for potential weaknesses in application logic, user authentication processes, and system configuration. The goal was to provide actionable recommendations to enhance the security of the web application and its supporting infrastructure.</p>

 <h2>Findings</h2>
 <p>The assessment identified several areas where security enhancements could benefit Cancer Research Wales's web application and infrastructure. The findings included a mix of issues across various levels of risk. These ranged from moderate to minor concerns, with some informational items also noted.</p>
 
 <p>Key observations highlighted areas where user interactions and system configurations could allow for unauthorized actions, underscoring the importance of fine-tuning access controls and ensuring that sensitive details remain obscured.</p>

 <h2>Risk Mitigation Recommendations</h2>
 <p>To address these observations, Closed Door Security recommended several strategies aimed at strengthening security measures and improving system resilience.</p>
 
 <p>Suggestions included refining responses in user authentication processes to avoid inadvertently revealing information, implementing additional verification steps to prevent unauthorized automated interactions, and adjusting system configurations to reduce the visibility of certain technical details.</p>
 
 <p>Cancer Research Wales implemented these recommendations as practical steps to mitigate risks, enhance data protection, and reinforce the overall security of their systems.</p>

 <h2>Conclusions</h2>
 <p>This engagement with Cancer Research Wales highlights the importance of proactive cyber security measures for organisations handling sensitive research data. Through a thorough penetration test, Closed Door Security identified and addressed security vulnerabilities, enabling Cancer Research Wales to strengthen the resilience of its infrastructure.</p>
 
 <p>This collaboration underscores the value of rigorous security assessments and demonstrates the role of experienced cyber security teams, such as those at Closed Door Security, in supporting research institutions amidst evolving cyber threats.</p>
 
 <p>Closed Door Security is prepared to assist your organisation in attaining comparable success by providing customised solutions to protect your operations and guarantee adherence to stringent security standards.</p>
 `,
 clientName: "Cancer Research Wales",
 industry: "healthcare",
 services: ["Web Application Testing", "Infrastructure Testing", "Vulnerability Assessment"],
 completedAt: "2023-11-20T00:00:00Z",
 teamSize: 3,
 featuredImage: "/images/cancer-research-case-study.png",
 featured: true,
 metrics: {
 vulnerabilitiesFixed: 18,
 complianceAchieved: "100%",
 securityImprovement: "92%",
 },
 testimonial: {
 quote:
 "The thorough penetration test conducted by Closed Door Security enabled us to strengthen the resilience of our infrastructure and better protect our sensitive research data.",
 author: "Dr. Sarah Mitchell",
 position: "IT Security Manager",
 },
 },
]

export async function getCaseStudies(): Promise<CaseStudy[]> {
 // Simulate API delay
 await new Promise((resolve) => setTimeout(resolve, 500))
 return mockCaseStudies
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
 // Simulate API delay
 await new Promise((resolve) => setTimeout(resolve, 300))
 return mockCaseStudies.find((study) => study.slug === slug) || null
}

export async function getCaseStudiesByIndustry(industry: string): Promise<CaseStudy[]> {
 // Simulate API delay
 await new Promise((resolve) => setTimeout(resolve, 400))
 return mockCaseStudies.filter((study) => study.industry === industry)
}

export async function getRelatedCaseStudies(
 currentCaseStudyId: string,
 industry: string,
 limit = 3,
): Promise<CaseStudy[]> {
 // Simulate API delay
 await new Promise((resolve) => setTimeout(resolve, 300))
 return mockCaseStudies
 .filter((study) => study.id !== currentCaseStudyId && study.industry === industry)
 .slice(0, limit)
}

export async function getAllCaseStudySlugs(): Promise<string[]> {
 return mockCaseStudies.map((study) => study.slug)
}
