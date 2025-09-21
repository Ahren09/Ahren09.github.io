---
title: 'Semi-Offline Reinforcement Learning for Optimized Text Generation'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Changyu Chen
  - Xiting Wang
  - admin
  - Victor Ye Dong
  - Li Dong
  - Jie Cao
  - Yi Liu
  - Rui Yan

# Author notes (optional)
author_notes:
  - 'Lead author'

date: '2023-05-01T00:00:00Z'
doi: '10.5555/3618408.3618608'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-05-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: "International Conference on Machine Learning (ICML) 2023"
publication_short: "ICML'23"

abstract: Existing reinforcement learning (RL) mainly utilize online or offline settings. The online methods explore the environment with expensive time cost, and the offline methods efficiently obtain reward signals by sacrificing the exploration capability. We propose semi-offline RL, a novel paradigm that can smoothly transit from the offline setting to the online setting, balances the exploration capability and training cost, and provides a theoretical foundation for comparing different RL settings. Based on the semi-offline MDP formulation, we present the RL setting that is optimal in terms of optimization cost, asymptotic error, and overfitting error bound. Extensive experiments show that our semi-offline RL approach is effective in various text generation tasks and datasets, and yields comparable or usually better performance compared with the state-of-the-art methods.

# Summary. An optional shortened abstract.
summary: We propose a semi-offline reinforcement learning approach for optimizing text generation in language models, balancing exploration and exploitation effectively....

tags:
  - Reinforcement Learning
  - Text Generation
  - Language Models
  - Semi-offline

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2306.09712'
url_code: 'https://github.com/ChangyuChen347/semi-offline-RL'
url_dataset: ''
url_poster: ''
url_project: 'https://github.com/ChangyuChen347/semi-offline-RL'
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

Existing reinforcement learning (RL) mainly utilize online or offline settings. The online methods explore the environment with expensive time cost, and the offline methods efficiently obtain reward signals by sacrificing the exploration capability. We propose semi-offline RL, a novel paradigm that can smoothly transit from the offline setting to the online setting, balances the exploration capability and training cost, and provides a theoretical foundation for comparing different RL settings. Based on the semi-offline MDP formulation, we present the RL setting that is optimal in terms of optimization cost, asymptotic error, and overfitting error bound. Extensive experiments show that our semi-offline RL approach is effective in various text generation tasks and datasets, and yields comparable or usually better performance compared with the state-of-the-art methods.

## Keywords

Reinforcement Learning, Text Generation, Language Models, Offline RL

## Links


