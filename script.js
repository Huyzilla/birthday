document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const bgMusic = document.getElementById('bgMusic');
    const toggleMusic = document.getElementById('toggleMusic');
    const musicIcon = toggleMusic.querySelector('i');
    const container = document.querySelector('.container');
    const title = document.querySelector('.title');
    const message = document.querySelector('.message');
    const messageContainer = document.querySelector('.message-container');
    const startButton = document.getElementById('startButton');
    const startContainer = document.querySelector('.start-container');

    function toggleAudio() {
        if (bgMusic.paused) {
            bgMusic.play();
            musicIcon.className = 'fas fa-music';
            toggleMusic.classList.add('playing');
        } else {
            bgMusic.pause();
            musicIcon.className = 'fas fa-music-slash';
            toggleMusic.classList.remove('playing');
        }
    }

    toggleMusic.addEventListener('click', toggleAudio);

    // Start button click handler
    startButton.addEventListener('click', () => {
        startContainer.classList.add('hide');
        openCurtains();
    });

    // Curtain opening animation
    function openCurtains() {
        const leftCurtain = document.querySelector('.curtain-left');
        const rightCurtain = document.querySelector('.curtain-right');

        setTimeout(() => {
            leftCurtain.classList.add('open');
            rightCurtain.classList.add('open');
            
            // Start playing music
            bgMusic.volume = 0.4;
            bgMusic.play().catch(() => {
                musicIcon.className = 'fas fa-music-slash';
            });

            // Reveal content with delay
            setTimeout(() => {
                container.classList.remove('hidden');
                container.classList.add('show');
                
                setTimeout(() => {
                    title.classList.add('show');
                    
                    setTimeout(() => {
                        message.classList.add('show');
                        
                        setTimeout(() => {
                            messageContainer.classList.add('show');
                            startAnimations();
                        }, 500);
                    }, 500);
                }, 500);
            }, 1000);
        }, 500);
    }

    function startAnimations() {
        // Flower animation
        const flowers = ['🌸', '🌺', '🌹', '🌷', '💐', '🌼'];
        const flowersContainer = document.querySelector('.flowers-container');
        
        function createFlower() {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
            flower.style.left = Math.random() * 100 + '%';
            flower.style.animationDuration = Math.random() * 3 + 4 + 's';
            flowersContainer.appendChild(flower);
            
            setTimeout(() => {
                flower.remove();
            }, 7000);
        }

        // Create hearts animation
        const heartsContainer = document.querySelector('.hearts-container');
        
        function createHeartParticle() {
            const heart = document.createElement('div');
            heart.className = 'heart-particle';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = Math.random() * 15 + 10 + 'px';
            heart.style.animationDuration = Math.random() * 3 + 3 + 's';
            heartsContainer.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 6000);
        }

        // Create floating hearts
        const floatingHeartsContainer = document.querySelector('.floating-hearts');
        
        function createFloatingHeart() {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.bottom = '0';
            heart.style.opacity = Math.random() * 0.5 + 0.5;
            heart.style.animation = `float ${Math.random() * 4 + 3}s linear`;
            
            floatingHeartsContainer.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 7000);
        }

        // Start animations with slight delays
        setTimeout(() => {
            setInterval(createFlower, 300);
            setInterval(createHeartParticle, 400);
            setInterval(createFloatingHeart, 500);
        }, 1000);
    }

    // Add hover effect to main heart
    const mainHeart = document.querySelector('.heart');
    mainHeart.addEventListener('mouseover', () => {
        mainHeart.style.animation = 'none';
        setTimeout(() => {
            mainHeart.style.animation = 'heartBeat 1.5s ease-in-out infinite';
        }, 50);
    });

    // Add click effect
    document.addEventListener('click', (e) => {
        // Create multiple hearts on click
        for (let i = 0; i < 5; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.left = e.clientX + 'px';
            heart.style.top = e.clientY + 'px';
            heart.style.fontSize = Math.random() * 20 + 15 + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.userSelect = 'none';
            heart.style.animation = `float ${Math.random() * 2 + 1}s linear`;
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }
    });
});
