import Laravel from "../components/tools/Laravel.svelte";
import Vue from "../components/tools/Vue.svelte";
import Tailwind from "../components/tools/Tailwind.svelte";
import Redis from "../components/tools/Redis.svelte";
import Go from "../components/tools/Go.svelte";
import Node from "../components/tools/Node.svelte";

export const projects = [
  {
    name: "FlowscoreNFT",
    link: "https://www.flowscorenft.com/",
    description: "A web app dedicated to ranking the best NFT Collections on Flow blockchain.",
    folderName: "flowscore",
    showImage: true,
    stack: [Laravel, Vue, Tailwind, Redis, "Quasar"]
  },
  {
    name: "InjureFree",
    link: "https://www.injurefree.com/",
    description: "InjureFree is a digital, real-time injury incident reporting service empowering athlete safety initiatives and risk management for organized sports",
    folderName: "injurefree",
    showImage: true,
    stack: [Laravel, Vue, Tailwind, Redis, "Stripe"]
  },
  {
    name: "Laybare Web App",
    link: "https://booking.lay-bare.com",
    description: "Platform for managing branch, services, products and customer reservations.",
    stack: [Laravel, Vue,  Node, "Element.UI", "Socket.io"]
  },
  {
    name: "OmniStaff",
    link: "https://omnistaff.hirayamnl.com",
    description: "Appointment scheduling system that enables users to discover nearby healthcare professionals. The system takes care of everything\n" +
      "from healthcare compliance up to invoicing",
    folderName: "omni",
    showImage: true,
    stack: [Laravel, Vue, "Quasar"]
  },
  {
    name: "OrangeApps CLMS",
    link: "https://wccqc.orangeapps.ph/oa_school",
    description: "Community Learning Management System",
    stack: [Node, Redis, "CodeIgniter", "MQTT", "Socket.io"]
  },
  {
    name: "IP Twins",
    link: "https://iptwins.orangeapps.ph",
    description: "Appointment scheduling system that enables users to discover nearby healthcare professionals. The system takes care of everything\n" +
      "from healthcare compliance up to invoicing",
    stack: [Laravel, Vue, Go, "MongoDB", "Python"]
  },
];

export const sideProjects = [
  {
    name: "Shorty",
    link: "https://shorty.sush1.xyz/",
    description: "A URL Shortener living on the edge using cloudflare workers, pages and kv",
    stack: [Vue, "Cloudflare Pages", "Cloudflare Workers", "Cloudflare KV"]
  },
  {
    name: "Godswar Server Emulator",
    link: "https://github.com/sush1lemon/godswar-server",
    description: "",
    stack: [Go, "TCP/IP"]
  },
]

export const tools = [Laravel, Vue, Node, Tailwind, Go, Redis];