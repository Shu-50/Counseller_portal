import StudentCard from './StudentCard';

const CompletedList = ({ students }) => {
    const completedStudents = students.filter(student => student.completed);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Completed Admissions</h2>
            <div className="space-y-2">
                {completedStudents.map(student => (
                    <StudentCard
                        key={student.id}
                        student={student}
                        isCompleted={true}
                    />
                ))}
            </div>
        </div>
    );
};

export default CompletedList;