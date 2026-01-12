import './Interests.css'

const Interests = () => {
  const interests = [
    {
      icon: '⚾',
      title: '棒球數據分析',
      description:
        '熱愛棒球運動，更著迷於運動數據分析。曾參與味全龍職業棒球隊數據系統開發，體會到數據如何改變運動訓練與戰術。',
      stats: [
        { label: '專案經驗', value: '3 年+' },
        { label: '合作球隊', value: '味全龍' },
      ],
      color: 'cyan',
    },
    {
      icon: '🏊',
      title: '游泳與舒壓',
      description: '體會訓練過程。從運動中理解數據的價值，從數據中優化運動表現。',
      stats: [
        { label: '運動習慣', value: '規律舒壓' },
        { label: '運動項目', value: 'FLY、BK、BR、FR' },
      ],
      color: 'green',
    },
    {
      icon: '📊',
      title: '運動科技',
      description:
        '關注運動科技發展，包含穿戴裝置、影像分析、數據視覺化等。將科技應用於運動，是我最大的興趣與專長。',
      stats: [
        { label: '研究領域', value: '運動資訊' },
        { label: '學術背景', value: '體育大學 + 資訊工程' },
      ],
      color: 'blue',
    },
    {
      icon: '💡',
      title: '系統開發',
      description:
        '熱衷於開發解決實際問題的系統。從需求分析到系統上線，享受將想法實現的過程，特別是運動相關的應用。',
      stats: [
        { label: '開發經驗', value: '5 年+' },
        { label: '專案類型', value: '多元整合' },
      ],
      color: 'purple',
    },
  ]

  return (
    <section id="interests" className="interests">
      <div className="section-container">
        <h2 className="section-title">興趣與生活</h2>
        <p className="interests-intro">
          從<span className="highlight-text">國立臺灣體育運動大學</span>畢業，
          我將對運動的熱愛轉化為科技的實踐。
          <span className="highlight-text">用數據，探索運動</span>不只是口號，更是我的人生志業。
        </p>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div key={index} className={`interest-card color-${interest.color}`}>
              <div className="interest-icon">{interest.icon}</div>
              <h3 className="interest-title">{interest.title}</h3>
              <p className="interest-description">{interest.description}</p>
              <div className="interest-stats">
                {interest.stats.map((stat, sIndex) => (
                  <div key={sIndex} className="stat-item">
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-value">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="philosophy-box">
          <div className="philosophy-quote">
            <p>
              運動場上的每一個動作，都能被數據記錄；系統中的每一行程式碼，都能創造價值。
              <br />
              當科技遇見運動，數據不只是數字，而是改變的起點；從球場到鍵盤，我用技術探索運動的無限可能。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Interests
