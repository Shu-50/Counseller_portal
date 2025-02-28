const ProgressBar = ({ steps, activeStep }) => {
    return (
        <div className="bg-white p-4 border-b">
            <div className="flex justify-between mb-2">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`flex-1 text-center ${index === activeStep ? 'text-green-500 font-bold' :
                                index < activeStep ? 'text-blue-500' : 'text-gray-400'
                            }`}
                    >
                        {step.title}
                    </div>
                ))}
            </div>
            <div className="flex h-2 bg-gray-200 rounded">
                {steps.map((_, index) => (
                    <div
                        key={index}
                        className={`flex-1 ${index <= activeStep ? 'bg-green-500' : 'bg-gray-200'
                            } ${index === 0 ? 'rounded-l' : ''} ${index === steps.length - 1 ? 'rounded-r' : ''
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProgressBar;