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
          filename: peaks.png
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
        - title: Communication Chair
          company: Graduate Student Association, Georgia Tech School of Computer Science (SCSGSA)
          company_url: 'https://scsgsa.cc.gatech.edu/'
          location: Atlanta, GA
          date_start: '2024-08-12'
          date_end: ''
          description: |2-
            - Co-organize the College of Computing (CoC) Graduate Welcome Event with over 1,000 attendees, including new students, faculty, and alumni.
            - Lead the design and maintenance of the SCSGSA website.
            - Promote SCSGSA events, including workshops, networking sessions, and professional development programs.

        - title: Research Intern
          company: Adobe Inc.
          company_url: 'https://www.adobe.com/'
          location: San Jose, CA
          date_start: '2024-05-06'
          date_end: '2024-08-09'
          description: |2-
            Research Topics: Multimodal Large Language Models (MLLMs) Fine-tuning, Web UI and Video Tutorial Understanding.

            
        - title: Graduate Research Assistant
          company: Georgia Institute of Technology
          company_url: 'https://www.gatech.edu/'
          location: Atlanta, GA
          date_start: '2022-08-22'
          date_end: ''
          description: |2-
              Research Topics: Large Language Models (WebConf'24, ACL'24), LLM Safety (In preparation for NAACL'25), Multimodal Models (ACL'24), Recommender Systems and Dynamic Graph Mining (KDD'23), Social Network Analysis (CIKM'24, KDD'23), Fair Graph Mining (CIKM'24).

              Advisor: Dr. Srijan Kumar
               
        - title: Research Intern
          company: Microsoft Research Asia
          company_url: 'https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/groups/'
          location: Beijing, China
          date_start: '2020-12-22'
          date_end: '2022-07-22'
          description: |2-
            Research Topics: Large Language Models (EMNLP'24, ICML'24, ICML'23, AAAI'23), LLM Agents (EMNLP'24, ICML'24), Scientometric Analysis (In preparation for NAACL'25), Computational Social Science, Misinformation Detection (KDD'22, AAAI'22), Few-shot Learning (ACL'24, AAAI'23), Explainable AI (AAAI'22).

            Advisors: Dr. Xiting Wang, Dr. Jindong Wang, and Dr. Xing Xie. 


        - title: Undergraduate Research Assistant
          company: UCLA Scalable Analytics Institute (ScAi)
          company_url: 'https://ucla-dm.github.io/DM_website/'
          location: Los Angeles, CA
          date_start: '2021-06-25'
          date_end: '2022-06-25'
          description: |2- 
            Research Topics: Large Language Models (EMNLP'24), Graph Neural Networks and Data Mining (WWW'23), LLM Fine-tuning (Under Review at KDD'25), Recommender Systems (WWW'23).
            
            Advisors: Dr. Yizhou Sun, Dr. Wei Wang
            

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
        {{< displayPublications "displayPublications.html" >}}
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
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
        Atlanta, GA / Beijing, China
        
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
