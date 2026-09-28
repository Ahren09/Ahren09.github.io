---
title: 'Experience'
date: 2023-10-24
type: landing

design:
  spacing: '5rem'

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: resume-experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false
  - block: markdown
    id: patents
    content:
      title: Patents
      text: |-
        - **Reliability-Informed Dense Geometry Estimation with Vision-Language Models.** Waymo, 2026. Patent pending.
        - **Hierarchical Agentic Framework for Multi-Page Visual Document Understanding.** J.P. Morgan AI Research, 2025. Patent pending.
    design:
      columns: '2'
  - block: markdown
    id: academic-service
    content:
      title: Academic Service
      text: |-
        **Area Chair**

        - ACL Rolling Review (ARR), October 2026.
        - ICLR Tiny Paper Track, 2023 and 2024.

        **Program Committee & Reviewing**

        - Conferences: AAAI, ACL ARR, AISTATS, ASONAM, CIKM, COLM, CVPR, ICCV, ICLR, ICML, KDD, LoG, NeurIPS, SDM, and The Web Conference.
        - Journals: ACM TOIS, TKDD, TORS, TIST, and TSC; IEEE TKDE and TAI; PLOS ONE; JDSA; SCIENCE CHINA Information Sciences; and DMLR.
        - Conference volunteer: NAACL 2025, AAAI 2025, SC 2024, and VLDB 2024.
    design:
      columns: '2'
  - block: resume-skills
    content:
      title: Skills & Hobbies
      username: admin
    design:
      show_skill_percentage: false
  - block: resume-awards
    content:
      title: Awards
      username: admin
  - block: resume-languages
    content:
      title: Languages
      username: admin
---
