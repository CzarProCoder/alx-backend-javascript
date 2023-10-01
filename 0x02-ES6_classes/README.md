<h1 style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 36px;">0x02. ES6 classes</h1>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">OOP</span></strong><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">JavaScript</span></strong><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">ES6</span></strong></div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <ul style="font-size: 11px;">
        <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">By: Johann Kerbrat, Engineering Manager at Uber Works</li>
        <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">Weight: 1</li>
        <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">Project over - took place from <span title="">Sep 28, 2023 6:00 AM</span> to <span title="">Sep 29, 2023 6:00 AM</span></li>
        <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">An auto review will be launched at the deadline</li>
    </ul>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);font-size: 14px;">
    <h4 style="color: inherit;font-size: 18px;">In a nutshell&hellip;</h4>
    <ul>
        <li><strong><strong>Auto QA review:</strong></strong> 0.0/33 mandatory &amp; 0.0/3 optional</li>
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
        <p><img src="https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/817248fb77fb5c2cef3f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20231001%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231001T204411Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=94a537e08ad3aad9a5ce63523576eb786cb31a0472b69991d4dbdbe8a1692889" alt=""></p>
        <h2 style="color: inherit;font-size: 30px;">Resources</h2>
        <p><strong><strong>Read or watch</strong></strong>:</p>
        <ul>
            <li><a href="https://intranet.alxswe.com/rltoken/ke2dSL31JbpAUBW0qWE9WA" title="Classes" target="_blank" style="color: transparent;">Classes</a></li>
            <li><a href="https://intranet.alxswe.com/rltoken/6OgF5QGbYclp_cwATfq-0g" title="Metaprogramming" target="_blank" style="color: transparent;">Metaprogramming</a></li>
        </ul>
        <h2 style="color: inherit;font-size: 30px;">Learning Objectives</h2>
        <p>At the end of this project, you are expected to be able to <a href="https://intranet.alxswe.com/rltoken/HZvBl09eHoGwvN8jqlYO-g" title="explain to anyone" target="_blank" style="color: transparent;">explain to anyone</a>, <strong><strong>without the help of Google</strong></strong>:</p>
        <ul>
            <li>How to define a Class</li>
            <li>How to add methods to a class</li>
            <li>Why and how to add a static method to a class</li>
            <li>How to extend a class from another</li>
            <li>Metaprogramming and symbols</li>
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
            <li>Your code needs to pass all the tests and lint. You can verify the entire project running <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm run full-test</code></li>
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
        <h2 style="color: inherit;font-size: 30px;">Configuration files</h2>
        <p>Add the files below to your project directory</p>
        <h3 style="color: inherit;font-size: 24px;"><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 21.6px;">package.json</code></h3>
        <details>
            <summary>Click to show/hide file contents</summary>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;">
</pre>
        </details>
        <h3 style="color: inherit;font-size: 24px;"><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 21.6px;">babel.config.js</code></h3>
        <details>
            <summary>Click to show/hide file contents</summary>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;">
</pre>
        </details>
        <h3 style="color: inherit;font-size: 24px;"><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 21.6px;">.eslintrc.js</code></h3>
        <details>
            <summary>Click to show/hide file contents</summary>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;">
</pre>
        </details>
        <h3 style="color: inherit;font-size: 24px;">and&hellip;</h3>
        <p>Don&rsquo;t forget to run <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">$ npm install</code> when you have the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">package.json</code></p>
    </div>
</div>
<h2 style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 30px;">Tasks</h2>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">0. You used to attend a place like this at some point</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Implement a class named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">ClassRoom</code>:</p>
            <ul>
                <li>Prototype: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">export default class ClassRoom</code></li>
                <li>It should accept one attribute named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">maxStudentsSize</code> (Number) and assigned to <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">_maxStudentsSize</code></li>
            </ul>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 0-main.js
import ClassRoom from &quot;./0-classroom.js&quot;;

const room = new ClassRoom(10);
console.log(room._maxStudentsSize)

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
10
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x02-ES6_classes</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0-classroom.js</code></li>
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
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">1. Let&apos;s make some classrooms</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Import the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">ClassRoom</code> class from <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0-classroom.js</code>.</p>
            <p>Implement a function named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">initializeRooms</code>. It should return an array of 3 <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">ClassRoom</code> objects with the sizes 19, 20, and 34 (in this order).</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 1-main.js
import initializeRooms from &apos;./1-make_classrooms.js&apos;;

console.log(initializeRooms());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
[
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x02-ES6_classes</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">1-make_classrooms.js</code></li>
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
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">2. A Course, Getters, and Setters</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Implement a class named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">HolbertonCourse</code>:</p>
            <ul>
                <li>Constructor attributes:<ul>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">name</code> (String)</li>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">length</code> (Number)</li>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">students</code> (array of Strings)</li>
                    </ul>
                </li>
                <li>Make sure to verify the type of attributes during object creation</li>
                <li>Each attribute must be stored in an &ldquo;underscore&rdquo; attribute version (ex: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">name</code> is stored in <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">_name</code>)</li>
                <li>Implement a getter and setter for each attribute.</li>
            </ul>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 2-main.js
import HolbertonCourse from &quot;./2-hbtn_course.js&quot;;

const c1 = new HolbertonCourse(&quot;ES6&quot;, 1, [&quot;Bob&quot;, &quot;Jane&quot;])
console.log(c1.name);
c1.name = &quot;Python 101&quot;;
console.log(c1);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse(&quot;ES6&quot;, &quot;1&quot;, [&quot;Bob&quot;, &quot;Jane&quot;]);
}
catch(err) {
    console.log(err);
}

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
ES6
HolbertonCourse {
  _name: &apos;Python 101&apos;,
  _length: 1,
  _students: [ &apos;Bob&apos;, &apos;Jane&apos; ]
}
TypeError: Name must be a string
    ...
TypeError: Length must be a number
    ...
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x02-ES6_classes</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">2-hbtn_course.js</code></li>
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
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">3. Methods, static methods, computed methods names..... MONEY</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Implement a class named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Currency</code>:</p>
            <ul>
                <li>- Constructor attributes:<ul>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">code</code> (String)</li>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">name</code> (String)</li>
                    </ul>
                </li>
                <li>Each attribute must be stored in an &ldquo;underscore&rdquo; attribute version (ex: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">name</code> is stored in <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">_name</code>)</li>
                <li>Implement a getter and setter for each attribute.</li>
                <li>Implement a method named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">displayFullCurrency</code> that will return the attributes in the following format <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">name (code)</code>.</li>
            </ul>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 3-main.js
import Currency from &quot;./3-currency.js&quot;;

const dollar = new Currency(&apos;$&apos;, &apos;Dollars&apos;);
console.log(dollar.displayFullCurrency());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
Dollars ($)
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x02-ES6_classes</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">3-currency.js</code></li>
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
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">4. Pricing</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Import the class <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Currency</code> from <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">3-currency.js</code></p>
            <p>Implement a class named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Pricing</code>:</p>
            <ul>
                <li>Constructor attributes:<ul>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">amount</code> (Number)</li>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">currency</code> (Currency)</li>
                    </ul>
                </li>
                <li>Each attribute must be stored in an &ldquo;underscore&rdquo; attribute version (ex: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">name</code> is stored in <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">_name</code>)</li>
                <li>Implement a getter and setter for each attribute.</li>
                <li>Implement a method named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">displayFullPrice</code> that returns the attributes in the following format <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">amount currency_name (currency_code)</code>.</li>
                <li>Implement a static method named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">convertPrice</code>. It should accept two arguments: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">amount</code> (Number), <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">conversionRate</code> (Number). The function should return the amount multiplied by the conversion rate.</li>
            </ul>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 4-main.js
import Pricing from &apos;./4-pricing.js&apos;;
import Currency from &apos;./3-currency.js&apos;;

const p = new Pricing(100, new Currency(&quot;EUR&quot;, &quot;Euro&quot;))
console.log(p);
console.log(p.displayFullPrice());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 4-main.js 
Pricing {
  _amount: 100,
  _currency: Currency { _code: &apos;EUR&apos;, _name: &apos;Euro&apos; }
}
100 Euro (EUR)
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x02-ES6_classes</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">4-pricing.js</code></li>
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
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">5. A Building</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Implement a class named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Building</code>:</p>
            <ul>
                <li>Constructor attributes:<ul>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">sqft</code> (Number)</li>
                    </ul>
                </li>
                <li>Each attribute must be stored in an &ldquo;underscore&rdquo; attribute version (ex: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">name</code> is stored in <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">_name</code>)</li>
                <li>Implement a getter for each attribute.</li>
                <li>Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">evacuationWarningMessage</code>.<ul>
                        <li>If a class that extends from it does not have a <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">evacuationWarningMessage</code> method, throw an error with the message <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Class extending Building must override evacuationWarningMessage</code></li>
                    </ul>
                </li>
            </ul>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 5-main.js
import Building from &apos;./5-building.js&apos;;

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}

bob@dylan:~$ 
bob@dylan:~$ npm run dev 5-main.js 
Building { _sqft: 100 }
Error: Class extending Building must override evacuationWarningMessage
    ...
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x02-ES6_classes</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">5-building.js</code></li>
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
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">6. Inheritance</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Import <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Building</code> from <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">5-building.js</code>.</p>
            <p>Implement a class named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">SkyHighBuilding</code> that extends from <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Building</code>:</p>
            <ul>
                <li>Constructor attributes:<ul>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">sqft</code> (Number) (must be assigned to the parent class <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Building</code>)</li>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">floors</code> (Number)</li>
                    </ul>
                </li>
                <li>Each attribute must be stored in an &ldquo;underscore&rdquo; attribute version (ex: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">name</code> is stored in <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">_name</code>)</li>
                <li>Implement a getter for each attribute.</li>
                <li>Override the method named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">evacuationWarningMessage</code> and return the following string <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Evacuate slowly the NUMBER_OF_FLOORS floors</code>.</li>
            </ul>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 6-main.js
import SkyHighBuilding from &apos;./6-sky_high.js&apos;;

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 6-main.js 
140
60
Evacuate slowly the 60 floors
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x02-ES6_classes</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">6-sky_high.js</code></li>
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
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">7. Airport</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Implement a class named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Airport</code>:</p>
            <ul>
                <li>Constructor attributes:<ul>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">name</code> (String)</li>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">code</code> (String)</li>
                    </ul>
                </li>
                <li>Each attribute must be stored in an &ldquo;underscore&rdquo; attribute version (ex: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">name</code> is stored in <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">_name</code>)</li>
                <li>The default string description of the class should return the airport <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">code</code> (example below).</li>
            </ul>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 7-main.js
import Airport from &quot;./7-airport.js&quot;;

const airportSF = new Airport(&apos;San Francisco Airport&apos;, &apos;SFO&apos;);
console.log(airportSF);
console.log(airportSF.toString());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 7-main.js 
Airport [SFO] { _name: &apos;San Francisco Airport&apos;, _code: &apos;SFO&apos; }
[object SFO]
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x02-ES6_classes</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">7-airport.js</code></li>
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
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">8. Primitive - Holberton Class</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Implement a class named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">HolbertonClass</code>:</p>
            <ul>
                <li>Constructor attributes:<ul>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">size</code> (Number)</li>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">location</code> (String)</li>
                    </ul>
                </li>
                <li>Each attribute must be stored in an &ldquo;underscore&rdquo; attribute version (ex: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">name</code> is stored in <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">_name</code>)</li>
                <li>When the class is cast into a <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Number</code>, it should return the size.</li>
                <li>When the class is cast into a <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">String</code>, it should return the location.</li>
            </ul>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 8-main.js
import HolbertonClass from &quot;./8-hbtn_class.js&quot;;

const hc = new HolbertonClass(12, &quot;Mezzanine&quot;)
console.log(Number(hc));
console.log(String(hc));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 8-main.js 
12
Mezzanine
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x02-ES6_classes</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">8-hbtn_class.js</code></li>
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
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">9. Hoisting</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Fix this code and make it work.</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">const class2019 = new HolbertonClass(2019, &apos;San Francisco&apos;);
const class2020 = new HolbertonClass(2020, &apos;San Francisco&apos;);

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentHolberton(&apos;Guillaume&apos;, &apos;Salva&apos;, class2020);
const student2 = new StudentHolberton(&apos;John&apos;, &apos;Doe&apos;, class2020);
const student3 = new StudentHolberton(&apos;Albert&apos;, &apos;Clinton&apos;, class2019);
const student4 = new StudentHolberton(&apos;Donald&apos;, &apos;Bush&apos;, class2019);
const student5 = new StudentHolberton(&apos;Jason&apos;, &apos;Sandler&apos;, class2019);

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
  }
}


export const listOfStudents = [student1, student2, student3, student4, student5];
</code></pre>
            <p>Result:</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 9-main.js
import listOfStudents from &quot;./9-hoisting.js&quot;;

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student =&gt; student.fullStudentDescription
);

console.log(listPrinted)

bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js
[
  StudentHolberton {
    _firstName: &apos;Guillaume&apos;,
    _lastName: &apos;Salva&apos;,
    _holbertonClass: HolbertonClass { _year: 2020, _location: &apos;San Francisco&apos; }
  },
  StudentHolberton {
    _firstName: &apos;John&apos;,
    _lastName: &apos;Doe&apos;,
    _holbertonClass: HolbertonClass { _year: 2020, _location: &apos;San Francisco&apos; }
  },
  StudentHolberton {
    _firstName: &apos;Albert&apos;,
    _lastName: &apos;Clinton&apos;,
    _holbertonClass: HolbertonClass { _year: 2019, _location: &apos;San Francisco&apos; }
  },
  StudentHolberton {
    _firstName: &apos;Donald&apos;,
    _lastName: &apos;Bush&apos;,
    _holbertonClass: HolbertonClass { _year: 2019, _location: &apos;San Francisco&apos; }
  },
  StudentHolberton {
    _firstName: &apos;Jason&apos;,
    _lastName: &apos;Sandler&apos;,
    _holbertonClass: HolbertonClass { _year: 2019, _location: &apos;San Francisco&apos; }
  }
]
[
  &apos;Guillaume Salva - 2020 - San Francisco&apos;,
  &apos;John Doe - 2020 - San Francisco&apos;,
  &apos;Albert Clinton - 2019 - San Francisco&apos;,
  &apos;Donald Bush - 2019 - San Francisco&apos;,
  &apos;Jason Sandler - 2019 - San Francisco&apos;
]
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x02-ES6_classes</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">9-hoisting.js</code></li>
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
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">10. Vroom</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Implement a class named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Car</code>:</p>
            <ul>
                <li>Constructor attributes:<ul>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">brand</code> (String)</li>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">motor</code> (String)</li>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">color</code> (String)</li>
                    </ul>
                </li>
                <li>Each attribute must be stored in an &ldquo;underscore&rdquo; attribute version (ex: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">name</code> is stored in <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">_name</code>)</li>
                <li>Add a method named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">cloneCar</code>. This method should return a new object of the class.</li>
            </ul>
            <p>Hint: Symbols in ES6</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 10-main.js
import Car from &quot;./10-car.js&quot;;

class TestCar extends Car {}

const tc1 = new TestCar(&quot;Nissan&quot;, &quot;Turbo&quot;, &quot;Pink&quot;);
const tc2 = tc1.cloneCar();

console.log(tc1);
console.log(tc1 instanceof TestCar);

console.log(tc2);
console.log(tc2 instanceof TestCar);

console.log(tc1 == tc2);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 10-main.js
TestCar { _brand: &apos;Nissan&apos;, _motor: &apos;Turbo&apos;, _color: &apos;Pink&apos; }
true
TestCar { _brand: undefined, _motor: undefined, _color: undefined }
true
false
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x02-ES6_classes</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">10-car.js</code></li>
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
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">11. EVCar</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">#advanced</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Import <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Car</code> from <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">10-car.js</code>.</p>
            <p>Implement a class named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">EVCar</code> that extends the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Car</code> class:</p>
            <ul>
                <li>Constructor attributes:<ul>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">brand</code> (String)</li>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">motor</code> (String)</li>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">color</code> (String)</li>
                        <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">range</code> (String)</li>
                    </ul>
                </li>
                <li>Each attribute must be stored in an &ldquo;underscore&rdquo; attribute version (ex: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">name</code> is stored in <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">_name</code>)</li>
                <li>For privacy reasons, when <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">cloneCar</code> is called on a EVCar object, the object returned should be an instance of <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Car</code> instead of <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">EVCar</code>.</li>
            </ul>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 100-main.js
import EVCar from &apos;./100-evcar.js&apos;;

const ec1 = new EVCar(&quot;Tesla&quot;, &quot;Turbo&quot;, &quot;Red&quot;, &quot;250&quot;);
console.log(ec1);

const ec2 = ec1.cloneCar();
console.log(ec2);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 100-main.js
EVCar {
  _brand: &apos;Tesla&apos;,
  _motor: &apos;Turbo&apos;,
  _color: &apos;Red&apos;,
  _range: &apos;250&apos;
}
Car { _brand: undefined, _motor: undefined, _color: undefined }
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x02-ES6_classes</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">100-evcar.js</code></li>
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
