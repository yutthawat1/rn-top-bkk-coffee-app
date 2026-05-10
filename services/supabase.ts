// ใช้ตั้งค่าการเชื่อมต่อไปยัง supsbase ต้องใช้กับ URL ขแง supabase
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://dcpxuaqmklhjakuzshfk.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjcHh1YXFta2xoamFrdXpzaGZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzODAzNjAsImV4cCI6MjA5Mzk1NjM2MH0.5mxkdbemNV-TBf3uimrVxOSCKNxWNLIxbSmBKjwAGEU'
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)