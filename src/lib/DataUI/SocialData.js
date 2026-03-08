import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { SiZalo } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { IoLogoTwitch } from "react-icons/io";
import { FaDiscord } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";

const socialIconMap = [
  { keyword: "facebook", icon: <FaFacebookF size={20} /> },
  { keyword: "twitter", icon: <FaXTwitter size={20} /> },
  { keyword: "instagram", icon: <FaInstagram size={20} /> },
  { keyword: "linkedin", icon: <FaLinkedinIn size={20} /> },
  { keyword: "youtube", icon: <FaYoutube size={20} /> },
  { keyword: "pinterest", icon: <FaPinterestP size={20} /> },
  { keyword: "telegram", icon: <FaTelegramPlane size={20} /> },
  { keyword: "tiktok", icon: <IoLogoTiktok size={20} /> },
  { keyword: "t.me", icon: <SiZalo size={20} /> },
  { keyword: "zalo.me", icon: <SiZalo size={20} /> },
  { keyword: "snapchat", icon: <FaSnapchatGhost size={20} /> },
  { keyword: "reddit", icon: <FaRedditAlien size={20} /> },
  { keyword: "twitch", icon: <IoLogoTwitch size={20} /> },
  { keyword: "discord", icon: <FaDiscord size={20} /> },
  { keyword: "skype", icon: <FaSkype size={20} /> },
];

export { socialIconMap };
