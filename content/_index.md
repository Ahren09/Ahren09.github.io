---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
    design:
      css_class: dark
      # Avatar customization
      avatar:
        size: medium  # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.png
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: experience
    id: exp
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Ph.D. Research Intern
          company: Waymo
          company_url: 'https://waymo.com/'
          location: Mountain View, CA
          date_start: '2026-05-18'
          date_end: '2026-08-07'
          description: |2-
            - Perception Team. Develop VLM-based metric depth estimation for autonomous driving, enabling point-level and object-centric distance prediction from camera/video inputs and scene metadata.
            - Build data generation and evaluation pipelines for spatial reasoning (absolute depth, relative depth, temporal consistency) and analyze failure cases under challenging road conditions.

        - title: Research Scientist Intern
          company: J.P. Morgan AI Research
          company_url: 'https://www.jpmorgan.com/technology/artificial-intelligence'
          location: New York, NY
          date_start: '2025-06-02'
          date_end: '2025-08-15'
          description: |2-
            - Led SlideAgent (ACL 2026 main), a hierarchical agentic framework for multi-page visual document understanding.
            - Built MLLM-based pipelines for parsing slide decks and financial reports; integrated context compression and retrieval-augmented generation.

        - title: Research Collaborator (Visa Research Grant)
          company: Visa Research
          company_url: 'https://usa.visa.com/about-visa/visa-research.html'
          location: Remote
          date_start: '2024-08-01'
          date_end: '2025-05-15'
          description: |2-
            - Led SARA (ACL 2026 main), a selective and adaptive RAG framework that combines fine-grained spans with compact semantic compression vectors under strict context budgets.

        - title: Communications Chair
          company: Georgia Tech School of CS Graduate Student Association (SCSGSA)
          company_url: 'https://scsgsa.cc.gatech.edu/'
          location: Atlanta, GA
          date_start: '2024-08-12'
          date_end: ''
          description: |2-
            - Co-organize the College of Computing Graduate Welcome Event (1,000+ attendees).
            - Lead the design and maintenance of the SCSGSA website.
            - Promote SCSGSA events, including workshops and professional development programs.

        - title: Research Scientist Intern
          company: Adobe Research
          company_url: 'https://research.adobe.com/'
          location: San Jose, CA
          date_start: '2024-05-06'
          date_end: '2024-08-09'
          description: |2-
            - Built ScreenLLM (WebConf'25 MM4SG Workshop), a multimodal LLM for GUI understanding and action prediction.
            - Designed a stateful screen schema summarizing dynamic UI sessions and a key-frame extractor for significant UI transitions.

        - title: Graduate Research Assistant
          company: Georgia Institute of Technology
          company_url: 'https://www.gatech.edu/'
          location: Atlanta, GA
          date_start: '2022-08-22'
          date_end: ''
          description: |2-
              Research on LLM agents, agent memory, multimodal LLMs, self-distillation, and graph mining. Publications include ACL'26, ICLR'26, ICWSM'26, EMNLP'25, ACL'25, WebConf'24, ACL'24, KDD'23, and CIKM'24. Advisor: Prof. Srijan Kumar.

        - title: Research Scientist Intern
          company: Microsoft Research Asia (Social Computing Group)
          company_url: 'https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/'
          location: Beijing, China
          date_start: '2020-12-22'
          date_end: '2022-07-22'
          description: |2-
            Research on LLMs (ICML'24, ICML'23, AAAI'23), LLM agents (EMNLP'24, ICML'24), misinformation detection (KDD'22, AAAI'22), few-shot learning (ACL'24, AAAI'23), and explainable AI (AAAI'22). Mentors: Xiting Wang, Jindong Wang, Xing Xie.

        - title: Undergraduate Research Assistant
          company: UCLA Scalable Analytics Institute (ScAi)
          company_url: 'https://scai.cs.ucla.edu/'
          location: Los Angeles, CA
          date_start: '2021-06-25'
          date_end: '2022-06-25'
          description: |2-
            Graph neural networks, recommender systems, and protein/biology-focused LLMs (EMNLP'25, WebConf'23). Advisors: Prof. Yizhou Sun and Prof. Wei Wang.
            

        - title: Software Engineer Intern
          company: Amazon
          company_url: 'https://www.amazon.com/'
          location: Seattle, WA, USA
          date_start: '2020-06-15'
          date_end: '2020-09-04'
          description: |2-
            - Worked in Fulfillment By Amazon (FBA), IAR team
            - Designed and implemented IAR Manual Analysis, a scalable and efficient workflow using AWS Step Functions and AWS Lambda. This service automates the aggregation of data points from multiple sources like Amazon S3 and DynamoDB for SageMaker ML model training, handling over 16,000 requests per summary stage;
            - Automated the deployment of the workflow across all AWS Realms (EU/FE/NA) through CloudFormation;
            - Establish DataCraft pipeline to enable automatic data ingestion from DynamoDB into the Andes dataset catalog, promoting broader internal adoption of these datasets for cross-functional teams and enhancing data accessibility;
            - Perform ablation analysis on the inventory reconciliation model, identifying key performance bottlenecks and optimizing model performance  
            
        - title: Software Engineer Intern
          company: IBM
          company_url: 'https://www.ibm.com/'
          location: Beijing, China
          date_start: '2019-06-17'
          date_end: '2019-09-03'
          description: |2-
            - Worked on the backend services of IBM Cloud. 
            - Developed Compass DataRouter, a routing service for Compass project based on Golang and MongoDB, reducing memory usage and accelerating data retrieval;
            - Enhanced the monitoring dashboard for Compass towards a more intuitive and responsive user interface with React.js.

    design:
      columns: '2'

  - block: markdown
    id: news
    content:
      title: What's new?
      text: |2-
        {{< displayNews "displayNews.html" >}}
    design:
      columns: '2'
      view: compact

  - block: collection
    id: papers
    content:
      title: Featured Publications
      text: A curated set of recent and representative work. The [full publication list](./publication/) includes all venues.
      count: 12
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: article-grid
      columns: 2
  - block: collection
    content:
      title: Recent Publications
      text: |-
        {{% callout note %}}
        Browse all papers on the [Publications page](./publication/), or jump straight to [Google Scholar](https://scholar.google.com/citations?user=eY85qm4AAAAJ).
        {{% /callout %}}
      count: 0
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: '2'
      view: citation
  - block: collection
    id: talks
    content:
      title: Recent & Upcoming Talks
      filters:
        folders:
          - event
    design:
      view: article-grid
      columns: 1
  - block: skills
    content:
      title: Skills
      text: |-
      # Choose a user to display skills from (a folder name within `content/authors/`)
      username: admin
    design:
      columns: '1'      

  - block: markdown
    id: contact
    content:
      title: Contact
      subtitle: Get in touch
      text: |-
        ## 📍 Location
        Atlanta, GA (during the academic year) — currently in Mountain View, CA (Waymo internship, May–Aug 2026)
        
        ## 📧 Email
        yjin328[AT]gatech.edu
        
        
        ## 🏢 Office
        756 W Peachtree St NW, Atlanta, GA 30308  
        CODA 13th Floor
        
        ## 🕒 Office Hours
        Monday - Sunday 9:00 to 20:00
        
        ## 🌐 Connect with Me
        - [Twitter/X: @AhrenJin](https://twitter.com/AhrenJin)
        - [GitHub: Ahren09](https://github.com/Ahren09)
        - [Google Scholar](https://scholar.google.com/citations?user=eY85qm4AAAAJ)
        - [LinkedIn](https://www.linkedin.com/in/ahren-jin/)

        {{< displayVisitors >}}
       
    design:
      columns: '1'
---
