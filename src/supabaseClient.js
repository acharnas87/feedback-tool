import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://cwcuadbfonoewyzthxal.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3Y3VhZGJmb25vZXd5enRoeGFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0OTA0MTMsImV4cCI6MjA3MzA2NjQxM30.9RvpynNJhr7KkYjQt0K8SxC5IC-0yKbP45at23SPnlk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);