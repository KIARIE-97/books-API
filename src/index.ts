
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { bookRouter } from './Books/book.router'
import "dotenv/config"

const app = new Hono()


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
