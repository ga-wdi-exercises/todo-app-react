# React Todo App

Today's objective is to apply the fundamentals of what we learned so far by building a Todo app in React.

Why build a todo app?

Because it is the prototypical CRUD app that will test your web development skills with a different technology in a familiar domain.

## User Stories

Ultimately, it is up to you how your application should function but the app should meet the specs for the following user stories:

**Bronze**
* As a user, I should be able to see all my incomplete todos
* As a user, I should be able to add a new todo to the list
* As a user, I should be able to mark a todo as completed
* As a user, I should able to edit a todo's content
* As a user, I should be able to delete a todo

**Silver**
* As a user, I should be able to also see a list of my completed todos
* As a user, when I mark a todo as complete, it should be added to my completed todos list
* As a user, when I mark a completed todo as incomplete, it should be added to my todos list

**Gold**
* As a user, I should be able to make a new list
* As a user, I should be able to edit a list
* As a user, I should be able to delete a list.

**Platinum**
* As a user, when I refresh the page, I should be able to have my application's state be persisted
* As a user, I should be able to drag and drop todo items between lists.

## Submission

Submit a **pull request against this repo** by **5:00PM**
with your code and a link to your deployed app.

Also in the submission, please include your overall *comfort* and *completion* as well as any questions or specific areas designated for feedback.

## Getting started

**Fork** and **clone** this repo then run the necessary local setup:

```bash
$ git clone git@github.com:ga-wdi-exercises/todo-app-react.git
$ cd todo-app-react
$ npm i
$ npm start
```

> **Note**: If every thing was installed correctly, you should now be able to view starter application on [http://localhost:3000](http://localhost:3000). The app does not currently do much yet...

Start by defining your app's initial component in `src/App.js` and the app's entry point in `src/index.js`

> **Hint**: There is some sample markup in `starter_resources/layout.html` for your use if you choose to do so.

### Deploying to GitHub Pages

First, open your `package.json` and add a `homepage` field.
It could look like this:

```js
{
  "name": "my-app",
  "homepage": "http://myusername.github.io/my-app",
  // ...
}
```

Now, whenever you run `npm run build`, you will see a cheat sheet with a sequence of commands to deploy to GitHub pages:

```sh
git checkout -B gh-pages
git add -f build
git commit -am "Rebuild website"
git push origin :gh-pages
git subtree push --prefix build origin gh-pages
git checkout -
```
