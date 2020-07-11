For learning purpose.

# React Hook
- useState: Function that lets you use state in a functional component
- useEffect: Function that lets you use something like lifecycle methods in a functional component
- useRef: Function that lets you create a 'ref' in a function component

### Primitive Hooks:
- useState
- useEffect
- useContext
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

### useState
|  | Class Component | Function Component |
| --- | :---: | :---: |
| Initialization | state = {activeIndex: 0 } | useState(0) |
| Reference | this.state.activeIndex | activeIndex |
| Updates | this.setState({ activeIndex: 10 }) | setActiveIndex(10) |

### useEffect
Allow function components to use something like lifecycle methods
We configure the hook to run some code automatically in one of three scenarios
- When the component is rendered for the first time only
- When the component is rendered for the first time and whenever it rerenders
- When the component is rendered for the first time and whenever it rerenders and some piece of data has changed

#### how to use useEffect
Call function\
useEffect(**first argument usually function**, **second argument**)

#### useEffect second argument
| [] | nothing | [data] |
| :---: | :---: | :---: |
| Run at initial render | Run at initial render | Run at inital render |
|    | Run after the every rerender | Run after every rerender if data has changed since last render |