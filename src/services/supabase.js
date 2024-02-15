import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zaohmejelerzcztsbzjt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inphb2htZWplbGVyemN6dHNiemp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3MDA5MTIsImV4cCI6MjAyMzI3NjkxMn0.r-GPUcYLeTqDLLRO6vLPaxJgEa6wRbVIj1LW8sQV7MA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
