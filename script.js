// 作品數據
const portfolioItems = {
    images: [
        { id: 1, title: "圖片 1", image: "images/cddeb751ee9722dd.gif" },
        { id: 2, title: "圖片 2", image: "images/49-A.jpg" },
        // 添加更多圖片...
    ],
    videos: [
        { id: 1, title: "2023下半年績優表揚大會動畫", thumbnail: "VIDEO/2023下半年績優表揚大會動畫.png",videoSrc: "VIDEO/2023下半年績優表揚大會動畫.mp4" },
        { id: 2, title: "vr", thumbnail: "VIDEO/VR.png",videoSrc:"https://youtu.be/wp5jec6Ei6w", youtubeId: "wp5jec6Ei6w" },
        { id: 3, title: "主頁影片", thumbnail: "VIDEO/YIHAOPRO.png",videoSrc: "VIDEO/YIHAOPRO.mp4" },
        // 添加更多影片...
    ],
    AI: [
        { id: 1, title: "AI建模2", image: "AI/AI建模2.png" },
        { id: 2, title: "AI建模3", image: "AI/AI建模3.png" },
        { id: 3, title: "lora角色訓練", image: "AI/lora角色訓練.png" },
        { id: 4, title: "文字融合進圖片AI", image: "AI/文字融合進圖片AI.png" },
        { id: 5, title: "MINIMAX_AI影片", thumbnail: "AI/MINIMAX_AI影片.png",videoSrc: "AI/MINIMAX_AI影片.mp4" },
        { id: 6, title: "Luma+lora01", thumbnail: "AI/Luma+lora01.png",videoSrc: "AI/Luma+lora01.mp4" },
        { id: 7, title: "LUMA_AI_2", thumbnail: "AI/LUMA_AI_2.png",videoSrc: "AI/LUMA_AI_2.mp4" },
        { id: 9, title: "LUMA_AI 2", thumbnail: "AI/LUMA_AI.png",videoSrc: "AI/LUMA_AI.mp4" },
        { id: 10, title: "table diffusion_comfy UI ", thumbnail: "AI/stable diffusion_comfy UI_.png",videoSrc: "AI/stable diffusion_comfy UI_.mp4" },
        { id: 11, title: "可靈+stable diffusion", thumbnail: "AI/可靈+stable diffusion.png", videoSrc: "AI/可靈+stable diffusion.mp4" },
        { id: 12, title: "AI/vidu_AI_2", thumbnail: "AI/vidu_AI_2.png", videoSrc: "AI/vidu_AI_2.mp4" },
        { id: 13, title: "Ai影片 2", thumbnail: "AI/Ai影片.png", videoSrc: "AI/Ai影片.mp4" },
        // 添加更多 AI 影片...
    ],
};

// 生成作品卡片
function generatePortfolioItems() {
    const imageGallery = document.getElementById('image-gallery');
    const videoGallery = document.getElementById('video-gallery');
    const aiGallery = document.getElementById('Ai-gallery');

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
    
    const caption = document.createElement('div');
    caption.id = 'caption';
    caption.textContent = item.title;
    modalContent.appendChild(caption);
    
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');
    
    let contentElement;
    if (type === 'image' || (type === 'AI' && item.image)) {
        contentElement = document.createElement('img');
        contentElement.src = item.image;
        contentElement.alt = item.title;
    } else if (item.youtubeId) {
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
    
    const leftArrow = document.createElement('div');
    leftArrow.classList.add('modal-arrow', 'left-arrow');
    leftArrow.innerHTML = '&#10094;';
    leftArrow.addEventListener('click', (e) => {
        e.stopPropagation();
        changeItem(-1, type);
    });
    
    const rightArrow = document.createElement('div');
    rightArrow.classList.add('modal-arrow', 'right-arrow');
    rightArrow.innerHTML = '&#10095;';
    rightArrow.addEventListener('click', (e) => {
        e.stopPropagation();
        changeItem(1, type);
    });
    
    contentWrapper.appendChild(leftArrow);
    contentWrapper.appendChild(contentElement);
    contentWrapper.appendChild(rightArrow);
    
    modalContent.appendChild(contentWrapper);
    
    modal.style.display = "flex";
    
    modal.dataset.currentIndex = portfolioItems[type].findIndex(i => i.id === item.id);
    modal.dataset.currentType = type;
}

// 添加新函數：changeItem
function changeItem(direction, type) {
    const modal = document.getElementById('modal');
    let currentIndex = parseInt(modal.dataset.currentIndex);
    let currentType = modal.dataset.currentType;
    
    // 確保我們使用正確的類型鍵
    let items;
    if (currentType === 'images') {
        items = portfolioItems.images;
    } else if (currentType === 'videos') {
        items = portfolioItems.videos;
    } else if (currentType === 'AI') {
        items = portfolioItems.AI;
    } else {
        console.error('Unknown type:', currentType);
        return;
    }
    
    currentIndex = (currentIndex + direction + items.length) % items.length;
    const newItem = items[currentIndex];
    
    // 更新模態框內容
    updateModalContent(newItem, currentType);
    
    // 更新當前索引
    modal.dataset.currentIndex = currentIndex;
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
    } else if (item.youtubeId) {
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
    
    const leftArrow = document.createElement('div');
    leftArrow.classList.add('modal-arrow', 'left-arrow');
    leftArrow.innerHTML = '&#10094;';
    leftArrow.addEventListener('click', (e) => {
        e.stopPropagation();
        changeItem(-1, type);
    });
    
    const rightArrow = document.createElement('div');
    rightArrow.classList.add('modal-arrow', 'right-arrow');
    rightArrow.innerHTML = '&#10095;';
    rightArrow.addEventListener('click', (e) => {
        e.stopPropagation();
        changeItem(1, type);
    });
    
    contentWrapper.appendChild(leftArrow);
    contentWrapper.appendChild(contentElement);
    contentWrapper.appendChild(rightArrow);
    
    modalContent.appendChild(contentWrapper);
}

// 關閉模態框
function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = "none";
    });
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

    // 添加平滑滾動
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
        { name: "stable-diffusion-webui-forge", icon: "fas fa-code-branch" }
    ];

    const toolsContainer = document.querySelector('.tools-container');

    tools.forEach(tool => {
        const toolItem = document.createElement('div');
        toolItem.classList.add('tool-item');
        
        let iconHtml;
        if (tool.icon.startsWith('fas ') || tool.icon.startsWith('fab ')) {
            // 對於 Font Awesome 圖標
            iconHtml = `<i class="${tool.icon}"></i>`;
        } else {
            // 對於自定義圖片圖標
            iconHtml = `<img src="${tool.icon}" alt="${tool.name}" class="custom-icon">`;
        }
        
        toolItem.innerHTML = `
            <div class="tool-icon">${iconHtml}</div>
            <div class="tool-name">${tool.name}</div>
        `;
        toolsContainer.appendChild(toolItem);
    });
}

function initSlider() {
    const slider = document.querySelector('.portfolio-slider');
    const leftArrow = document.querySelector('.portfolio-slider-container .left-arrow');
    const rightArrow = document.querySelector('.portfolio-slider-container .right-arrow');
    let scrollAmount = 0;

    leftArrow.addEventListener('click', () => {
        scrollAmount = Math.max(scrollAmount - 200, 0);
        slider.style.transform = `translateX(-${scrollAmount}px)`;
    });

    rightArrow.addEventListener('click', () => {
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        scrollAmount = Math.min(scrollAmount + 200, maxScroll);
        slider.style.transform = `translateX(-${scrollAmount}px)`;
    });
}

