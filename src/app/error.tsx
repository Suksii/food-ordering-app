"use client"

const Error = ({ reset }: { error: Error; reset: () => void }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4 font-inria">
            <h1 className="text-3xl font-bold">Something went wrong</h1>
            <p className="text-gray-500">Please try again in a moment.</p>
            <button onClick={reset} className="bg-primary text-white font-bold px-6 py-2 uppercase rounded-md hover:bg-primary-dark duration-300">
                Try again
            </button>
        </div>
    );
};

export default Error;
