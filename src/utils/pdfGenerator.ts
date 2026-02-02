import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

/**
 * 生成並下載簡歷PDF（按區塊分頁）
 * @param filename 下載的檔案名稱（預設為 'CV_JunYou.pdf'）
 */
export const generateResumePDF = async (filename: string = 'CV_JunYou.pdf'): Promise<void> => {
  // 儲存需要恢復的樣式（在try外面定義，確保catch也能訪問）
  const gradientElements = {
    buttons: [] as Array<{ element: HTMLElement; originalBg: string }>,
    highlights: [] as Array<{ element: HTMLElement; originalBg: string }>,
    trails: [] as Array<{ element: HTMLElement; originalBg: string }>,
  }

  let header: HTMLElement | null = null
  let scrollTopBtn: HTMLElement | null = null
  let originalHeaderDisplay: string | undefined
  let originalScrollTopDisplay: string | undefined

  try {
    // 儲存當前滾動位置
    const originalScrollY = window.scrollY

    // 滾動到頂部
    window.scrollTo(0, 0)

    // 顯示載入提示
    const loadingElement = document.createElement('div')
    loadingElement.id = 'pdf-loading'
    loadingElement.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      color: white;
      font-size: 20px;
      font-family: sans-serif;
      gap: 10px;
    `
    loadingElement.innerHTML = `
      <div>正在生成 PDF，請稍候...</div>
      <div id="pdf-progress" style="font-size: 14px;">準備中...</div>
    `
    document.body.appendChild(loadingElement)

    // 等待一小段時間讓頁面渲染
    await new Promise(resolve => setTimeout(resolve, 300))

    // 暫時隱藏固定定位的元素
    header = document.querySelector('.header') as HTMLElement
    scrollTopBtn = document.querySelector('.scroll-to-top') as HTMLElement
    originalHeaderDisplay = header?.style.display
    originalScrollTopDisplay = scrollTopBtn?.style.display

    if (header) header.style.display = 'none'
    if (scrollTopBtn) scrollTopBtn.style.display = 'none'

    // 處理漸層樣式問題：暫時替換為純色

    // 處理所有有漸層背景的按鈕和元素
    document
      .querySelectorAll<HTMLElement>(
        'button, .cta-button, .download-pdf-btn, .contact-button, .btn-primary'
      )
      .forEach(el => {
        const bg = window.getComputedStyle(el).background
        if (bg.includes('gradient')) {
          gradientElements.buttons.push({ element: el, originalBg: el.style.background })
          el.style.background = '#06b6d4' // 使用純色替代
        }
      })

    // 處理highlight元素
    document.querySelectorAll<HTMLElement>('.highlight').forEach(el => {
      const bg = window.getComputedStyle(el).background
      if (bg.includes('gradient')) {
        gradientElements.highlights.push({ element: el, originalBg: el.style.background })
        el.style.background = 'transparent'
      }
    })

    // 處理螢光筆軌跡（如果存在）
    document.querySelectorAll<HTMLElement>('.highlighter-trail').forEach(el => {
      gradientElements.trails.push({ element: el, originalBg: el.style.background })
      el.style.background = 'rgba(6, 182, 212, 0.3)'
    })

    // 處理光暈效果和漸層（偽元素和特殊元素）：添加臨時樣式表來覆蓋
    const tempStyleSheet = document.createElement('style')
    tempStyleSheet.id = 'pdf-temp-styles'
    tempStyleSheet.textContent = `
      /* 隱藏或替換所有含有 radial-gradient 的偽元素 */
      .hero::before,
      .hero::after,
      .about::before,
      .about::after,
      .highlighter-trail::before,
      .highlighter-trail::after {
        background: none !important;
        display: none !important;
      }

      /* 處理技能進度條漸層 */
      .skill-progress {
        background: #06b6d4 !important;
      }

      /* 處理統計卡片漸層 */
      .stat-card.featured {
        background: rgba(59, 130, 246, 0.1) !important;
      }

      .stat-card.featured::before {
        background: none !important;
        display: none !important;
      }

      /* 處理哲學圖標背景 */
      .philosophy-icon {
        background: #06b6d4 !important;
      }

      /* 處理標題底部裝飾線 */
      .section-title::after {
        background: #06b6d4 !important;
      }

      /* 處理文字漸層效果 */
      .message-title,
      .stat-value,
      .stat-card.featured .stat-value,
      .hero-name {
        background: none !important;
        -webkit-background-clip: initial !important;
        -webkit-text-fill-color: var(--accent-cyan) !important;
        background-clip: initial !important;
        color: var(--accent-cyan) !important;
      }

      /* 移除所有動畫效果，避免截圖時出現問題 */
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
      }
    `
    document.head.appendChild(tempStyleSheet)

    // 等待樣式生效
    await new Promise(resolve => setTimeout(resolve, 100))

    // 獲取所有section區塊
    const sections = document.querySelectorAll('section[id]') as NodeListOf<HTMLElement>
    if (sections.length === 0) {
      throw new Error('找不到任何內容區塊')
    }

    // 創建 PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    })

    const pageWidth = 210 // A4 寬度（mm）
    const pageHeight = 297 // A4 高度（mm）
    const margin = 10 // 邊距
    const contentWidth = pageWidth - 2 * margin
    let isFirstPage = true

    // 更新進度
    const progressElement = document.getElementById('pdf-progress')

    // 逐個處理每個section
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i]
      const sectionName = section.id

      if (progressElement) {
        progressElement.textContent = `正在處理: ${sectionName} (${i + 1}/${sections.length})`
      }

      // 滾動到該section
      section.scrollIntoView({ behavior: 'instant' })
      await new Promise(resolve => setTimeout(resolve, 200))

      // 特殊處理：專案作品區塊（4個一組分頁）
      if (sectionName === 'projects') {
        const projectCards = section.querySelectorAll('.project-card') as NodeListOf<HTMLElement>
        const projectsPerPage = 4
        const totalGroups = Math.ceil(projectCards.length / projectsPerPage)

        // 暫時隱藏所有專案卡片
        const originalDisplays: string[] = []
        projectCards.forEach(card => {
          originalDisplays.push(card.style.display)
          card.style.display = 'none'
        })

        // 按組處理專案
        for (let groupIndex = 0; groupIndex < totalGroups; groupIndex++) {
          const startIdx = groupIndex * projectsPerPage
          const endIdx = Math.min(startIdx + projectsPerPage, projectCards.length)

          if (progressElement) {
            progressElement.textContent = `正在處理: ${sectionName} - 第 ${groupIndex + 1}/${totalGroups} 組`
          }

          // 只顯示當前組的專案卡片
          projectCards.forEach((card, idx) => {
            card.style.display = idx >= startIdx && idx < endIdx ? '' : 'none'
          })

          await new Promise(resolve => setTimeout(resolve, 100))

          // 捕獲當前組的canvas
          const canvas = await html2canvas(section, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: null,
            allowTaint: true,
            foreignObjectRendering: false,
            scrollY: -window.scrollY,
            scrollX: -window.scrollX,
          })

          // 新增頁面
          if (!isFirstPage) {
            pdf.addPage()
          }
          isFirstPage = false

          // 計算縮放比例並添加到PDF
          const canvasRatio = canvas.width / canvas.height
          const pageRatio = contentWidth / (pageHeight - 2 * margin)

          let imgWidth: number
          let imgHeight: number
          let xPosition: number
          let yPosition: number

          if (canvasRatio > pageRatio) {
            imgWidth = contentWidth
            imgHeight = contentWidth / canvasRatio
            xPosition = margin
            yPosition = margin + (pageHeight - 2 * margin - imgHeight) / 2
          } else {
            imgHeight = pageHeight - 2 * margin
            imgWidth = imgHeight * canvasRatio
            xPosition = margin + (contentWidth - imgWidth) / 2
            yPosition = margin
          }

          const imgData = canvas.toDataURL('image/jpeg', 0.95)
          pdf.addImage(
            imgData,
            'JPEG',
            xPosition,
            yPosition,
            imgWidth,
            imgHeight,
            undefined,
            'FAST'
          )
        }

        // 恢復所有專案卡片的顯示
        projectCards.forEach((card, idx) => {
          card.style.display = originalDisplays[idx]
        })
      } else {
        // 一般section處理
        const canvas = await html2canvas(section, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: null,
          allowTaint: true,
          foreignObjectRendering: false,
          scrollY: -window.scrollY,
          scrollX: -window.scrollX,
        })

        // 如果不是第一個區塊，新增一頁
        if (!isFirstPage) {
          pdf.addPage()
        }
        isFirstPage = false

        // 計算縮放比例，使section剛好填滿一頁（保持寬高比）
        const canvasRatio = canvas.width / canvas.height
        const pageRatio = contentWidth / (pageHeight - 2 * margin)

        let imgWidth: number
        let imgHeight: number
        let xPosition: number
        let yPosition: number

        if (canvasRatio > pageRatio) {
          // canvas 比較寬，以寬度為準
          imgWidth = contentWidth
          imgHeight = contentWidth / canvasRatio
          xPosition = margin
          yPosition = margin + (pageHeight - 2 * margin - imgHeight) / 2 // 垂直置中
        } else {
          // canvas 比較高，以高度為準
          imgHeight = pageHeight - 2 * margin
          imgWidth = imgHeight * canvasRatio
          xPosition = margin + (contentWidth - imgWidth) / 2 // 水平置中
          yPosition = margin
        }

        // 轉換為圖片並添加到PDF
        const imgData = canvas.toDataURL('image/jpeg', 0.95)
        pdf.addImage(imgData, 'JPEG', xPosition, yPosition, imgWidth, imgHeight, undefined, 'FAST')
      }
    }

    // 下載 PDF
    pdf.save(filename)

    // 移除載入提示
    document.body.removeChild(loadingElement)

    // 恢復原本的滾動位置
    window.scrollTo(0, originalScrollY)
  } catch (error) {
    console.error('生成 PDF 時發生錯誤:', error)
    alert('生成 PDF 失敗，請稍後再試')

    // 確保移除載入提示
    const loadingElement = document.getElementById('pdf-loading')
    if (loadingElement) {
      document.body.removeChild(loadingElement)
    }
  } finally {
    // 無論成功或失敗，都要恢復樣式
    if (header && originalHeaderDisplay !== undefined) {
      header.style.display = originalHeaderDisplay
    }
    if (scrollTopBtn && originalScrollTopDisplay !== undefined) {
      scrollTopBtn.style.display = originalScrollTopDisplay
    }

    // 恢復漸層樣式
    gradientElements.buttons.forEach(({ element, originalBg }) => {
      element.style.background = originalBg
    })
    gradientElements.highlights.forEach(({ element, originalBg }) => {
      element.style.background = originalBg
    })
    gradientElements.trails.forEach(({ element, originalBg }) => {
      element.style.background = originalBg
    })

    // 移除臨時樣式表
    const tempStyleSheet = document.getElementById('pdf-temp-styles')
    if (tempStyleSheet) {
      tempStyleSheet.remove()
    }
  }
}
