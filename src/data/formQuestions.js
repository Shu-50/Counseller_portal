
export const steps = [
    {
        title: "Professional Counseling",
        // questions: [
        
        //     { id: "10th Marks ", label: "10th Marks", type: "number" },
        //     { id: "12th Marks", label: "12th Marks", type: "number" },
        //     { id: "CET score", label: "CET score", type: "number" },
        //     { id: "JEE score", label: "JEE score", type: "number" },
        //     { id: "Remarks", label: "Remarks", type: "text" },
        // ]
        questions: [
            { id: "Name of Candidate:", label: "Name of Candidate", type: "text" },
            { id: "Father Name:", label: "Father Name", type: "text" },
            { id: "Mother Name:", label: "Mother Name", type: "text" },
            { id: "Permanent Address:", label: "Permanent Address", type: "text" },
            { id: "Pin code:  ", label: "Pin code ", type: "number" },
            { id: "Email:  ", label: "Email", type: "text" },
            { id: "Mobile Number:  ", label: "Mobile Number", type: "number" },
            { id: "Nationality:  ", label: "Nationality", type: "text" },
            { id: "Category:   ", label: " Category", type: "text" },


            { id: "ssc_board", label: "SSC/10th Board", type: "text" },
            { id: "ssc_year", label: "SSC Year of Passing", type: "number" },
            { id: "ssc_marks", label: "SSC Marks Obtained", type: "number" },
            { id: "ssc_total", label: "SSC Out of 500/600", type: "number" },
            { id: "ssc_percentage", label: "SSC %", type: "number" },

            { id: "hsc_board", label: "HSC/12th Board", type: "text" },
            { id: "hsc_year", label: "HSC Year of Passing", type: "number" },
            { id: "hsc_physics", label: "HSC Physics Marks", type: "number" },
            { id: "hsc_chemistry", label: "HSC Chemistry Marks", type: "number" },
            { id: "hsc_math", label: "HSC Math Marks", type: "number" },
            { id: "hsc_total", label: "HSC Out of 500/600", type: "number" },
            { id: "hsc_percentage", label: "HSC %", type: "number" },

            { id: "jee_year", label: "JEE Year of Passing", type: "number" },
            { id: "jee_physics", label: "JEE Physics Marks", type: "number" },
            { id: "jee_chemistry", label: "JEE Chemistry Marks", type: "number" },
            { id: "jee_math", label: "JEE Math Marks", type: "number" },
            { id: "jee_percentage", label: "JEE %", type: "number" },

            { id: "cet_year", label: "MHT-CET Year of Passing", type: "number" },
            { id: "cet_physics", label: "MHT-CET Physics Marks", type: "number" },
            { id: "cet_chemistry", label: "MHT-CET Chemistry Marks", type: "number" },
            { id: "cet_math", label: "MHT-CET Math Marks", type: "number" },
            { id: "cet_percentage", label: "MHT-CET %", type: "number" },
            { id: "Enrollment Id:", label: "Enrollment Id", type: "number" },
            { id: "Branch:", label: "Branch", type: "text" },
            

        ]

    },
    {
        title: "Campus Counseling",
        questions: [
            { id: "campus_visit", label: "Have you visited the campus before?", type: "text" },
            { id: "accommodation", label: "Do you require hostel accommodation?", type: "text" },
            { id: "transport", label: "Transport requirements from which area?", type: "text" },
            { id: "facilities", label: "Which campus facilities interest you most?", type: "text" },
            { id: "sports_interest", label: "Interested in sports facilities?", type: "text" },
            { id: "library_access", label: "Will you need extended library access?", type: "text" },
            { id: "lab_requirements", label: "Any specific laboratory requirements?", type: "text" },
            { id: "cultural_activities", label: "Interest in cultural activities?", type: "text" }
        ]
    },
    {
        title: "Domain Counseling",
        questions: [
            { id: "specialization", label: "Preferred specialization?", type: "text" },
            { id: "programming_exp", label: "Programming experience (languages/frameworks)?", type: "text" },
            { id: "technical_skills", label: "Technical skills and certifications?", type: "text" },
            { id: "project_exp", label: "Project experience?", type: "text" },
            { id: "internship_exp", label: "Any internship experience?", type: "text" },
            { id: "research_interests", label: "Research interests if any?", type: "text" },
            { id: "industry_preference", label: "Preferred industry sector?", type: "text" },
            { id: "technical_courses", label: "Online technical courses completed?", type: "text" }
        ]
    },
    {
        title: "Admission Finalization",
        questions: [
            { id: "documents_verification", label: "All required documents submitted?", type: "text" },
            { id: "fee_structure", label: "Fee structure understanding acknowledgment", type: "text" },
            { id: "scholarship_application", label: "Applying for any scholarships?", type: "text" },
            { id: "payment_mode", label: "Preferred mode of fee payment?", type: "text" },
            { id: "installment_option", label: "Requiring installment payment option?", type: "text" },
            { id: "term_acceptance", label: "Terms and conditions acceptance", type: "text" },
            { id: "identity_proof", label: "Identity proof submitted (type)?", type: "text" },
            { id: "guardian_details", label: "Guardian contact details", type: "text" }
        ]
    }
];