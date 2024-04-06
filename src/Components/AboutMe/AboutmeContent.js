import designIcon from '../../images/aboutme-images/design-icon.svg';
import developIcon from '../../images/aboutme-images/develop-icon.svg';
import mobileAppIcon from '../../images/aboutme-images/mobileapp-icon.svg';


// Social Media Icons
import insta from '../../images/aboutme-images/social-media/Instagram.svg';
import face from '../../images/aboutme-images/social-media/Facebook.svg';
import twitt from '../../images/aboutme-images/social-media/Twitter.svg'
import linked from '../../images/aboutme-images/social-media/LinkedIn.svg';
import whats from '../../images/aboutme-images/social-media/WhatsApp.svg';
import telegram from '../../images/aboutme-images/social-media/Telegram.svg';
import gmail from '../../images/aboutme-images/social-media/Gmail.svg';


// About Apps Icons
import visualCode from '../../images/aboutme-images/apps-used/visual.svg';
import mongodbIcon from '../../images/aboutme-images/apps-used/mongodb.svg';
import androidStud from '../../images/aboutme-images/apps-used/android-studio.svg'
import figma from '../../images/aboutme-images/apps-used/figma.svg';
import adobeXd from '../../images/aboutme-images/apps-used/adobexd.svg';
import photoShop from '../../images/aboutme-images/apps-used/photoshop.svg';
import sketch from '../../images/aboutme-images/apps-used/sketch.svg';


// About Work Images
import bodha from '../../images/myProjects/bodha.png';
import saurabh from '../../images/myProjects/saurabh.png';
import jobpakado from '../../images/myProjects/jobpakado.png'
import bloom from '../../images/myProjects/bloom.png';
import autoimmune from '../../images/myProjects/autoimmune.png';
import nexevolve from '../../images/myProjects/nexevolve.png'



const AboutSkillCards = [
    {
        icon: designIcon,
        title: 'Web',
        subTitle: 'Designing',
        desc: 'Elevate your online presence with my multidisciplinary approach, meticulously honing every detail. Welcome to the intersection of artistry and precision in web design.'
    },
    {
        icon: mobileAppIcon,
        title: 'Web',
        subTitle: 'Development',
        desc: 'Experience the Fusion of Creativity and Code in Web Development. Where Innovation Meets Precision, We Craft Your Digital Vision with Expertise and Care.'
    },
    {
        icon: developIcon,
        title: 'App',
        subTitle: 'Development',
        desc: 'Unlock the Power of Seamless Functionality and Impeccable Design in App Development. From Concept to Code, We Engineer Your Vision with Precision and Creativity.'
    },
]

const AboutSocialIcons = [
    {
        title: 'Instagram',
        icon: insta,
        link: '#'
    },
    {
        title: 'Twitter',
        icon: twitt,
        link: '#'
    },
    {
        title: 'Facebook',
        icon: face,
        link: '#'
    },
    {
        title: 'Linked In',
        icon: linked,
        link: '#'
    },
    {
        title: 'Telegram',
        icon: telegram,
        link: '#'
    },
    {
        title: 'Gmail',
        icon: gmail,
        link: '#'
    },
]


const AboutSkillPercentage = [
    {
        title: 'React Js',
        percent: 80,
    },
    {
        title: 'Angular',
        percent: 50,
    },
    {
        title: 'Node Js',
        percent: 65,
    },
    {
        title: 'Html 5 & CSS 3',
        percent: 90,
    },
    {
        title: 'Java Script',
        percent: 60,
    },
    {
        title: 'Tailwind',
        percent: 90,
    },
]


const AboutAppsUsed = [
    {
        title: 'Visual Code',
        icon: visualCode
    },
    {
        title: 'Android Studio',
        icon: androidStud
    },
    {
        title: 'Mongodb',
        icon: mongodbIcon
    },
    {
        title: 'Figma',
        icon: figma
    },
    {
        title: 'Adobe XD',
        icon: adobeXd
    },
    {
        title: 'Photoshop',
        icon: photoShop
    },
    {
        title: 'Sketch',
        icon: sketch
    },
]


const AboutMyWorkBlock = [
    {
        siteName: 'Nexevolve',
        link: 'https://nexevolve.com/',
        image: nexevolve
    },

    {
        siteName: 'Bodha Homes',
        link: 'https://bodhahomesinfra.com/',
        image: bodha
    },
    {
        siteName: 'Job Pakado',
        link: 'https://jobpakado.com/',
        image: jobpakado
    },
    {
        siteName: 'Saurabh Chhariah',
        link: 'https://masterclass.saurabhchharia.com/',
        image: saurabh
    },
    {
        siteName: 'Bloom',
        link: 'https://bloomfitnesswear.com/',
        image: bloom
    },
    {
        siteName: 'Autoimmune',
        link: 'https://autoimmunehn.com/',
        image: autoimmune
    },

]


const AboutTestimonials = [
    {
      title: 'Amy Caroline',
      rating: 5,
      image: require('../../images/avatars/female-03.jpg'),
      desc: 'This platform is a game-changer! I went from knowing nothing about coding to building responsive websites with HTML, CSS, and Bootstrap in just a few weeks. The hands-on approach and interactive lessons make learning enjoyable and effective.'
    },
    {
      title: 'Elizabeth Olsen',
      rating: 4,
      image: require('../../images/avatars/female-02.jpg'),
      desc: "I've tried several coding platforms, but this one stands out. The React and React Native courses are comprehensive, with clear explanations and practical exercises. I can confidently say that I am now a proficient React developer, thanks to this fantastic resource."
    },
    {
      title: 'Catherine',
      rating: 3,
      image: require('../../images/avatars/female-01.jpg'),
      desc: 'Learning Angular seemed like a daunting task, but this website made it a breeze. The step-by-step tutorials and real-world projects helped me grasp the concepts quickly. I can now confidently build robust web applications using Angular.'
    },
    {
      title: 'Jhon Doe',
      rating: 4,
      image: require('../../images/avatars/male-01.jpg'),
      desc: "Node.js was always on my to-learn list, and this platform made the process incredibly smooth. The Node.js course is well-structured, and the interactive coding challenges solidified my understanding. I'm now confidently working with server-side JavaScript."
    },
    {
      title: 'Brad Jhon',
      rating: 5,
      image: require('../../images/avatars/male-02.jpg'),
      desc: 'Tailwind CSS has revolutionized my approach to styling. The concise lessons on this website helped me understand the utility-first approach and how to create beautiful, responsive designs efficiently. Tailwind is now my go-to CSS framework!'
    },
    {
      title: 'Gomez',
      rating: 4,
      image: require('../../images/avatars/female-04.jpg'),
      desc: "Bootstrap has been a staple in web development, and this website's Bootstrap course does justice to its power. The lessons are clear, concise, and the hands-on projects allow you to apply what you've learned immediately. Highly recommended!"
    },
    {
      title: 'Jennifer Lawrence',
      rating: 4,
      image: require('../../images/avatars/female-05.jpg'),
      desc: 'Learning Angular seemed like a daunting task, but this website made it a breeze. The step-by-step tutorials and real-world projects helped me grasp the concepts quickly. I can now confidently build robust web applications using Angular.'
    },
    {
      title: 'Fernandez',
      rating: 3,
      image: require('../../images/avatars/female-06.jpg'),
      desc: "I've always wanted to dive into mobile app development, and React Native was the perfect starting point. The practical exercises and real-world projects in the React Native course equipped me with the skills to build cross-platform mobile applications."
    },
    {
      title: 'Charolette',
      rating: 4,
      image: require('../../images/avatars/female-07.jpg'),
      desc: "As a beginner, I appreciate the beginner-friendly approach of this website. The explanations are clear, and the gradual progression from basics to advanced concepts allowed me to build a strong foundation in coding."
    },
    {
      title: "Kelly",
      rating: 5,
      image: require('../../images/avatars/female-08.jpg'),
      desc: "Angular was a tough nut to crack, but the structured lessons and hands-on projects on this platform made it a smooth learning experience. Now, I can build dynamic and interactive web applications with ease."
    },
    {
      title: 'Eva Jane',
      rating: 4,
      image: require('../../images/avatars/female-09.jpg'),
      desc: 'Learning to code can be overwhelming, but the React course here breaks down complex concepts into digestible parts. The practical examples and projects helped reinforce my understanding, making React development enjoyable.'
    },
    {
      title: 'Thomas J',
      rating: 5,
      image: require('../../images/avatars/male-03.jpg'),
      desc: 'Node.js and server-side scripting were a mystery to me until I took the course on this platform. The real-world applications and exercises provided the hands-on experience I needed to confidently tackle backend development projects.'
    },
]


const AboutAccordionCont = [
    {
      title: "What technologies do you specialize in",
      desc : "I specialize in web development using React.js and Angular, as well as mobile app development with React Native. These technologies allow me to create dynamic and responsive applications that meet the unique needs of my clients.",
      panelCount: "panel1"
    },
    {
      title: "What is your Experience in web and app development",
      desc: "I have been working in the field of web and app development for 3 years. Over this time, I have gained valuable experience and expertise in building high-quality, scalable solutions for a diverse range of clients and industries.",
      panelCount: "panel2"
    },    
    {
      title: "What sets you apart from other developers",
      desc: "What sets me apart is my commitment to staying updated with the latest technologies and industry trends. I am passionate about continuously improving my skills and delivering innovative solutions that exceed my clients' expectations.",
      panelCount: "panel3"
    },
    {
      title: "How do you approach new projects",
      desc: "When starting a new project, I begin by thoroughly understanding the client's requirements, goals, and target audience. I then collaborate closely with the client to develop a detailed project plan and timeline. Throughout the development process, I prioritize clear communication, feedback, and iteration to ensure the final product meets or exceeds expectations.",
      panelCount: "panel4"
    },    
    {
      title: "How are the courses structured",
      desc: "Our courses are structured in a modular format, allowing you to learn at your own pace. Each module focuses on specific concepts and technologies, with hands-on exercises to reinforce learning.",
      panelCount: "panel5"
    },
]



export const aboutData = {
    AboutSkillCards,
    AboutSocialIcons,
    AboutSkillPercentage,
    AboutAppsUsed,
    AboutMyWorkBlock,
    AboutTestimonials,
    AboutAccordionCont
}