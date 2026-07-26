---
layout: page
title: URL Shortener
description: FastAPI URL shortener on AWS, provisioned with Terraform
importance: 2
category: backend
---

A URL shortener REST API (FastAPI, Pydantic) containerized with Docker, pushed to AWS ECR, and deployed on ECS EC2. DynamoDB was selected as the backing store after evaluating access patterns (pure key-value, no joins required).

Full AWS infrastructure was provisioned with Terraform: custom VPC, subnets, Internet Gateway, route tables, security groups, ECS cluster, ECR repository, and DynamoDB table, enabling reproducible one-command deploys and teardowns. Least-privilege IAM separates the ECS execution role (ECR pull) from the task role, scoped to DynamoDB `GetItem`/`PutItem` on a single table ARN, validated with a pytest suite covering redirect flow, 404 handling, and input validation.

**Stack:** Python, FastAPI, Docker, AWS (ECS, ECR, DynamoDB), Terraform

**Code:** [github.com/afan104/URL-Shortener-AWS](https://github.com/afan104/URL-Shortener-AWS)
