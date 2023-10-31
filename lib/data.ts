import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import homescreenImg from "@/public/home-screen.png";
import homescreenImg2 from "@/public/home-screen2.png";

import gcloudscreenImg from "@/public/gcloud-screen.png";

import clusterscreenImg from "@/public/cluster-page.png";

import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "How To Use",
    hash: "#howtouse",
  },
  {
    name: "Tech",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Select Local or Cloud Deployment",
    description:
      "We offer MiniKube (local) or GKE (cloud) based deploymwent.",
    tags: ["MiniKube", "GKE" ],
    imageUrl: homescreenImg2,
  },
  {
    title: "Install Dependencies",
    description:
      "Depending on your deployment type, you'll need to install certain dependencies.",
    tags: [],
    imageUrl: gcloudscreenImg,
  },
  {
    title: "Select Your Cluster and Deploy",
    description:
      "Pull your K8s cluster from your local computer or Google Cloud account and begin deploying!.",
    tags: [],
    imageUrl: clusterscreenImg,
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "Express",
  "Tailwind/MaterialUI",
  "Google Kubernetes Engine"
] as const;
