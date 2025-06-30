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
import followingcardimg1 from '../assets/png/followingcard-img1.png'
import followingcardimg2 from '../assets/png/followingcard-img2.png'

import profile2 from '../assets/png/profile2.png'
import profile3 from '../assets/png/profile3.png'
import profile4 from '../assets/png/profile4.png'

import { LIKE, COMMENT } from "./icons"

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
    {
        name: "home",
        link:"home",
     },
    {
        name: "events",
        link:"events",
     },
    {
        name: "feed",
        link:"feed",
     },
    {
        name: "user name",
        link:"username",
     },

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



export const FOLLOWING_EVENTS_CARD_IMG = [
    { image: followingcardimg1, },
    { image: followingcardimg2, }
]

export const USERNAME_CARD5 = Array(5).fill(
    {
        name: "Username",
        postname: "Post event name",
        title: "Fusce adipiscing nunc et tellus eu, tristique sodales sit aliquet.",
        description1: "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
        description2: "Sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",

    },

)
export const USERNAME_CARD = [
    {
        name: "Username",
        postname: "Post event name",
        title: "Fusce adipiscing nunc et tellus eu, tristique sodales sit aliquet.",
        description1: "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
        description2: "Sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",

    },

]
export const POST_DATA = [
    {
        profile: profile2,
        name: "Username",
        comment: "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
        delete: "Remove Comment",

    },
    {
        profile: profile3,
        name: "Username",
        comment: "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.",
        delete: "Remove Comment",
    },
    {
        profile: profile4,
        name: "Username",
        comment: "Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
        delete: "Remove Comment",
    },
]
