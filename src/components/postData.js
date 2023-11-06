import post1 from "../assets/Posts/post12.jpg"
import post2 from "../assets/Posts/post13.jpg"
import post3 from "../assets/Posts/post14.jpg"
import post4 from "../assets/Posts/post6.jpg"
import post5 from "../assets/Posts/post5.jpg"
import post7 from "../assets/Posts/post7.jpg"
import post8 from "../assets/Posts/post8.jpg"
import post9 from "../assets/Posts/post9.jpg"
import post10 from "../assets/Posts/post10.jpg"
import post11 from "../assets/Posts/post11.jpg"

import video1 from "../assets/Posts/video1.mp4"

import {
    users
} from "./userData"

const postData = [{
    id: 1,
    img: post1,
    authorId: 1,
    author: users[0],
    like: 145,
    comment: 13,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi reprehenderit amet!",
    loaction: "Ankara Turkey",
    lastUpdatated: "5m",

}, {
    id: 2,
    video: video1,
    authorId: 2,
    author: users[1],

    like: 145,
    comment: 13,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi reprehenderit amet!",
    loaction: "Yalova Turkey",
    lastUpdatated: "5m",

}, {
    id: 3,
    img: post3,
    author: users[2],
    authorId: 3,
    like: 5,
    comment: 3,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi reprehenderit amet!",
    loaction: "Eskişehir Turkey",
    lastUpdatated: "42m",

}, {
    id: 4,
    img: post4,
    authorId: 4,
    author: users[3],
    like: 102,
    comment: 2,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi reprehenderit amet!",
    loaction: "Denizli Turkey",
    lastUpdatated: "5h",

}, {
    id: 5,
    img: post5,
    authorId: 5,
    author: users[4],
    like: 45,
    comment: 23,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi reprehenderit amet!",
    loaction: "Londara Birleşik Krallık",
    lastUpdatated: "45m",

}, {
    id: 6,
    img: post2,
    authorId: 2,
    author: users[5],
    like: 758,
    comment: 43,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi reprehenderit amet!",
    loaction: "Ankara Turkey",
    lastUpdatated: "54m",

}, {
    id: 7,
    img: post7,
    authorId: 5,
    author: users[6],
    like: 58,
    comment: 3,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi reprehenderit amet!",
    loaction: "Bursa Turkey",
    lastUpdatated: "1h",

}, {
    id: 8,
    img: post8,
    authorId: 8,
    author: users[7],
    like: 42,
    comment: 0,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi reprehenderit amet!",
    loaction: "Samsun Turkey",
    lastUpdatated: "2h",

}, {
    id: 9,
    img: post9,
    authorId: 9,
    author: users[8],
    like: 102,
    comment: 12,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi reprehenderit amet!",
    loaction: "Istanbul Turkey",
    lastUpdatated: "25m",

}, {
    id: 10,
    img: post10,
    authorId: 10,
    author: users[9],
    like: 12,
    comment: 2,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi reprehenderit amet!",
    loaction: "Muğla Turkey",
    lastUpdatated: "2h",

}, {
    id: 11,
    img: post11,
    authorId: 11,
    author: users[10],
    like: 212,
    comment: 2,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi reprehenderit amet!",
    loaction: "Istanbul Turkey",
    lastUpdatated: "2h",

}, ]
export {
    postData
}