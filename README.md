<h1 style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 36px;">0x00. ES6 Basics</h1>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">JavaScript</span></strong><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">ES6</span></strong></div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <ul style="font-size: 11px;">
        <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">&nbsp;By:&nbsp;Johann Kerbrat, Engineering Manager at Uber Works</li>
        <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">&nbsp;Weight:&nbsp;1</li>
        <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">&nbsp;Ongoing second chance project - started&nbsp;<span title="">Sep 25, 2023 6:00 AM</span>, must end by&nbsp;<span title="">Sep 30, 2023 6:00 AM</span></li>
        <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">&nbsp;An auto review will be launched at the deadline</li>
    </ul>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);font-size: 14px;">
    <h4 style="color: inherit;font-size: 18px;">In a nutshell&hellip;</h4>
    <ul>
        <li><strong><strong>Auto QA review:</strong></strong> 0.0/41 mandatory &amp; 0.0/4 optional</li>
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
    <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
        <h3 style="color: rgb(51, 51, 51);font-size: 16px;">Concepts</h3>
    </div>
    <div>
        <p><em>For this project, we expect you to look at these concepts:</em></p>
        <ul>
            <li><a href="https://intranet.alxswe.com/concepts/541" style="color: transparent;">Modern Javascript</a></li>
            <li><a href="https://intranet.alxswe.com/concepts/542" style="color: transparent;">Software Linter</a></li>
        </ul>
    </div>
</div>
<div style="text-align: start;color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div>
        <p><img src="https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230926%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230926T201419Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=6ce75456c211c1c9721089faf5ce882cf6800a5267d48979239b62c407f0f2e3" alt=""></p>
        <h2 style="color: inherit;font-size: 30px;">Resources</h2>
        <p><strong><strong>Read or watch</strong></strong>:</p>
        <ul>
            <li><a href="https://intranet.alxswe.com/rltoken/NW1dFLFExQ12_hD8yvkV3A" title="ECMAScript 6 - ECMAScript 2015" target="_blank" style="color: transparent;">ECMAScript 6 - ECMAScript 2015</a></li>
            <li><a href="https://intranet.alxswe.com/rltoken/sroRUsUvOZV28V99MHDenw" title="Statements and declarations" target="_blank" style="color: transparent;">Statements and declarations</a></li>
            <li><a href="https://intranet.alxswe.com/rltoken/N2WLylppCtkkX3YFFtyUHw" title="Arrow functions" target="_blank" style="color: transparent;">Arrow functions</a></li>
            <li><a href="https://intranet.alxswe.com/rltoken/kbw9gMO6sdeOKAY23SYVgA" title="Default parameters" target="_blank" style="color: transparent;">Default parameters</a></li>
            <li><a href="https://intranet.alxswe.com/rltoken/erZfCvacuGVk9z1CQlJvYQ" title="Rest parameter" target="_blank" style="color: transparent;">Rest parameter</a></li>
            <li><a href="https://intranet.alxswe.com/rltoken/_uNYLmPFr4K-oCYpOBNxHg" title="Javascript ES6 — Iterables and Iterators" target="_blank" style="color: transparent;">Javascript ES6 &mdash; Iterables and Iterators</a></li>
        </ul>
        <h2 style="color: inherit;font-size: 30px;">Learning Objectives</h2>
        <p>At the end of this project, you are expected to be able to&nbsp;<a href="https://intranet.alxswe.com/rltoken/KDGvEqVWIsvOQfCcwDNHNg" title="explain to anyone" target="_blank" style="color: transparent;">explain to anyone</a>,&nbsp;<strong><strong>without the help of Google</strong></strong>:</p>
        <ul>
            <li>What ES6 is</li>
            <li>New features introduced in ES6</li>
            <li>The difference between a constant and a variable</li>
            <li>Block-scoped variables</li>
            <li>Arrow functions and function parameters default to them</li>
            <li>Rest and spread function parameters</li>
            <li>String templating in ES6</li>
            <li>Object creation and their properties in ES6</li>
            <li>Iterators and for-of loops</li>
        </ul>
        <h2 style="color: inherit;font-size: 30px;">Requirements</h2>
        <h3 style="color: inherit;font-size: 24px;">General</h3>
        <ul>
            <li>All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x</li>
            <li>Allowed editors:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">vi</code>,&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">vim</code>,&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">emacs</code>,&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Visual Studio Code</code></li>
            <li>All your files should end with a new line</li>
            <li>A&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">README.md</code> file, at the root of the folder of the project, is mandatory</li>
            <li>Your code should use the&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">js</code> extension</li>
            <li>Your code will be tested using the&nbsp;<a href="https://intranet.alxswe.com/rltoken/ECZpKsJ3fm1qRA7lDyhd_Q" title="Jest Testing Framework" target="_blank" style="color: transparent;">Jest Testing Framework</a></li>
            <li>Your code will be analyzed using the linter&nbsp;<a href="https://intranet.alxswe.com/rltoken/Ttd9w5jERwTErJW3DDbVoQ" title="ESLint" target="_blank" style="color: transparent;">ESLint</a> along with specific rules that we&rsquo;ll provide</li>
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
        <p>in your project directory, install Jest, Babel and ESList by using the supplied&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">package.json</code> and run&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm install</code>.</p>
        <h2 style="color: inherit;font-size: 30px;">Configuration files</h2>
        <p>Add the files below to your project directory</p>
        <h3 style="color: inherit;font-size: 24px;"><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 21.6px;">package.json</code></h3>
        <details>
            <summary>Click here to show/hide file contents</summary>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;">
</pre>
        </details>
        <h3 style="color: inherit;font-size: 24px;"><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 21.6px;">babel.config.js</code></h3>
        <details>
            <summary>Click here to show/hide file contents</summary>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;">
</pre>
        </details>
        <h3 style="color: inherit;font-size: 24px;"><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 21.6px;">.eslintrc.js</code></h3>
        <details>
            <summary>Click here to show/hide file contents</summary>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;">
</pre>
        </details>
        <h3 style="color: inherit;font-size: 24px;">Finally&hellip;</h3>
        <p>Don&rsquo;t forget to run&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm install</code> from the terminal of your project folder to install all necessary project dependencies.</p>
    </div>
</div>
<h2 style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 30px;">Tasks</h2>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">0. Const or let?</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score:&nbsp;0.0%&nbsp;(<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Modify</p>
            <ul>
                <li>function&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">taskFirst</code> to instantiate variables using&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">const</code></li>
                <li>function&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">taskNext</code> to instantiate variables using&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">let</code></li>
            </ul>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">export function taskFirst() {
  var task = &apos;I prefer const when I can.&apos;;
  return task;
}

export function getLast() {
return &apos; is okay&apos;;
}

export function taskNext() {
var combination = &apos;But sometimes let&apos;;
combination += getLast();

return combination;
}
</code></pre>

<p>Execution example:</p>
<pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 0-main.js
import { taskFirst, taskNext } from &apos;./0-constants.js&apos;;

console.log(`${taskFirst()} ${taskNext()}`);

bob@dylan:~$
bob@dylan:~$ npm run dev 0-main.js
I prefer const when I can. But sometimes let is okay
bob@dylan:~$
</code></pre>

</div>
<div>
<div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
<p><strong><strong>Repo:</strong></strong></p>
<ul>
<li>GitHub repository:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
<li>Directory:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x00-ES6_basic</code></li>
<li>File:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0-constants.js</code></li>
</ul>
</div>
</div>
<div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
<div>
<div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
<div style="font-size: 1.5rem !important;"><br></div>
</div>
</div>
</div>

</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">1. Block Scope</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score:&nbsp;0.0%&nbsp;(<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Given what you&rsquo;ve read about&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">var</code> and hoisting, modify the variables inside the function&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">taskBlock</code> so that the variables aren&rsquo;t overwritten inside the conditional block.</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

if (trueOrFalse) {
var task = true;
var task2 = false;
}

return [task, task2];
}
</code></pre>

<p>Execution:</p>
<pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 1-main.js
import taskBlock from &apos;./1-block-scoped.js&apos;;

console.log(taskBlock(true));
console.log(taskBlock(false));
bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js
[ false, true ]
[ false, true ]
bob@dylan:~$
</code></pre>

</div>
<div>
<div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
<p><strong><strong>Repo:</strong></strong></p>
<ul>
<li>GitHub repository:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
<li>Directory:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x00-ES6_basic</code></li>
<li>File:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">1-block-scoped.js</code></li>
</ul>
</div>
</div>
<div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
<div>
<div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
<div style="font-size: 1.5rem !important;"><br></div>
</div>
</div>
</div>

</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">2. Arrow functions</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score:&nbsp;0.0%&nbsp;(<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Rewrite the following standard function to use ES6&rsquo;s arrow syntax of the function&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">add</code> (it will be an anonymous function after)</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = [&apos;SOMA&apos;, &apos;Union Square&apos;];

const self = this;
this.addNeighborhood = function add(newNeighborhood) {
self.sanFranciscoNeighborhoods.push(newNeighborhood);
return self.sanFranciscoNeighborhoods;
};
}
</code></pre>

<p>Execution:</p>
<pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 2-main.js
import getNeighborhoodsList from &apos;./2-arrow.js&apos;;

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood(&apos;Noe Valley&apos;);
console.log(res);
bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js
[ &apos;SOMA&apos;, &apos;Union Square&apos;, &apos;Noe Valley&apos; ]
bob@dylan:~$
</code></pre>

</div>
<div>
<div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
<p><strong><strong>Repo:</strong></strong></p>
<ul>
<li>GitHub repository:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
<li>Directory:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x00-ES6_basic</code></li>
<li>File:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">2-arrow.js</code></li>
</ul>
</div>
</div>
<div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
<div>
<div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
<div style="font-size: 1.5rem !important;"><br></div>
</div>
</div>
</div>

</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">3. Parameter defaults</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score:&nbsp;0.0%&nbsp;(<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Condense the internals of the following function to 1 line - without changing the name of each function/variable.</p>
            <p><em>Hint:</em> The key here to define default parameter values for the function parameters.</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

if (expansion2019 === undefined) {
expansion2019 = 19;
}
return initialNumber + expansion1989 + expansion2019;
}
</code></pre>

<p>Execution:</p>
<pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 3-main.js
import getSumOfHoods from &apos;./3-default-parameter.js&apos;;

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js
142
56
41
bob@dylan:~$
</code></pre>

</div>
<div>
<div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
<p><strong><strong>Repo:</strong></strong></p>
<ul>
<li>GitHub repository:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
<li>Directory:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x00-ES6_basic</code></li>
<li>File:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">3-default-parameter.js</code></li>
</ul>
</div>
</div>
<div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
<div>
<div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
<div style="font-size: 1.5rem !important;"><br></div>
</div>
</div>
</div>

</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">4. Rest parameter syntax for functions</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score:&nbsp;0.0%&nbsp;(<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Modify the following function to return the number of arguments passed to it using the rest parameter syntax</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">export default function returnHowManyArguments() {

}
</code></pre>

<p>Example:</p>
<pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">&gt; returnHowManyArguments(&quot;Hello&quot;, &quot;Holberton&quot;, 2020);
3
&gt;
</code></pre>
<p>Execution:</p>
<pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 4-main.js
import returnHowManyArguments from &apos;./4-rest-parameter.js&apos;;

console.log(returnHowManyArguments(&quot;one&quot;));
console.log(returnHowManyArguments(&quot;one&quot;, &quot;two&quot;, 3, &quot;4th&quot;));
bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js
1
4
bob@dylan:~$
</code></pre>

</div>
<div>
<div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
<p><strong><strong>Repo:</strong></strong></p>
<ul>
<li>GitHub repository:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
<li>Directory:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x00-ES6_basic</code></li>
<li>File:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">4-rest-parameter.js</code></li>
</ul>
</div>
</div>
<div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
<div>
<div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
<div style="font-size: 1.5rem !important;"><br></div>
</div>
</div>
</div>

</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">5. The wonders of spread syntax</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score:&nbsp;0.0%&nbsp;(<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">export default function concatArrays(array1, array2, string) {
}
</code></pre>
            <p>Execution:</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 5-main.js
import concatArrays from &apos;./5-spread-operator.js&apos;;

console.log(concatArrays([&apos;a&apos;, &apos;b&apos;], [&apos;c&apos;, &apos;d&apos;], &apos;Hello&apos;));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js
[
&apos;a&apos;, &apos;b&apos;, &apos;c&apos;,
&apos;d&apos;, &apos;H&apos;, &apos;e&apos;,
&apos;l&apos;, &apos;l&apos;, &apos;o&apos;
]
bob@dylan:~$
</code></pre>

</div>
<div>
<div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
<p><strong><strong>Repo:</strong></strong></p>
<ul>
<li>GitHub repository:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
<li>Directory:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x00-ES6_basic</code></li>
<li>File:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">5-spread-operator.js</code></li>
</ul>
</div>
</div>
<div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
<div>
<div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
<div style="font-size: 1.5rem !important;"><br></div>
</div>
</div>
</div>

</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">6. Take advantage of template literals</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score:&nbsp;0.0%&nbsp;(<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Rewrite the return statement to use a template literal so you can the substitute the variables you&rsquo;ve defined.</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: &apos;$119,868&apos;,
    gdp: &apos;$154.2 billion&apos;,
    capita: &apos;$178,479&apos;,
  };

return &apos;As of &apos; + year + &apos;, it was the seventh-highest income county in the United States&apos;
/ &apos;, with a per capita personal income of &apos; + budget.income + &apos;. As of 2015, San Francisco&apos;
/ &apos; proper had a GDP of &apos; + budget.gdp + &apos;, and a GDP per capita of &apos; + budget.capita + &apos;.&apos;;
}
</code></pre>

<p>Execution:</p>
<pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 6-main.js
import getSanFranciscoDescription from &apos;./6-string-interpolation.js&apos;;

console.log(getSanFranciscoDescription());

bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
bob@dylan:~$
</code></pre>

</div>
<div>
<div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
<p><strong><strong>Repo:</strong></strong></p>
<ul>
<li>GitHub repository:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
<li>Directory:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x00-ES6_basic</code></li>
<li>File:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">6-string-interpolation.js</code></li>
</ul>
</div>
</div>
<div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
<div>
<div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
<div style="font-size: 1.5rem !important;"><br></div>
</div>
</div>
</div>

</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">7. Object property value shorthand syntax</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score:&nbsp;0.0%&nbsp;(<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Notice how the keys and the variable names are the same?</p>
            <p>Modify the following function&rsquo;s&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">budget</code> object to simply use the keyname instead.</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

return budget;
}
</code></pre>

<p>Execution:</p>
<pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 7-main.js
import getBudgetObject from &apos;./7-getBudgetObject.js&apos;;

console.log(getBudgetObject(400, 700, 900));

bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js
{ income: 400, gdp: 700, capita: 900 }
bob@dylan:~$
</code></pre>

</div>
<div>
<div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
<p><strong><strong>Repo:</strong></strong></p>
<ul>
<li>GitHub repository:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
<li>Directory:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x00-ES6_basic</code></li>
<li>File:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">7-getBudgetObject.js</code></li>
</ul>
</div>
</div>
<div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
<div>
<div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
<div style="font-size: 1.5rem !important;"><br></div>
</div>
</div>
</div>

</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">8. No need to create empty objects before adding in properties</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score:&nbsp;0.0%&nbsp;(<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Rewrite the&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">getBudgetForCurrentYear</code> function to use ES6 computed property names on the&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">budget</code> object</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
const budget = {};

budget[`income-${getCurrentYear()}`] = income;
budget[`gdp-${getCurrentYear()}`] = gdp;
budget[`capita-${getCurrentYear()}`] = capita;

return budget;
}
</code></pre>

<p>Execution:</p>
<pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 8-main.js
import getBudgetForCurrentYear from &apos;./8-getBudgetCurrentYear.js&apos;;

console.log(getBudgetForCurrentYear(2100, 5200, 1090));

bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js
{ &apos;income-2021&apos;: 2100, &apos;gdp-2021&apos;: 5200, &apos;capita-2021&apos;: 1090 }
bob@dylan:~$
</code></pre>

</div>
<div>
<div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
<p><strong><strong>Repo:</strong></strong></p>
<ul>
<li>GitHub repository:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
<li>Directory:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x00-ES6_basic</code></li>
<li>File:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">8-getBudgetCurrentYear.js</code></li>
</ul>
</div>
</div>
<div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
<div>
<div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
<div style="font-size: 1.5rem !important;"><br></div>
</div>
</div>
</div>

</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">9. ES6 method properties</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score:&nbsp;0.0%&nbsp;(<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Rewrite&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">getFullBudgetObject</code> to use ES6 method properties in the&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">fullBudget</code> object</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">import getBudgetObject from &apos;./7-getBudgetObject.js&apos;;

export default function getFullBudgetObject(income, gdp, capita) {
const budget = getBudgetObject(income, gdp, capita);
const fullBudget = {
...budget,
getIncomeInDollars: function (income) {
return `$${income}`;
},
getIncomeInEuros: function (income) {
return `${income} euros`;
},
};

return fullBudget;
}
</code></pre>

<p>Execution:</p>
<pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 9-main.js
import getFullBudgetObject from &apos;./9-getFullBudget.js&apos;;

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));

bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js
$20
20 euros
bob@dylan:~$
</code></pre>

</div>
<div>
<div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
<p><strong><strong>Repo:</strong></strong></p>
<ul>
<li>GitHub repository:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
<li>Directory:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x00-ES6_basic</code></li>
<li>File:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">9-getFullBudget.js</code></li>
</ul>
</div>
</div>
<div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
<div>
<div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
<div style="font-size: 1.5rem !important;"><br></div>
</div>
</div>
</div>

</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">10. For...of Loops</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score:&nbsp;0.0%&nbsp;(<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Rewrite the function&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">appendToEachArrayValue</code> to use ES6&rsquo;s&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">for...of</code> operator. And don&rsquo;t forget that&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">var</code> is not ES6-friendly.</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

return array;
}
</code></pre>

<p>Execution:</p>
<pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 10-main.js
import appendToEachArrayValue from &apos;./10-loops.js&apos;;

console.log(appendToEachArrayValue([&apos;appended&apos;, &apos;fixed&apos;, &apos;displayed&apos;], &apos;correctly-&apos;));

bob@dylan:~$
bob@dylan:~$ npm run dev 10-main.js
[ &apos;correctly-appended&apos;, &apos;correctly-fixed&apos;, &apos;correctly-displayed&apos; ]
bob@dylan:~$
</code></pre>

</div>
<div>
<div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
<p><strong><strong>Repo:</strong></strong></p>
<ul>
<li>GitHub repository:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
<li>Directory:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x00-ES6_basic</code></li>
<li>File:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">10-loops.js</code></li>
</ul>
</div>
</div>
<div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
<div>
<div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
<div style="font-size: 1.5rem !important;"><br></div>
</div>
</div>
</div>

</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">11. Iterator</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score:&nbsp;0.0%&nbsp;(<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Write a function named&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">createEmployeesObject</code> that will receive two arguments:</p>
            <ul>
                <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">departmentName</code> (String)</li>
                <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">employees</code> (Array of Strings)</li>
            </ul>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">export default function createEmployeesObject(departmentName, employees) {

}
</code></pre>

<p>The function should return an object with the following format:</p>
<pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">{
$departmentName: [
          $employees,
     ],
}
</code></pre>
            <p>Execution:</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 11-main.js
import createEmployeesObject from &apos;./11-createEmployeesObject.js&apos;;

console.log(createEmployeesObject(&quot;Software&quot;, [ &quot;Bob&quot;, &quot;Sylvie&quot; ]));

bob@dylan:~$
bob@dylan:~$ npm run dev 11-main.js
{ Software: [ &apos;Bob&apos;, &apos;Sylvie&apos; ] }
bob@dylan:~$
</code></pre>

</div>
<div>
<div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
<p><strong><strong>Repo:</strong></strong></p>
<ul>
<li>GitHub repository:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
<li>Directory:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x00-ES6_basic</code></li>
<li>File:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">11-createEmployeesObject.js</code></li>
</ul>
</div>
</div>
<div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
<div>
<div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
<div style="font-size: 1.5rem !important;"><br></div>
</div>
</div>
</div>

</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">12. Let&apos;s create a report object</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score:&nbsp;0.0%&nbsp;(<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Write a function named&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">createReportObject</code> whose parameter,&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">employeesList</code>, is the return value of the previous function&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">createEmployeesObject</code>.</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">export default function createReportObject(employeesList) {

}
</code></pre>

<p><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">createReportObject</code> should return an object containing the key&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">allEmployees</code> and a method property called&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">getNumberOfDepartments</code>.</p>
<p><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">allEmployees</code> is a key that maps to an object containing the department name and a list of all the employees in that department. If you&rsquo;re having trouble, use the spread syntax.</p>
<p>The method property receives&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">employeesList</code> and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.</p>
<pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">{
allEmployees: {
engineering: [
&apos;John Doe&apos;,
&apos;Guillaume Salva&apos;,
],
},
};
</code></pre>
<p>Execution:</p>
<pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 12-main.js
import createEmployeesObject from &apos;./11-createEmployeesObject.js&apos;;
import createReportObject from &apos;./12-createReportObject.js&apos;;

const employees = {
...createEmployeesObject(&apos;engineering&apos;, [&apos;Bob&apos;, &apos;Jane&apos;]),
...createEmployeesObject(&apos;marketing&apos;, [&apos;Sylvie&apos;])
};

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));

bob@dylan:~$
bob@dylan:~$ npm run dev 12-main.js
{ engineering: [ &apos;Bob&apos;, &apos;Jane&apos; ], marketing: [ &apos;Sylvie&apos; ] }
2
bob@dylan:~$
</code></pre>

</div>
<div>
<div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
<p><strong><strong>Repo:</strong></strong></p>
<ul>
<li>GitHub repository:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
<li>Directory:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x00-ES6_basic</code></li>
<li>File:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">12-createReportObject.js</code></li>
</ul>
</div>
</div>
<div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
<div>
<div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
<div style="font-size: 1.5rem !important;"><br></div>
</div>
</div>
</div>

</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">13. Iterating through report objects</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">#advanced</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score:&nbsp;0.0%&nbsp;(<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Write a function named&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">createIteratorObject</code>, that will take into argument a report Object created with the previous function&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">createReportObject</code>.</p>
            <p>This function will return an iterator to go through every employee in every department.</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">export default function createIteratorObject(report) {

}
</code></pre>

<p>Execution:</p>
<pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 100-main.js
import createIteratorObject from &quot;./100-createIteratorObject.js&quot;;

import createEmployeesObject from &apos;./11-createEmployeesObject.js&apos;;
import createReportObject from &apos;./12-createReportObject.js&apos;;

const employees = {
...createEmployeesObject(&apos;engineering&apos;, [&apos;Bob&apos;, &apos;Jane&apos;]),
...createEmployeesObject(&apos;marketing&apos;, [&apos;Sylvie&apos;])
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
console.log(item);
}

bob@dylan:~$
bob@dylan:~$ npm run dev 100-main.js
Bob
Jane
Sylvie
bob@dylan:~$
</code></pre>

</div>
<div>
<div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
<p><strong><strong>Repo:</strong></strong></p>
<ul>
<li>GitHub repository:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
<li>Directory:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x00-ES6_basic</code></li>
<li>File:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">100-createIteratorObject.js</code></li>
</ul>
</div>
</div>
<div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
<div>
<div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">QA Review</button></div>
<div style="font-size: 1.5rem !important;"><br></div>
</div>
</div>
</div>

</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">14. Iterate through object</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">#advanced</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score:&nbsp;0.0%&nbsp;(<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Finally, write a function named&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">iterateThroughObject</code>. The function&rsquo;s parameter&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">reportWithIterator</code> is the return value from&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">createIteratorObject</code>.</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;"> export default function iterateThroughObject(reportWithIterator) {

}
</code></pre>

<p>It should return every employee name in a string, separated by&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">|</code></p>
<pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">{
allEmployees: {
engineering: [
&apos;John Doe&apos;,
&apos;Guillaume Salva&apos;,
],
},
...
};
</code></pre>
<p>Should return&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">John Doe | Guillaume Salva</code></p>
<p>Reminder - the functions will be&nbsp;<em>imported</em> by the test suite.</p>
<p>Full example:</p>
<pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">&gt; employees = {
...createEmployeesObject(&apos;engineering&apos;, engineering),
...createEmployeesObject(&apos;design&apos;, design),
};
&gt;
&gt; const report = createReportObject(employees);
&gt; const reportWithIterator = createIteratorObject(report);
&gt; iterateThroughObject(reportWithIterator)
&apos;John Doe | Guillaume Salva | Kanye East | Jay Li&apos;
&gt;
</code></pre>
<p>Execution:</p>
<pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 101-main.js
import createEmployeesObject from &quot;./11-createEmployeesObject.js&quot;;
import createReportObject from &apos;./12-createReportObject.js&apos;;
import createIteratorObject from &apos;./100-createIteratorObject.js&apos;;
import iterateThroughObject from &apos;./101-iterateThroughObject.js&apos;;

const employees = {
...createEmployeesObject(&apos;engineering&apos;, [&apos;Bob&apos;, &apos;Jane&apos;]),
...createEmployeesObject(&apos;marketing&apos;, [&apos;Sylvie&apos;])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));

bob@dylan:~$
bob@dylan:~$ npm run dev 101-main.js
Bob | Jane | Sylvie
bob@dylan:~$
</code></pre>

</div>
<div>
<div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
<p><strong><strong>Repo:</strong></strong></p>
<ul>
<li>GitHub repository:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
<li>Directory:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x00-ES6_basic</code></li>
<li>File:&nbsp;<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">101-iterateThroughObject.js</code></li>
</ul>
</div>
</div>
<div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
<div>
<div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Check your code</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;">Get a sandbox</button>&nbsp;</div>
</div>
</div>
</div>

</div>
