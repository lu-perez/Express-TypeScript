import { NewDiaryEntry, Weather, Visibility } from '../types'

const isString = (str: any): boolean => {
  return (typeof str === 'string' || str instanceof String)
}

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const isDate = (date: any): boolean => {
  return Boolean(Date.parse(date))
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing Weather')
  }
  return weatherFromRequest
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing Visibility')
  }
  return visibilityFromRequest
}

export const toNewDiaryEntry = (reqObject: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(reqObject.comment),
    date: parseDate(reqObject.date),
    weather: parseWeather(reqObject.weather),
    visibility: parseVisibility(reqObject.visibility)
  }
  return newEntry
}
