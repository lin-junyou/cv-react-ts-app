import './Projects.css'

const Projects = () => {
  const projects = [
    // === 行政法人國家運動科學中心 (2024.09 - 現在) ===
    {
      title: '智慧場域科技棒球場建置規劃',
      company: '行政法人國家運動科學中心',
      period: '2024.09 - 現在',
      description:
        '參與規劃國家運動科學中心智慧場域科技棒球場建置專案，整合訓練監控系統、影像分析設備、數據採集平台等技術，打造智慧化訓練環境，支援國家隊科學化訓練需求。',
      tech: ['IoT', '影像分析', '數據整合', '系統規劃'],
      highlights: ['智慧場域技術規劃與整合', '訓練監控系統架構設計', '多源數據採集與分析平台'],
    },
    {
      title: '官方網站系統開發與維護',
      company: '行政法人國家運動科學中心',
      period: '2024.09 - 現在',
      description:
        '負責官方網站後台管理系統建置與前台頁面維護，提供內容管理、新聞發布、活動管理等功能，確保網站資訊即時更新與良好的使用者體驗。',
      tech: ['PHP Laravel', 'Vue.js', 'MySQL', 'Docker'],
      highlights: ['後台內容管理系統建置', '前台頁面功能維護與優化', '網站資訊發布流程管理'],
    },
    {
      title: '運動傷害監控與追蹤系統',
      company: '行政法人國家運動科學中心',
      period: '2024.09 - 2024.12',
      description:
        '開發運動員回場管理系統，整合傷害資料，提供回場評估、進度追蹤、風險監控等功能，協助運動醫學團隊進行科學化的回場決策與管理。',
      tech: ['PHP Laravel', 'PostgreSQL', 'Next.js', 'Docker'],
      highlights: ['傷害記錄與回場資料建檔', '回場準備度評估與監控', '資訊整合與決策支援'],
    },
    {
      title: 'Cloudflare 服務架構',
      company: '行政法人國家運動科學中心',
      period: '2025.11 - 現在',
      description:
        '規劃並實施基於 Cloudflare 的網路架構，保護研究資料與內部系統安全，並計畫實現 SSO 單一登入與細粒度存取控制，研究系統不暴露於外網。',
      tech: ['Cloudflare', 'Zero Trust', 'FortiGate'],
      highlights: ['網路架構設計', '研究系統安全防護', 'Cloudflare Reverse Proxy'],
    },
    {
      title: 'Nginx 閘道反向代理服務架構',
      company: '行政法人國家運動科學中心',
      period: '2024.09 - 現在',
      description:
        '建置與管理 Nginx 反向代理閘道服務，統一管理內部系統對外服務入口，提供負載平衡、SSL/TLS 加密、請求路由與快取等功能，確保服務高可用性與安全性。',
      tech: ['Nginx', 'SSL/TLS', 'Load Balancing', 'Docker'],
      highlights: ['反向代理閘道架構設計', 'SSL 憑證管理與自動更新', '服務路由與負載平衡配置'],
    },

    {
      title: 'Proxmox VE 虛擬化叢集管理',
      company: '行政法人國家運動科學中心',
      period: '2024.09 - 現在',
      description:
        '建置與管理 Proxmox VE 虛擬化叢集環境，提供高可用性的虛擬機器與容器服務，負責資源配置、備份策略、效能監控與故障排除，支援中心各項資訊系統運作。',
      tech: ['Proxmox VE', 'KVM', 'LXC', 'Ceph', 'ZFS'],
      highlights: ['虛擬化叢集架構規劃與建置', 'HA 高可用性配置與管理', '儲存與備份策略實施'],
    },
    {
      title: '資訊資產管理與 AD 目錄服務',
      company: '行政法人國家運動科學中心',
      period: '2024.09 - 現在',
      description:
        '建置與管理資訊資產管理系統與開發區 Active Directory 目錄服務，負責帳號管理、權限控制、設備資產追蹤、軟體授權管理等，確保組織資訊安全與資產有效管理。',
      tech: ['Active Directory', 'LDAP', 'Group Policy', 'Asset Management'],
      highlights: ['AD 目錄服務架構與管理', '帳號與權限集中管理', 'IT 資產追蹤與軟體授權管理'],
    },
    {
      title: '機房基礎設施建置',
      company: '行政法人國家運動科學中心',
      period: '2024.09 - 現在',
      description:
        '參與機房基礎設施建置專案，協助規劃與實施機房網路架構、伺服器部署、儲存系統、UPS 不斷電系統、環境監控等，確保機房設備穩定運作與資料安全。',
      tech: ['Network Infrastructure', 'Server Deployment', 'UPS', 'Environment Monitoring'],
      highlights: ['機房網路架構規劃', '伺服器與儲存系統部署', '環境監控與維運管理'],
    },
    // === 微程式資訊 (2024.03 - 2024.08) ===
    {
      title: 'YouBike 公共自行車系統監控平台',
      company: '微程式資訊股份有限公司',
      period: '2024.03 - 2024.08',
      description:
        '參與全台最大公共自行車租賃系統架構維運，負責系統資料處理、站點監控、維運管理等功能開發與維護。累積跨領域專案經驗，體會技術後勤支援在複雜系統中的關鍵價值。',
      tech: ['PHP Laravel', 'MongoDB', 'Redis', 'Vue.js'],
      highlights: ['公共自行車系統架構維運', '站點即時監控與資料處理', '跨領域專案技術整合'],
    },
    {
      title: 'Bikonnect 共享電輔車 IoT 管理平台',
      company: '微程式資訊股份有限公司',
      period: '2024.03 - 2024.08',
      description:
        '自有品牌共享電輔車的 IoT 管理平台功能開發與維護，負責車輛監控、電池管理、租借系統、使用者管理等核心功能，整合物聯網裝置資料與後端系統。',
      tech: ['PHP Laravel', 'MQTT Broker', 'IoT', 'MySQL', 'Vue.js', 'Docker'],
      highlights: ['IoT 裝置資料串接與處理', '電輔車即時監控與管理', '租借系統與用戶管理'],
    },
    // === 哲煜科技 (2023.01 - 2024.02) ===
    {
      title: '富智康車用數據解析與封包除錯工具',
      company: '哲煜科技股份有限公司',
      period: '2023.01 - 2024.02',
      description:
        '為富智康國際股份有限公司開發的車用數據解析工具，提供車載通訊封包解析、系統除錯、數據視覺化等功能，協助工程師進行車用系統開發與測試。',
      tech: ['Python', 'OpenCV', 'PyQT', 'Electron'],
      highlights: ['車載通訊封包解析', 'Desktop 應用程式開發', '數據視覺化與除錯工具'],
    },
    {
      title: '磊山保險人事管理系統',
      company: '哲煜科技股份有限公司',
      period: '2023.01 - 2024.02',
      description:
        '為磊山保險經紀人股份有限公司開發的完整人事管理系統，包含員工資料管理、晉升審核等功能，並建置 CI/CD 自動化部署流程。',
      tech: ['PHP Laravel', 'MSSQL', 'Vue.js', 'Docker', 'GitLab CI'],
      highlights: ['完整人事資料管理系統', '考勤與薪資系統整合', 'CI/CD 自動化部署建置'],
    },
    // === 國立臺灣體育運動大學 (2021.05 - 2022.12) ===
    {
      title: '味全龍職棒隊影像數據調閱系統',
      company: '國立臺灣體育運動大學 運動情資蒐集實驗室',
      period: '2021.05 - 2022.12',
      description:
        '為中華職棒味全龍隊開發的影像數據調閱系統，整合比賽影像與數據分析，提供快速調閱、標註、分析等功能，協助教練團進行戰術研究與球員訓練。',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'OpenCV', 'FFmpeg'],
      highlights: ['影像與數據即時同步', '快速調閱特定比賽片段', '數據標註與分析功能'],
    },
    {
      title: '雲端棒球賽事紀錄系統',
      company: '國立臺灣體育運動大學 運動數據分析情蒐實驗室',
      period: '2021.05 - 2022.12',
      description:
        '三級棒球賽事的雲端紀錄與管理系統，包含賽事安排、即時紀錄、球員數據庫、統計分析、訓練日誌等完整功能。',
      tech: ['PHP Laravel', 'MySQL', 'React.js', 'D3.js'],
      highlights: ['支援多場賽事同時紀錄', '球員完整數據追蹤', '即時統計與視覺化'],
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2 className="section-title">專案作品</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="project-meta">
                <span className="project-company">🏢 {project.company}</span>
                <span className="project-period">📅 {project.period}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-highlights">
                {project.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="highlight-item">
                    <span className="highlight-bullet">▸</span>
                    {highlight}
                  </div>
                ))}
              </div>
              <div className="project-tech">
                {project.tech.map((tech, tIndex) => (
                  <span key={tIndex} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
