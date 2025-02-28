import { useState } from 'react';
import { steps } from '../../data/formQuestions';
import StudentList from '../admission/StudentList';
import AdmissionForm from '../admission/AdmissionForm';

const AdmissionCounseling = () => {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [students, setStudents] = useState([
        { id: 1, name: "John Doe", token: "5w5d5w", completed: false },
        { id: 2, name: "Jane Doe", token: "6a7b8c", completed: false },
    ]);

    const handleComplete = () => {
        if (selectedStudent) {
            setStudents(students.map(student =>
                student.id === selectedStudent.id
                    ? { ...student, completed: true }
                    : student
            ));
            alert(`Admission finalized for ${selectedStudent.name}`);
            setSelectedStudent(null);
        }
    };

    return (
        <div className="flex h-full">
            <div className="w-[30%] bg-white p-4 border-r">
                <h1 className="text-xl font-bold mb-4 text-red-600">Admission Finalization Desk</h1>
                <StudentList
                    students={students.filter(s => !s.completed)}
                    selectedStudent={selectedStudent}
                    onSelectStudent={setSelectedStudent}
                />

                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Completed Admissions</h2>
                    <div className="space-y-2">
                        {students.filter(s => s.completed).map(student => (
                            <div
                                key={student.id}
                                className="p-4 border rounded-lg bg-green-50 border-green-200"
                            >
                                <h3 className="font-medium">{student.name}</h3>
                                <p className="text-sm text-gray-500">Token: {student.token}</p>
                                <p className="text-sm text-green-600">Admission Completed</p>
                            </div>
                        ))}
                        {students.filter(s => s.completed).length === 0 && (
                            <p className="text-gray-500">No completed admissions yet.</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="w-[70%] flex flex-col">
                <div className="bg-white p-4 border-b">
                    <h2 className="text-lg font-semibold text-red-600">
                        Admission Finalization Form
                    </h2>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    {selectedStudent ? (
                        <AdmissionForm
                            step={steps[3]} // Admission is the fourth step
                            onNext={handleComplete}
                            isLastStep={true}
                        />
                    ) : (
                        <div className="text-center text-gray-500 mt-10">
                            Select a student to finalize admission
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdmissionCounseling;