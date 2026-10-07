import { z } from 'zod'

export const BUDGETS = ['Not sure yet', 'Under $1k', '$1k – $5k', '$5k – $15k', '$15k+'] as const

// Enquiry schema (System Plan §3): shared by the form and the API route.
export const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(100),
  email: z.string().trim().email('Please enter a valid email address.').max(200),
  budget: z.enum(BUDGETS).default('Not sure yet'),
  message: z.string().trim().min(10, 'Tell me a little more — at least 10 characters.').max(5000),
  website: z.string().max(500).optional(), // honeypot: real people leave it empty
  turnstileToken: z.string().optional(),
})

export type Enquiry = z.infer<typeof enquirySchema>
export type EnquiryField = 'name' | 'email' | 'budget' | 'message'
