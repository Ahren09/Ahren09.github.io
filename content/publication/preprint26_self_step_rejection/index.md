---
title: Can Language Models Learn to Reject Their Own Bad Reasoning Steps?
authors:
- Siheng Xiong
- Xiaoze Liu
- admin
- Xiaoqian Wang
- Jing Gao
author_notes:
- ''
- ''
- ''
- ''
- ''
date: '2026-10-05T00:00:00Z'
publishDate: '2026-10-05T00:00:00Z'
publication_types:
- preprint
publication: arXiv preprint arXiv:2610.05976
publication_short: Preprint
abstract: Self-Step Rejection (SSR) trains a lightweight LoRA acceptance gate on a frozen generator. Training signals identify reasoning steps that cross a recoverability threshold, combining classification, same-prefix comparisons, and policy refinement. During inference, the model accepts a candidate step or resamples from the same prefix within a rejection budget, using its own acceptance gate to guide reasoning.
summary: Self-Step Rejection trains a lightweight acceptance gate on a frozen language model to reject harmful reasoning steps and resample within a bounded budget.
tags:
- Reasoning
- Post-Training
- Efficient Inference
featured: false
url_pdf: https://arxiv.org/abs/2610.05976
---

## Overview

Self-Step Rejection (SSR) trains a lightweight LoRA acceptance gate on a frozen generator. Training signals identify reasoning steps that cross a recoverability threshold, combining classification, same-prefix comparisons, and policy refinement. During inference, the model accepts a candidate step or resamples from the same prefix within a rejection budget, using its own acceptance gate to guide reasoning.

## Links

- [Paper](https://arxiv.org/abs/2610.05976)
