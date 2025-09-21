---
title: 'Reinforcement Subgraph Reasoning for Fake News Detection'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Ruichao Yang
  - Xiting Wang
  - admin
  - Chaozhuo Li
  - Jianxun Lian
  - Xing Xie

# Author notes (optional)
author_notes:
  - ''
  - ''
  - ''
  - ''
  - ''
  - 'Corresponding author'

date: '2022-06-01T00:00:00Z'
doi: '10.1145/3534678.3539277'

# Schedule page publish date (NOT publication's date).
publishDate: '2022-06-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: "ACM SIGKDD International Conference on Knowledge Discovery and Data Mining"
publication_short: "KDD'22"

abstract: The wide spread of fake news has caused serious societal issues. We propose a subgraph reasoning paradigm for fake news detection, which provides a crystal type of explainability by revealing which subgraphs of the news propagation network are the most important for news verification, and concurrently improves the generalization and discrimination power of graph-based detection models by removing task-irrelevant information. We introduce several novel technical components. First, we propose a reinforced subgraph generation method, and perform fine-grained modeling on the generated subgraphs by developing a Hierarchical Path-aware Kernel Graph Attention Network. Second, we design a curriculum-based optimization method to ensure better convergence and train the two parts in an end-to-end manner. Extensive experiments on real-world datasets demonstrate the effectiveness of our proposed framework.

# Summary. An optional shortened abstract.
summary: A novel subgraph reasoning paradigm for fake news detection that provides explainability while improving generalization through reinforcement learning and hierarchical graph attention networks.

tags:
  - Fake News Detection
  - Graph Reasoning
  - Subgraph Analysis
  - Reinforcement Learning
  - Graph Neural Networks
  - Explainable AI

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://www.microsoft.com/en-us/research/wp-content/uploads/2022/05/KDD2022_FakeNewsDetection_camera_ready.pdf'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Model architecture and key components'
  focal_point: 'Smart'
  preview_only: false
  alt_text: 'Figure showing the main model architecture and workflow'

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

## Abstract

The wide spread of fake news has caused serious societal issues. We propose a subgraph reasoning paradigm for fake news detection, which provides a crystal type of explainability by revealing which subgraphs of the news propagation network are the most important for news verification, and concurrently improves the generalization and discrimination power of graph-based detection models by removing task-irrelevant information.

We introduce several novel technical components. First, we propose a reinforced subgraph generation method, and perform fine-grained modeling on the generated subgraphs by developing a Hierarchical Path-aware Kernel Graph Attention Network. Second, we design a curriculum-based optimization method to ensure better convergence and train the two parts in an end-to-end manner.

Extensive experiments on real-world datasets demonstrate the effectiveness of our proposed framework.

## Keywords

Fake News Detection, Graph Reasoning, Subgraph Analysis, Reinforcement Learning, Graph Neural Networks, Explainable AI

## Links

- [PDF](https://www.microsoft.com/en-us/research/wp-content/uploads/2022/05/KDD2022_FakeNewsDetection_camera_ready.pdf)