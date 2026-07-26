---
layout: page
title: Kubernetes Secret Rotation Operator
description: Java 21 Kubernetes operator for scheduled secret rotation
importance: 1
category: backend
---

A Java 21 Kubernetes operator (Java Operator SDK, fabric8) with a level-triggered reconciler managing a custom `RotatingSecret` CRD. It generates credentials via `SecureRandom`, writes them to native Kubernetes Secrets with owner references for cascade deletion, and requeues itself for the next rotation.

Instrumented with Micrometer/Prometheus (rotation count + staleness gauge per resource) via Spring Boot Actuator, packaged as a Helm chart, and CI publishes the image to `ghcr.io` via GitHub Actions.

**Stack:** Java 21, Java Operator SDK, fabric8, Spring Boot, Helm, Prometheus, GitHub Actions

**Code:** [github.com/afan104/K8s-SecretRotator](https://github.com/afan104/K8s-SecretRotator)
