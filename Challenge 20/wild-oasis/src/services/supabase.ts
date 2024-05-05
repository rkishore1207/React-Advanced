import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://yzkabswhedyznfpavlhi.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6a2Fic3doZWR5em5mcGF2bGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4MTMwMDYsImV4cCI6MjAzMDM4OTAwNn0.u2a-jRJ3Fx5txFcZh6sxbchFUY3uZU8nGv6k8HEuiIQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;