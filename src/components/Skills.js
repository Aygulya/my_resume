// // import React from 'react';
// // import './css/skills.css'; // Импорт стилей

// // const skills = {
// //     hardSkills: [
// //         {
// //             title: "HTML/CSS",
// //             description: "Глубокое понимание HTML5 и CSS3. Адаптивные и кроссбраузерные интерфейсы."
// //         },
// //         {
// //             title: "JavaScript",
// //             description: "Опыт работы с ES6 и новыми стандартами, ООП и функциональным программированием."
// //         },
// //         {
// //             title: "Фреймворки и библиотеки",
// //             description: "Опыт работы с React, управление состоянием (Redux)."
// //         },
// //         {
// //             title: "Работа с API",
// //             description: "Умение делать запросы к RESTful API."
// //         },
// //         {
// //             title: "Инструменты сборки",
// //             description: "Опыт работы с Git."
// //         },
// //     ],
// //     softSkills: [
// //         "Коммуникация: Умение эффективно взаимодействовать с командой и клиентами.",
// //         "Работа в команде: Способность работать в многозадачной среде.",
// //         "Адаптивность: Готовность к быстрому обучению.",
// //         "Критическое мышление: Способность решать проблемы.",
// //         "Внимание к деталям: Тщательность в работе.",
// //         "Управление временем: Умение организовывать свое время."
// //     ]
// // };

// // const Skills = () => {
// //     return (
// //         <div className="container">
            
// //             <section className="skills-section">
// //                 <h2>Хард скиллы</h2>
// //                 <div className="skills">
// //                     {skills.hardSkills.map((skill, index) => (
// //                         <div className="skill-card" key={index}>
// //                             <h3>{skill.title}</h3>
// //                             <p>{skill.description}</p>
// //                         </div>
// //                     ))}
// //                 </div>

// //                 <h2>Софт скиллы</h2>
// //                 <div className="skills">
// //                     {skills.softSkills.map((skill, index) => (
// //                         <div className="skill-card" key={index}>
// //                             <h3>{`Софт скилл ${index + 1}`}</h3>
// //                             <p>{skill}</p>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </section>
// //         </div>
// //     );
// // };

// // export default Skills;
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCode, faDatabase, faTools, faUsers } from '@fortawesome/free-solid-svg-icons'; // Импортируйте иконки
// import { faComments, faUsers, faLightbulb, faBrain, faClock, faEye } from '@fortawesome/free-solid-svg-icons';
// import './css/skills.css';

// const skills = {
//     hardSkills: [
//         {
//             title: "HTML/CSS",
//             description: "Глубокое понимание HTML5 и CSS3. Адаптивные и кроссбраузерные интерфейсы.",
//             icon: faCode
//         },
//         {
//             title: "JavaScript",
//             description: "Опыт работы с ES6 и новыми стандартами, ООП и функциональным программированием.",
//             icon: faCode
//         },
//         {
//             title: "Фреймворки и библиотеки",
//             description: "Опыт работы с React, Angular или Vue.js, управление состоянием (Redux).",
//             icon: faTools
//         },
//         {
//             title: "Работа с API",
//             description: "Умение делать запросы к RESTful и GraphQL API.",
//             icon: faDatabase
//         },
//         {
//             title: "Инструменты сборки",
//             description: "Опыт работы с Git, Webpack, Gulp.",
//             icon: faTools
//         },
//         {
//             title: "Тестирование",
//             description: "Знание юнит-тестирования и инструментов (Jest, Mocha).",
//             icon: faTools
//         },
//     ],
//     softSkills: [
//         "Коммуникация: Умение эффективно взаимодействовать с командой и клиентами.",
//         "Работа в команде: Способность работать в многозадачной среде.",
//         "Адаптивность: Готовность к быстрому обучению.",
//         "Критическое мышление: Способность решать проблемы.",
//         "Внимание к деталям: Тщательность в работе.",
//         "Управление временем: Умение организовывать свое время."
//     ]
// };

// const Skills = () => {
//     return (
//         <div className="container">
            
//             <section className="skills-section">
//                 <h2>Хард скиллы</h2>
//                 <div className="skills">
//                     {skills.hardSkills.map((skill, index) => (
//                         <div className="skill-card" key={index}>
//                             <h3>
//                                 <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
//                                 {skill.title}
//                             </h3>
//                             <p>{skill.description}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <h2>Софт скиллы</h2>
//                 <ul className="soft-skills">
//                     {skills.softSkills.map((skill, index) => (
//                         <li className="soft-skill-item" key={index}>
//                             {skill}
//                         </li>
//                     ))}
//                 </ul>
//             </section>
//         </div>
//     );
// };

// export default Skills;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faTools, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faComments, faLightbulb, faBrain, faClock, faEye } from '@fortawesome/free-solid-svg-icons'; // Импортируем иконки
import './css/skills.css'

const skills = {
    hardSkills: [
        {
            title: "HTML/CSS",
            description: "Глубокое понимание HTML5 и CSS3. Адаптивные и кроссбраузерные интерфейсы.",
            icon: faCode
        },
        {
            title: "JavaScript",
            description: "Опыт работы с ES6 и новыми стандартами, ООП и функциональным программированием.",
            icon: faCode
        },
        {
            title: "Фреймворки и библиотеки",
            description: "Опыт работы с React, управление состоянием (Redux).",
            icon: faTools
        },
        {
            title: "Работа с API",
            description: "Умение делать запросы к RESTful API.",
            icon: faDatabase
        },
        {
            title: "Инструменты сборки",
            description: "Опыт работы с Git.",
            icon: faTools
        },
    ],
    softSkills: [
        { title: "Коммуникация", description: "Умение эффективно взаимодействовать с командой и клиентами.", icon: faComments },
        { title: "Работа в команде", description: "Способность работать в многозадачной среде.", icon: faUsers },
        { title: "Адаптивность", description: "Готовность к быстрому обучению.", icon: faLightbulb },
        { title: "Критическое мышление", description: "Способность решать проблемы.", icon: faBrain },
        { title: "Внимание к деталям", description: "Тщательность в работе.", icon: faEye },
        { title: "Управление временем", description: "Умение организовывать свое время.", icon: faClock }
    ]
};

const Skills = () => {
    return (
        <div className="container">
            <section className="skills-section">
                <h2>Хард скиллы</h2>
                <div className="skills">
                    {skills.hardSkills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <h3>
                                <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                                {skill.title}
                            </h3>
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </div>

                <h2>Софт скиллы</h2>
                <div className="skills">
                    {skills.softSkills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <h3>
                                <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                                {skill.title}
                            </h3>
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Skills;
