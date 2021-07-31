import express from 'express'
import cors from 'cors'
import messagesRoute from './routes/messages.js'
import drawingsRoute from './routes/drawings.js'

const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const routes = [...messagesRoute, ...drawingsRoute]
routes.forEach(({ method, route, handler }) => {
  app[method](route, handler);
})

app.listen(port, () => {
  console.log('server listening on 3000...')
})
