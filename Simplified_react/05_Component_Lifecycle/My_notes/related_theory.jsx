//**Virtual DOM */
//Virtual DOM are lightweight copies of the actual DOM. They are used to increase the performance of the application.
//The way React works is that it creates a virtual DOM and whenever there is a change in the actual DOM, it updates the virtual DOM first.
//The internal working of React is such that it compares the virtual DOM with the actual DOM and only updates the actual DOM where there is a difference.
//The way React does this is by using a process called Reconciliation. Reconciliation is the process of comparing the virtual DOM with the actual DOM and updating the actual DOM where there is a difference.
//This process is what makes React so fast and efficient.

//**Component Lifecycle */
//React components have a lifecycle that is divided into three phases: Mounting, Updating, and Unmounting.
//Each phase has its own methods that are called at different points in the lifecycle of a component.

//The methods that are called in each phase are as follows:

//Mounting: These methods are called when an instance of a component is being created and inserted into the DOM.
//constructor() - This is the first method that is called when a component is created.
//static getDerivedStateFromProps() - This method is called right before the render method is called.
//render() - This method is called to render the component.
//componentDidMount() - This method is called after the component is rendered.

//Updating: These methods are called when a component is being re-rendered due to changes in props or state.
//static getDerivedStateFromProps() - This method is called right before the render method is called.
//shouldComponentUpdate() - This method is called before the component is re-rendered.
///render() - This method is called to render the component.
//getSnapshotBeforeUpdate() - This method is called right before the changes from the virtual DOM are to be reflected in the actual DOM.
//componentDidUpdate() - This method is called after the component is re-rendered.

//Unmounting: This method is called when a component is being removed from the DOM.
//componentWillUnmount() - This method is called just before the component is removed from the DOM.
//These methods are called automatically by React at different
//points in the lifecycle of a component. They can be used to perform different actions at different points in the lifecycle of a component.

/**Use Effect */
// useEffect is one of the most important hooks in React, and it's used to manage side effects in your components. Let’s break it down step by step:

// What is useEffect?
// In simple terms, useEffect allows your component to perform tasks after it has rendered (shown on the screen). These tasks can include things like:
// Fetching data from an API
// Updating the page title
// Setting up timers
// Listening to events (e.g., scrolling or resizing)
// Cleaning up resources (like removing event listeners when the component is no longer needed)
