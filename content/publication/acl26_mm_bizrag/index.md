---
title: 'MM-BizRAG: Rethinking Multimodal Retrieval-Augmented Generation for General Purpose Enterprise Q&A'

authors:
  - Hanoz Bhathena
  - Parin Rajesh Jhaveri
  - Rohan Mittal
  - Prateek Singh
  - Aymen Kallala
  - Rachneet Kaur
  - admin
  - Zhen Zeng
  - Adwait Ratnaparkhi
  - Denis Kochedykov

author_notes:

date: '2026-07-01T00:00:00Z'
doi: ''
publishDate: '2026-01-01T00:00:00Z'

publication_types: ['paper-conference']

publication: "ACL 2026 Industry Track"
publication_short: "ACL'26 Industry"

abstract: "MM-BizRAG uses document structure to guide multimodal retrieval-augmented generation for enterprise Q&A. It routes report-style documents through layout-aware parsing and slide decks through page-level representations, preserves reading order during artifact transformation, and assembles multimodal context at inference time. The framework is evaluated on enterprise documents, SlideVQA, and FinRAGBench-V, and introduces FastRAGEval for measuring generative recall."

summary: Structure-aware multimodal RAG for enterprise Q&A, combining layout-aware report parsing, page-level slide representations, and inference-time context assembly. Includes FastRAGEval for efficient answer evaluation.

tags:
  - Retrieval-Augmented Generation
  - Multimodal Large Language Models
  - Enterprise AI

featured: true

url_pdf: 'https://aclanthology.org/2026.acl-industry.134.pdf'
url_source: 'https://aclanthology.org/2026.acl-industry.134/'

image:
  caption: ''
  focal_point: 'Smart'
  preview_only: false

projects: []
slides: ""
---

## Overview

MM-BizRAG routes reports and slide decks through ingestion pipelines tailored to their structure, preserves reading order, and assembles multimodal context at inference time. It also introduces FastRAGEval, a single-call LLM judge for fine-grained generative recall.
