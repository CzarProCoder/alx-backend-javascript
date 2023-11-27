<h1 style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 36px;">0x06. Unittests in JS</h1>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">UnitTests</span></strong><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">Back-end</span></strong><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">JavaScript</span></strong><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">ES6</span></strong><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">NodeJS</span></strong><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">ExpressJS</span></strong><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">Mocha</span></strong></div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <ul style="font-size: 11px;">
        <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">By: Johann Kerbrat, Engineering Manager at Uber Works</li>
        <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">Weight: 1</li>
        <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">Project over - took place from <span title=""><span style="border-bottom: 0.5px dashed currentcolor;">Nov 22, 2023 6:00 AM</span></span> to <span title=""><span style="border-bottom: 0.5px dashed currentcolor;">Nov 24, 2023 6:00 AM</span></span></li>
        <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">An auto review will be launched at the deadline</li>
    </ul>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);font-size: 14px;border: 1px solid rgb(238, 238, 238);">
    <h4 style="color: inherit;font-size: 18px;">In a nutshell&hellip;</h4>
    <ul>
        <li><strong><strong>Auto QA review:</strong></strong> 0.0/64 mandatory</li>
        <li><strong><strong>Altogether:</strong></strong>&nbsp; <strong><strong>0.0%</strong></strong>
            <ul>
                <li>Mandatory: 0.0%</li>
                <li>Optional: no optional tasks</li>
            </ul>
        </li>
    </ul>
</div>
<div style="text-align: start;color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);font-size: 14px;border: 1px solid rgb(221, 221, 221);">
    <div>
        <p><img src="https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/90f79a666e174e6c4ffc.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20231127%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231127T094119Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=78a851984eefde8b95ac8313f213428cc13b80cbf2c2acd73c8bc64580baf91b" alt="" style="border: 0px;"></p>
        <h2 style="color: inherit;font-size: 30px;">Resources</h2>
        <p><strong><strong>Read or watch:</strong></strong></p>
        <ul>
            <li><a href="https://intranet.alxswe.com/rltoken/Gx5mfX41__cc2hwepcl0aA" title="Mocha documentation" target="_blank" style="color: transparent;">Mocha documentation</a></li>
            <li><a href="https://intranet.alxswe.com/rltoken/Rs3SrSdr9OxPp-4099A0cg" title="Chai" target="_blank" style="color: transparent;">Chai</a></li>
            <li><a href="https://intranet.alxswe.com/rltoken/5KsW5N9sG3sGWW3z-jkNwA" title="Sinon" target="_blank" style="color: transparent;">Sinon</a></li>
            <li><a href="https://intranet.alxswe.com/rltoken/Jq58SNUh8jcZqKoFcuOQdw" title="Express" target="_blank" style="color: transparent;">Express</a></li>
            <li><a href="https://intranet.alxswe.com/rltoken/FcJfzr2jUJSj8Xp3z9L1wg" title="Request" target="_blank" style="color: transparent;">Request</a></li>
            <li><a href="https://intranet.alxswe.com/rltoken/HwB8gViDosy8znk7H9i4Pw" title="How to Test NodeJS Apps using Mocha, Chai and SinonJS" target="_blank" style="color: transparent;">How to Test NodeJS Apps using Mocha, Chai and SinonJS</a></li>
        </ul>
        <h2 style="color: inherit;font-size: 30px;">Learning Objectives</h2>
        <p>At the end of this project, you are expected to be able to <a href="https://intranet.alxswe.com/rltoken/Ge846tiklKJNUSNh60IR7w" title="explain to anyone" target="_blank" style="color: transparent;">explain to anyone</a>, <strong><strong>without the help of Google</strong></strong>:</p>
        <ul>
            <li>How to use Mocha to write a test suite</li>
            <li>How to use different assertion libraries (Node or Chai)</li>
            <li>How to present long test suites</li>
            <li>When and how to use spies</li>
            <li>When and how to use stubs</li>
            <li>What are hooks and when to use them</li>
            <li>Unit testing with Async functions</li>
            <li>How to write integration tests with a small node server</li>
        </ul>
        <h2 style="color: inherit;font-size: 30px;">Requirements</h2>
        <ul>
            <li>All of your code will be executed on Ubuntu 18.04 using Node 12.x.x</li>
            <li>Allowed editors: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">vi</code>, <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">vim</code>, <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">emacs</code>, <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Visual Studio Code</code></li>
            <li>All your files should end with a new line</li>
            <li>A <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">README.md</code> file, at the root of the folder of the project, is mandatory</li>
            <li>Your code should use the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">js</code> extension</li>
            <li>When running every test with <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm run test *.test.js</code>, everything should pass correctly without any warning or error</li>
        </ul>
    </div>
</div>
<h2 style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 30px;">Tasks</h2>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">0. Basic test with Mocha and Node assertion library</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);border: 1px solid rgb(238, 238, 238);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p><strong><strong>Install Mocha using npm:</strong></strong></p>
            <ul>
                <li>Set up a scripts in your <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">package.json</code> to quickly run Mocha using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm test</code></li>
                <li>You have to use <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">assert</code></li>
            </ul>
            <p><strong><strong>Create a new file named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0-calcul.js</code>:</strong></strong></p>
            <ul>
                <li>Create a function named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">calculateNumber</code>. It should accepts two arguments (number) <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">a</code> and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">b</code></li>
                <li>The function should round <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">a</code> and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">b</code> and return the sum of it</li>
            </ul>
            <p><strong><strong>Test cases</strong></strong></p>
            <ul>
                <li>Create a file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0-calcul.test.js</code> that contains test cases of this function</li>
                <li>You can assume <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">a</code> and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">b</code> are always number</li>
                <li>Tests should be around the &ldquo;rounded&rdquo; part</li>
            </ul>
            <p><strong><strong>Tips:</strong></strong></p>
            <ul>
                <li>For the sake of the example, this test suite is slightly extreme and probably not needed</li>
                <li>However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases</li>
            </ul>
            <p><strong><strong>Requirements:</strong></strong></p>
            <ul>
                <li>You have to use <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">assert</code></li>
                <li>You should be able to run the test suite using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm test 0-calcul.test.js</code></li>
                <li>Every test should pass without any warning</li>
            </ul>
            <p><strong><strong>Expected output</strong></strong></p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">&gt; const calculateNumber = require(&quot;./0-calcul.js&quot;);
&gt; calculateNumber(1, 3)
4
&gt; calculateNumber(1, 3.7)
5
&gt; calculateNumber(1.2, 3.7)
5
&gt; calculateNumber(1.5, 3.7)
6
&gt; 
</code></pre>
            <p><strong><strong>Run test</strong></strong></p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ npm test 0-calcul.test.js 

&gt; task_0@1.0.0 test /root
&gt; ./node_modules/mocha/bin/mocha &quot;0-calcul.test.js&quot;

  calculateNumber
    ✓ ...
    ✓ ...
    ✓ ...
    ...

  130 passing (35ms)
bob@dylan:~$ 
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x06-unittests_in_js</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">package.json, 0-calcul.js, 0-calcul.test.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;border: 1px solid rgb(215, 41, 41);">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">1. Combining descriptions</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);border: 1px solid rgb(238, 238, 238);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p><strong><strong>Create a new file named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">1-calcul.js</code>:</strong></strong></p>
            <ul>
                <li>Upgrade the function you created in the previous task (<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0-calcul.js</code>)</li>
                <li>Add a new argument named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">type</code> at first argument of the function. <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">type</code> can be <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">SUM</code>, <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">SUBTRACT</code>, or <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">DIVIDE</code> (string)</li>
                <li>When type is <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">SUM</code>, round the two numbers, and add <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">a</code> and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">b</code></li>
                <li>When type is <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">SUBTRACT</code>, round the two numbers, and subtract <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">b</code> from <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">a</code></li>
                <li>When type is <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">DIVIDE</code>, round the two numbers, and divide <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">a</code> with <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">b</code> - if the rounded value of <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">b</code> is equal to 0, return the string <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Error</code></li>
            </ul>
            <p><strong><strong>Test cases</strong></strong></p>
            <ul>
                <li>Create a file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">1-calcul.test.js</code> that contains test cases of this function</li>
                <li>You can assume <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">a</code> and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">b</code> are always number</li>
                <li>Usage of <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">describe</code> will help you to organize your test cases</li>
            </ul>
            <p><strong><strong>Tips:</strong></strong></p>
            <ul>
                <li>For the sake of the example, this test suite is slightly extreme and probably not needed</li>
                <li>However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases</li>
            </ul>
            <p><strong><strong>Requirements:</strong></strong></p>
            <ul>
                <li>You have to use <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">assert</code></li>
                <li>You should be able to run the test suite using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm test 1-calcul.test.js</code></li>
                <li>Every test should pass without any warning</li>
            </ul>
            <p><strong><strong>Expected output</strong></strong></p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">&gt; const calculateNumber = require(&quot;./1-calcul.js&quot;);
&gt; calculateNumber(&apos;SUM&apos;, 1.4, 4.5)
6
&gt; calculateNumber(&apos;SUBTRACT&apos;, 1.4, 4.5)
-4
&gt; calculateNumber(&apos;DIVIDE&apos;, 1.4, 4.5)
0.2
&gt; calculateNumber(&apos;DIVIDE&apos;, 1.4, 0)
&apos;Error&apos;
</code></pre>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x06-unittests_in_js</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">1-calcul.js, 1-calcul.test.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;border: 1px solid rgb(215, 41, 41);">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">2. Basic test using Chai assertion library</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);border: 1px solid rgb(238, 238, 238);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>While using Node assert library is completely valid, a lot of developers prefer to have a behavior driven development style. This type being easier to read and therefore to maintain.</p>
            <p><strong><strong>Let&rsquo;s install Chai with npm:</strong></strong></p>
            <ul>
                <li>Copy the file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">1-calcul.js</code> in a new file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">2-calcul_chai.js</code> (same content, same behavior)</li>
                <li>Copy the file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">1-calcul.test.js</code> in a new file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">2-calcul_chai.test.js</code></li>
                <li>Rewrite the test suite, using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">expect</code> from <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Chai</code></li>
            </ul>
            <p><strong><strong>Tips:</strong></strong></p>
            <ul>
                <li>Remember that test coverage is always difficult to maintain. Using an easier style for your tests will help you</li>
                <li>The easier your tests are to read and understand, the more other engineers will be able to fix them when they are modifying your code</li>
            </ul>
            <p><strong><strong>Requirements:</strong></strong></p>
            <ul>
                <li>You should be able to run the test suite using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm test 2-calcul_chai.test.js</code></li>
                <li>Every test should pass without any warning</li>
            </ul>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x06-unittests_in_js</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">2-calcul_chai.js, 2-calcul_chai.test.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;border: 1px solid rgb(215, 41, 41);">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">3. Spies</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);border: 1px solid rgb(238, 238, 238);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Spies are a useful wrapper that will execute the wrapped function, and log useful information (e.g. was it called, with what arguments). Sinon is a library allowing you to create spies.</p>
            <p><strong><strong>Let&rsquo;s install Sinon with npm:</strong></strong></p>
            <ul>
                <li>Create a new file named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">utils.js</code></li>
                <li>Create a new module named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Utils</code></li>
                <li>Create a property named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">calculateNumber</code> and paste your previous code in the function</li>
                <li>Export the Utils module</li>
            </ul>
            <p><strong><strong>Create a new file named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">3-payment.js</code>:</strong></strong></p>
            <ul>
                <li>Create a new function named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">sendPaymentRequestToApi</code>. The function takes two argument <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">totalAmount</code>, and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">totalShipping</code></li>
                <li>The function calls the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Utils.calculateNumber</code> function with type <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">SUM</code>, <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">totalAmount</code> as <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">a</code>, <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">totalShipping</code> as <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">b</code> and display in the console the message <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">The total is: &lt;result of the sum&gt;</code></li>
            </ul>
            <p><strong><strong>Create a new file named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">3-payment.test.js</code> and add a new suite named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">sendPaymentRequestToApi</code>:</strong></strong></p>
            <ul>
                <li>By using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">sinon.spy</code>, make sure the math used for <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">sendPaymentRequestToApi(100, 20)</code> is the same as <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Utils.calculateNumber(&apos;SUM&apos;, 100, 20)</code> (validate the usage of the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Utils</code> function)</li>
            </ul>
            <p><strong><strong>Requirements:</strong></strong></p>
            <ul>
                <li>You should be able to run the test suite using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm test 3-payment.test.js</code></li>
                <li>Every test should pass without any warning</li>
                <li>You should use a <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">spy</code> to complete this exercise</li>
            </ul>
            <p><strong><strong>Tips:</strong></strong></p>
            <ul>
                <li>Remember to always restore a spy after using it in a test, it will prevent you from having weird behaviors</li>
                <li>Spies are really useful and allow you to focus only on what your code is doing and not the downstream APIs or functions</li>
                <li>Remember that integration test is different from unit test. Your unit test should test your code, not the code of a different function</li>
            </ul>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x06-unittests_in_js</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">utils.js, 3-payment.js, 3-payment.test.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;border: 1px solid rgb(215, 41, 41);">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">4. Stubs</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);border: 1px solid rgb(238, 238, 238);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Stubs are similar to spies. Except that you can provide a different implementation of the function you are wrapping. Sinon can be used as well for stubs.</p>
            <p><strong><strong>Create a new file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">4-payment.js</code>, and copy the code from <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">3-payment.js</code></strong></strong> (same content, same behavior)</p>
            <p><strong><strong>Create a new file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">4-payment.test.js</code>, and copy the code from <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">3-payment.test.js</code></strong></strong></p>
            <ul>
                <li>Imagine that calling the function <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Utils.calculateNumber</code> is actually calling an API or a very expensive method. You don&rsquo;t necessarily want to do that on every test run</li>
                <li>Stub the function <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Utils.calculateNumber</code> to always return the same number <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">10</code></li>
                <li>Verify that the stub is being called with <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">type = SUM</code>, <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">a = 100</code>, and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">b = 20</code></li>
                <li>Add a spy to verify that <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">console.log</code> is logging the correct message <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">The total is: 10</code></li>
            </ul>
            <p><strong><strong>Requirements:</strong></strong></p>
            <ul>
                <li>You should be able to run the test suite using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm test 4-payment.test.js</code></li>
                <li>Every test should pass without any warning</li>
                <li>You should use a <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">stub</code> to complete this exercise</li>
                <li>Do not forget to restore the spy and the stub</li>
            </ul>
            <p><strong><strong>Tips:</strong></strong></p>
            <ul>
                <li>Using stubs allows you to greatly speed up your test. When executing thousands of tests, saving a few seconds is important</li>
                <li>Using stubs allows you to control specific edge case (e.g a function throwing an error or returning a specific result like a number or a timestamp)</li>
            </ul>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x06-unittests_in_js</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">4-payment.js, 4-payment.test.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;border: 1px solid rgb(215, 41, 41);">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">5. Hooks</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);border: 1px solid rgb(238, 238, 238);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Hooks are useful functions that can be called before execute one or all tests in a suite</p>
            <p><strong><strong>Copy the code from <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">4-payment.js</code> into a new file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">5-payment.js</code>:</strong></strong> (same content/same behavior)</p>
            <p><strong><strong>Create a new file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">5-payment.test.js</code>:</strong></strong></p>
            <ul>
                <li>Inside the same <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">describe</code>, create 2 tests:<ul>
                        <li>The first test will call <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">sendPaymentRequestToAPI</code>with 100, and 20:<ul>
                                <li>Verify that the console is logging the string <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">The total is: 120</code></li>
                                <li>Verify that the console is only called once</li>
                            </ul>
                        </li>
                        <li>The second test will call <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">sendPaymentRequestToAPI</code>with 10, and 10:<ul>
                                <li>Verify that the console is logging the string <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">The total is: 20</code></li>
                                <li>Verify that the console is only called once</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <p><strong><strong>Requirements:</strong></strong></p>
            <ul>
                <li>You should be able to run the test suite using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm test 5-payment.test.js</code></li>
                <li>Every test should pass without any warning</li>
                <li>You should use only one <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">spy</code> to complete this exercise</li>
                <li>You should use a <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">beforeEach</code> and a <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">afterEach</code> hooks to complete this exercise</li>
            </ul>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x06-unittests_in_js</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">5-payment.js, 5-payment.test.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;border: 1px solid rgb(215, 41, 41);">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">6. Async tests with done</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);border: 1px solid rgb(238, 238, 238);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>Look into how to support async testing, for example when waiting for the answer of an API or from a Promise</p>
            <p><strong><strong>Create a new file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">6-payment_token.js</code>:</strong></strong></p>
            <ul>
                <li>Create a new function named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">getPaymentTokenFromAPI</code></li>
                <li>The function will take an argument called <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">success</code> (boolean)</li>
                <li>When <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">success</code> is true, it should return a resolved promise with the object <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">{data: &apos;Successful response from the API&apos; }</code></li>
                <li>Otherwise, the function is doing nothing.</li>
            </ul>
            <p><strong><strong>Create a new file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">6-payment_token.test.js</code> and write a test suite named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">getPaymentTokenFromAPI</code></strong></strong></p>
            <ul>
                <li>How to test the result of <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">getPaymentTokenFromAPI(true)</code>?</li>
            </ul>
            <p><strong><strong>Tips:</strong></strong></p>
            <ul>
                <li>You should be extremely careful when working with async testing. Without calling <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">done</code> properly, your test could be always passing even if what you are actually testing is never executed</li>
            </ul>
            <p><strong><strong>Requirements:</strong></strong></p>
            <ul>
                <li>You should be able to run the test suite using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm test 6-payment_token.test.js</code></li>
                <li>Every test should pass without any warning</li>
                <li>You should use the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">done</code> callback to execute this test</li>
            </ul>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x06-unittests_in_js</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">6-payment_token.js, 6-payment_token.test.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;border: 1px solid rgb(215, 41, 41);">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">7. Skip</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);border: 1px solid rgb(238, 238, 238);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>When you have a long list of tests, and you can&rsquo;t figure out why a test is breaking, avoid commenting out a test, or removing it. <strong><strong>Skip</strong></strong> it instead, and file a ticket to come back to it as soon as possible</p>
            <p>You will be using this file, conveniently named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">7-skip.test.js</code></p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">const { expect } = require(&apos;chai&apos;);

describe(&apos;Testing numbers&apos;, () =&gt; {
  it(&apos;1 is equal to 1&apos;, () =&gt; {
    expect(1 === 1).to.be.true;
  });

  it(&apos;2 is equal to 2&apos;, () =&gt; {
    expect(2 === 2).to.be.true;
  });

  it(&apos;1 is equal to 3&apos;, () =&gt; {
    expect(1 === 3).to.be.true;
  });

  it(&apos;3 is equal to 3&apos;, () =&gt; {
    expect(3 === 3).to.be.true;
  });

  it(&apos;4 is equal to 4&apos;, () =&gt; {
    expect(4 === 4).to.be.true;
  });

  it(&apos;5 is equal to 5&apos;, () =&gt; {
    expect(5 === 5).to.be.true;
  });

  it(&apos;6 is equal to 6&apos;, () =&gt; {
    expect(6 === 6).to.be.true;
  });

  it(&apos;7 is equal to 7&apos;, () =&gt; {
    expect(7 === 7).to.be.true;
  });
});
</code></pre>
            <p><strong><strong>Using the file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">7-skip.test.js</code>:</strong></strong></p>
            <ul>
                <li>Make the test suite pass <strong><strong>without</strong></strong> fixing or removing the failing test</li>
                <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">it</code> description <strong><strong>must stay</strong></strong> the same</li>
            </ul>
            <p><strong><strong>Tips:</strong></strong></p>
            <ul>
                <li>Skipping is also very helpful when you only want to execute the test in a particular case (specific environment, or when an API is not behaving correctly)</li>
            </ul>
            <p><strong><strong>Requirements:</strong></strong></p>
            <ul>
                <li>You should be able to run the test suite using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm test 7-skip.test.js</code></li>
                <li>Every test should pass without any warning</li>
            </ul>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x06-unittests_in_js</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">7-skip.test.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;border: 1px solid rgb(215, 41, 41);">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">8. Basic Integration testing</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);border: 1px solid rgb(238, 238, 238);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>In a folder <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">8-api</code> located at the root of the project directory, copy this <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">package.json</code> over.</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">{
  &quot;name&quot;: &quot;8-api&quot;,
  &quot;version&quot;: &quot;1.0.0&quot;,
  &quot;description&quot;: &quot;&quot;,
  &quot;main&quot;: &quot;index.js&quot;,
  &quot;scripts&quot;: {
    &quot;test&quot;: &quot;./node_modules/mocha/bin/mocha&quot;
  },
  &quot;author&quot;: &quot;&quot;,
  &quot;license&quot;: &quot;ISC&quot;,
  &quot;dependencies&quot;: {
    &quot;express&quot;: &quot;^4.17.1&quot;
  },
  &quot;devDependencies&quot;: {
    &quot;chai&quot;: &quot;^4.2.0&quot;,
    &quot;mocha&quot;: &quot;^6.2.2&quot;,
    &quot;request&quot;: &quot;^2.88.0&quot;,
    &quot;sinon&quot;: &quot;^7.5.0&quot;
  }
}
</code></pre>
            <p><strong><strong>Create a new file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">api.js</code>:</strong></strong></p>
            <ul>
                <li>By using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">express</code>, create an instance of <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">express</code> called <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">app</code></li>
                <li>Listen to port 7865 and log <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">API available on localhost port 7865</code> to the browser console when the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">express</code> server is started</li>
                <li>For the route <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">GET /</code>, return the message <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Welcome to the payment system</code></li>
            </ul>
            <p><strong><strong>Create a new file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">api.test.js</code>:</strong></strong></p>
            <ul>
                <li>Create one suite for the index page:<ul>
                        <li>Correct status code?</li>
                        <li>Correct result?</li>
                        <li>Other?</li>
                    </ul>
                </li>
            </ul>
            <p><strong><strong>Server</strong></strong></p>
            <p>Terminal 1</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~/8-api$  node api.js
API available on localhost port 7865
</code></pre>
            <p>Terminal 2</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~/8-api$  curl http://localhost:7865 ; echo &quot;&quot;
Welcome to the payment system
bob@dylan:~/8-api$  
bob@dylan:~/8-api$ npm test api.test.js

&gt; 8-api@1.0.0 test /root/8-api
&gt; ./node_modules/mocha/bin/mocha &quot;api.test.js&quot;



  Index page
    ✓ ...
    ✓ ...
    ...

  23 passing (256ms)

bob@dylan:~/8-api$
</code></pre>
            <p><strong><strong>Tips:</strong></strong></p>
            <ul>
                <li>Since this is an integration test, you will need to have your node server running for the test to pass</li>
                <li>You can use the module <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">request</code></li>
            </ul>
            <p><strong><strong>Requirements:</strong></strong></p>
            <ul>
                <li>You should be able to run the test suite using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm test api.test.js</code></li>
                <li>Every test should pass without any warnings</li>
            </ul>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x06-unittests_in_js</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">8-api/package.json, 8-api/api.js, 8-api/api.test.js</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;border: 1px solid rgb(215, 41, 41);">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">9. Regex integration testing</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);border: 1px solid rgb(238, 238, 238);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>In a folder <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">9-api</code>, reusing the previous project in <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">8-api</code> (<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">package.json</code>, <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">api.js</code> and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">api.test.js</code>)</p>
            <p><strong><strong>Modify the file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">api.js</code>:</strong></strong></p>
            <ul>
                <li>Add a new endpoint: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">GET /cart/:id</code></li>
                <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">:id</code> must be only a number (validation must be in the route definition)</li>
                <li>When access, the endpoint should return <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Payment methods for cart :id</code></li>
            </ul>
            <p><strong><strong>Modify the file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">api.test.js</code>:</strong></strong></p>
            <ul>
                <li>Add a new test suite for the cart page:<ul>
                        <li>Correct status code when <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">:id</code> is a number?</li>
                        <li>Correct status code when <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">:id</code> is NOT a number (=&gt; 404)?</li>
                        <li>etc.</li>
                    </ul>
                </li>
            </ul>
            <p><strong><strong>Server</strong></strong></p>
            <p>Terminal 1</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ node api.js
API available on localhost port 7865
</code></pre>
            <p>Terminal 2</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ curl http://localhost:7865/cart/12 ; echo &quot;&quot;
Payment methods for cart 12
bob@dylan:~$ 
bob@dylan:~$ curl http://localhost:7865/cart/hello -v
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 7865 (#0)
&gt; GET /cart/hello HTTP/1.1
&gt; Host: localhost:7865
&gt; User-Agent: curl/7.58.0
&gt; Accept: */*
&gt; 
&lt; HTTP/1.1 404 Not Found
&lt; X-Powered-By: Express
&lt; Content-Security-Policy: default-src &apos;none&apos;
&lt; X-Content-Type-Options: nosniff
&lt; Content-Type: text/html; charset=utf-8
&lt; Content-Length: 149
&lt; Date: Wed, 15 Jul 2020 08:33:44 GMT
&lt; Connection: keep-alive
&lt; 
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
&lt;meta charset=&quot;utf-8&quot;&gt;
&lt;title&gt;Error&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;pre&gt;Cannot GET /cart/hello&lt;/pre&gt;
&lt;/body&gt;
&lt;/html&gt;
* Connection #0 to host localhost left intact
bob@dylan:~$ 
</code></pre>
            <p><strong><strong>Tips:</strong></strong></p>
            <ul>
                <li>You will need to add a small regex in your path to support the usecase</li>
            </ul>
            <p><strong><strong>Requirements:</strong></strong></p>
            <ul>
                <li>You should be able to run the test suite using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm test api.test.js</code></li>
                <li>Every test should pass without any warning</li>
            </ul>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x06-unittests_in_js</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">9-api/api.js, 9-api/api.test.js, 9-api/package.json</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;border: 1px solid rgb(215, 41, 41);">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">QA Review</button></div>
                <div style="font-size: 1.5rem !important;"><br></div>
            </div>
        </div>
    </div>
</div>
<div style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
        <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
            <h3 style="color: rgb(51, 51, 51);font-size: 16px;">10. Deep equality &amp; Post integration testing</h3>
            <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
        </div>
        <div>
            <div style="color: rgb(152, 163, 174);border: 1px solid rgb(238, 238, 238);">
                <div>
                    <div><br></div>
                </div>
                <div>Score: 0.0% (<em><span style="font-size: 12px;">Checks completed: 0.0%</span></em>)</div>
            </div>
            <p>In a folder <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">10-api</code>, reusing the previous project in <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">9-api</code> (<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">package.json</code>, <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">api.js</code> and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">api.test.js</code>)</p>
            <p><strong><strong>Modify the file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">api.js</code>:</strong></strong></p>
            <ul>
                <li>Add an endpoint <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">GET /available_payments</code> that returns an object with the following structure:</li>
            </ul>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">{
  payment_methods: {
    credit_cards: true,
    paypal: false
  }
}
</code></pre>
            <ul>
                <li>Add an endpoint <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">POST /login</code> that returns the message <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Welcome :username</code> where <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">:username</code> is the value of the body variable <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">userName</code>.</li>
            </ul>
            <p><strong><strong>Modify the file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">api.test.js</code>:</strong></strong></p>
            <ul>
                <li>Add a test suite for the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">/login</code> endpoint</li>
                <li>Add a test suite for the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">/available_payments</code> endpoint</li>
            </ul>
            <p><strong><strong>Server</strong></strong></p>
            <p>Terminal 1</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ node api.js
API available on localhost port 7865
</code></pre>
            <p>Terminal 2</p>
            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ curl http://localhost:7865/available_payments ; echo &quot;&quot;
{&quot;payment_methods&quot;:{&quot;credit_cards&quot;:true,&quot;paypal&quot;:false}}
bob@dylan:~$ 
bob@dylan:~$ curl -XPOST http://localhost:7865/login -d &apos;{ &quot;userName&quot;: &quot;Betty&quot; }&apos; -H &apos;Content-Type: application/json&apos; ; echo &quot;&quot;
Welcome Betty
bob@dylan:~$ 
</code></pre>
            <p><strong><strong>Tips:</strong></strong></p>
            <ul>
                <li>Look at deep equality to compare objects</li>
            </ul>
            <p><strong><strong>Requirements:</strong></strong></p>
            <ul>
                <li>You should be able to run the test suite using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm test api.test.js</code></li>
                <li>Every test should pass without any warning</li>
                <li>Your server should not display any error</li>
            </ul>
        </div>
        <div>
            <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                <p><strong><strong>Repo:</strong></strong></p>
                <ul>
                    <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                    <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x06-unittests_in_js</code></li>
                    <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">10-api/api.js, 10-api/api.test.js, 10-api/package.json</code></li>
                </ul>
            </div>
        </div>
        <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
            <div>
                <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Help</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Check your code</button> <button style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 12px;border: 1px solid rgb(215, 41, 41);">Ask for a new correction</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button>&nbsp;</div>
            </div>
        </div>
    </div>
</div>
