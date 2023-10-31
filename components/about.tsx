"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About InKubator</SectionHeading>
      <p className="mb-3">
        Understanding Kubernetes architecture can be complex, and the process of deploying a cluster is not always straightforward.
        Even minor syntax errors or incorrect indentation of YAML manifest can significantly complicate the deployment process, especially for those new to Kubernetes.
        InKubator is a developer tool designed to simplify YAML generation and cluster deployment. It enables users to deploy clusters locally on their machines using Minikube or in the cloud with the Google Kubernetes Engine (GKE).
      </p>
    </motion.section>
  );
}
