const projects = [
  {
    name: "Invesco Vision",
    description: [
      "Led full-stack development of Invesco Vision, a complex portfolio management web application providing detailed risk and return analytics, integrated tools like Efficient Frontier, Historical Model, and Factor Analysis, and a modular, reusable UI built with Material-UI (MUI), Redux, and Redux Thunk for state management.",
      "Designed and maintained Flask-based microservices to deliver scalable backend APIs, using Swagger for API testing to ensure reliability and seamless integration, while resolving complex state management and debugging issues to maintain high-quality performance without regressions.",
    ],
    tech: "React.js, Flask, AWS Aurora PostgreSQL",
  },
  {
    name: "Model Portfolios",
    description: [
      "Integrated Azure AD Single Sign-On (SSO) into the Spring Boot application, replacing static credentials and reducing average login time by ~50% while eliminating manual password management overhead.",
      "Modernized the UI by migrating from static Thymeleaf pages to React, implementing a dynamic table component that replaced Excel uploads—reducing input errors by ~90% and accelerating data ingestion by ~60%—and cutting page load times by ~40% for faster, more dynamic fund-data dashboards.",
    ],
    tech: " Reactjs, Java Spring Boot, Azure, PostgreSQL",
  },
  {
    name: "Indexing Data Distribution Application ",
    description: [
      "Designed and developed a scalable web application from scratch using React.js (frontend) and Python Flask (backend) to distribute indexing data across multiple clients, featuring an interactive dashboard with AG Grid for high-performance data management and inline validation.",
      "Integrated job scheduling capabilities with an internal automation tool (UAC), automating routine indexing tasks and reducing manual intervention, thereby streamlining operational workflows and improving efficiency.",
    ],
    tech: "React.js , Flask, PostgreSQL, AG Grid",
  },
  {
    name: "Cutom Forms",
    description: [
      "Led development of CustomForms, a medical domain-based form builder (similar to Google Forms) with custom widgets, seamless AWS integrations, GraphQL APIs via AWS AppSync, and a clean UI using Ant Design for a responsive, user-friendly experience.",
      "Optimized data retrieval by integrating Elasticsearch and DynamoDB, and by refining GraphQL queries, ensuring efficient, fast access to large datasets—resulting in improved application performance and user satisfaction",
    ],
    tech: "React.js, GraphQL, AWS AppSync, DynamoDB, Elasticsearch",
  },
  {
    name: "Automated Time Tracking for Employee Projects",
    description: [
      "Led development of an automated time tracking system that integrated Jira API and PPM Pro Tool with an AWS-based infrastructure, ensuring real-time data synchronization, error handling, and scalability.",
      "Automated 90% of the time tracking process and deployed PPM and Jira ETL jobs using AWS cross-account pipelines with Airflow, significantly reducing manual intervention and streamlining project tracking.",
    ],
    tech: "AWS, Airflow, Python, Glue, Jira API",
  },
  {
    name: " Enrichment Rules Engine",
    description: [
      "Developed the entire rules engine in the python from scratch . created UI using the react js to upload the mortgage rules to process the OCR data json ",
      "The new application helped to reduce months of effort . creating the rules is transferred to the end user instead of the developer .  the application has been used in other projects to onboard the rules quickly ",
    ],
    tech: "Python, React js",
  },
  {
    name: "Loan Prediction Analysis",
    description: [
      "removed the old legacy table code using the jquery and replaced the entire functionality with the NG prime components that has enabled the application to run smoothly ",
      "Implemented caching on the Node.js backend to improve API response speed and maintained the node API endpoints",
    ],
    tech: "Angular js , Node js",
  },
  {
    name: " Contact History Explorer",
    description: [
      "Developed a local search engine similar to Google for searching contacts and transcripts using the solr .Results were returned based on a matching score, and the application was optimized for fast performance, returning results within microseconds",
      "Developed custom filters and sorting options to allow users to refine their search results based on specific criteria such as date, type of contact, or keywords.",
    ],
    tech: "Angular js , Node js",
  },
];

export default projects;
