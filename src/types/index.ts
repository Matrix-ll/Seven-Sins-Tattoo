export interface Artist {
  name: string
  slug: string
  role: string
  pronouns?: string
  bio: string
  fullBio?: string
  artisticStatement?: string
  image: string
  imageAlt: string
  mobileImage?: string
  specialty: string
  additionalStyles?: string[]
  yearsOfExperience?: number
  languages?: string[]
  resident: boolean
  guest?: boolean
  guestVisitStart?: string
  guestVisitEnd?: string
  bookingStatus: 'available' | 'limited' | 'unavailable' | 'guest'
  availabilityNote?: string
  workingProcess?: string
  instagram?: string
  bookingUrl?: string
  featured: boolean
  displayOrder: number
  portfolioArtworkIds?: string[]
  seoTitle?: string
  seoDescription?: string
}

export interface TattooWork {
  title: string
  description: string
  image: string
  artist: string
  style: string
  sin?: string
}

export interface TattooStyle {
  name: string
  slug: string
  shortDescription: string
  fullDescription: string
  heroImage: string
  heroImageAlt: string
  mobileImage?: string
  visualCharacteristics: string
  suitableSubjects: string
  recommendedPlacements: string
  scaleGuidance: string
  agingConsiderations: string
  maintenanceGuidance: string
  sessionComplexity: string
  galleryFilterUrl: string
  featured: boolean
  displayOrder: number
  seoTitle: string
  seoDescription: string
}

export interface StyleComparisonCriterion {
  label: string
  key: string
}

export interface Promise {
  number: string
  title: string
  description: string
}

export interface PricingTier {
  name: string
  price: string
  description: string
  details: string[]
}

export interface MembershipTier {
  name: string
  price: string
  description: string
  benefits: string[]
  featured: boolean
}

export interface InstagramPost {
  image: string
  caption: string
  likes: number
}

export interface NavItem {
  label: string
  href: string
}

export interface GalleryArtwork {
  id: string
  title: string
  style: string
  placement: string
  artist?: string
  description: string
  fullDescription?: string
  image: string
  imageAlt: string
  aspectRatio: 'portrait' | 'landscape' | 'square'
  category: string
  featured: boolean
  healingPhotos?: string[]
  instagramUrl?: string
  createdAt?: string
  displayOrder: number
}

export interface FeaturedCollection {
  slug: string
  title: string
  description: string
  image: string
  imageAlt: string
  artworkIds: string[]
}

export interface GalleryInstagramPost {
  image: string
  imageAlt: string
  caption: string
  url?: string
}

export interface StudioInfo {
  address: string
  phone: string
  email: string
  instagram: string
  hours: string
  hoursNote: string
  minCharge: string
  minChargeAmount: number
  deposit: string
  depositPercent: number
  location: { lat: number; lng: number }
}

export interface HourlyTier {
  name: string
  label: string
  min: number
  max: number
  description: string
  displayOrder: number
}

export interface SessionType {
  name: string
  description: string
  typicalDuration: string
  displayOrder: number
}

export interface PriceScenario {
  name: string
  range: string
  description: string
  factors: string[]
  displayOrder: number
}

export interface PricingFAQ {
  question: string
  answer: string
  displayOrder: number
}

export interface PolicySection {
  title: string
  content: string
  needsReview: boolean
  displayOrder: number
}

export interface MembershipPreview {
  name: string
  price: number
  discountPercent: number
  displayOrder: number
}

export interface MembershipBenefit {
  name: string
  description: string
  active: boolean
  displayOrder: number
}

export interface MembershipFAQ {
  question: string
  answer: string
  displayOrder: number
}

export interface MembershipConfig {
  plans: MembershipPlan[]
  faqs: MembershipFAQ[]
  seoTitle: string
  seoDescription: string
}

export interface MembershipPlan {
  name: string
  slug: string
  price: number
  discountPercent: number
  shortDescription: string
  fullDescription: string
  intendedClientType: string
  benefits: MembershipBenefit[]
  eligibilityNote?: string
  exclusions?: string
  depositInteractionRule: string
  duration?: string
  expiration?: string
  renewalSetting?: string
  transferability?: string
  refundPolicy?: string
  cancellationPolicy?: string
  enrollmentEnabled: boolean
  enrollmentUrl?: string
  featured: boolean
  displayOrder: number
  seoTitle?: string
  seoDescription?: string
}

export interface PricingConfig {
  minCharge: number
  depositPercent: number
  hourlyTiers: HourlyTier[]
  sessionTypes: SessionType[]
  priceScenarios: PriceScenario[]
  paymentMethods: string[]
  faqs: PricingFAQ[]
  policies: PolicySection[]
  memberships: MembershipPreview[]
  seoTitle: string
  seoDescription: string
}

// ═══ Booking ═══════════════════════════════════════════════════════════

export type ContactMethod = 'email' | 'phone_call' | 'text_message'
export type ProjectType = 'new_tattoo' | 'cover_up' | 'rework' | 'addition' | 'multi_session' | 'not_sure'
export type ColorPreference = 'black_and_grey' | 'color' | 'not_sure'
export type BodySide = 'left' | 'right' | 'center' | 'na'
export type MeasurementUnit = 'inches' | 'centimeters'
export type FlexibilityOption = 'fixed' | 'somewhat_flexible' | 'very_flexible'
export type TimeOfDay = 'afternoon' | 'evening' | 'flexible'
export type BudgetRange = 'under_250' | '250_500' | '500_1000' | '1000_2000' | 'over_2000' | 'not_sure'
export type MembershipStatus = 'none' | 'basic' | 'premium' | 'elite' | 'interested'
export type SubmissionStatus = 'idle' | 'submitting' | 'demo' | 'error'

export interface BookingUploadedFile {
  id: string
  name: string
  size: number
  type: string
  previewUrl?: string
}

export interface BookingFormData {
  // Step 1 — About You
  firstName: string
  lastName: string
  email: string
  phone: string
  preferredContact: ContactMethod
  ageConfirmed: boolean

  // Step 2 — Tattoo Idea
  projectType: ProjectType
  projectTitle: string
  projectDescription: string
  meaningOrStory: string
  desiredMood: string
  colorPreference: ColorPreference

  // Step 3 — Placement and Size
  placement: string
  side: BodySide
  placementDetails: string
  width: string
  height: string
  measurementUnit: MeasurementUnit
  sizeFlexibility: FlexibilityOption
  placementFlexibility: FlexibilityOption

  // Step 4 — Style and Artist
  stylePreference: string
  artistPreference: 'no_preference' | 'match_me' | 'specific'
  artistSlug: string

  // Step 5 — Availability
  preferredDays: string[]
  preferredTime: TimeOfDay
  earliestDate: string
  schedulingFlexibility: FlexibilityOption
  travelConsiderations: string

  // Step 6 — References and Notes
  referenceFiles: BookingUploadedFile[]
  additionalNotes: string
  accessibilityNeeds: string
  travelingFromOutside: boolean
  referralSource: string

  // Step 7 — Review
  membershipStatus: MembershipStatus
  budgetRange: BudgetRange
  marketingConsent: boolean
  acknowledgedInquiry: boolean
  acknowledgedDeposit: boolean
  acknowledgedPricing: boolean
  acknowledgedContact: boolean
  acknowledgedPrivacy: boolean
}

export interface BookingConfig {
  maxFileCount: number
  maxFileSizeMB: number
  acceptedMimeTypes: string[]
  studioHours: string
  studioDays: string
  depositPercent: number
  agePolicy: string
  submissionBackendConnected: boolean
  seoTitle: string
  seoDescription: string
}
