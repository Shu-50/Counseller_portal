import { useState } from 'react';
import { steps } from '../../data/formQuestions';
import StudentList from '../admission/StudentList';
import AdmissionForm from '../admission/AdmissionForm';

const DomainCounseling = () => {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [students, setStudents] = useState([
        { id: 1, name: "John Doe", token: "5w5d5w", completed: false },
        { id: 2, name: "Jane Doe", token: "6a7b8c", completed: false },
    ]);

    const handleComplete = () => {
        if (selectedStudent) {
            alert(`Domain counseling completed for ${selectedStudent.name}`);
            setSelectedStudent(null);
        }
    };

    return (
        <div className="flex h-full">
            <div className="w-[30%] bg-white p-4 border-r">
                <h1 className="text-xl font-bold mb-4 text-purple-600">Domain Counseling Desk</h1>
                <StudentList
                    students={students}
                    selectedStudent={selectedStudent}
                    onSelectStudent={setSelectedStudent}
                />
            </div>

            <div className="w-[70%] flex flex-col">
                <div className="bg-white p-4 border-b">
                    <h2 className="text-lg font-semibold text-purple-600">
                        Domain Counseling Form
                    </h2>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    {selectedStudent ? (
                        <AdmissionForm
                            step={steps[2]} // Domain counseling is the third step
                            onNext={handleComplete}
                            isLastStep={true}
                        />
                    ) : (
                        <div className="text-center text-gray-500 mt-10">
                            Select a student to begin domain counseling
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DomainCounseling;