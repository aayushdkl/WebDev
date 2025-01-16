export const Button = ({ disabled, children, onClick, variant }) => {
  //clsx , cx
  return (
    <div
      onClick={onClick}
      className={`text-white cursor-pointer ${
        disabled ? "bg-blue-200" : "bg-green-400"
      } rounded-md text-sm text-center px-24 py-2 w-auto inline-block`}
    >
      {children}
    </div>
  )
}
