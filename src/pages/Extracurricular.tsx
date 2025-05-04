import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Zap } from 'lucide-react';
import ActivityCard from '../components/ActivityCard';
import Cn from '../images/Coding-Ninjas.jpg';
import dipex from '../images/dipex.jpeg';
import e404 from '../images/e404.jpeg';
import ideation from '../images/ideation.jpeg';
import intern from '../images/intern.jpeg';
import mkd from '../images/mkd.jpeg';
import sp27 from '../images/sp27.jpeg';
import thepubliceye from '../images/thepubliceye.png';
const Extracurricular = () => {
  const activities = [
    {
      id: 8,
      title: 'Internship at The Nish-E-Services',
      description: 'Web Development Intern | Nish E-Service OPC Pvt. Ltd. Passionate about building scalable and efficient web applications.',
      date: 'May 2025 - September 2025',
      location: 'Nish E-Service, Plot No. 4, CTS No. 222/53, Cantonment Area, Chhatrapati Sambhajinagar ',
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      image: intern,
      link: 'https://www.linkedin.com/posts/aaryan-choudhari_ideation2-teampravartak-projecthawk-activity-7320853399795564544-Fa0D?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADF6DV4BvHsLu_61YQ_Pl95sQvYE4sPUADY'
    },
    {
      id: 7,
      title: 'Ideation 2.0 2nd Runner Up',
      description: 'The Team Pravartak received a cash prize of 1,00,000 from Hon`ble Governor Shri C.P Radhakrishnan Sir and Chairman Of AICTE T.G Sitaraman Sir',
      date: 'April 2025',
      location: 'Ratan Tata State Skills University (Headquarters),Chhatrapati Shivaji Terminus Area, Fort, Mumbai, Maharashtra',
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      image: ideation,
      link: 'https://www.linkedin.com/posts/aaryan-choudhari_ideation2-teampravartak-projecthawk-activity-7320853399795564544-Fa0D?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADF6DV4BvHsLu_61YQ_Pl95sQvYE4sPUADY'
    },
    {
      id: 6,
      title: 'Spark 2k25 WINNER ',
      description: 'Team Pravartak secured FIRST PRIZE at SPARK 2k25, a prestigious national-level project competition held at MKD Institute of Technology, Nandurbar.',
      date: 'April 2025',
      location: 'MKD Institute of Technology, Nandurbar',
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      image: mkd,
      link:'https://www.linkedin.com/posts/aaryan-choudhari_spark2k25-firstprize-innovation-activity-7324695611767697408-MqZL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADF6DV4BvHsLu_61YQ_Pl95sQvYE4sPUADY'
    },
    {
      id: 5,
      title: 'DIPEX 2025 Runner Up',
      description: 'Team Pravartak secured Runner up in the DIPEX 2025 Project exhibition, showcasing innovative solutions and teamwork.',
      date: 'April 2025',
      location: 'COEP Pune',
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      image: dipex,
      link: 'https://www.linkedin.com/posts/aaryan-choudhari_dipex2025-hawk-computationalintelligence-activity-7315449737032228865-BwuL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADF6DV4BvHsLu_61YQ_Pl95sQvYE4sPUADY'
    },
    {
      id: 1,
      title: 'Hackathon Participant',
      description: 'Team error404 Participated in the National Level Hackathon i.e TECHATHON 2.0 organized by InnovateYou Foundation.',
      date: 'February 2025',
      location: 'AISSMS College',
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      image: e404,
      link: 'https://www.linkedin.com/posts/aaryan-choudhari_hackathon-innovation-learning-activity-7300031346410688512-C6QM?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADF6DV4BvHsLu_61YQ_Pl95sQvYE4sPUADY'
    },
    {
      id: 9,
      title: 'Presentor and Creator Of Spark27',
      description: 'Spark 27 |Seminar Introducing students to large language models and generative AI, sparking curiosity and innovation in future programmers! 🔥 Let me know if you need further refinements!',
      date: '27th January 2024',
      location: 'Adarsh Shala Yojana By Maharashtra Government ,Government School, Chhatrapati Sambhajinagar',
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
      image: sp27,
      link: 'https://www.linkedin.com/posts/aaryan-choudhari_understand-create-and-represent-hey-activity-7157052606685626368-BQKz?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADF6DV4BvHsLu_61YQ_Pl95sQvYE4sPUADY'
    },
    {
      id: 4,
      title: 'Technical Blog Writer',
      description: 'Published over 3 technical articles on web development, algorithms, and software engineering best practices.',
      date: '2024 - Present',
      location: 'Medium',
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      link: 'https://medium.com/@aryan1234choudhari1983'
    },
    {
      id: 2,
      title: 'Co-Founder The Public Eye',
      description: 'The Public Eye is a student-driven platform dedicated to insightful public interviews, capturing diverse perspectives on social, cultural, and trending topics.',
      date: '2023 - Present',
      location: 'The Public Eye - Youtube',
      icon: <Zap className="h-6 w-6 text-purple-500" />,
      image: thepubliceye,
      link: 'https://www.youtube.com/@ThePublicEye.Official'
    },
    {
      id: 3,
      title: 'Tech Community Leader',
      description: 'Vice lead at CodingNinjas Campus Club tech community at My college with monthly meetups, workshops, and networking events for developers.',
      date: '2024- Present',
      location: 'CodingNinjas',
      icon: <Users className="h-6 w-6 text-green-500" />,
      image: Cn,
      link: 'https://www.linkedin.com/posts/aaryan-choudhari_codingninjas-leadership-diems-activity-7240184456202850304-IsUP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADF6DV4BvHsLu_61YQ_Pl95sQvYE4sPUADY'
    }
  ];

  const certifications = [
    {
      id: 1,
      title: 'DevOps Foundation',
      issuer: 'LinkedIn Learning',
      date: 'November 2024',
      icon: <Award className="h-5 w-5 text-yellow-500" />,
      link:'https://www.linkedin.com/learning/certificates/2656a3d1d041274faede3ef141358ade4ce39095279caa39863a8e4112b420eb?trk=share_certificate'
    },
    {
      id: 2,
      title: 'Introduction to Linux',
      issuer: 'LinkedIn Learning',
      date: 'December 2024',
      icon: <Award className="h-5 w-5 text-blue-500" />,
      link:'https://www.linkedin.com/learning/certificates/d261f33bf6204b1971b80862e1eead703e736e554b5d397977834ff47292cbb0?trk=share_certificate'
    },
    {
      id: 3,
      title: 'Linux System Administration',
      issuer: 'LinkedIn Learning',
      date: 'January 2025',
      icon: <Award className="h-5 w-5 text-cyan-500" />,
      link:'https://www.linkedin.com/learning/certificates/d4645b4840510c6ed51e6c9bf257aee78d4de8ec68a489d06830412b93d41722?trk=share_certificate'
    },
    {
      id: 4,
      title: 'Blockchain Basics',
      issuer: 'LinkedIn Learning',
      date: 'April 2025',
      icon: <Award className="h-5 w-5 text-orange-500" />,
      link: 'https://www.linkedin.com/learning/certificates/532faa3f8e1ee7234bfee348381ff73a8105d2f95d4781caf443d7475aa3b499?trk=share_certificate'
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyan-400">&lt;</span> Extracurricular Activities <span className="text-cyan-400">/&gt;</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Beyond coding, I'm actively involved in various tech communities and activities that help me grow as a developer and contribute to the tech ecosystem.
          </p>
        </motion.div>

        {/* Activities Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <ActivityCard
                key={activity.id}
                title={activity.title}
                description={activity.description}
                date={activity.date}
                location={activity.location}
                icon={activity.icon}
                image={activity.image}
                link={activity.link}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="text-cyan-400">&lt;</span> Certifications <span className="text-cyan-400">/&gt;</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-4 rounded-lg flex items-center hover:bg-gray-700 transition-colors"
                >
                  <div className="mr-4">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{cert.title}</h3>
                    <div className="flex items-center text-sm text-gray-400 mt-1">
                      <span>{cert.issuer}</span>
                      <span className="mx-2">•</span>
                      <span>{cert.date}</span>
                    </div>
                    {cert.link && (
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors mt-2"
                      >
                        <Award className="h-4 w-4" />
                        <span>View Certificate</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Extracurricular;