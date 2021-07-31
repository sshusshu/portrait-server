import express from 'express'
import cors from 'cors'
import messagesRoute from './routes/messages.js'
import usersRoute from './routes/users.js'
import drawingsRoute from './routes/drawings.js'

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:7000',
    credentials: true,
  }),
)

const routes = [...messagesRoute, ...drawingsRoute]
routes.forEach(({ method, route, handler }) => {
  app[method](route, handler);
})

app.listen(7000, () => {
  console.log('server listening on 7000...')
})
