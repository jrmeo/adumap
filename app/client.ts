import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://whuxmrfelbvwimrreszk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndodXhtcmZlbGJ2d2ltcnJlc3prIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4OTYyNDMsImV4cCI6MjAxODQ3MjI0M30.nOozBXrxYErV-sDm9X68NUlghZ-VMHZmOMf-mKXK0xg'
export const supabase = createClient(supabaseUrl, supabaseKey)