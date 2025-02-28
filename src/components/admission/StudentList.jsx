import StudentCard from './StudentCard';

const StudentList = ({ students, selectedStudent, onSelectStudent }) => {
    const pendingStudents = students.filter(student => !student.completed);

    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Student Tokens</h2>
            <div className="space-y-2">
                {pendingStudents.map(student => (
                    <StudentCard
                        key={student.id}
                        student={student}
                        isSelected={selectedStudent?.id === student.id}
                        onClick={() => onSelectStudent(student)}
                    />
                ))}
            </div>
        </div>
    );
};

export default StudentList;