# Mini Message Board-TOP

### This project aims to use basic knowledge of Express as a framework to create a simple message board.

---

### <a href="#assignment" class="anchor-link">Assignment</a>

<details>

<ol>
    <li>Use <code>express-generator</code> to set up a basic project using whichever templating language you prefer. If you want, you can set it all up manually – it doesn’t really take that much longer.
    <ul>
        <li>Hint: here are links to some of the more popular templating language docs: <a href="https://pugjs.org/api/getting-started.html" target="_blank" rel="noopener noreferrer">PUG</a>, <a href="https://ejs.co/#docs" target="_blank" rel="noopener noreferrer">EJS</a>, <a href="https://handlebarsjs.com/guide/" target="_blank" rel="noopener noreferrer">Handlebars</a></li>
    </ul>
    </li>
    <li>

<p>Initialize a Git repo in your project directory with</p>

```bash
git init
```

<p>Create a <code>.gitignore</code> file in your project directory that includes <code>node_modules</code>.</p>
    </li>
    <li>We are going to have 2 routes, the index (<code>"/"</code>) and a new-message form (<code>"/new"</code>). The generator already created a router for our index, so find that file and open it up.  It can be found at <code>routes/index.js</code>. There is already a <code>router.get()</code> method for <code>"/"</code> that should be rendering your index view, so lets add some messages to it.</li>
    <li>
    <p>Create an array at the top of your index router called <code>messages</code> and put a couple of sample messages inside of it like this:</p>

```javascript
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
```

</li>
    <li>Next, in your index template (in the <code>"views"</code> folder) loop through the messages array using whichever templating language you selected and for each one, display the user, text and the date the message was added. Don’t forget to make your messages available to your template by including it in the res.render ‘locals’ object (e.g. <code>res.render('index', { title: "Mini Messageboard", messages: messages })</code>).</li>
    <li>
    <p>Next let’s set up the new message form.  In the router add a <code>router.get()</code> for the <code>"/new"</code> route and point it to a template named <code>"form"</code>. In the views directory create your <code>form</code> template. Add a heading, 2 inputs (one for the author’s name and one for the message text) and a submit button. To have the form make a network request you will need to define it with both a method and an action like so:</p>

```html
<form method="POST" action="/new">put your inputs and buttons in here!</form>
```

</li>
    <li>With your form set up like this, when you click on the submit button it should send a POST request to the url specified by the action attribute, so go back to your index router and add a <code>router.post()</code> for <code>"/new"</code>.</li>
    <li>In order to get and use the data from your form, you will need to access the contents of your form inside <code>router.post()</code> as an object called <code>req.body</code>. The individual fields inside the body object are named according to the <code>name</code> attribute on your inputs (the value of <code>&lt;input name="messageText"&gt;</code> will show up as <code>req.body.messageText</code> inside the <code>router.post</code> function).</li>
    <li>
    <p>In your <code>router.post()</code> take the contents of the form submission and push them into the messages array as an object that looks something like this:</p>

```javascript
messages.push({ text: messageText, user: messageUser, added: new Date() });
```

</li>
    <li>At the end of the <code>router.post()</code> function use <code>res.redirect('/')</code> to send users back to the index page after submitting a new message.</li>
    <li>At this point, you should be able to visit <code>/new</code> (it might be a good idea to add a link to that route on your index page), fill out the form, submit it and then see it show up on the index page!</li>
    <li>You’ll learn how to deploy your app to the web in the <a href="https://www.theodinproject.com/lessons/nodejs-deployment" target="_blank" rel="noopener noreferrer">next lesson</a>, don’t forget to come back and submit it to the submissions below once you’re done!</li>
</ol>

</details>
