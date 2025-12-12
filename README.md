This is food ordering Application

Two types of export
Named Export => can be import like variable inside {}
Default Export=> Default will be imported only with function name.

React Hooks:
1.useState()hook
2.useEffect() hook

Reconsilation Algorithem/React Fibre:
This uses the Diff Algorithem
React converts the Elements into the Virtual DOM. Virtual DOM is not actual DOM its object.
whenever state changes the algorithem checks the difference between old VDOM and New VDOM is difference found then it will update the actual DOM.
React is faster due to this Virtual DOM.(Cause check difference between object is faster than to check actual DOM difference.)
As soon as data layer changes it will be reflect on UI layer this is done by the diff algorithem.
It keeps data layer and UI layer in sync.

Reconsilation:

The algorithm React uses to diff one tree with another to determine which parts need to be changed.

React Router:
React Router is coming from react-router-dom.we have installed the 6.22 v as the latest version having error.
CreateBrowserRouter, RouterProvider and Outlet those are imported from react-router-dom
Link component is imported from react-router-dom and its similar with a tag. Only difference is on click of it will redirect to reference without refreshing the page.
If we want to use the id from website link then use {useParams} from react-router-dom.
In Error customised component we can use {useRouterError} from it we can get the details of errror.
Outlet component combinly called the children element from the createBrowserRouter.
Children array consisting of the all children objects with path and element.

Class Based Component
Class base component is similar with function based component for understanding.
As we can create class base component with name class and extends from React.Component.
It has construstor() and render() method.
Render method is return some piece of JSx code. we can export the class as default.
Construstor (props) have the super(props) which calling the parent props and we can use props by this.props inside class.

React Class Based Life cycle Diagram:
Life cycle has two phase first is render phase and second is commit phase.
Inside the first phase class instance is rendered and all parent and child class constusctor and render method is called in this phase.
After the child render componentDidMount is called . This is similar with useEffect hook. where we can call the api and response.
It goes into the Commit phase and call the componentDidMount() function.
Inside the componentDidMount we have callled the json and we need to update the local state variable.
Here Mounting the cycle is completed and goes to the Updating the cycle.

Updating the state variable we are using the this.setState({}) inside this we can update the state variable.
whenever the state updates the component re-render . Render method will be called. 
After render phase it goes to the commit phase where he called the componentDidUpdate() method.

Unmounting is called the componentWillUnmount() method.This is very important as unset the variable.
As we are moving from one page to another without reloading page its necessory to remove the variables which are used in mounting otherwise it will called on every page.Eample:setInterval() is called in componentDidMount() method , it has to be clearInterval inside the componentwillUnmount() method.
LifeCycleDiagram : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

Important Note while Using the useEffect() hook:
Inside the useEffect also we have return method where we need to clear the interval as we have used inside the useffect callback function.


