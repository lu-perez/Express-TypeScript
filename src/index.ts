import express from 'express'
import diaryRouter from './routes/diaries.route'

const app = express()
const PORT = 5555

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!')
  res.send('pong')
})

app.use(express.json())
app.use(diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
