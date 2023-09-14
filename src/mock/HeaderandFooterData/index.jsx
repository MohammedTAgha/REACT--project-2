import { ImFacebook } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import { TfiLinkedin } from 'react-icons/tfi'
import { RiInstagramFill } from 'react-icons/ri'
import { AiFillYoutube } from 'react-icons/ai'

export const options = [
  { value: "All Categeory", label: "All Categeory" },
  { value: "Second Categeory", label: "Second Categeory" },
  { value: "Third Categeory", label: "Third Categeory" },
];
export const HeaderNavLinks = [
  {
    icon: "/assets/images/icon/person.png",
    label: "Profile",
    href: "/profile",
  },
  {
    icon: "/assets/images/icon/Message.png",
    // icon: "../../public/assets/images/icon/Message.png",
    label: "Message",
    href: "/message",
  },
  {
    icon: "/assets/images/icon/order.png",
    label: "Orders",
    href: "/orders",
  },
  {
    icon: "/assets/images/icon/cart.png",
    label: "My Cart",
    href: "/cart",
  },
];
export const help = [
  { value: "Help", label: "Help" },
  { value: "help2", label: "help2" },
  { value: "help3", label: "help3" },
];
export const Language = [
  { value: "English,USD", label: "English,USD" },
  { value: "Arabic,EM", label: "Arabic,EM" },
  { value: "French", label: "French" },
];
export const ShipTo = [
  { value: "../../../../public/Image/Icon/France.png", label: "ShipTo" },
  { value: "../../../../public/Image/Icon/France.png", label: "ShipTo" },
  { value: "../../../../public/Image/Icon/France.png", label: "ShipTo" },
];

export const ICONS = [
  { SOCIAL_ICON: <ImFacebook />, href: "https://www.facebook.com/" },
  { SOCIAL_ICON: <BsTwitter />, href: "http://twitter.com/" },
  { SOCIAL_ICON: <TfiLinkedin />, href: "https://www.linkedin.com/" },
  { SOCIAL_ICON: <RiInstagramFill />, href: "https://www.instagram.com/" },
  { SOCIAL_ICON: <AiFillYoutube />, href: "https://www.youtube.com/" },
]
export const FOOTER__DATA = [
  {head:"About",Data:["About us", "FindStore", "Categories", "Blogs"]},
  {head:"Partnership",Data:["About us", "FindStore", "Categories", "Blogs"]},
  {head:"Information",Data:["Help Cnter", " Money Refund", "Shipping", "Contact us"]},
  {head:"ForUsers",Data:["Login", " Register", "Settings", "My Orders"]},
]


export const brandPath = "/assets/images/logo/logo.png";
