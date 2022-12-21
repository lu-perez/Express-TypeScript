import express from 'express'
import * as diaryServices from '../services/diaryServices'
import { toNewDiaryEntry } from '../utils/utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/diary/:id', (req, res) => {
  const diary = diaryServices.findDiaryById(Number(req.params.id))
  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.get('/non-sensitive-info-diary/:id', (req, res) => {
  const diary = diaryServices.findNonSensitiveInfoDiaryById(Number(req.params.id))
  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/diary', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

export default router
