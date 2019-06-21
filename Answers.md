1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Array.object.assign
Array.concat
Array.filter
Array.map
Array.concat and Array.object.assign are : used to create a new object while extending the properties of another object
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
`Actions` are packets of information that contain an action type and some data that we want associated with that action type.
`Reducers` are methods that to respond to actions and update state
`Store` as the name implies houses all the states of our application.
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
`Application state` are state gotten from an external resource like `Redux`.
`Component state` are state gotten from the top level of our file withn the same component file.
4.  What is middleware?
This are software that provides additional functionality to another software beyond those available in the software
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
`Redux Thunk` are redux middleware used to implement asynchronous functionality in redux
6.  Which `react-redux` method links up our `components` with our `redux store`?
the `connect` method is used to hook up our components to the redux store
