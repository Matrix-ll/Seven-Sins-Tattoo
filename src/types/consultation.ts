export type ConsultationInsert = {
  full_name: string
  email: string
  phone?: string
  contact_method?: string
  placement: string
  size?: string
  style?: string
  color_type?: string
  description: string
  preferred_dates?: string
  artist_preference?: string
  budget?: string
}

export type ConsultationRow = ConsultationInsert & {
  id: string
  created_at: string
  updated_at: string
}
