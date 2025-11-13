Understanding Re-rendering (Step 5)

Each time setCount() or setText() runs:

React detects state change

React re-renders the component

React compares the new Virtual DOM with old one

React updates only changed parts of the real DOM (efficiently)

 Simple Diagram
     [ User Action ]
            ↓
      State Changes (setCount)
            ↓
     React Re-renders Component
            ↓
 React compares Virtual DOM (diffing)
            ↓
   Updates only changed part of DOM

How React Decides What to Update
React creates a Virtual DOM — a lightweight copy of the real DOM.
When state changes, React re-runs the component and produces a new Virtual DOM.
It compares the old Virtual DOM and the new one using a process called diffing.
React then updates only the changed elements in the real DOM.


     ┌───────────────────────────┐
     │       User Action         │
     │   (e.g., Button Click)    │
     └────────────┬──────────────┘
                  ↓
        State Change (setState)
                  ↓
        React Re-renders Component
                  ↓
        Virtual DOM Comparison (Diffing)
                  ↓
        Update Only Changed Parts in DOM
                  ↓
        New UI Displayed
