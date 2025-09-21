---
title: 'Towards Fair Graph Anomaly Detection: Problem, Benchmark Datasets, and Evaluation'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Neng Kai Nigel Neo
  - Yeon-Chang Lee
  - admin
  - Sang-Wook Kim
  - Srijan Kumar

# Author notes (optional)
# author_notes:

date: '2024-07-04T00:00:00Z'
doi: '10.1145/3627673.3679754'

# Schedule page publish date (NOT publication's date).
publishDate: '2024-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: "ACM International Conference on Information and Knowledge Management (CIKM) 2024"
publication_short: "CIKM'24"

abstract: The Fair Graph Anomaly Detection (FairGAD) problem aims to accurately detect anomalous nodes in an input graph while avoiding biased predictions against individuals from sensitive subgroups. However, the current literature does not comprehensively discuss this problem, nor does it provide realistic datasets that encompass actual graph structures, anomaly labels, and sensitive attributes. To bridge this gap, we introduce a formal definition of the FairGAD problem and present two novel datasets constructed from the social media platforms Reddit and Twitter. These datasets comprise 1.2 million and 400,000 edges associated with 9,000 and 47,000 nodes, respectively, and leverage political leanings as sensitive attributes and misinformation spreaders as anomaly labels. We demonstrate that our FairGAD datasets significantly differ from the synthetic datasets used by the research community. Using our datasets, we investigate the performance-fairness trade-off in nine existing GAD and non- graph AD methods on five state-of-the-art fairness methods. Code and datasets are available at https://github.com/nigelnnk/FairGAD.

# Summary. An optional shortened abstract.
summary: We address fairness issues in graph anomaly detection, providing benchmark datasets and comprehensive evaluation frameworks for fair anomaly detection on graphs....

tags:
  - Graph Anomaly Detection
  - Fairness
  - Graph Neural Networks
  - Benchmark
  - Datasets

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2402.15988'
url_code: 'https://github.com/nigelnnk/FairGAD'
url_dataset: 'https://github.com/nigelnnk/FairGAD'
url_poster: ''
url_project: 'https://github.com/nigelnnk/FairGAD'
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ''
  preview_only: false

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

The Fair Graph Anomaly Detection (FairGAD) problem aims to accurately detect anomalous nodes in an input graph while avoiding biased predictions against individuals from sensitive subgroups. However, the current literature does not comprehensively discuss this problem, nor does it provide realistic datasets that encompass actual graph structures, anomaly labels, and sensitive attributes. To bridge this gap, we introduce a formal definition of the FairGAD problem and present two novel datasets constructed from the social media platforms Reddit and Twitter. These datasets comprise 1.2 million and 400,000 edges associated with 9,000 and 47,000 nodes, respectively, and leverage political leanings as sensitive attributes and misinformation spreaders as anomaly labels. We demonstrate that our FairGAD datasets significantly differ from the synthetic datasets used by the research community. Using our datasets, we investigate the performance-fairness trade-off in nine existing GAD and non- graph AD methods on five state-of-the-art fairness methods. Code and datasets are available at https://github.com/nigelnnk/FairGAD.

## Keywords

Graph Anomaly Detection, Fairness, Graph Neural Networks, Benchmark Datasets

## Links

- [Doi](10.1145/3627673.3679754)
