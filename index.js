const express = require('express');
const app = express();
const DB = require('./database.js');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.user)) {
      res.status(409).send({msg: 'Existing user'});
    } else {
      const user = await DB.createUser(req.body.user, req.body.password);
  
      setAuthCookie(res, user.token);
  
      res.send({
        id: user._id,
      });
    }
});

apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.user);
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        setAuthCookie(res, user.token);
        res.send({ id: user._id});
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized'});
  });

  apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
});

apiRouter.get('/user/:user', async (req, res) => {
  const user = await DB.getUser(req.params.user);
  if (user) {
    const token = req?.cookies.token;
    res.send({ user: user.user, authenticated: token === user.token});
    return;
  }
  res.status(404).send({ msg: 'Unknown'});
});

var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.post('/like', async(req,res) => {
   let response;
  try {
    response = await DB.findLikedRecipe(req.body);
    array = response.likes
    if (array.includes(req.body.recipe)) {
      response = await DB.removeLikedRecipe(req.body)
    } else {
      response = await DB.addLikedRecipe(req.body);
    }
    res.send({ response });
  }
  catch {
    console.log("Error");
  }
});

secureApiRouter.post('/mylikes', async(req,res) => {
  const user = await DB.findAllLikedRecipes(req.body);
  array = user.likes;
  //console.log(array);
  jsonArray = JSON.stringify(array);
  res.send(jsonArray);
});

app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
    res.sendFile('index.html', {root: 'public'});
});

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


