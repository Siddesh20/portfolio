import React from "react"
import LinkBar from "../components/LinkBar"
import Intro from "../components/Intro"
import Line from "../components/Line"
import Card from "../components/Card"
import MultiCard from "../components/MultiCard"
import Form from "../components/Form"
import styles from '../styles/Home.module.css';

export default function Home() {
  const NavbarItems = [
    {
        section: "😄About Me", 
        href: "#intro"
    },
    {
        section: "🎓Education",
        href: "#education"
    },
    {
        section: "💼Work Experience",
        href: "#work"
    },
    {
        section: "🛠️Skills",
        href: "#skills"
    },
    {
        section: "📂Projects",
        href: "#projects"
    },
    {
        section: "🌟PORs",
        href: "#por"
    }
  ]

  const Education = "🎓Education"
  const EducationData = [
    {
      heading: "College",
      points: [
        "Institute: Indian Institute of Technology Kanpur",
        "Department: Aerospace",
        "Batch of 2020",
        "CPI: 8.1/10"
      ],
      image: "/images/iitk.png"
    },
    {
      heading: "Class 12th",
      points: [
        "K.V No 1, AFS Pune",
        "Board: Cbse",
        "Percentage: 95.8%"
      ],
      image: "/images/kv.png"
    },
    {
      heading: "Class 10th",
      points: [
        "K.V No 1, AFS Pune",
        "Board: Cbse",
        "CGPA: 10/10"
      ],
      image: "/images/kv.png"
    }
  ]

  const WorkExperience = "💼Work Experience"
  const WorkExperienceData = [
    {
      heading: "Engineering Intren @ Eightfold.ai",
      points: [
        "Mentor: Vivekananda Tadala and Lokesh Patel",
        "Duration: May 2023 - Jul 2023",
        "Worked on end-to-end implementation of a new hierarchy system in the Resource Management product which will enhance usability and functionality.",
        "Created APIs for crud operations on entities in the hierarchy using Python & Flask framework along with pytests for their rigorous testing in different scenarios.",
        "Added overview page for displaying the entities using React & Typescript having edit and create functionality which will increase ease of usage.",
        "Created a robust & user-friendly UI for creating and editing the different entities utilizing React, JavaScript & Typescript."
      ],
      image: "/images/eightfold.png"
    },
    {
      heading: "Engineering Intern @ Trumio",
      points: [
        "Remote Intern",
        "Duration: Nov 2023",
        "Developed a LLM-based resume parser using the OpenAI API in Python.",
        "Researched and documented open-source resume parsers, comparing their performance.",
        "Created a custom dataset of 50 resumes to validate the parser’s output.",
        "Added pre & post-processing functions and performed prompt iterations to improve accuracy."
      ],
      image: "/images/trumio.png"
    }
  ]

  const Skills = "🛠️Skills"
  const SkillsData = [
    {
      heading: "Languages",
      points: [
        {
          skill: "JavaScript/TypeScript",
          img: "/images/js.png"
        },
        {
          skill: "Python",
          img: "/images/py.png"
        },
        {
          skill: "CSS",
          img: "/images/css.png"
        },
        {
          skill: "HTML",
          img: "/images/html.png"
        },
        {
          skill: "C/C++",
          img: "/images/c.png"
        }
      ]
    },
    {
      heading: "Libraries",
      points: [
        {
          skill: "React",
          img: "/images/react.png"
        },
        {
          skill: "Flask",
          img: "/images/flask.png"
        },
        {
          skill: "Tensorflow",
          img: "/images/tf.png"
        },
        {
          skill: "Pandas",
          img: "/images/pandas.png"
        },
        {
          skill: "Numpy",
          img: "/images/numpy.png"
        }
      ]
    },
    {
      heading: "Utilities",
      points: [
        {
          skill: "Git/Github",
          img: "/images/git.png"
        },
        {
          skill: "LATEX",
          img: "/images/latex.png"
        }
      ]
    }
  ]

  const Projects = "📂Projects"
  const ProjectsData = [
    {
      heading: "Audio Source Localization and Active Noise Cancellation using ML algorithms",
      points: [
        "Mentor: Prof. Rajesh M. Hegde",
        "Duration: May 2022 - April 2023",
        "Generated driving signal for canceling loudspeakers using a Conv-Deconv CRNN.",
        "Explored different localization features such as SH-P, SH-M, SH-IP, and SH-IM.",
        "Developed SH-CRNN & SH-CNN models for 3-Dimensional audio source localization.",
        "Achieved acc.≈ 92% at RT60 ∈ 0.2-1 s & SNR ∈ 5-30 dB compared to SOTA for DOA."
      ],
      image: ""
    },
    {
      heading: "Jaguar Land Rover: The Robotic Charging Challenge",
      points: [
        "Inter IIT Problem statement",
        "Duration: Jan 2023 - Feb 2023",
        "Led the contingent in successfully securing gold medal for IITK among 19 IITs.",
        "Conducted extensive research to identify a solution for the required gait patterns while minimizing the degree of freedom for achieving enhanced efficiency and control.",
        "Experimented with a variety of feasible motion profiles to identify the most optimal.",
        "Solution consisted of using 6-DOF Robotic manipulator which used CNN based CV.",
        "Implemented the Robotic manipulator in MATLAB and simulated its application."
      ],
      image: ""
    },
    {
      heading: "Team Humanoid IITK",
      points: [
        "Long Term Projects",
        "Duration: May 2022 - May 2023",
        "Worked towards the development of a 21 DOF bipedal humanoid robot, constituting of Dynamixel servos and a monocular camera for object detection.",
        "Worked on autonomous walking of Automi using Reinforcement Learning with OpenAI gym environment and Mujoco to create its custom XML file.",
        "Worked on adding grasper on Automi for picking objects using Object Recognition.",
        "Performed Point cloud Registration on the RGBD dataset of a single scene.",
        "Contributed to developing a LIPM-based dynamic model for multiple gaits generation."
      ],
      image: ""
    },
  ]

  const POR ="🌟PORs"
  const PORData = [
    {
      heading: "Team Head ",
      points: [
        "Team Humanoid IITK",
        "Duration: May 2022- May 2023",
        "Responsible for assessing and planning R&D work for the team for the tenure.",
        "Introduced two new social outreach subsystems, Web-Team and Business & Marketing, thereby helping the team to raise 3.5 lakhs using pitchdecks.",
        "Mentored two team projects: Grasping and RL for Humanoid Walking."
      ],
      image: ""
    },
    {
      heading: "Student Guide",
      points: [
        "Counselling Service IITK",
        "Duration: May 2021- May 2022",
        "Helped 6 freshmen to get acquainted with campus life and academics at IITK.",
        "Coordinated with the Counselling Service and helped in the organization of Orientation Programme 2021."
      ],
      image: ""
    },
    {
      heading: "Secretary",
      points: [
        "Outreach and Connect Wing, SnT council IITK",
        "Duration: May 2021- May 2022",
        "Designed a brochure for IIT Kanpur's Science and Technology Council."
      ],
      image: ""
    },
  ]

  const SocialLinks = [
    {
      section: "GitHub",
      href: "https://github.com/Siddesh20/",
      img: "/images/git.png"
    },
    {
      section: "LinkedIn",
      href: "https://www.linkedin.com/in/siddesh-bharat-hazare-595291143",
      img: "/images/linkedIn.png"
    }
  ]
  
  return (
    <div className={styles.main}>
      <LinkBar data={NavbarItems} style={"navBar"}/>
      <Intro />
      <Line />
      <div id="education" className={styles.cardContainer} > 
        <h1 className={styles.cardContainerHeader}>{Education}</h1>
        <Card data={EducationData} cardSize="cardSmall" largeBackground={false}/>
      </div>
      <Line />
      <div id="work" className={styles.cardContainer}>
        <h1 className={styles.cardContainerHeader}>{WorkExperience}</h1>
        <Card data={WorkExperienceData} cardSize="cardLarge" largeBackground={false}/>
      </div>
      <Line />
      <div id="skills" className={styles.cardContainer}>
        <h1 className={styles.cardContainerHeader}>{Skills}</h1>
        <MultiCard data={SkillsData} />
      </div> 
      <Line />
      <div id="projects" className={styles.cardContainer}>
        <h1 className={styles.cardContainerHeader}>{Projects}</h1>
        <Card data={ProjectsData} cardSize="cardLarge" largeBackground={true}/>
      </div>
      <Line />
      <div id="por" className={styles.cardContainer} > 
        <h1 className={styles.cardContainerHeader}>{POR}</h1>
        <Card data={PORData} cardSize="cardMedium" largeBackground={true}/>
      </div>
      <Line />
      {/* <Form /> */}
      <LinkBar data={SocialLinks} style={"socials"}/>
    </div>
  );
}
