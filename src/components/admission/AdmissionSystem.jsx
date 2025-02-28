import { useState } from 'react';
import StudentList from './StudentList';
import CompletedList from './CompletedList';
import ProgressBar from './ProgressBar';
import AdmissionForm from './AdmissionForm';
import { steps } from '../../data/formQuestions';

const AdmissionSystem = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [students, setStudents] = useState([
        { id: 1, name: "John Doe", token: "5w5d5w", completed: false },
        { id: 2, name: "Jane Doe", token: "6a7b8c", completed: false },
    ]);

    const handleSubmit = () => {
        if (selectedStudent) {
            setStudents(students.map(student =>
                student.id === selectedStudent.id
                    ? { ...student, completed: true }
                    : student
            ));
            setSelectedStudent(null);
            setActiveStep(0);
        }
    };

    return (
        <div className="flex flex-1 overflow-hidden">
            <div className="w-[20%] bg-white p-4 border-r">
                <StudentList
                    students={students}
                    selectedStudent={selectedStudent}
                    onSelectStudent={setSelectedStudent}
                />
                <CompletedList students={students} />
            </div>

            <div className="w-[80%] flex flex-col">
                <ProgressBar steps={steps} activeStep={activeStep} />

                <div className="flex-1 overflow-y-auto p-6">
                    {selectedStudent ? (
                        <AdmissionForm
                            step={steps[activeStep]}
                            onPrevious={activeStep > 0 ? () => setActiveStep(prev => prev - 1) : null}
                            onNext={() => {
                                if (activeStep < steps.length - 1) {
                                    setActiveStep(prev => prev + 1);
                                } else {
                                    handleSubmit();
                                }
                            }}
                            isLastStep={activeStep === steps.length - 1}
                        />
                    ) : (
                        <div className="text-center text-gray-500 mt-10">
                            Select a student to begin the admission process
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdmissionSystem;