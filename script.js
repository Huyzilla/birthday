document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const bgMusic = document.getElementById('bgMusic');
    const toggleMusic = document.getElementById('toggleMusic');
    const musicIcon = toggleMusic.querySelector('i');
    const container = document.querySelector('.container');
    const candleSection = document.querySelector('.candle-section');
    const title = document.querySelector('.title');
    const message = document.querySelector('.message');
    const messageContainer = document.querySelector('.message-container');
    const startButton = document.getElementById('startButton');
    const startContainer = document.querySelector('.start-container');
    const wishModal = document.querySelector('.wish-modal');
    const wishConfirmation = document.querySelector('.wish-confirmation');
    const submitWishButton = document.getElementById('submitWish');

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
                            
                            // Show candle section after messages
                            setTimeout(showCandleSection, 2000);
                        }, 500);
                    }, 500);
                }, 500);
            }, 1000);
        }, 500);
    }

    function showCandleSection() {
        candleSection.classList.remove('hidden');
        setTimeout(() => {
            candleSection.classList.add('show');
        }, 50);

        // Initialize candle interaction
        const candles = document.querySelectorAll('.candle');
        let litCandles = candles.length;
        
        candles.forEach(candle => {
            candle.addEventListener('click', () => {
                if (candle.getAttribute('data-lit') === 'true') {
                    candle.setAttribute('data-lit', 'false');
                    litCandles--;
                    
                    if (litCandles === 0) {
                        setTimeout(() => {
                            candleSection.classList.remove('show');
                            setTimeout(() => {
                                candleSection.classList.add('hidden');
                                showWishModal();
                            }, 300);
                        }, 500);
                    }
                }
            });
        });
    }

    function showWishModal() {
        wishModal.classList.remove('hidden');
        setTimeout(() => {
            wishModal.classList.add('show');
        }, 50);

        // Close modal when clicking outside
        wishModal.addEventListener('click', (e) => {
            if (e.target === wishModal) {
                closeWishModal();
            }
        });
    }

    function closeWishModal() {
        wishModal.classList.remove('show');
        setTimeout(() => {
            wishModal.classList.add('hidden');
        }, 300);
    }

    // Handle wish submission
    submitWishButton.addEventListener('click', () => {
        wishModal.classList.remove('show');
        setTimeout(() => {
            wishModal.classList.add('hidden');
            showWishConfirmation();
        }, 300);
    });

    function showWishConfirmation() {
        wishConfirmation.classList.remove('hidden');
        setTimeout(() => {
            wishConfirmation.classList.add('show');
        }, 50);

        // Close confirmation when clicking outside
        wishConfirmation.addEventListener('click', (e) => {
            if (e.target === wishConfirmation) {
                closeWishConfirmation();
            }
        });
    }

    function closeWishConfirmation() {
        wishConfirmation.classList.remove('show');
        setTimeout(() => {
            wishConfirmation.classList.add('hidden');
        }, 300);
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

        // Create falling candy animation
        const candies = ['🍬', '🍭', '🍫', '🍪', '🧁', '🍡'];
        function createCandy() {
            const candy = document.createElement('div');
            candy.className = 'candy';
            candy.textContent = candies[Math.floor(Math.random() * candies.length)];
            candy.style.left = Math.random() * 100 + '%';
            candy.style.animationDuration = Math.random() * 3 + 3 + 's';
            document.body.appendChild(candy);
            
            setTimeout(() => {
                candy.remove();
            }, 6000);
        }

        // Start animations with slight delays
        setTimeout(() => {
            setInterval(createFlower, 300);
            setInterval(createHeartParticle, 400);
            setInterval(createFloatingHeart, 500);
            setInterval(createCandy, 400);
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

    // Add click effect for birthday cakes
    document.addEventListener('click', (e) => {
        // Create multiple birthday cakes on click
        for (let i = 0; i < 3; i++) {
            const cake = document.createElement('div');
            cake.className = 'birthday-cake';
            cake.textContent = '🎂';
            cake.style.position = 'absolute';
            cake.style.left = e.clientX + 'px';
            cake.style.top = e.clientY + 'px';
            
            // Random movement direction
            const angle = (Math.random() * Math.PI * 2);
            const distance = 100 + Math.random() * 100;
            const moveX = Math.cos(angle) * distance;
            const moveY = Math.sin(angle) * distance;
            const rotate = -180 + Math.random() * 360;
            
            cake.style.setProperty('--moveX', `${moveX}px`);
            cake.style.setProperty('--moveY', `${moveY}px`);
            cake.style.setProperty('--rotate', `${rotate}deg`);
            
            document.body.appendChild(cake);
            
            setTimeout(() => {
                cake.remove();
            }, 2000);
        }
    });
});
