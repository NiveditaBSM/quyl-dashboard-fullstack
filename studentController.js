
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://utweohgsmzfabmfavlps.supabase.co'
const supabaseServiceKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseServiceKey)

exports.getStudents = async (request, response) => {
    try {
        const data = await supabase.from('students').select('*');
        response.status(200).json(data);
    } catch (error) {
        console.log('Error: ', error.message);

    }
}

exports.addStudent = async (request, response) => {
    const { name, cohort, courses, date_joined, status } = request.body;
    try {
        const data = await supabase.from('students').insert([{ name, cohort, courses, date_joined, status }]);
        response.status(200).json(data);
    } catch (error) {
        console.log('Error: ', error.message);
    }
}



