import  { useState } from 'react';
import { android, zeplin, youtrack, vue, Swift, Sql, sass,
  sketch, React, php,
  principle, python, Promet, nodejs, Next, materialUi, mongodb, 
  kubernetes, kotlin, jmeter,
  js, Java, illustrator, invision,
  ios, gcp, gitLab, grafana, go, Els, flutter, figma, 
  cassandra, cypress, digitalOcean, docker, angular, appium, azure, AntDesign, Aws, balsamic, bitButket } from "../..";

const ImageData = [
  { src: android, description: "Android ", category: "Mobile" },
  { src: zeplin, description: "Zeplin", category: "UI / UX" },
  { src: youtrack, description: "YouTrack", category: "Testing" },
  { src: vue, description: "Vue", category: "Frontend" },
  { src: Swift, description: "Swift", category: "Mobile" },
  { src: Sql, description: "SQL", category: "Backend" },
  { src: sass, description: "Sass", category: "Frontend" },
  { src: sketch, description: "Sketch", category: "UI / UX" },
  { src: React, description: "React", category: "Frontend" },
  { src: php, description: "PHP", category: "Backend" },
  { src: principle, description: "Principle", category: "UI / UX" },
  { src: python, description: "Python", category: "Backend" },
  { src: Promet, description: "Prometheus", category: "DevOps" },
  { src: nodejs, description: "Node.js", category: "Backend" },
  { src: Next, description: "Next.js", category: "Frontend" },
  { src: materialUi, description: "Material UI", category: "Frontend" },
  { src: mongodb, description: "MongoDB", category: "Backend" },
  { src: kubernetes, description: "Kubernetes", category: "DevOps" },
  { src: kotlin, description: "Kotlin", category: "Mobile" },
  { src: jmeter, description: "JMeter", category: "Testing" },
  { src: js, description: "JavaScript", category: "Frontend" },
  { src: Java, description: "Java", category: "Backend" },
  { src: illustrator, description: "Illustrator", category: "UI / UX" },
  { src: invision, description: "InVision", category: "UI / UX" },
  { src: ios, description: "iOS", category: "Mobile" },
  { src: gcp, description: "GCP", category: "DevOps" },
  { src: gitLab, description: "GitLab", category: "DevOps" },
  { src: grafana, description: "Grafana", category: "DevOps" },
  { src: go, description: "Go", category: "Backend" },
  { src: Els, description: "ElasticSearch", category: "Backend" },
  { src: flutter, description: "Flutter", category: "Mobile" },
  { src: figma, description: "Figma", category: "UI / UX" },
  { src: cassandra, description: "Cassandra", category: "Backend" },
  { src: cypress, description: "Cypress", category: "Testing" },
  { src: digitalOcean, description: "DigitalOcean", category: "DevOps" },
  { src: docker, description: "Docker", category: "DevOps" },
  { src: angular, description: "Angular", category: "Frontend" },
  { src: appium, description: "Appium", category: "Mobile" },
  { src: azure, description: "Azure", category: "DevOps" },
  { src: AntDesign, description: "Ant", category: "UI / UX" },
  { src: Aws, description: "Amazon", category: "DevOps" },
  { src: balsamic, description: "Balsamiq", category: "UI / UX" },
  { src: bitButket, description: "Bitbucket", category: "DevOps" }
];

function Tools() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleRadioChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div id='tools' className='mt-20 bg-slate-100 p-5 lg:p-10'>
      <h2 className='text-[28px] lg:text-[63px] text-blue-600 ml-0 lg:ml-14 mt-10 mb-10 font-bold'>Tools</h2>
      <div className='flex ml-0 lg:ml-14 flex-col lg:flex-row font-bold lg:flex-wrap justify-center lg:justify-start'>
        {["Frontend", "Backend", "DevOps", "Testing", "UI / UX", "Infrastructure", "Mobile"].map((category) => (
          <div key={category} className="form-control mr-3 mb-3 lg:mb-0">
            <label className="label cursor-pointer gap-2">
              <input 
                type="radio" 
                name="theme-radios" 
                className="radio theme-controller border-2 border-blue-600 text-blue-600 checked:bg-blue-600" 
                value={category} 
                onChange={() => handleRadioChange(category)} 
              />
              <span className="label-text">{category}</span>
            </label>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-4 lg:grid-cols-12 ml-0 lg:ml-14 items-center'>
        {ImageData.map((item, index) => (
          <div 
            className={`rounded-md mx-1 p-3 items-center text-center mt-10 ${selectedCategory === item.category ? 'bg-slate-400' : 'bg-slate-200'}`} 
            key={index}
          >
            <div className='w-full h-full max-w-[113px] max-h-xs lg:max-w-[120px] lg:max-h-xs'>
              <img className='w-8 lg:w-10 mb-2 ml-3' src={item.src} alt="Icon" />
              <h3 className='text-[10px] lg:text-[12px] text-slate-900 font-semibold'>{item.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
