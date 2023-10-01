<h1 style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 36px;">0x01. ES6 Promises</h1>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">JavaScript</span></strong><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">ES6</span></strong></div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <ul style="font-size: 11px;">
        <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">By: Johann Kerbrat, Engineering Manager at Uber Works</li>
        <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">Weight: 1</li>
        <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">Project over - took place from <span title="">Sep 26, 2023 6:00 AM</span> to <span title="">Sep 28, 2023 6:00 AM</span></li>
        <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">An auto review will be launched at the deadline</li>
    </ul>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);font-size: 14px;">
    <h4 style="color: inherit;font-size: 18px;">In a nutshell&hellip;</h4>
    <ul>
        <li><strong><strong>Auto QA review:</strong></strong> 0.0/26 mandatory &amp; 0.0/4 optional</li>
        <li><strong><strong>Altogether:</strong></strong>&nbsp; <strong><strong>0.0%</strong></strong>
            <ul>
                <li>Mandatory: 0.0%</li>
                <li>Optional: 0.0%</li>
                <li>Calculation: &nbsp;0.0% + (0.0% * 0.0%) &nbsp;== <strong><strong>0.0%</strong></strong></li>
            </ul>
        </li>
    </ul>
</div>
<div style="text-align: start;color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div>
        <p><img src="https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/75862d67ca51a042003c.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20231001%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231001T163321Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=0eb1387fbff6e860b237a9e5d3be8adc8b44ff80dc6f1fb39fa2e7b79eb3e385" alt=""></p>
        <h2 style="color: inherit;font-size: 30px;">Resources</h2>
        <p><strong><strong>Read or watch</strong></strong>:</p>
        <ul>
            <li><a href="https://intranet.alxswe.com/rltoken/j_0FTFbkTg42JMcAbNPOVQ" title="Promise" target="_blank" style="color: transparent;">Promise</a></li>
            <li><a href="https://intranet.alxswe.com/rltoken/2Q2LzNFokcUwpA2u3FKG6Q" title="JavaScript Promise: An introduction" target="_blank" style="color: transparent;">JavaScript Promise: An introduction</a></li>
            <li><a href="https://intranet.alxswe.com/rltoken/UXb3S2PMBe-SLJ55isMcow" title="Await" target="_blank" style="color: transparent;">Await</a></li>
            <li><a href="https://intranet.alxswe.com/rltoken/_K0C7pgEjwaIzU9RpwCb8g" title="Async" target="_blank" style="color: transparent;">Async</a></li>
            <li><a href="https://intranet.alxswe.com/rltoken/UTjDgvKk5l892Xslh0vqcQ" title="Throw / Try" target="_blank" style="color: transparent;">Throw / Try</a></li>
        </ul>
        <h2 style="color: inherit;font-size: 30px;">Learning Objectives</h2>
        <p>At the end of this project, you are expected to be able to <a href="https://intranet.alxswe.com/rltoken/Z4xW7_BFaRcrHxfDySjKuQ" title="explain to anyone" target="_blank" style="color: transparent;">explain to anyone</a>, <strong><strong>without the help of Google</strong></strong>:</p>
        <ul>
            <li>Promises (how, why, and what)</li>
            <li>How to use the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">then</code>, <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">resolve</code>, <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">catch</code> methods</li>
            <li>How to use every method of the Promise object</li>
            <li>Throw / Try</li>
            <li>The await operator</li>
            <li>How to use an <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">async</code> function</li>
        </ul>
        <h2 style="color: inherit;font-size: 30px;">Requirements</h2>
        <ul>
            <li>All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x</li>
            <li>Allowed editors: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">vi</code>, <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">vim</code>, <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">emacs</code>, <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Visual Studio Code</code></li>
            <li>All your files should end with a new line</li>
            <li>A <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">README.md</code> file, at the root of the folder of the project, is mandatory</li>
            <li>Your code should use the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">js</code> extension</li>
            <li>Your code will be tested using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Jest</code> and the command <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm run test</code></li>
            <li>Your code will be verified against lint using ESLint</li>
            <li>All of your functions must be exported</li>
        </ul>
        <h2 style="color: inherit;font-size: 30px;">Setup</h2>
        <h3 style="color: inherit;font-size: 24px;">Install NodeJS 12.11.x</h3>
        <p>(in your home directory):</p>
        <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
</code></pre>
        <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">$ nodejs -v
v12.11.1
$ npm -v
6.11.3
</code></pre>
        <h3 style="color: inherit;font-size: 24px;">Install Jest, Babel, and ESLint</h3>
        <p>in your project directory, install Jest, Babel and ESList by using the supplied <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">package.json</code> and run <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm install</code>.</p>
        <h2 style="color: inherit;font-size: 30px;">Configuration Files</h2>
        <p>Add the files below to your project directory</p>
        <h3 style="color: inherit;font-size: 24px;"><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 21.6px;">package.json</code></h3>
        <details open="">
            <summary>Click to show/hide file contents</summary>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">
{
  &quot;scripts&quot;: {
    &quot;lint&quot;: &quot;./node_modules/.bin/eslint&quot;,
    &quot;check-lint&quot;: &quot;lint [0-9]*.js&quot;,
    &quot;dev&quot;: &quot;npx babel-node&quot;,
    &quot;test&quot;: &quot;jest&quot;,
    &quot;full-test&quot;: &quot;./node_modules/.bin/eslint [0-9]*.js &amp;&amp; jest&quot;
  },
  &quot;devDependencies&quot;: {
    &quot;@babel/core&quot;: &quot;^7.6.0&quot;,
    &quot;@babel/node&quot;: &quot;^7.8.0&quot;,
    &quot;@babel/preset-env&quot;: &quot;^7.6.0&quot;,
    &quot;eslint&quot;: &quot;^6.4.0&quot;,
    &quot;eslint-config-airbnb-base&quot;: &quot;^14.0.0&quot;,
    &quot;eslint-plugin-import&quot;: &quot;^2.18.2&quot;,
    &quot;eslint-plugin-jest&quot;: &quot;^22.17.0&quot;,
    &quot;jest&quot;: &quot;^24.9.0&quot;
  }
}
</code></pre>
        </details>
        <h3 style="color: inherit;font-size: 24px;"><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 21.6px;">babel.config.js</code></h3>
        <details open="">
            <summary>Click to show/hide file contents</summary>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">
module.exports = {
  presets: [
    [
      &apos;@babel/preset-env&apos;,
      {
        targets: {
          node: &apos;current&apos;,
        },
      },
    ],
  ],
};
</code></pre>
        </details>
        <h3 style="color: inherit;font-size: 24px;"><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 21.6px;">utils.js</code></h3>
        <p>Use when you get to tasks requiring <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">uploadPhoto</code> and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">createUser</code>.</p>
        <details open="">
            <summary>Click to show/hide file contents</summary>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: &apos;photo-profile-1&apos;,
  });
}<p>
</p>
</code><p><code style="color: inherit;font-size: inherit;">export function createUser() {
  return Promise.resolve({
    firstName: &apos;Guillaume&apos;,
    lastName: &apos;Salva&apos;,
  });
}
</code></p></pre>
        </details>
        <p><br></p>
        <h3 style="color: inherit;font-size: 24px;"><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 21.6px;">.eslintrc.js</code></h3>
        <details open="">
            <summary>Click to show/hide file contents</summary>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    &apos;airbnb-base&apos;,
    &apos;plugin:jest/all&apos;,
  ],
  globals: {
    Atomics: &apos;readonly&apos;,
    SharedArrayBuffer: &apos;readonly&apos;,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: &apos;module&apos;,
  },
  plugins: [&apos;jest&apos;],
  rules: {
    &apos;no-console&apos;: &apos;off&apos;,
    &apos;no-shadow&apos;: &apos;off&apos;,
    &apos;no-restricted-syntax&apos;: [
      &apos;error&apos;,
      &apos;LabeledStatement&apos;,
      &apos;WithStatement&apos;,
    ],
  },
  overrides:[
    {
      files: [&apos;*.js&apos;],
      excludedFiles: &apos;babel.config.js&apos;,
    }
  ]
};
</code></pre>
        </details>
        <h3 style="color: inherit;font-size: 24px;">and&hellip;</h3>
        <p>Don&rsquo;t forget to run <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">$ npm install</code> when you have the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">package.json</code></p>
        <h2 style="color: inherit;font-size: 30px;">Response Data Format</h2>
        <p><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">uploadPhoto</code> returns a response with the format</p>
        <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">{
  status: 200,
  body: &apos;photo-profile-1&apos;,
}
</code></pre>
        <p><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">createUser</code> returns a response with the format</p>
        <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">{
  firstName: &apos;Guillaume&apos;,
  lastName: &apos;Salva&apos;,
}
</code></pre>
    </div>
</div>
<h2 style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 30px;">Tasks</h2>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">0. Keep every promise you make and only make promises you can keep</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Return a Promise using this prototype <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">function getResponseFromAPI()</code></p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from &quot;./0-promise.js&quot;;

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x01-ES6_promise</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0-promise.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">1. Don&apos;t make a promise...if you know you can&apos;t keep it</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Using the prototype below, return a <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">promise</code>. The parameter is a <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">boolean</code>.</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">getFullResponseFromAPI(success)
</code></pre>
            <p>When the argument is:</p>
            <ul>
                <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">true</code>
                    <ul>
                        <li>resolve the promise by passing an object with 2 attributes:<ul>
                                <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">status</code>: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">200</code></li>
                                <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">body</code>: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">&apos;Success&apos;</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">false</code>
                    <ul>
                        <li>reject the promise with an error object with the message <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">The fake API is not working currently</code></li>
                    </ul>
                </li>
            </ul>
            <p>Try testing it out for yourself</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 1-main.js
import getFullResponseFromAPI from &apos;./1-promise&apos;;

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
Promise { { status: 200, body: &apos;Success&apos; } }
Promise {
  &lt;rejected&gt; Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x01-ES6_promise</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">1-promise.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">2. Catch me if you can!</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Using the function prototype below</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">function handleResponseFromAPI(promise)
</code></pre>
            <p>Append three handlers to the function:</p>
            <ul>
                <li>When the Promise resolves, return an object with the following attributes<ul>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">status</code>: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">200</code></li>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">body</code>: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">success</code></li>
                    </ul>
                </li>
                <li>When the Promise rejects, return an empty <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Error</code> object</li>
                <li>For every resolution, log <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Got a response from the API</code> to the console</li>
            </ul>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 2-main.js
import handleResponseFromAPI from &quot;./2-then&quot;;

const promise = Promise.resolve();
handleResponseFromAPI(promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
Got a response from the API
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x01-ES6_promise</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">2-then.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">3. Handle multiple successful promises</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>In this file, import <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">uploadPhoto</code> and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">createUser</code> from <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">utils.js</code></p>
            <p>Knowing that the functions in <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">utils.js</code> return promises, use the prototype below to collectively resolve all promises and log <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">body firstName lastName</code> to the console.</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">function handleProfileSignup()
</code></pre>
            <p>In the event of an error, log <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Signup system offline</code> to the console</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 3-main.js
import handleProfileSignup from &quot;./3-all&quot;;

handleProfileSignup();

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
photo-profile-1 Guillaume Salva
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x01-ES6_promise</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">3-all.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">4. Simple promise</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Using the following prototype</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">function signUpUser(firstName, lastName) {
}
</code></pre>
            <p>That returns a resolved promise with this object:</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">{
  firstName: value,
  lastName: value,
}
</code></pre>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 4-main.js
import signUpUser from &quot;./4-user-promise&quot;;

console.log(signUpUser(&quot;Bob&quot;, &quot;Dylan&quot;));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 4-main.js 
Promise { { firstName: &apos;Bob&apos;, lastName: &apos;Dylan&apos; } }
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x01-ES6_promise</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">4-user-promise.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">5. Reject the promises</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Write and export a function named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">uploadPhoto</code>. It should accept one argument <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">fileName</code> (string).</p>
            <p>The function should return a Promise rejecting with an Error and the string <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">$fileName cannot be processed</code></p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">export default function uploadPhoto(filename) {

}
</code></pre>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 5-main.js
import uploadPhoto from &apos;./5-photo-reject&apos;;

console.log(uploadPhoto(&apos;guillaume.jpg&apos;));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 5-main.js 
Promise {
  &lt;rejected&gt; Error: guillaume.jpg cannot be processed
  ..
    ..
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x01-ES6_promise</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">5-photo-reject.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">6. Handle multiple promises</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Import <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">signUpUser</code> from <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">4-user-promise.js</code> and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">uploadPhoto</code> from <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">5-photo-reject.js</code>.</p>
            <p>Write and export a function named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">handleProfileSignup</code>. It should accept three arguments <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">firstName</code> (string), <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">lastName</code> (string), and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">fileName</code> (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]
</code></pre>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 6-main.js
import handleProfileSignup from &apos;./6-final-user&apos;;

console.log(handleProfileSignup(&quot;Bob&quot;, &quot;Dylan&quot;, &quot;bob_dylan.jpg&quot;));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 6-main.js 
Promise { &lt;pending&gt; }
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x01-ES6_promise</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">6-final-user.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">7. Load balancer</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Write and export a function named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">loadBalancer</code>. It should accept two arguments <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">chinaDownload</code> (Promise) and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">USDownload</code> (Promise).</p>
            <p>The function should return the value returned by the promise that resolved the first.</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">export default function loadBalancer(chinaDownload, USDownload) {

}
</code></pre>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 7-main.js
import loadBalancer from &quot;./7-load_balancer&quot;;

const ukSuccess = &apos;Downloading from UK is faster&apos;;
const frSuccess = &apos;Downloading from FR is faster&apos;;

const promiseUK = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise(function(resolve, reject) {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, frSuccess);
});

const test = async () =&gt; {
    console.log(await loadBalancer(promiseUK, promiseFR));
    console.log(await loadBalancer(promiseUKSlow, promiseFR));
}

test();

bob@dylan:~$ 
bob@dylan:~$ npm run dev 7-main.js 
Downloading from UK is faster
Downloading from FR is faster
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x01-ES6_promise</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">7-load_balancer.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">8. Throw error / try catch</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Write a function named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">divideFunction</code> that will accept two arguments: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">numerator</code> (Number) and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">denominator</code> (Number).</p>
            <p>When the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">denominator</code> argument is equal to 0, the function should throw a new error with the message <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">cannot divide by 0</code>. Otherwise it should return the numerator divided by the denominator.</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">export default function divideFunction(numerator, denominator) {

}
</code></pre>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 8-main.js
import divideFunction from &apos;./8-try&apos;;

console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 8-main.js 
5
..../8-try.js:15
  throw Error(&apos;cannot divide by 0&apos;);
  ^
.....

bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x01-ES6_promise</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">8-try.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">9. Throw an error</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Write a function named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">guardrail</code> that will accept one argument <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">mathFunction</code> (Function).</p>
            <p>This function should create and return an array named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">queue</code>.</p>
            <p>When the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">mathFunction</code> function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Guardrail was processed</code> should be added to the queue.</p>
            <p>Example:</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">[
  1000,
  &apos;Guardrail was processed&apos;,
]
</code></pre>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 9-main.js
import guardrail from &apos;./9-try&apos;;
import divideFunction from &apos;./8-try&apos;;

console.log(guardrail(() =&gt; { return divideFunction(10, 2)}));
console.log(guardrail(() =&gt; { return divideFunction(10, 0)}));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js 
[ 5, &apos;Guardrail was processed&apos; ]
[ &apos;Error: cannot divide by 0&apos;, &apos;Guardrail was processed&apos; ]
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x01-ES6_promise</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">9-try.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">10. Await / Async</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">#advanced</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Import <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">uploadPhoto</code> and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">createUser</code> from <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">utils.js</code></p>
            <p>Write an async function named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">asyncUploadUser</code> that will call these two functions and return an object with the following format:</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">{
  photo: response_from_uploadPhoto_function,
  user: response_from_createUser_function,
}
</code></pre>
            <p>If one of the async function fails, return an empty object. Example:</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">{
  photo: null,
  user: null,
}
</code></pre>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 100-main.js
import asyncUploadUser from &quot;./100-await&quot;;

const test = async () =&gt; {
    const value = await asyncUploadUser();
    console.log(value);
};

test();

bob@dylan:~$ 
bob@dylan:~$ npm run dev 100-main.js 
{
  photo: { status: 200, body: &apos;photo-profile-1&apos; },
  user: { firstName: &apos;Guillaume&apos;, lastName: &apos;Salva&apos; }
}
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x01-ES6_promise</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">100-await.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button>&nbsp;</div>
            </div>
        </div>
    </div>
</div>
