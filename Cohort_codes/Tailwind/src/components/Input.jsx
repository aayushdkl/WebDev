export const Input = ({ onClick, type, placeholder }) => {
  return (
    <div
      className={`text-white bg-blue-700 rounded-md text-sm text-center py-5 w-auto inline-block outline-none pointer-events-none`}
    >
      <input
        type={type}
        placeholder={placeholder}
        onClick={onClick}
        className="text-black outline-none rounded-lg px-10 py-2  pointer-events-auto"
      />
    </div>
  )
}
