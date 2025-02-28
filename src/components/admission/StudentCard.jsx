const StudentCard = ({ student, isSelected, isCompleted, onClick }) => {
    const baseStyles = "p-4 border rounded-lg cursor-pointer";
    const statusStyles = isCompleted
        ? "bg-green-50 border-green-200"
        : isSelected
            ? "border-blue-500"
            : "border-gray-200 hover:bg-gray-50";

    return (
        <div
            className={`${baseStyles} ${statusStyles}`}
            onClick={onClick}
        >
            <h3 className="font-medium">{student.name}</h3>
            <p className="text-sm text-gray-500">Token: {student.token}</p>
            {isCompleted && (
                <p className="text-sm text-green-600">Admission Completed</p>
            )}
        </div>
    );
};

export default StudentCard;