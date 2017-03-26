* As a user, I should be able to mark a todo as completed
* As a user, I should able to edit a todo's content

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
