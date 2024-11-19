# 0x05. React state
`Front-end` `JavaScript` `ES6` `React`

![React state](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/f316c008fc6a791bf403.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20220805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220805T081218Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=75de71d3530df7ac46b548a819a3ecebec4983d3dc101c846fe6b64668eee367)

## Resources
**Read or watch:**

* [State and lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
* [SetState and State callback](https://reactjs.org/docs/react-component.html#setstate)
* [Context](https://reactjs.org/docs/context.html)
* [Forms and Controlled components](https://reactjs.org/docs/forms.html)
* [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
* [React Hooks](https://reactjs.org/docs/hooks-intro.html)
* [Enzyme State](https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/state.html)
* [Enzyme SetState](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/setState.html)
* [Enzyme Instance](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/instance.html)
* [Enzyme Simulate](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/simulate.html)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

* What the state of a component or a container is
* The lifecycle of a component
* How to modify a state and execute code in the right order
* What a controlled component is
* How to use Forms in React
* How to reuse smaller components, keep them pure, and lift its state to principal containers
* The use of a React Hook and how to create one
* How to test State changes with Enzyme

**Tasks**
`0.` Adding a local state for notifications `mandatory`
Using the previous project `(0x05. React inline styling)`, we have modularized our React application without worrying about interactions and state, which is usually a recommended process of development. Now, our application is in a good place to start adding logic and state.

**Modify the App component in** `task_0/dashboard/src/App.App.js:`

Create a local state to store a `displayDrawer` element:

* Define the default state for the state in the `constructor` of the Class
* Create a function named `handleDisplayDrawer` that will change the value of `displayDrawer` to true
* Create a function named `handleHideDrawer` that will change the value of `displayDrawer` to false
**Modify the** `Notifications` **import in** `task_0/dashboard/src/App/App.js:`

* Pass to the component the prop `displayDrawer` using the local state
* Pass the new functions `handleDisplayDrawer` and `handleHideDrawer`
**Modify the App test suite in** `task_0/dashboard/src/App/App.test.js:`

* Add a test to verify that the default state for `displayDrawer` is `false`. Verify that after calling `handleDisplayDrawer`, the state should now be `true`
* Add a test to verify that after calling `handleHideDrawer`, the state is updated to be `false`
**Modify the Notifications component in** `task_0/dashboard/src/Notifications/Notifications.js:`

* Define the `propTypes` and the `defaultProps` for the new props
* When clicking on `Your notifications`, call `handleDisplayDrawer`
* When clicking on the close button, call `handleHideDrawer`
* At this point, after reloading the app, you should be able to show / hide the notifications panel

**Modify the Notifications test suite in** `task_0/dashboard/src/Notifications/Notifications.test.js:`

* Add a test to verify that clicking on the menu item calls `handleDisplayDrawer`
* Add a test to verify that clicking on the button calls `handleHideDrawer`
**Tips:**

* Remember that you implemented shouldComponentUpdate. You will need to modify the logic to allow the component to rerender when the prop displayDrawer changes
* Use setState and instance when creating tests with Enzyme
* Remember to use spies to verify if a function is being called. You can pass a spy as a property
**Requirements:**

* Do not forget to bind the functions you are passing to the children to improve performances
* When running, there should not be any lint error in the console
   
