/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

// Home Page Info
const greeting = {
  username: "Sourabh Swargam",
  title: "Hi all, I'm Sourabh",
  subTitle: emoji(
    "A passionate Software Developer with a focus on Full-Stack Development and Aritificial Intelligence. I have experience building applications using ReactJS and using Python for backend. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1gzSMT6B9a_z3GpRKOUV7xwwY3bSW0uh9/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/sourabh-swargam",
  linkedin: "https://www.linkedin.com/in/sourabh-swargam-11740b198/",
  gmail: "swargam.sourabh@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Love to learn new technologies and keep testing ideas by building applications.",
  skills: [
    emoji(
      "⚡ Love to develop interactive web applications using Front-End and Back-End frameworks"
    ),
    emoji(
      "⚡ Integration of services on AWS for deploying applications and make them scalable using CI/CD pipelines"
    ),
    emoji(
      "⚡ Use Deep Learning frameworks such as PyTorch and TensorFlow to train neural networks and make predictions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "bx bxl-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "bx bxl-java"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "bx bxl-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "bx bxl-kubernetes"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "bx bxl-git"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "bx bxl-aws"
    },
    // {
    //   skillName: "Google Cloud",
    //   fontAwesomeClassname: "bx bxl-google-cloud"
    // },
    // {
    //   skillName: "Firebase",
    //   fontAwesomeClassname: "bx bxl-firebase"
    // },
    {
      skillName: "Heroku",
      fontAwesomeClassname: "bx bxl-heroku"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "bx bxl-spring-boot"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "bx bxl-django"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "bx bxl-flask"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "bx bxl-javascript"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "bx bxl-react"
    },
    // {
    //   skillName: "Redux",
    //   fontAwesomeClassname: "bx bxl-redux"
    // },
    // {
    //   skillName: "Angular",
    //   fontAwesomeClassname: "bx bxl-angular"
    // },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "bx bxl-nodejs"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "bx bxs-data"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "bx bxl-mongodb"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "bx bxl-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "bx bxl-css3"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "bx bxl-tailwind-css"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "bx bxl-bootstrap"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "bx bxl-sass"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "bx bxs-bot"
    },
    {
      skillName: "Deep Learning",
      fontAwesomeClassname: "bx bxs-brain"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "bx bxl-unity"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full-Stack Development",
      progressPercentage: "95%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "95%"
    },
    {
      Stack: "Cloud Computing - AWS", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Artificial Intelligence & Data Science",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work Experience Page
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  summary:
    "Software Developer with 3 years of experience developing scalable applications and deploying machine learning models. Proven success in the healthcare industry, adept in Python, Java, and AWS. Developed a pipeline that automated FDA adverse event report filing, enhancing operational efficiency and seeking to leverage software development expertise to contribute to innovative projects.",
  experience: [
    {
      role: "Software Developer",
      company: "Turnkey Learning",
      companylogo: require("./assets/images/TurnkeyLogo.png"),
      date: "August 2019 – July 2022",
      // desc: "Implemented an automated system utilizing Python and PyTorch to streamline FDA adverse event report filing in healthcare and insurance sectors. Deployed on AWS for efficiency. Conducted rigorous data validation, offering insights for process improvement, and provided ongoing support for system development and maintenance."
      descBullets: [
        "Developed a pipeline to automate FDA adverse event report filing in the health care and health insurance industry",
        "Engineered the pipeline using Python and PyTorch, and deployed it on AWS services with microservices architectures, ensuring adherence to coding best practices",
        "Supported the ongoing system development of the system by generating log reports and system maintenance",
        "Delivered comprehensive data validation and quality reports, using statistical and probabilistic methods to drive actionable insights and enhancements",
        "Developed and deployed scalable machine learning models and applications using Python, PyTorch, and AWS improving predictive accuracy and operational efficiency"
      ]
    }
    // {
    //   role: "Data Scientist",
    //   company: "Turnkey Learning",
    //   companylogo: require("./assets/images/TurnkeyLogo.png"),
    //   date: "July 2021 – July 2022",
    //   // desc: "Implemented an automated system utilizing Python and PyTorch to streamline FDA adverse event report filing in healthcare and insurance sectors. Deployed on AWS for efficiency. Conducted rigorous data validation, offering insights for process improvement, and provided ongoing support for system development and maintenance."
    //   descBullets: [
    //     "Implemented an automated system utilizing Python and PyTorch to streamline FDA adverse event report filing in healthcare and insurance sectors",
    //     "Deployed on AWS for efficiency and conducted rigorous data validation, offering insights for process improvement, and provided ongoing support for system development and maintenance"
    //   ]
    // },
    // {
    //   role: "Machine Learning Intern",
    //   company: "Turnkey Learning",
    //   companylogo: require("./assets/images/TurnkeyLogo.png"),
    //   date: "Sept 2020 – June 2021",
    //   // desc: "Developed a web application that provides an interactive interface for people interested in Machine Learning.",
    //   descBullets: [
    //     "Designed and implemented a web-based learning platform for Machine Learning using a microservices architecture, fostering accessibility and flexibility in the learning process",
    //     "Engineered the learning platform on the cloud utilizing Lambda, ReactJS, and DynamoDB, enabling seamless access and scalability"
    //   ]
    // }
  ]
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Illinois at Chicago",
      logo: require("./assets/images/UICLogo.PNG"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - May 2024",
      desc: "Natural Language Processing, Computer Vision, Neural Networks, Machine Learning on Graphs",
      descBullets: [
        "Implemented and studied the effects of Knowledge Distillation on self-attention graph neural networks",
        "Performed research on using Knowledge Distillation to optimize Finetuned Language Models"
      ]
    },
    {
      schoolName:
        "International Institute of Information Technology - Hyderabad",
      logo: require("./assets/images/IIITHLogo.png"),
      subHeader: "Master of Science in Information Technology",
      duration: "August 2019 - June 2021",
      desc: "Ranked top 5% in the program. Software Engineering, Machine Learning, Web Security and Operating Systems",
      descBullets: [
        "Worked on deploying Full-Stack applications on AWS using CI/CD pipelines",
        "Joined Turnkey Learning, as a co-op Intern"
      ]
    }
  ]
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "AWS Developer Associate",
      subtitle:
        "Showcases knowledge and understanding of core AWS services, uses, and basic AWS architecture best practices, and proficiency in developing, deploying, and debugging cloud-based applications by using AWS.",
      image: require("./assets/images/AWSDevAssociate.png"),
      imageAlt: "AWS Developer Associate Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/2GWBKNX2C8YB"
        }
      ]
    },
    {
      title: "Google Data Analytics",
      subtitle:
        "Completed eight courses developed by Google, that include hands-on, practice-based assessments in tools and platforms including spreadsheets, SQL, Tableau, and R.",
      image: require("./assets/images/GoogleCertificate.png"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/2GWBKNX2C8YB"
        }
      ]
    },
    {
      title: "DeepLearning.AI TensorFlow Developer",
      subtitle:
        "Learned how to build and train neural networks using TensorFlow to identify real-world images, understand analyze and respond to human-speech with NLP systems.",
      image: require("./assets/images/DeepLearningAICertificate.png"),
      imageAlt: "DeepLearning.AI Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/RFACHVZ6HEX4"
        }
      ]
    },
    {
      title: "Standford Online Machine Learning",
      subtitle:
        "Learned key concepts and gained the practical know-how to quickly and effectively apply machine learning techniques to challenging real-world problems.",
      image: require("./assets/images/StanfordCertificate.png"),
      imageAlt: "Stanford Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/3NDM7HF4LJRZ"
        }
      ]
    },
    {
      title: "QWERTY Keyboard in Virtual Domain Using Image Processing",
      subtitle:
        "Published a paper in the 2019 International Conference on Intelligent Computing and Control Systems (ICCS)",
      image: require("./assets/images/IEEELogo.jpg"),
      imageAlt: "IEEE Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1cU2fElEL6wZfRD_AwEKdJqfNHvl4Zkhx/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

let openSourceInfo = {};

// Some big projects you have worked on

const bigProjects = {
  title: emoji("Projects 🏗️"),
  subtitle:
    "Some cool Projects and Applications that I worked on and help create ",
  projects: [
    {
      image: require("./assets/images/healthcare.png"),
      projectName: "Adverse Drug Event Detection Pipeline",
      projectDesc:
        "A Natural Language Processing (NLP) Pipeline, which scans text in email correspondence between a patient and doctor to parse any side-effects experienced by the patient and report it to the FDA"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/healthinsurance.png"),
      projectName: "High Claimants Classifier for Health Insurance",
      projectDesc:
        "Designed a Machine Learning Model that can provide a recommendation based on a person's health insurance information such as previous insurance claims, pre-existing diseases and other health factors"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/studentdashboard.png"),
      projectName: "Student Dashboard",
      projectDesc:
        "Student performance monitoring website designed to view their daily and weekly attendance, assignments, quiz scores, and overall class performance"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say Hi? My Inbox is open for all.",
  number: "+1 (872) 272-0574",
  email_address: "swargam.sourabh@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  openSourceInfo,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
openSourceInfo = {
  data: {
    user: {
      name: null,
      bio: "🤖 AI Enthusiast | 🚀 Full-Stack Developer | 📚 Lifelong Learner\r\n\r\n\r\n🌱 Always eager to collaborate on exciting projects",
      avatarUrl:
        "https://avatars.githubusercontent.com/u/55691793?u=66ce9ae7983e8fc31ed173de9f129bf2fcb2fe36&v=4",
      location: null,
      pinnedItems: {
        totalCount: 2,
        edges: [
          {
            node: {
              name: "BlockBreaker",
              description: null,
              forkCount: 0,
              stargazers: {totalCount: 0},
              url: "https://github.com/sourabh-swargam/BlockBreaker",
              id: "R_kgDOKI4a-w",
              diskUsage: 12909,
              primaryLanguage: {name: "C#", color: "#178600"}
            }
          },
          {
            node: {
              name: "ImageSegmentation",
              description: null,
              forkCount: 0,
              stargazers: {totalCount: 0},
              url: "https://github.com/sourabh-swargam/ImageSegmentation",
              id: "R_kgDOIhvldg",
              diskUsage: 8999,
              primaryLanguage: {name: "Python", color: "#3572A5"}
            }
          }
        ]
      }
    }
  }
};
openSourceInfo={"data":{"user":{"name":null,"bio":"🤖 AI Enthusiast | 🚀 Full-Stack Developer | 📚 Lifelong Learner\r\n\r\n\r\n🌱 Always eager to collaborate on exciting projects","avatarUrl":"https://avatars.githubusercontent.com/u/55691793?u=66ce9ae7983e8fc31ed173de9f129bf2fcb2fe36&v=4","location":null,"pinnedItems":{"totalCount":2,"edges":[{"node":{"name":"BlockBreaker","description":null,"forkCount":0,"stargazers":{"totalCount":0},"url":"https://github.com/sourabh-swargam/BlockBreaker","id":"R_kgDOKI4a-w","diskUsage":12909,"primaryLanguage":{"name":"C#","color":"#178600"}}},{"node":{"name":"ImageSegmentation","description":null,"forkCount":0,"stargazers":{"totalCount":0},"url":"https://github.com/sourabh-swargam/ImageSegmentation","id":"R_kgDOIhvldg","diskUsage":8999,"primaryLanguage":{"name":"Python","color":"#3572A5"}}}]}}}}