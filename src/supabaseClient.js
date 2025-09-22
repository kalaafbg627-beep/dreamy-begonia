import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pxqsoldkmatvhxyyukgk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4cXNvbGRrbWF0dmh4eXl1a2drIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1MDgxNzgsImV4cCI6MjA3NDA4NDE3OH0.h_sHcjs5VVpzgIIiXhMEoZ-Bw30XaVDqR4OW_tYOJCY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
