"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewDiaryEntry = void 0;
const types_1 = require("../types");
const isString = (str) => {
    return (typeof str === 'string' || str instanceof String);
};
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param);
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing Weather');
    }
    return weatherFromRequest;
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing Visibility');
    }
    return visibilityFromRequest;
};
const toNewDiaryEntry = (reqObject) => {
    const newEntry = {
        comment: parseComment(reqObject.comment),
        date: parseDate(reqObject.date),
        weather: parseWeather(reqObject.weather),
        visibility: parseVisibility(reqObject.visibility)
    };
    return newEntry;
};
exports.toNewDiaryEntry = toNewDiaryEntry;
