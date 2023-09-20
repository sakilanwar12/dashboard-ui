

const Badge = ({ count, variant }) => {
    return (
        <>
            <span className={`absolute -top-3 -right-3  text-secondary text-xs rounded-sm font-medium h-4 w-4 place-center ${variant?variant:'bg-primary'}`}>{count}</span>
        </>
    );
};

export default Badge;