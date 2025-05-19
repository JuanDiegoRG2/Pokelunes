// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lgjzruthfrwkxuiqlqbs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnanpydXRoZnJ3a3h1aXFscWJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODAxODIsImV4cCI6MjA2MzI1NjE4Mn0.T5nNBbWxoHENx_ls5T0vujeI29_Uqn9AKHKCsgWb1VM';
export const supabase = createClient(supabaseUrl, supabaseKey);