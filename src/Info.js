export const profile = {
    name: "Hans Song",
    bio: "4th year studying Software Engineering at the University of Queensland",
    image: "",
    resume: "",
};

export const education = [
    /*
    {
        location: "",
        certification: "",
        period: "",
    },
    */
   {
        location: "University of Queensland",
        certification: "Bachelor of Engineering (Software)",
        period: [ "2016 Feb", "Present" ],
    },
    {
        location: "Queensland Academy for Science, Math, and Technology",
        certification: "International Baccalaureate Diploma",
        period: [ "2013 Jan", "2015 Nov" ],
    },
];

export const skills = [
    // {
    //     title: "",
    //     description: "",
    //     list: [],
    // },
    {
        title: "Software Development",
        description: "rience in OOP and imperative languages as well as standard website development. Minor experience with embeded development on the ATmega238.",
        list: [ "Python", "Java", "C", "Assembly", "JavaScript/TypeScript", "HTML/CSS", "(My)SQL", "MatLab" ],
    },
    {
        title: "Software Libraries",
        description: "Familiar with popular libraries and frameworks.",
        list: [ "JUnit", "React.js", "Puppeteer", "RabbitMQ", "MongoDB", "Jest/Mocha+Chai" ],
    },
    {
        title: "3D Modelling and Printing",
        description: "Familiar with CAD and constrained modelling of dimensionally accurate models  for printing on hand-built 3D printer.",
        list: [ "AutoCAD", "Inventor", "Fusion360" ],
    },
    {
        title: "Languages",
        description: "Proficient in Mandarin Chinese.",
        list: [ "HSK 4" ],
    },
    {
        title: "Machine Learning",
        description: "Some background in supervised and unsupervised training algorithms, image processing, and CNNs.",
        list: [ "TensorFlow", "MatLab" ],
    },
    {
        title: "OS and Software",
        description: "Comfortable with most common software for Windows and Linux CLI.",
        list: [],
    },
    
];

export const experience = [
    /*
    {
        location: "",
        title: "",
        period: [],
        skills: [],
        description: "",
    },
    */
    {
        location: "Jacaranda Finance",
        title: "Junior Data Mining Analyst",
        period: [ "2019 Jan", "Present"],
        skills: [ "Node.js", "Puppeteer" ],
        description: "Creating and maintaining autonomous data aggregation modules utilizing puppeteer.",
    },
    {
        location: "Sortal",
        title: "Intern",
        period: [ "2018 Nov", "2019 Feb" ],
        skills: [ "Node.js", "TypeScript", "Docker", "Tensorflow.js", "RabbitMQ", "MongoDB" ],
        description: "Developed multiple modules to integrate into a microservice architecture. Including: A modular TensorFlow service (TFJS), capable of dynamically loading and caching pre-trained models. A module utilizing Google Vision's API. A module to analyze and apply custom classifications based on existing labels.",
    },
    {
        location: "Weko Health",
        title: "Intern",
        period: [ "2018 Nov", "2019 Jan"],
        skills: [ "Leaflet.js", "Wordpress" ],
        description: "Developed a graphical map representation of Australias PHN network (Leaflet) and a revenue calculator based on projected profits from utilizing WeKo services compatible with Wordpress",
    },
    {
        location: "BlockNet",
        title: "Developer",
        period: [ "2018 Jul", "2018 Nov" ],
        skills: [ "Node.js", "React.js", "Solidity" ],
        description: "A server-less forum web application based on decentralised storage and the Block chain for peer to peer communication. Built on IPFS for redundant storage and Ethereum for security.",
    },
    {
        location: "L-Player",
        title: "Scrum Master",
        period: [ "2018 Mar", "2018 Jun" ],
        skills: [ "Node.js", "React.js" ],
        description: "Coordinated a team of six with the Principal Research Fellow of the UQ Centre for Horticultural Science to design, and prototype a web based implementation of their plant simulation software CPFG. The project was developed under the scrum framework requiring fortnightly deliverables and constant communication.",
    },
    {
        location: "Boeing Glider",
        title: "Manufacturing and 3D Modelling",
        period: [ "2017 Jul", "2018 Nov" ],
        skills: [],
        description: "Collaborated with a team to design, simulate and manufacture a low altitude glider in PTC Creo and ANSYS. Additionally, programmed and manufactured a flight data recorder to measure flight metrics with personally modelled and 3D printed enclosure, wings and tail.",
    },
    {
        location: "Backhoe Excavator",
        title: "Design and Manufacturing",
        period: [ "2016 Mar", "2018 June" ],
        skills: [],
        description: "Collaborated with a team to design, mathematically proof, and manufacture a remote controlled backhoe excavator with five degrees of motion utilising pneumatic motion.",
    },
];

export const other = [
    /*
    {
        title: "",
        description: "",
    },
    */
    {
        title: "3D printing\nand modeling",
        description: "Familiar with CAD and constrained modelling of dimensionally accurate models for hand-built 3D printer",
    },
   {
        title: "Electrical",
        description: "Circuit analysis, circuit design, and soldering",
    },
    {
        title: "Manufacturing",
        description: "Experience with workshop and power tools",
    },
    {
        title: "Certificates",
        description: "Certificates in Active Volunteering 2, First Aid/CPR, Responsible Service of Alcohol",
    },
    {
        title: "Art",
        description: "Pen/pencil sketching and drafting",
    },
];