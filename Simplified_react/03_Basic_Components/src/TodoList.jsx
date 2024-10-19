export function TodoList({ children, isComplete }) {
  //The function name should start with a capital letter to be recognized as a component.If starting with a lowercase letter, it will be treated as a regular HTML element.
  return (
    <div>
      <input type="checkbox" checked={isComplete} />
      <label>{children}</label>
    </div>
  )
}
