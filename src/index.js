import React from 'react';
import ReactDOM from 'react-dom';

console.log(process.env.DEV_URL);

const title = 'React with Webpack and Babel';

class RootApp extends React.Component {
	
	helloWorld = () => {
	console.log('Hello');
	}

    render(){
	this.helloWorld();
      return(
        <div>
          <div>{title}</div>
        </div>
      );
    }

}

export default RootApp;

ReactDOM.render(
  <RootApp />,
  document.getElementById('app')
);