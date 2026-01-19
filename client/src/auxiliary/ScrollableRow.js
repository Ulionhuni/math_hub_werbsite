const ScrollableRow = () => {
    const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

    return (
        <div className="overflow-x-auto whitespace-nowrap p-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="inline-block w-40 h-24 bg-blue-500 text-white text-center leading-[6rem] rounded-lg mx-2"
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default ScrollableRow;