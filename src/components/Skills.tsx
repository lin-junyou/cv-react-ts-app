import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: '程式語言',
      icon: '💻',
      skills: [
        { name: 'PHP', level: 60 },
        { name: 'Python', level: 60 },
        { name: 'C#', level: 50 },
        { name: 'TypeScript / JavaScript', level: 50 },
      ],
    },
    {
      title: '系統架構與設計',
      icon: '🏗️',
      skills: [
        { name: '系統架構規劃與設計', level: 75 },
        { name: '資料整合與同步機制', level: 75 },
        { name: '網路架構與安全設計', level: 70 },
        { name: '高可用性系統設計', level: 65 },
      ],
    },
    {
      title: '容器化與虛擬化',
      icon: '🐳',
      skills: [
        { name: 'Docker / Docker Compose', level: 75 },
        { name: 'CI/CD 自動化部署', level: 75 },
        { name: 'Kubernetes', level: 60 },
        { name: 'Proxmox VE 叢集管理', level: 55 },
      ],
    },
    {
      title: '後端開發框架',
      icon: '⚙️',
      skills: [
        { name: 'RESTful API', level: 80 },
        { name: 'PHP Laravel', level: 75 },
        { name: 'Python FastAPI', level: 70 },
        { name: 'ASP.NET Core', level: 65 },
      ],
    },
    {
      title: '前端開發',
      icon: '🎨',
      skills: [
        { name: 'RWD 響應式設計', level: 75 },
        { name: 'React / Next.js', level: 65 },
        { name: 'Vue.js / Vuex', level: 60 },
        { name: 'TypeScript', level: 60 },
      ],
    },
    {
      title: 'AI 基礎設施',
      icon: '🤖',
      skills: [
        { name: '模型服務與 API 整合', level: 70 },
        { name: 'LLM 模型部署與推論', level: 65 },
        { name: 'GPU 虛擬化與資源管理', level: 60 },
        { name: 'AI 開發環境建置', level: 60 },
      ],
    },
    {
      title: '資料庫與快取',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL / MySQL', level: 60 },
        { name: 'Redis', level: 50 },
        { name: 'SQL Server', level: 50 },
        { name: 'MongoDB', level: 50 },
      ],
    },
    {
      title: '網路與基礎設施',
      icon: '🛡️',
      skills: [
        { name: 'Cloudflare / Zero Trust', level: 60 },
        { name: 'Nginx / Openresty', level: 50 },
        { name: 'Active Directory / LDAP', level: 50 },
        { name: 'Network Infrastructure', level: 50 },
      ],
    },
  ]

  const technicalSkills = [
    '運動科技系統開發',
    '虛擬化與容器化架構',
    '零信任網路架構',
    'AI 基礎設施建置',
    '資料整合與平台開發',
    '機房與網路基礎建設',
    'IT 資產與權限管理',
    '高可用性系統設計',
    '全端應用開發',
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">技術棧</h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="technical-skills">
          <h3 className="tech-title">
            <span className="code-bracket">{'{'}</span>
            專業領域
            <span className="code-bracket">{'}'}</span>
          </h3>
          <div className="tech-tags">
            {technicalSkills.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
