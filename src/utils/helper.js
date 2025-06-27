import { INSTAGRAM, FACEBOOK, TWITTER } from "./icons"

import footergallery1 from '/src/assets/png/footergallery-first.png'
import footergallery2 from '/src/assets/png/footergallery-second.png'
import footergallery3 from '/src/assets/png/footergallery-third.png'
import footergallery4 from '/src/assets/png/footergallery-fourth.png'
import footergallery5 from '/src/assets/png/footergallery-fifth.png'
import footergallery6 from '/src/assets/png/footergallery-sixth.png'

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
    { name: "home",},
    { name: "events",},
    { name: "feed",},
    { name: "user name",},

]