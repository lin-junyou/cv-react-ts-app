import { useEffect, useState } from 'react'
import './Hero.css'

const roles = [
  '運動科技系統架構師',
  'Sports Tech Architect',
  '後端軟體工程師',
  'Backend Software Engineer',
]

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    let currentText = ''
    let charIndex = 0
    const currentRole = roles[currentRoleIndex]

    const typingInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        currentText += currentRole[charIndex]
        setDisplayText(currentText)
        charIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setCurrentRoleIndex(prev => (prev + 1) % roles.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [currentRoleIndex])

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-tag">{'// 用數據，探索運動'}</div>
          <h1 className="hero-title">
            你好，我是
            <span className="hero-name"> 俊佑</span>
          </h1>
          <div className="hero-role">
            <span className="role-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-description">
            熱愛運動與科技的交會，以技術支援研究探索運動科學的無限可能。
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              查看作品
            </a>
            <a href="#contact" className="btn btn-secondary">
              聯絡我
            </a>
          </div>
        </div>
        <div className="hero-code">
          <div className="code-window">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="code-title">ljy.ts</span>
            </div>
            <pre className="code-content code-content-full">
              <code>
                {`
`}
                <span className="keyword">interface</span> <span className="type">Architect</span>{' '}
                <span className="bracket">{'{'}</span>
                {`
  `}
                <span className="property">name</span>: <span className="type">string</span>;
                {`
  `}
                <span className="property">organization</span>: <span className="type">string</span>
                ;
                {`
  `}
                <span className="property">role</span>: <span className="type">string</span>;
                {`
  `}
                <span className="property">education</span>: <span className="type">string</span>[];
                {`
  `}
                <span className="property">experience</span>: <span className="type">string</span>;
                {`
  `}
                <span className="property">stack</span>: <span className="type">string</span>[];
                {`
  `}
                <span className="property">companies</span>: <span className="type">string</span>[];
                {`
  `}
                <span className="property">mission</span>: <span className="type">string</span>;
                {`
`}
                <span className="bracket">{'}'}</span>
                {`

`}
                <span className="keyword">const</span> <span className="function">LJY</span>:{' '}
                <span className="type">Architect</span> = <span className="bracket">{'{'}</span>
                {`
  `}
                <span className="property">name</span>: <span className="string">"俊佑"</span>,
                {`
  `}
                <span className="property">organization</span>:{' '}
                <span className="string">"行政法人國家運動科學中心"</span>,
                {`
  `}
                <span className="property">role</span>:{' '}
                <span className="string">"行政管理處資訊組資訊人員"</span>,
                {`
  `}
                <span className="property">education</span>: [
                {`
    `}
                <span className="string">"國立中興大學 資訊工程學系碩士在職專班（在學）"</span>,
                {`
    `}
                <span className="string">
                  "國立臺灣體育運動大學 運動資訊與傳播學系學士（畢業）"
                </span>
                {`
  `}
                ],
                {`
  `}
                <span className="property">experience</span>:{' '}
                <span className="string">"5+ 年後端開發經驗"</span>,
                {`
  `}
                <span className="property">stack</span>: [
                {`
    `}
                <span className="string">"Backend: FastAPI / .NET Core / Laravel"</span>,
                {`
    `}
                <span className="string">"Frontend: React / TypeScript / Vue"</span>,
                {`
    `}
                <span className="string">"DevOps: K8s / Docker / Proxmox"</span>,
                {`
    `}
                <span className="string">"AI: GPU vGPU / Ollama / LLM"</span>,
                {`
    `}
                <span className="string">"Database: SQL Server / PostgreSQL / MongoDB"</span>
                {`
  `}
                ],
                {`
  `}
                <span className="property">companies</span>: [
                {`
    `}
                <span className="string">"行政法人國家運動科學中心"</span>,
                {`
    `}
                <span className="string">"微程式資訊股份有限公司"</span>,
                {`
    `}
                <span className="string">"哲煜科技股份有限公司"</span>,
                {`
    `}
                <span className="string">"臺灣體大運動數據分析情蒐實驗室"</span>
                {`
  `}
                ],
                {`
  `}
                <span className="property">mission</span>:{' '}
                <span className="string">"用數據，探索運動"</span>
                {`
`}
                <span className="bracket">{'}'}</span>;
                {`

`}
                <span className="keyword">export</span> <span className="keyword">default</span>{' '}
                <span className="function">LJY</span>;
                {`
`}
              </code>
            </pre>
            <pre className="code-content code-content-mobile">
              <code>
                {`
`}
                <span className="keyword">const</span> <span className="function">LJY</span> ={' '}
                <span className="bracket">{'{'}</span>
                {`
  `}
                <span className="property">name</span>: <span className="string">"俊佑"</span>,
                {`
  `}
                <span className="property">organization</span>:{' '}
                <span className="string">"國家運動科學中心"</span>,
                {`
  `}
                <span className="property">role</span>:{' '}
                <span className="string">"行政管理處資訊組資訊人員（系統架構師）"</span>,
                {`
  `}
                <span className="property">experience</span>:{' '}
                <span className="string">"5+ 年"</span>,
                {`
  `}
                <span className="property">stack</span>: [
                {`
    `}
                <span className="string">"FastAPI / .NET Core / Laravel"</span>,
                {`
    `}
                <span className="string">"React / TypeScript / Vue"</span>,
                {`
    `}
                <span className="string">"K8s / Docker / Proxmox"</span>,
                {`
    `}
                <span className="string">"GPU vGPU / Ollama / LLM"</span>
                {`
  `}
                ],
                {`
  `}
                <span className="property">mission</span>:{' '}
                <span className="string">"用數據，探索運動"</span>
                {`
`}
                <span className="bracket">{'}'}</span>;
                {`
`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
