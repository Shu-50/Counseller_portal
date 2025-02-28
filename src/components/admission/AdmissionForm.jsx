import Button from '../ui/Button';

const AdmissionForm = ({ step, onPrevious, onNext, isLastStep }) => {
    return (
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {step.questions.map(question => (
                <div key={question.id} className="space-y-2">
                    <label className="block font-medium">{question.label}</label>
                    <input
                        type={question.type}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={question.label}
                    />
                </div>
            ))}

            <div className="space-y-2">
                <label className="block font-medium">Remarks</label>
                <textarea
                    className="w-full p-2 border rounded h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add any additional remarks..."
                />
            </div>

            <div className="flex justify-between pt-4">
                <Button
                    variant="secondary"
                    onClick={onPrevious}
                    disabled={!onPrevious}
                >
                    Previous
                </Button>
                <Button onClick={onNext}>
                    {isLastStep ? 'Submit' : 'Next'}
                </Button>
            </div>
        </form>
    );
};

export default AdmissionForm;