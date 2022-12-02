import { BiPulse } from "react-icons/bi"
import { BsFillHouseFill, BsJournalAlbum } from "react-icons/bs"
import { FaMicrophoneAlt, FaBroadcastTower, FaPodcast } from "react-icons/fa"


export const MenuList = [
  {
    Id: 1,
    Icon: <BsFillHouseFill />,
    name: 'Home'
  },

  {
    Id: 2,
    Icon: <BiPulse />,
    name: 'Discover'
  },

  {
    Id: 3,
    Icon: <FaBroadcastTower />,
    name: 'Radio'
  },

  {
    Id: 4,
    Icon: <FaMicrophoneAlt />,
    name: 'Artist'
  },

  {
    Id: 5,
    Icon: <BsJournalAlbum />,
    name: 'Albums'
  },

  {
    Id: 6,
    Icon: <FaPodcast />,
    name: 'Podcast'
  }
]