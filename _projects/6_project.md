---
layout: page
title: E-Commerce Supply Chain Analysis
description: Redshift + QuickSight + Python/scipy analysis of a 100k-order e-commerce dataset
importance: 1
category: data
---

Analyzes the Olist Brazilian E-Commerce dataset (~100k orders, 2016–2018) to answer three operational questions: is fulfillment rate improving, which product categories are slowest to deliver, and does delivery performance really differ by region. Data loads into Redshift Serverless via S3 COPY, gets visualized in a QuickSight dashboard, and two hypotheses (regional lead time, regional order status mix) are validated in Python with scipy (Welch's t-test, chi-squared).

The chi-squared test is the standout result: an initial run looked highly significant (p = 1.5e-27), but turned out to be an artifact of sparse contingency table cells. The properly-run version, with a rare category dropped and low-volume states grouped, does not reach significance (p = 0.072).

**Stack:** AWS Redshift Serverless, AWS QuickSight, Python, scipy, pandas

**Code:** [github.com/afan104/olist-orders-analysis](https://github.com/afan104/olist-orders-analysis)
