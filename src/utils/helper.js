import { INSTAGRAM, FACEBOOK, TWITTER } from "./icons"

import footergallery1 from '../assets/png/footergallery-first.png'
import footergallery2 from '../assets/png/footergallery-second.png'
import footergallery3 from '../assets/png/footergallery-third.png'
import footergallery4 from '../assets/png/footergallery-fourth.png'
import footergallery5 from '../assets/png/footergallery-fifth.png'
import footergallery6 from '../assets/png/footergallery-sixth.png'

import eventcardImg from '../assets/webp/eventcard-img .webp'

import date from '../assets/svg/date.svg'
import location from '../assets/svg/loacation.svg'
import population from '../assets/svg/population.svg'

export const SOCIAL_ICONS = [
    {
        icon: INSTAGRAM,
        link: "https://www.instagram.com/"
    },
    {
        icon: FACEBOOK,
        link: "https://www.facebook.com/",
    },
    {
        icon: TWITTER,
        link: "https://x.com/?lang=en",
    },

]

export const FOOTER_LINKS = [
    {
        title: "SERVICES",
        list: ["About", "News", "ullamcorper", "Contact",]
    },
    {
        title: "EVENTS",
        list: ["ullamcorper", "ullamcorper", "ullamcorper", "ullamcorper",]
    },

]

export const FOOTER_GALLERY = [
    {
        title: "GALLERY",
        image: [footergallery1, footergallery2, footergallery3, footergallery4, footergallery5, footergallery6]
    },
]

export const NAV_LINKS = [
    { name: "home", },
    { name: "events", },
    { name: "feed", },
    { name: "user name", },

]

export const EVENT_CARD_DATA = Array(9).fill(
    {
        image: eventcardImg,
        title: "Lorem ipsum dolar sit de",
        details: [
            {
                svg: date,
                text: "10/02/2022",
            },
            {
                svg: location,
                text: "Mumbai",
            },
            {
                svg: population,
                text: "1,080",
            },
        ]
    }
);



