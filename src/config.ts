export const siteConfig = {
  name: "Muhammad Bilal Khan",
  title: "AWS Cloud Developer | Software Developer",
  description: "Portfolio website of M.Bilal Khan",
  accentColor: "#41b7d4ff",
  social: {
    email: "bilalkhan192003@gmail.com",
    linkedin: "https://linkedin.com/in/mbilalkhan19",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/m-bilalkhan",
  },
  aboutMe: "I’m a cloud enthusiast who loves solving problems and building smart systems. I work hands-on with AWS and Terraform, turning infrastructure into clean, automated workflows. Always learning, always improving — and always aiming to build things the right way",
  skills: ["AWS", "Docker", "Terraform", "Linux", "CI/CD", "Ansible", "Javascript", "Node.js", "Python"],
  projects: [
    {
      name: "Visitor Log System – Personal Cloud Project",
      bullets: [
        "Designed a modern, mobile-friendly visitor log web application enabling users to sign in and view visitor statistics in real time.", 
        "Built CI/CD pipelines using GitHub Actions for automated building, and deployment workflows.",
        "Dockerized the application and pushed backend images to Amazon ECR for environment consistency.",
        "Created Golden AMIs using HashiCorp Packer for secure, reproducible infrastructure images.",
        "Provisioned complete AWS infrastructure using Terraform with modular design covering networking, compute, RDS, IAM, Auto Scaling, and load balancing.",
        "Applied environment-based configurations and automated deployments through Terraform CI/CD pipelines."
      ],
      link: "https://github.com/m-bilalkhan/visitor-log-system/tree/development_server",
      skills: ["Terraform", "Docker", "AWS", "Packer", "Linux", "CI/CD"],
    }
  ],
  experience: [
    {
      company: "Meshtech Solutions",
      title: "Software Developer",
      dateRange: "Jan 2023 - Present",
      bullets: [
        "Collaborated on a complex logistics project, successfully delivering and deploying it to production.",
        "Implemented centralized logging with Elasticsearch, improving monitoring and debugging efficiency.",
        "Enhanced testing tools, reducing the overall testing process time by 25%.",
        "Optimized Angular components, cutting loading time by 50%."
      ],
    },
    {
      company: "Meshtech Solutions",
      title: "Junior Web Developer",
      dateRange: "Sept 2021 - Dec 2022",
      bullets: [
        "Developed a responsive e-commerce web application with Stripe integration and an admin panel for product management and order processing using CodeIgniter.",
        "Contributed to the development and maintenance of an ERP system, enhancing internal business operations.",
      ],
    }
  ],
  education: [
    {
      school: "Federal Urdu University Of Arts, Science & Technology",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2023 - Present",
      achievements: [
        "Dean's List all semesters"
      ],
    }
    // {
    //   school: "Online Platform",
    //   degree: "Full Stack Development Certificate",
    //   dateRange: "2019",
    //   achievements: [
    //     "Completed 500+ hours of coursework",
    //     "Built 10+ portfolio projects",
    //     "Specialized in React and Node.js",
    //   ],
    // },
  ],
  certifications: [
    {
      name: "AWS Educate Introduction to Cloud 101",
      img: "/aws-educate-introduction-to-cloud-101-training-badg.png",
      link: "https://www.credly.com/badges/e06a4121-c382-43a2-a0db-0585a6b9ddb3/public_url"
    },
    {
      name: "AWS Educate Getting Started with Storage",
      img: "/aws-educate-getting-started-with-storage-training-b.png",
      link: "https://www.credly.com/badges/6d4e6880-c992-48cd-8029-6e4c7a1b9084/public_url"
    },
    {
      name: "AWS Educate Getting Started with Compute",
      img: "/aws-educate-getting-started-with-compute-training-b.png",
      link: "https://www.credly.com/badges/e00d5511-1267-43dd-812f-87fb9e2c6d2c/public_url"
    },
    {
      name: "AWS Cloud Quest: Cloud Practitioner",
      img: "/aws-cloud-quest-cloud-practitioner-training-badge.png",
      link: "https://www.credly.com/badges/7cabe9e3-86b8-4a4c-9595-7390bbc140c5/public_url"
    }
  ]
};
