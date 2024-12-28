// 作品數據
const portfolioItems = {
    images: [
        { id: 1, title: "遊戲場景1", image: "images/mon.png" },
        { id: 2, title: "遊戲場景2", image: "images/sty.png" },
        { id: 3, title: "黑洞特效", image: "images/BlackHole.png" },
        { id: 4, title: "溪流", image: "images/river.png" },
        // 添加更多圖片...
    ],
    videos: [
        { id: 1, title: "2023下半年績優表揚大會動畫", thumbnail: "VIDEO/2023下半年績優表揚大會動畫.png",videoSrc: "https://youtu.be/byKhikFXpjQ",youtubeId: "byKhikFXpjQ" },
        { id: 2, title: "vr", thumbnail: "VIDEO/VR.png",videoSrc:"https://youtu.be/wp5jec6Ei6w", youtubeId: "wp5jec6Ei6w" },
        { id: 3, title: "主頁影片", thumbnail: "VIDEO/YIHAOPRO.png",videoSrc: "https://youtu.be/FMPP_pAcIJs", youtubeId: "FMPP_pAcIJs" },
        { id: 4, title: "元宇宙 梨山耶穌堂", thumbnail: "VIDEO/元宇宙 梨山耶穌堂.png",videoSrc: "https://youtu.be/XQNYBAagzNU", youtubeId: "XQNYBAagzNU" },
        { id: 5, title: "動畫、FX、影片剪輯", thumbnail: "VIDEO/動畫、FX、影片剪輯.png",videoSrc: "https://youtube.com/shorts/z5rNW0bZcao",youtubeId: "z5rNW0bZcao"},
        { id: 6, title: "Motion Designing_3", thumbnail: "VIDEO/Motion Designing_3.png",videoSrc: "https://www.youtube.com/watch?v=KB8Tv-3tbhw", youtubeId: "KB8Tv-3tbhw" },
        { id: 7, title: "Motion Designing_2", thumbnail: "VIDEO/Motion Designing_2.png",videoSrc: "https://youtu.be/HM5ktUhJyEE", youtubeId: "HM5ktUhJyEE" },
        { id: 8, title: "Motion Designing_1", thumbnail: "VIDEO/Motion Designing_1.png",videoSrc: "https://www.youtube.com/watch?v=lxsMskl_Nrk", youtubeId: "lxsMskl_Nrk" },
        { id: 9, title: "綠幕1", thumbnail: "VIDEO/綠幕.png",videoSrc: "https://youtube.com/shorts/GLPI7pqqqHc", youtubeId: "GLPI7pqqqHc" },
        // 添加更多影片...
    ],
    AI: [
        { id: 1, title: "3view", image: "AI/3view.png" },
        { id: 2, title: "flux.1_tool_canny(線搞)", image: "AI/flux.1_tool_canny.png" },
        { id: 3, title: "flux.1_tool_redux(風格重繪)", image: "AI/flux.1_tool_redux.png" },
        { id: 4, title: "flux.1_tool_depth(深度圖)", image: "AI/flux.1_tool_depth.png" },
        { id: 5, title: "lora角色訓練", image: "AI/lora角色訓練.png" },
        { id: 6, title: "文字融合進圖片AI", image: "AI/文字融合進圖片AI.png" },
        { id: 7, title: "AI建模2", image: "AI/AI建模2.png" },
        { id: 8, title: "AI建模3", image: "AI/AI建模3.png" },
        { id: 9, title: "哥吉拉", image: "AI/godzlila.png" },
        
        // 添加更多 AI 影片...
    ],
    AIVideos: [
        { id: 1, title: "世新畢業典禮AI短影音", thumbnail: "AI/世新畢業典禮AI短影音.png",videoSrc: "https://youtube.com/shorts/oTVceiy6pGo", youtubeId: "oTVceiy6pGo" },
        { id: 2, title: "臉部變化", thumbnail: "AI/臉部變化.png",videoSrc: "https://youtube.com/shorts/zTt9tD7fTls", youtubeId: "zTt9tD7fTls" },
        { id: 3, title: "過度幀", thumbnail: "AI/過度幀.png",videoSrc: "https://youtube.com/shorts/PTJCsio9nxE", youtubeId: "PTJCsio9nxE" },
        { id: 4, title: "AI圖片生成", thumbnail: "AI/AI圖片生成.png",videoSrc: "https://youtube.com/shorts/OUryeEVVpvk", youtubeId: "OUryeEVVpvk" },
        { id: 5, title: "棒球AI", thumbnail: "AI/棒球AI.png",videoSrc: "https://youtube.com/shorts/wqidxi3AxD0", youtubeId: "wqidxi3AxD0" },
        { id: 6, title: "BUG", thumbnail: "AI/BUG.png",videoSrc: "https://youtube.com/shorts/IGMwN-exTms", youtubeId: "IGMwN-exTms" },
        { id: 7, title: "圖生圖", thumbnail: "AI/圖生圖.png",videoSrc: "https://youtube.com/shorts/jC9_kEkgG54", youtubeId: "jC9_kEkgG54" },
        { id: 8, title: "ALLPASS", thumbnail: "AI/ALLPASS.png",videoSrc: "https://youtube.com/shorts/rKyEcHuyPv4", youtubeId: "rKyEcHuyPv4" },
        { id: 9, title: "校長跳火星人布魯諾", thumbnail: "AI/DANCE.png",videoSrc: "https://youtube.com/shorts/w5A4b7AXtnU", youtubeId: "w5A4b7AXtnU" },
        { id: 10, title: "MINIMAX_AI影片", thumbnail: "AI/MINIMAX_AI影片.png",videoSrc: "https://youtu.be/mYbkrwwm2ME", youtubeId: "mYbkrwwm2ME" },
        { id: 11, title: "可靈+stable diffusion", thumbnail: "AI/可靈+stable diffusion.png", videoSrc: "https://youtu.be/iwHgIRUag-U",youtubeId: "iwHgIRUag-U" },
        { id: 12, title: "Luma+lora01", thumbnail: "AI/Luma+lora01.png",videoSrc: "https://youtu.be/SNXqgkujy2E", youtubeId: "SNXqgkujy2E" },
        { id: 13, title: "LUMA_AI_2", thumbnail: "AI/LUMA_AI_2.png",videoSrc: "https://youtu.be/zoctJOVEwyw", youtubeId: "zoctJOVEwyw" },
        { id: 14, title: "LUMA_AI 1", thumbnail: "AI/LUMA_AI.png",videoSrc: "https://youtu.be/lDntkRAgoFI", youtubeId: "lDntkRAgoFI" },
        { id: 15, title: "table diffusion_comfy UI ", thumbnail: "AI/stable diffusion_comfy UI_.png",videoSrc: "https://youtu.be/02PwNV_-yds",youtubeId: "02PwNV_-yds" },
        { id: 16, title: "vidu_AI_2", thumbnail: "AI/vidu_AI_2.png", videoSrc: "https://youtu.be/sKhfqfnwRSs",youtubeId: "sKhfqfnwRSs" },
        { id: 17, title: "Ai影片 2", thumbnail: "AI/Ai影片.png", videoSrc: "https://youtu.be/E45k0LBUWTw",youtubeId: "E45k0LBUWTw" },
        // 在這裡添加 AI影片 項目
    ]
};

// 生成作品卡片
function generatePortfolioItems() {
    const imageGallery = document.getElementById('image-gallery');
    const videoGallery = document.getElementById('video-gallery');
    const aiGallery = document.getElementById('Ai-gallery');
    const aiVideoGallery = document.getElementById('ai-video-gallery');

    portfolioItems.images.forEach(item => {
        const portfolioItem = createPortfolioItem(item, 'image');
        imageGallery.appendChild(portfolioItem);
    });

    portfolioItems.videos.forEach(item => {
        const portfolioItem = createPortfolioItem(item, 'video');
        videoGallery.appendChild(portfolioItem);
    });

    portfolioItems.AI.forEach(item => {
        const portfolioItem = createPortfolioItem(item, 'AI');
        aiGallery.appendChild(portfolioItem);
    });

    portfolioItems.AIVideos.forEach(item => {
        const portfolioItem = createPortfolioItem(item, 'AIVideo');
        aiVideoGallery.appendChild(portfolioItem);
    });
}

function createPortfolioItem(item, type) {
    const portfolioItem = document.createElement('div');
    portfolioItem.classList.add('portfolio-item');

    let thumbnailSrc;
    if (type === 'image' || (type === 'AI' && item.image)) {
        thumbnailSrc = item.image;
    } else if (item.thumbnail) {
        thumbnailSrc = item.thumbnail;
    } else if (item.videoSrc) {
        // 如果沒有縮略圖，但有視頻源，我們可以使用視頻的第一幀作為縮略圖
        thumbnailSrc = item.videoSrc;
    }

    if (thumbnailSrc) {
        const img = document.createElement('img');
        img.src = thumbnailSrc;
        img.alt = item.title;
        portfolioItem.appendChild(img);
    } else if (item.videoSrc) {
        // 如果沒有縮略圖但有視頻源，創建一個視頻元素
        const video = document.createElement('video');
        video.src = item.videoSrc;
        video.muted = true;
        video.preload = 'metadata';
        video.onloadedmetadata = function() {
            this.currentTime = 0;
        }
        video.oncanplay = function() {
            this.pause();
        }
        portfolioItem.appendChild(video);
    }

    const overlay = document.createElement('div');
    overlay.classList.add('portfolio-item-overlay');
    overlay.innerHTML = `<h3 class="portfolio-item-title">${item.title}</h3>`;
    portfolioItem.appendChild(overlay);

    portfolioItem.addEventListener('click', () => openModal(item, type));
    return portfolioItem;
}

// 開模態框
function openModal(item, type) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = '';
    
    // 確定當前項目在對應數組中的索引
    let currentArray;
    switch(type) {
        case 'image':
            currentArray = portfolioItems.images;
            type = 'images'; // 統一類型名稱
            break;
        case 'video':
            currentArray = portfolioItems.videos;
            type = 'videos'; // 統一類型名稱
            break;
        case 'AI':
            currentArray = portfolioItems.AI;
            break;
        case 'AIVideo':  // 新增 AIVideo 類型
            currentArray = portfolioItems.AIVideos;
            type = 'AIVideos';
            break;
        default:
            console.error('Unknown type:', type);
            return;
    }
    
    const currentIndex = currentArray.findIndex(i => i.id === item.id);
    if (currentIndex === -1) {
        console.error('Item not found in array');
        return;
    }
    
    // 更新數據屬性
    modal.dataset.currentIndex = currentIndex;
    modal.dataset.currentType = type;
    
    // 更新模態框內容
    updateModalContent(item, type);
    
    // 顯示模態框
    modal.style.display = "flex";
}

// 添加新函數：changeItem
function changeItem(direction, type) {
    const modal = document.getElementById('modal');
    let currentIndex = parseInt(modal.dataset.currentIndex);
    let items;
    
    // 根據類型獲取正確的數組
    switch(type) {
        case 'images':
            items = portfolioItems.images;
            break;
        case 'videos':
            items = portfolioItems.videos;
            break;
        case 'AI':
            items = portfolioItems.AI;
            break;
        case 'AIVideos':
            items = portfolioItems.AIVideos;
            break;
        default:
            console.error('Unknown type:', type);
            return;
    }
    
    // 計算新的索引
    let newIndex = (currentIndex + direction + items.length) % items.length;
    const newItem = items[newIndex];
    
    // 更新模態框內容
    updateModalContent(newItem, type);
    
    // 更新當前索引
    modal.dataset.currentIndex = newIndex;
    modal.dataset.currentType = type; // 確保類型也被保存
}

function updateModalContent(item, type) {
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = '';
    
    const caption = document.createElement('div');
    caption.id = 'caption';
    caption.textContent = item.title;
    modalContent.appendChild(caption);
    
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');
    
    let contentElement;
    if (type === 'images' || (type === 'AI' && item.image)) {
        contentElement = document.createElement('img');
        contentElement.src = item.image;
        contentElement.alt = item.title;
    } else if (type === 'videos' || type === 'AIVideos') {  // 修改這裡以支援 AIVideos
        if (item.youtubeId) {
            contentElement = document.createElement('iframe');
            contentElement.width = "560";
            contentElement.height = "315";
            contentElement.src = `https://www.youtube.com/embed/${item.youtubeId}`;
            contentElement.frameBorder = "0";
            contentElement.allowFullscreen = true;
        } else if (item.videoSrc) {
            contentElement = document.createElement('video');
            contentElement.src = item.videoSrc;
            contentElement.controls = true;
            contentElement.width = "560";
            contentElement.height = "315";
        }
    }
    
    const leftArrow = document.createElement('div');
    leftArrow.classList.add('modal-arrow', 'left-arrow');
    leftArrow.innerHTML = '&#10094;';
    leftArrow.addEventListener('click', (e) => {
        e.stopPropagation();
        changeItem(-1, modal.dataset.currentType);
    });
    
    const rightArrow = document.createElement('div');
    rightArrow.classList.add('modal-arrow', 'right-arrow');
    rightArrow.innerHTML = '&#10095;';
    rightArrow.addEventListener('click', (e) => {
        e.stopPropagation();
        changeItem(1, modal.dataset.currentType);
    });
    
    contentWrapper.appendChild(leftArrow);
    contentWrapper.appendChild(contentElement);
    contentWrapper.appendChild(rightArrow);
    
    modalContent.appendChild(contentWrapper);
}

// 關閉模態框
function closeModal() {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    
    // 停止所有影片播放
    const iframes = modalContent.getElementsByTagName('iframe');
    for (let iframe of iframes) {
        // 重設 iframe 的 src 來停止 YouTube 影片
        const src = iframe.src;
        iframe.src = '';
        iframe.src = src.split('?')[0]; // 移除任何參數以確保重新加載
    }
    
    // 停止所有 HTML5 影片
    const videos = modalContent.getElementsByTagName('video');
    for (let video of videos) {
        video.pause();
        video.currentTime = 0;
    }
    
    modal.style.display = "none";
}

// 初始化
function init() {
    generatePortfolioItems();
    
    // 為所有關閉按鈕添加事件監聽器
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', closeModal);
    });

    // 點擊模態框外部關閉模態框
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
    });

    // 添加平滑滾
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 添加鍵盤事件監聽器
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('modal').style.display === "flex") {
            if (e.key === "ArrowLeft") {
                changeItem(-1, document.getElementById('modal').dataset.currentType);
            } else if (e.key === "ArrowRight") {
                changeItem(1, document.getElementById('modal').dataset.currentType);
            } else if (e.key === "Escape") {
                closeModal();
            }
        }
    });

    // 控制背景視頻
    const video = document.getElementById('myVideo');
    if (video) {
        video.playbackRate = 0.75; // 調整播放速度，可以根據需要修改
    }

    // 生成技能條
    generateSkillBars();

    // 添加滾動監聽器來觸發動畫
    window.addEventListener('scroll', checkScroll);

    // 生成工具圖標
    generateToolIcons();

    // 初始化滑動功能
    initSlider();

    // 添加新的初始化
    createIntersectionObserver();
}

// 當 DOM 加載完成後執行初始化
document.addEventListener('DOMContentLoaded', init);

// 添加以下新函數

function generateSkillBars() {
    const skills = [
        { name: "Unreal", level: 70 },
        { name: "生成式各類AI", level: 70 },
        { name: "3D環境設計", level: 60 },
        { name: "3D建模", level: 50 },
        { name: "Unity", level: 50 },
        { name: "FX特效製作", level: 50 },
        { name: "影片剪輯", level: 50 },
        { name: "網頁設計", level: 50 },
        { name: "程式設計", level: 40 }
    ];

    const skillsContainer = document.querySelector('.skills-container');

    skills.forEach((skill, index) => {
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');
        skillItem.innerHTML = `
            <div class="skill-info">
                <div class="skill-name">${skill.name}</div>
                <div class="skill-bar">
                    <div class="skill-level" style="width: 0%;"></div>
                </div>
            </div>
            <div class="skill-percentage">${skill.level}%</div>
        `;
        skillsContainer.appendChild(skillItem);

        // 添加延遲以創建階梯式動畫效果
        setTimeout(() => {
            skillItem.classList.add('slide-in');
            skillItem.querySelector('.skill-level').style.width = `${skill.level}%`;
        }, index * 100);
    });
}

function checkScroll() {
    const aboutSection = document.getElementById('about');
    const aboutContent = aboutSection.querySelector('.about-content');
    const aboutDescription = aboutSection.querySelector('.about-description');

    const triggerBottom = window.innerHeight / 5 * 4;

    const aboutContentTop = aboutContent.getBoundingClientRect().top;

    if (aboutContentTop < triggerBottom) {
        aboutDescription.classList.add('fade-in');
    }
}

function generateToolIcons() {
    const tools = [
        { name: "Unreal Engine", icon: "LOGO/UNREAL.png" },
        { name: "Unity", icon: "fab fa-unity" },
        { name: "Blender", icon: "LOGO/blender.svg" },
        { name: "MAYA", icon: "LOGO/Maya.png" },
        { name: "Premiere", icon: "fas fa-film" },
        { name: "After Effects", icon: "fas fa-magic" },
        { name: "ComfyUI", icon: "fas fa-palette" },
        { name: "StableDiffusion\nWebui-forge", icon: "fas fa-code-branch" }
    ];

    const toolsContainer = document.querySelector('.tools-container');
    const toolsWrapper = document.createElement('div');
    toolsWrapper.className = 'tools-wrapper';

    // 只創建一組工具圖標
    for (let i = 0; i < 2; i++) {
        tools.forEach((tool) => {
            const toolItem = document.createElement('div');
            toolItem.classList.add('tool-item');
            
            let iconHtml;
            if (tool.icon.startsWith('fas ') || tool.icon.startsWith('fab ')) {
                iconHtml = `<i class="${tool.icon}"></i>`;
            } else {
                iconHtml = `<img src="${tool.icon}" alt="${tool.name}" class="custom-icon">`;
            }
            
            toolItem.innerHTML = `
                <div class="tool-icon">${iconHtml}</div>
                <div class="tool-name">${tool.name}</div>
            `;
            
            toolsWrapper.appendChild(toolItem);
        });
    }
    
    toolsContainer.appendChild(toolsWrapper);
}
function initSlider() {
    const sliderContainers = document.querySelectorAll('.portfolio-slider-container');
    
    sliderContainers.forEach(container => {
        const slider = container.querySelector('.portfolio-slider');
        const leftArrow = container.querySelector('.left-arrow');
        const rightArrow = container.querySelector('.right-arrow');
        
        let currentPosition = 0;
        const itemWidth = 320; // 300px 宽度 + 20px 间距

        leftArrow.addEventListener('click', () => {
            currentPosition = Math.min(currentPosition + itemWidth, 0);
            slider.style.transform = `translateX(${currentPosition}px)`;
            updateArrowVisibility(slider, leftArrow, rightArrow);
        });

        rightArrow.addEventListener('click', () => {
            const maxScroll = slider.scrollWidth - container.clientWidth;
            currentPosition = Math.max(currentPosition - itemWidth, -maxScroll);
            slider.style.transform = `translateX(${currentPosition}px)`;
            updateArrowVisibility(slider, leftArrow, rightArrow);
        });

        function updateArrowVisibility(slider, leftArrow, rightArrow) {
            const maxScroll = slider.scrollWidth - container.clientWidth;
            leftArrow.style.display = currentPosition >= 0 ? 'none' : 'block';
            rightArrow.style.display = currentPosition <= -maxScroll ? 'none' : 'block';
        }

        // 初始化箭头状态
        updateArrowVisibility(slider, leftArrow, rightArrow);

        // 在窗口大小改变时更新箭头状态
        window.addEventListener('resize', () => {
            updateArrowVisibility(slider, leftArrow, rightArrow);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initSlider();
});

window.addEventListener('resize', () => {
    initSlider();
});

// 在文件加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 嘗試強制播放影片
    var video = document.getElementById('youtubeVideo');
    if (video) {
        // 重新加載 iframe 以觸發自動播放
        video.src = video.src;
    }
});

// 修改觀察器函數
function createIntersectionObserver() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // 進入視窗
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // 如果是工具區域，為每個工具項添加延遲動畫
                if (entry.target.classList.contains('tools-section')) {
                    const tools = entry.target.querySelectorAll('.tool-item');
                    tools.forEach((tool, index) => {
                        setTimeout(() => {
                            tool.classList.add('animate-in');
                        }, index * 100);
                    });
                }
                
                // ���果是技能區域，為每個技能項添加延遲動畫
                if (entry.target.classList.contains('skills-chart')) {
                    const skills = entry.target.querySelectorAll('.skill-item');
                    skills.forEach((skill, index) => {
                        setTimeout(() => {
                            skill.classList.add('animate-in');
                            // 重置技能條寬度
                            const level = skill.querySelector('.skill-level');
                            const percentage = skill.querySelector('.skill-percentage').textContent;
                            level.style.width = percentage;
                        }, index * 100);
                    });
                }
            } else {
                // 離開視窗時重置動畫
                entry.target.classList.remove('animate-in');
                
                // 重置工具項動畫
                if (entry.target.classList.contains('tools-section')) {
                    const tools = entry.target.querySelectorAll('.tool-item');
                    tools.forEach(tool => {
                        tool.classList.remove('animate-in');
                    });
                }
                
                // 重置技能項動畫
                if (entry.target.classList.contains('skills-chart')) {
                    const skills = entry.target.querySelectorAll('.skill-item');
                    skills.forEach(skill => {
                        skill.classList.remove('animate-in');
                        // 重置技能條寬度為0
                        const level = skill.querySelector('.skill-level');
                        level.style.width = '0%';
                    });
                }
            }
        });
    }, options);

    // 觀察所有需要動畫的元素
    const animatedElements = document.querySelectorAll('.about-left, .about-main, .skills-chart, .tools-section');
    animatedElements.forEach(el => observer.observe(el));

    // 添加時間軸項目的觀察
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));
}

// 在文件開頭附近添加模態框關閉的事件處理
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');

    // 點擊關閉按鈕
    closeBtn.addEventListener('click', closeModal);

    // 點擊模態框外部
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});

