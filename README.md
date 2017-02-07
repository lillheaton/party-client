# Run

```shell
npm install

npm run start
# npm run start:dev for starting in development mode
```


# Heroku

```shell
heroku open 
#Opens window

git push heroku master
# Pushes latest to Heroku

heroku logs --source app --tail
# Application log output
```

# Requirements

### Config
In development there needs to be a file called "contentful.js" that will contain the following

```js

module.exports = "<contentful access_token>";

```