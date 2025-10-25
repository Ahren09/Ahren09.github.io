---
title: 'SlideAgent: Hierarchical Agentic Framework for Multi-Page Visual Document Understanding'

event: ML@GT Conference 2025
event_url: 'https://ml.gatech.edu/'

location: Atlanta, GA, USA
address:
  street: '756 W Peachtree St NW'
  city: Atlanta
  region: GA
  postcode: '30309'
  country: United States

summary: "Multi-page visual documents such as manuals, brochures, presentations, and posters convey key information through layout, colors, icons, and cross-slide references. While large language models (LLMs) offer opportunities in document understanding, current systems struggle with complex, multi-page visual documents, particularly in fine-grained reasoning over elements and pages. We introduce SlideAgent, a versatile agentic framework for understanding multi-modal, multi-page, and multi-layout documents, especially slide decks. SlideAgent employs specialized agents and decomposes reasoning into three specialized levels--global, page, and element--to construct a structured, query-agnostic representation that captures both overarching themes and detailed visual or textual cues. During inference, SlideAgent selectively activates specialized agents for multi-level reasoning and integrates their outputs into coherent, context-aware answers. Extensive experiments show that SlideAgent achieves significant improvement over both proprietary (+7.9 over GPT-4o) and open-source models (+9.8 over InternVL3-8B). "

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: '2025-09-26T10:00:00Z'
date_end: '2025-09-26T15:00:00Z'
all_day: true

# Schedule page publish date (NOT talk date).
publishDate: '2025-09-26T10:00:00Z'

authors:
  - admin

tags:
  - Large Language Models
  - Peer Review
  - LLM Agents
  - vision question answering
  - Multimodal LLMs

# Is this a featured talk? (true/false)
featured: true

image:
  caption: 'SlideAgent framework'
  focal_point: Right

url_code: ''
url_pdf: ''
url_slides: ''
url_video: ''

# Markdown Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects = []`.
projects: []

# Docs for this page are located at https://docs.hugoblox.com/reference/
---

## Abstract

Multi-page visual documents such as manuals, brochures, presentations, and posters convey key information through layout, colors, icons, and cross-slide references. While large language models (LLMs) offer opportunities in document understanding, current systems struggle with complex, multi-page visual documents, particularly in fine-grained reasoning over elements and pages. We introduce SlideAgent, a versatile agentic framework for understanding multi-modal, multi-page, and multi-layout documents, especially slide decks. SlideAgent employs specialized agents and decomposes reasoning into three specialized levels--global, page, and element--to construct a structured, query-agnostic representation that captures both overarching themes and detailed visual or textual cues. During inference, SlideAgent selectively activates specialized agents for multi-level reasoning and integrates their outputs into coherent, context-aware answers. Extensive experiments show that SlideAgent achieves significant improvement over both proprietary (+7.9 over GPT-4o) and open-source models (+9.8 over InternVL3-8B). 
