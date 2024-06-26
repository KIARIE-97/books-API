
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { bookRouter } from './Books/book.router'
import { cors } from 'hono/cors'
import "dotenv/config"

const app = new Hono()

// app.use('/books/*', cors()) // this will enable cors for all routes that start with /books 

app.use(
  '/books/*',
  cors({
    origin: 'https://book-repository-app-d1yu.vercel.app',
    allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
    allowMethods: ['POST', 'GET', 'PUT', 'DELETE'],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
    credentials: true,
  })
)

app.get('/', (c) => {
  return c.text('my books repository🤪')
})
export default app;

app.notFound((c) => {
  return c.text('route not found!😶‍🌫️👽')
})
app.route('/', bookRouter)

const port = 3000

serve({
  fetch: app.fetch,
  port
})
console.log(`Server is running on port ${port}`)
