module.exports = "# Exercise 1: Getting Started with react!\n---\n\nThis is a starting application template for working through the steps of Odecee\'s react training.\n\n\n## A. Required Resources\n\n---\n\nThe following resources contain expected prior-knowledge that you will be helpful to understand before starting.\n\n#### [Rethinking best practices - Pete Hunt 🔗](https://www.youtube.com/watch?v=x7cQ3mrcKaY)\nThis talk is from late 2013, 7 months after ReactJS was released.\nSince then Components have become much more ubiquitous, the first half of the talk could now be applied more generally to web components.\nThe second half of the talk is specific to React\'s implementation and design decisions\n\n<a href=\"http://www.youtube.com/watch?feature=player_embedded&v=x7cQ3mrcKaY\" target=\"_blank\">\n   <img src=\"http://img.youtube.com/vi/x7cQ3mrcKaY/0.jpg\"\n      alt=\"Rethinking best practices - Pete Hunt\" width=\"240\" height=\"180\" />\n</a>\n\n##### Key points\n\n* Components reduce coupling between modules and increase cohesion within modules\n* For testability Components should be as stateless as possible (Take input as props and output and output a renderable react object (component/element)\n* When using react you don\'t directly interact with the DOM, you render a tree of react objects and react determines the most performant way to update the DOM\n\n#### [Hello World in React - React Docs - 🔗](https://facebook.github.io/react/docs/hello-world.html)\n\n##### Key Points\n\n* ReactDom.render() attaches a react component (or tree of components) to a element in a webpage.\n\n#### [Introducing JSX - React Docs 🔗](https://facebook.github.io/react/docs/introducing-jsx.html)\n\n##### Key Points\n\n* JSX isn\'t html or strings.\n* Each JSX element is transpiled into a javascript function during when building.\n\n#### [Rendering Elements - React Docs 🔗](https://facebook.github.io/react/docs/rendering-elements.html)\n\n##### Key Points\n\n* Although react calls render() on components often it will only update the specific parts of the DOM that change.\n\n#### [Lists and Keys - React Docs 🔗](https://facebook.github.io/react/docs/lists-and-keys.html)\n\n##### Key Points\n\n* In order to iterate through a list of elements we can use the javascript Array.map() function and return JSX.\n* React required that each of there iterated elements have a special \"key\" attribute.\n* keys should be as unique as possible, using object.id is preferable but using the index of the map function is also OK.\n\n#### [Conditional Rendering - React Docs 🔗](https://facebook.github.io/react/docs/conditional-rendering.html)\n\n##### Key Points\n\n* You can store elements in variables to as a way to conditionally render something.\n* Inline JS operators are also commonly used inside JSX.\n\n## B. Steps\n\n---\n\n#### Step 0 - Understanding Our Starter Application\n\n##### Key Files\n\n    public/index.html - The template for the html file that our browser loads (generated by create-react-app)\n\n    src/index.js - The Entry point of the application\n\n    src/components/AppContainer.js - This is the container of all the different page components\n\n    src/components/pages/ - The The folder where the pages are located\n\n##### Material Design\n\nTo use Google\'s Material Design we\'ve included two libraries in the starter project [material-design-lite](https://getmdl.io/) and [react-mdl](https://react-mdl.github.io/react-mdl/)\n\nThis is an example of how you can use material-design-lite\'s css classes directly to make a list. \n\n```html\n  <ul class=\"demo-list-item mdl-list\">\n    <li class=\"mdl-list__item\">\n      <span class=\"mdl-list__item-primary-content\">\n        Bryan Cranston\n      </span>\n    </li>\n    <li class=\"mdl-list__item\">\n      <span class=\"mdl-list__item-primary-content\">\n        Aaron Paul\n      </span>\n    </li>\n    <li class=\"mdl-list__item\">\n      <span class=\"mdl-list__item-primary-content\">\n        Bob Odenkirk\n      </span>\n    </li>\n  </ul>\n```\n\nreact-mdl contains a set of react components that act as a convienience wrapper around the material-design-lite css classes.\n\nHere is the example above re-done using react-mdl\n\n```js\n  import {List, ListItem} from \'react-mdl\';\n  \n  ...\n\n  const list = (\n    <List>\n      <ListItem>Bryan Cranston</ListItem>\n      <ListItem>Aaron Paul</ListItem>\n      <ListItem>Bob Odenkirk</ListItem>\n    </List>\n  );\n```\n\nThe same html content is rendered with the two examples but using the react-mdl components can make your components and jsx easier to understand.\n\n\n#### Step 1 - Using Material design lite with React\n\nUsing the information from step 0 convert the login Accounts page to use react-mdl components instead of the material-design-lite css classes directly\n\n#### Step 2 - Using JSX\n\nThe AccountDetails.js and BalanceTransfers page have no content in them. Using JSX and components from react-mdl implement the pages.\n\n**Account Details Page**\n\n* show all the information available in the fixtures imported from \'react-training-lib\'\n* This will include a list of all of the transactions for the account\n\n**Balance Transfer**\n\n* Show two selection fields that allow you to select one of the accounts from the fixtures.\n* You shouldn\'t be able to select the same account in both selections.\n* Include a button labelled \'Transfer\' but it does not need to perform any action.\n\n\n*The view model fixtures are logged in the browser console.*\n\n#### Step 3 - Making Components\n\nTodo: steps for implementing the accounts page\n\n*The view model fixtures are logged in the browser console.*\n\n## C. Other Helpful Resources\n\n---\n\n#### [React Dev Tools - React Docs 🔗](https://github.com/facebook/react-devtools)\n";