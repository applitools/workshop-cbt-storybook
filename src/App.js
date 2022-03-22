import logo from './logo.svg';
import './App.css';
import Button from './stories/Button.jsx'
import TextInput from './stories/TextInput.jsx'
import ScrollButton from './stories/ScrollButton';
import React, { useEffect } from "react";

function App() {

  useEffect(() => {
    document.title = "Visually Testing Storybook Components in a React App";  
  }, []);

  return (
    <div className="App">

      <header className="App-header" id="slide1">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Let's learn how to visually test components using Applitools Eyes!</p>
        <p>We will use this <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
          React
          </a> app with <a
            className="App-link"
            href="https://storybook.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
          Storybook
          </a> components.</p>
        <p>
          <a
            className="App-link"
            href="https://github.com/applitools/workshop-cbt-storybook"
            target="_blank"
            rel="noopener noreferrer"
          >
            [Demo Project Repository]
          </a>
        </p>
        <p className="scroll-arrow-margin"><ScrollButton scrollToId="slide2"/></p>
      </header>

      <header className="App-header" id="slide2">
        <p>Web apps are full of small, reusable pieces called <b>components</b>.</p>
        <div class="component-container">
          <div>Here's a component named <code>Button</code>:</div>
          <div><Button primary label="Click me!" size="large"></Button></div>
          <div>Here's one named <code>TextInput</code>:</div>
          <div><TextInput/></div>
          <div>The <code>ScrollButton</code> is a component, too:</div>
          <div><ScrollButton/></div>
        </div>
        <p>Components enable developers to create uniform UIs without duplicating code.</p>
        <p className="scroll-arrow-margin"><ScrollButton scrollToId="slide3" /></p>
      </header>

      <header className="App-header" id="slide3">
        <p>What happens if a component changes?</p>

        <div class="component-container">
          <div>What if our button...</div>
          <div><Button primary label="Click me!" size="large"></Button></div>
          <div>...becomes rectangular?</div>
          <div><Button primary label="Click me!" rectangular="true" size="large"></Button></div>
          <div>...or changes color?</div>
          <div><Button primary label="Click me!" size="large" backgroundColor="red"></Button></div>
        </div>

        <p>Is that acceptable? Is that bad? Will anyone notice?</p>
        <p className="scroll-arrow-margin"><ScrollButton scrollToId="slide4" /></p>
      </header>

      <header className="App-header" id="slide4">
        <p>What if our button become enormous, like this?</p>
        <p><Button primary label="Click me!" size="enormous"></Button></p>
        <p>Clearly, this could ruin the user experience on multiple pages.</p>
        <p>Not all changes might be this obvious.</p>
        <p className="scroll-arrow-margin"><ScrollButton scrollToId="slide5" /></p>
      </header>
      
      <header className="App-header" id="slide5">
        <p>We need a way to visually check for component changes:</p>
        <div class="comparison-container">
          <div><Button primary label="Click me!" size="large"></Button></div>
          <div>&lt;=&gt;</div>
          <div><Button primary label="Click me!" rectangular="true" size="large"></Button></div>
          <div>The "baseline"</div>
          <div></div>
          <div>The "checkpoint"</div>
        </div>
        <p><a
            className="App-link"
            href="https://applitools.com/products-eyes/"
            target="_blank"
            rel="noopener noreferrer"
          >
          Applitools Eyes
          </a> does this automatically for Storybook components.
        </p>
        <p>It captures snapshots for each story and uses <b>Visual AI</b> for comparisons.</p>
        <p className="scroll-arrow-margin"><ScrollButton scrollToId="slide6" /></p>
      </header>

      <header className="App-header" id="slide6">
        <div className="storybook-img-container">
          <img src="storybook-viewer.png" className="applitools-img" alt="Storybook Viewer"/>
        </div>
        <p>We can check Storybook components manually, but we would probably miss things.</p>
        <p>It's also a hassle to test components across different browsers.</p>
        <p className="scroll-arrow-margin"><ScrollButton scrollToId="slide7" /></p>
      </header>

      <header className="App-header" id="slide7">
        <p>Let's see how to visually test Storybook components with Applitools!</p>
        <div className="applitools-img-container">
          <img src="applitools-dashboard.png" className="applitools-img" alt="Applitools Dashboard"/>
        </div>
        <p>
          Instructions are in the <a
            className="App-link"
            href="https://github.com/applitools/workshop-cbt-storybook/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
          README
          </a> and <a
            className="App-link"
            href="https://github.com/applitools/workshop-cbt-storybook/blob/main/WORKSHOP.md"
            target="_blank"
            rel="noopener noreferrer"
          >
          WORKSHOP
          </a> files.
        </p>
      </header>

    </div>
  );
}

export default App;
