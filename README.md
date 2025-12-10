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

