import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    { value: '5+', label: '年後端開發經驗' },
    { value: '百萬級', label: '用戶服務系統' },
    { value: '企業級', label: '資料平台架構' },
    { value: '跨領域', label: '技術整合經驗' },
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let lastTime = 0
    const throttleDelay = 30 // 節流延遲（毫秒）

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastTime < throttleDelay) return
      lastTime = now

      // 創建螢光筆軌跡
      const trail = document.createElement('div')
      trail.className = 'highlighter-trail'
      trail.style.left = e.clientX + 'px'
      trail.style.top = e.clientY + 'px'
      section.appendChild(trail)

      // 動畫結束後移除
      setTimeout(() => {
        trail.remove()
      }, 800)
    }

    section.addEventListener('mousemove', handleMouseMove)

    return () => {
      section.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">關於我</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              我是<span className="highlight">俊佑</span>，擁有 5 年以上系統開發與架構設計經驗，
              畢業於<span className="highlight">國立臺灣體育運動大學 運動資訊與傳播學系</span>，
              現任<span className="highlight">行政法人國家運動科學中心 行政管理處資訊組</span>
              資訊人員， 同時就讀
              <span className="highlight">國立中興大學資訊工程學系碩士</span>。
            </p>
            <p>
              <strong>職涯歷程：</strong>從臺灣體大
              <span className="highlight">運動數據分析情蒐實驗室專任助理</span>起步（2021-2022），
              參與開發味全龍職棒隊影像數據系統、三級棒球資料庫等專案，建立運動科技基礎；
              進入產業後，先後服務於<span className="highlight">哲煜科技股份有限公司</span>
              （2023-2024.02）與
              <span className="highlight">微程式資訊股份有限公司</span>（2024.03起），
              負責跨企業級系統開發和維運、YouBike 公共自行車系統監控平台、自有品牌自行車 IoT
              維修與賽事後勤管理系統等專案， 累積 Web/Desktop/MQTT Broker
              應用、CI/CD、資料庫設計等軟體設計全方位技術能力。
            </p>
            <p>
              現於<span className="highlight">行政法人國家運動科學中心</span>
              擔任資訊組技術核心角色， 主要負責
              <span className="highlight">
                資訊系統與資料庫開發與管理、網路通訊維護、資安防護及資訊應用規劃
              </span>
              ，
              並支援研究處室推動運動科技應用。協助建置棒球場訓練影像自動分析等多項運動科學基礎設施。
            </p>
            <div className="about-philosophy">
              <div className="philosophy-icon">🏛️</div>
              <p>
                <strong>核心角色：</strong>
                技術後勤支援與系統整合者。
                <br />
                在跨領域合作中扮演關鍵技術支援角色，協助研究與開發單位完成多項系統與技術需求，
                建構穩固的資料骨幹與 AI 基礎設施，讓科學研究數據流動起來，
                從系統架構到實驗落地，用技術賦能運動科學。
              </p>
            </div>
          </div>
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card featured">
                <div className="featured-badge">✨</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
