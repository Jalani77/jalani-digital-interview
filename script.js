// Filter Button and Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Persona title mapping
    const personaTitles = {
        'pm': 'Jalani | Product Manager',
        'consulting': 'Jalani | Strategic Consultant',
        'finance': 'Jalani | Financial Analyst',
        'tech': 'Jalani | Full-Stack Engineer'
    };
    
    // Default title
    const defaultTitle = 'Jalani Bandele | Product & Strategy Portfolio';
    
    // Filter Button Functionality
    const filterButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update page title based on selected persona
            const newTitle = personaTitles[filter] || defaultTitle;
            document.title = newTitle;
            
            // Update meta tags for dynamic title (optional, for better SEO)
            const ogTitle = document.querySelector('meta[property="og:title"]');
            const metaTitle = document.querySelector('meta[name="title"]');
            if (ogTitle) ogTitle.setAttribute('content', newTitle);
            if (metaTitle) metaTitle.setAttribute('content', newTitle);
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all content sections with fade out
            contentSections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                
                // After fade out completes, remove active class
                setTimeout(() => {
                    section.classList.remove('active');
                }, 300);
            });
            
            // Show the matching content section with fade in
            setTimeout(() => {
                const targetSection = document.getElementById(`${filter}-content`);
                if (targetSection) {
                    targetSection.classList.add('active');
                    // Force reflow to ensure transition works
                    targetSection.offsetHeight;
                    targetSection.style.opacity = '1';
                    targetSection.style.transform = 'translateY(0)';
                }
            }, 300);
        });
    });
    
    // Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header[data-accordion]');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const id = this.getAttribute('data-accordion');
            const content = document.getElementById(`${id}-content`);
            const icon = document.getElementById(`${id}-icon`);
            
            // Check if currently open
            const isOpen = content.classList.contains('show');
            
            // Close all accordions
            document.querySelectorAll('.accordion-content').forEach(acc => {
                acc.classList.remove('show');
            });
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('active');
            });
            document.querySelectorAll('.accordion-header svg').forEach(svg => {
                svg.style.transform = 'rotate(0deg)';
            });
            
            // If it wasn't open, open this one
            if (!isOpen) {
                content.classList.add('show');
                this.classList.add('active');
                if (icon) {
                    icon.style.transform = 'rotate(180deg)';
                }
            }
        });
    });
    
    // Project Modal Functionality
    const modal = document.getElementById('projectModal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const liveVisualBtn = document.getElementById('liveVisualBtn');
    const codeSnippetBtn = document.getElementById('codeSnippetBtn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Project data
    const projectData = {
        'hackathon-logic': {
            title: 'Hackathon Logic',
            description: 'Engineered a novel biometric hardware MVP from scratch during a 72-hour sprint, decoding live heart-rate signals into data-driven fan engagement insights. Orchestrated a cross-functional team fusing ML and biometric analysis to define and prioritize product features, increasing engagement recommendations by 35%. Delivered actionable analytics for Fortune 500 entertainment clients through real-time signal processing and machine learning architecture.',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"%3E%3Crect fill="%23667eea" width="800" height="400"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle"%3E📸 Screenshot Placeholder%3C/text%3E%3Ctext x="50%25" y="60%25" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle"%3EHackathon Logic - Biometric Analytics Platform%3C/text%3E%3C/svg%3E',
            liveUrl: '#',
            codeUrl: '#'
        },
        'growth-dashboard': {
            title: 'Growth Dashboard',
            description: 'Developed and launched iterative content strategies, optimizing for user retention and boosting product utility across key departments. Executed strategic on-campus marketing initiatives and events to drive product adoption, leading 30% MoM active user growth. Built analytics platform tracking user growth, engagement metrics, and conversion funnels through data visualization and real-time monitoring.',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"%3E%3Crect fill="%23a855f7" width="800" height="400"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle"%3E📸 Screenshot Placeholder%3C/text%3E%3Ctext x="50%25" y="60%25" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle"%3EGrowth Dashboard - Analytics Platform%3C/text%3E%3C/svg%3E',
            liveUrl: '#',
            codeUrl: '#'
        },
        'live-ai-tool': {
            title: 'Live AI Tool',
            description: 'AI-powered recruitment platform with real-time candidate matching using advanced machine learning algorithms. Implemented natural language processing for resume parsing and job description analysis. Built scalable architecture with cloud services (AWS) to handle high-volume candidate processing. Features include intelligent candidate ranking, automated screening, and real-time matching scores.',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"%3E%3Crect fill="%233b82f6" width="800" height="400"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle"%3E📸 Screenshot Placeholder%3C/text%3E%3Ctext x="50%25" y="60%25" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle"%3ELive AI Tool - Recruitment Platform%3C/text%3E%3C/svg%3E',
            liveUrl: '#',
            codeUrl: '#'
        }
    };
    
    // Open modal when project card is clicked
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projectData[projectId];
            
            if (project) {
                modalTitle.textContent = project.title;
                modalImage.src = project.image;
                modalImage.alt = `${project.title} Screenshot`;
                modalImage.loading = 'lazy';
                modalImage.decoding = 'async';
                modalDescription.textContent = project.description;
                
                // Update button URLs (you can replace these with actual URLs later)
                liveVisualBtn.onclick = function() {
                    if (project.liveUrl && project.liveUrl !== '#') {
                        window.open(project.liveUrl, '_blank');
                    } else {
                        alert('Live visual link will be added soon!');
                    }
                };
                
                codeSnippetBtn.onclick = function() {
                    if (project.codeUrl && project.codeUrl !== '#') {
                        window.open(project.codeUrl, '_blank');
                    } else {
                        alert('Code snippet link will be added soon!');
                    }
                };
                
                // Show modal
                modal.style.display = 'flex';
                setTimeout(() => {
                    modal.classList.add('show');
                }, 10);
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });
    
    // Close modal functions
    function closeModalFunc() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }, 300);
    }
    
    closeModal.addEventListener('click', closeModalFunc);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunc();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModalFunc();
        }
    });
    
    // Chat Window Functionality - Multi-layered Conversation System
    const chatFAB = document.getElementById('chatFAB');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');
    const chatMessages = document.getElementById('chatMessages');
    const chatButtons = document.getElementById('chatButtons');
    
    // Conversation state
    let conversationState = 'main'; // 'main', 'challenge', 'perplexity', 'sql'
    
    // Open chat window
    chatFAB.addEventListener('click', function() {
        chatWindow.style.display = 'flex';
        setTimeout(() => {
            chatWindow.classList.add('show');
        }, 10);
    });
    
    // Close chat window
    function closeChatWindow() {
        chatWindow.classList.remove('show');
        setTimeout(() => {
            chatWindow.style.display = 'none';
        }, 300);
    }
    
    closeChat.addEventListener('click', closeChatWindow);
    
    // Close chat with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && chatWindow.classList.contains('show')) {
            closeChatWindow();
        }
    });
    
    // Core function to send messages
    function sendMessage(role, content, options = {}) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'} mb-3`;
        
        let bubbleClass = role === 'user' 
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl rounded-tr-sm'
            : 'bg-gray-200 text-gray-800 rounded-2xl rounded-tl-sm';
        
        let messageHTML = `<div class="${bubbleClass} px-4 py-3 max-w-[85%] shadow-sm">`;
        
        // Add content
        if (options.isTyping) {
            messageHTML += `
                <div class="typing-indicator flex items-center gap-1">
                    <span class="typing-dot w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="typing-dot w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="typing-dot w-2 h-2 bg-gray-500 rounded-full"></span>
                </div>
            `;
        } else {
            messageHTML += `<p class="text-sm leading-relaxed whitespace-pre-line">${content}</p>`;
            
            // Add image if provided
            if (options.imageUrl) {
                messageHTML += `<img src="${options.imageUrl}" alt="${options.imageAlt || ''}" class="mt-3 rounded-lg w-full max-w-full" loading="lazy" decoding="async">`;
            }
            
            // Add link if provided
            if (options.linkUrl && options.linkText) {
                messageHTML += `<a href="${options.linkUrl}" target="_blank" rel="noopener noreferrer" class="mt-3 inline-block text-sm font-semibold underline hover:opacity-80 transition-opacity">${options.linkText}</a>`;
            }
        }
        
        messageHTML += '</div>';
        messageDiv.innerHTML = messageHTML;
        
        chatMessages.appendChild(messageDiv);
        scrollToBottom();
        
        return messageDiv;
    }
    
    // Typing animation function
    function sendTypingMessage(callback, delay = 800) {
        const typingMsg = sendMessage('system', '', { isTyping: true });
        
        setTimeout(() => {
            typingMsg.remove();
            if (callback) callback();
        }, delay);
    }
    
    // Auto-scroll to bottom
    function scrollToBottom() {
        setTimeout(() => {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 100);
    }
    
    // Update button container
    function updateButtons(buttons) {
        chatButtons.innerHTML = '';
        buttons.forEach(button => {
            const btn = document.createElement('button');
            btn.className = button.class || 'chat-action-btn w-full text-left px-4 py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md';
            btn.textContent = button.text;
            btn.setAttribute('data-action', button.action);
            btn.addEventListener('click', () => handleButtonClick(button.action));
            chatButtons.appendChild(btn);
        });
    }
    
    // Reset to main menu
    function resetToMainMenu() {
        // Remove all messages except welcome
        const messages = chatMessages.querySelectorAll('.flex');
        messages.forEach((msg, index) => {
            if (index > 0) { // Keep first message (welcome)
                msg.remove();
            }
        });
        
        conversationState = 'main';
        updateButtons([
            {
                text: '💥 Tell me about a challenge',
                action: 'challenge',
                class: 'chat-action-btn w-full text-left px-4 py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md'
            },
            {
                text: '🤔 Why are you interested in Perplexity?',
                action: 'perplexity',
                class: 'chat-action-btn w-full text-left px-4 py-3 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md'
            },
            {
                text: '💻 Show me your SQL skills',
                action: 'sql',
                class: 'chat-action-btn w-full text-left px-4 py-3 bg-teal-50 hover:bg-teal-100 text-teal-700 rounded-lg transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md'
            }
        ]);
    }
    
    // Handle button clicks
    function handleButtonClick(action) {
        switch(action) {
            case 'challenge':
                handleChallengeFlow();
                break;
            case 'perplexity':
                handlePerplexityFlow();
                break;
            case 'sql':
                handleSQLFlow();
                break;
            case 'see-metrics':
                handleSeeMetrics();
                break;
            case 'view-growth-strategy':
                handleViewGrowthStrategy();
                break;
            case 'back-to-menu':
                resetToMainMenu();
                break;
        }
    }
    
    // Challenge conversation flow
    function handleChallengeFlow() {
        conversationState = 'challenge';
        const buttonText = '💥 Tell me about a challenge';
        sendMessage('user', buttonText);
        
        sendTypingMessage(() => {
            sendMessage('system', `When CampusXATL hit a GTM stall with our initial go-to-market strategy, I recognized the need for a strategic pivot. Instead of continuing down an ineffective path, I completely redesigned our approach to user acquisition.\n\nBy shifting from high-cost traditional lead sources to a scrappy, direct-outreach prospecting model, we not only bypassed expensive channels but also established a more authentic connection with our target users. This pivot resulted in securing 100 daily sign-ups and laid the foundation for a scalable, low-CAC pipeline.`);
            
            setTimeout(() => {
                updateButtons([
                    {
                        text: '📊 See the Metrics',
                        action: 'see-metrics',
                        class: 'chat-action-btn w-full text-left px-4 py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md'
                    },
                    {
                        text: '🔙 Back to Main Menu',
                        action: 'back-to-menu',
                        class: 'chat-action-btn w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md'
                    }
                ]);
            }, 500);
        });
    }
    
    // See Metrics flow
    function handleSeeMetrics() {
        sendMessage('user', '📊 See the Metrics');
        
        sendTypingMessage(() => {
            sendMessage('system', 'Here are the key metrics from the CampusXATL pivot:', {
                imageUrl: 'https://via.placeholder.com/300x150?text=Growth+Chart+Visual',
                imageAlt: 'Growth Chart showing 100 daily sign-ups'
            });
        }, 600);
    }
    
    // Perplexity conversation flow
    function handlePerplexityFlow() {
        conversationState = 'perplexity';
        const buttonText = '🤔 Why are you interested in Perplexity?';
        sendMessage('user', buttonText);
        
        sendTypingMessage(() => {
            sendMessage('system', `I chose Perplexity because it represents the intersection of AI innovation and practical application - exactly where I want to build my career.\n\nAs a Product & Growth Campus Partner, I've driven 30% MoM active user growth while working with cutting-edge AI technology. The fast-paced, product-focused culture aligns perfectly with my experience building MVPs and iterating quickly based on user feedback.`);
            
            setTimeout(() => {
                updateButtons([
                    {
                        text: '📈 View the Growth Strategy',
                        action: 'view-growth-strategy',
                        class: 'chat-action-btn w-full text-left px-4 py-3 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md'
                    },
                    {
                        text: '🔙 Back to Main Menu',
                        action: 'back-to-menu',
                        class: 'chat-action-btn w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md'
                    }
                ]);
            }, 500);
        });
    }
    
    // View Growth Strategy flow
    function handleViewGrowthStrategy() {
        sendMessage('user', '📈 View the Growth Strategy');
        
        sendTypingMessage(() => {
            sendMessage('system', `I developed and launched iterative content strategies, optimizing for user retention and boosting product utility across key departments. Executed strategic on-campus marketing initiatives and events to drive product adoption, leading to sustained 30% MoM growth.`, {
                linkUrl: 'https://example.com/growth-strategy-case-study',
                linkText: '📄 View Full Growth Strategy Case Study →'
            });
        }, 600);
    }
    
    // SQL conversation flow
    function handleSQLFlow() {
        conversationState = 'sql';
        const buttonText = '💻 Show me your SQL skills';
        sendMessage('user', buttonText);
        
        sendTypingMessage(() => {
            sendMessage('system', `Here's a SQL query I wrote to analyze user engagement patterns for CampusXATL. This query identifies our most active users and their behavior patterns over the last 30 days:\n\n• Uses LEFT JOIN to include all users even without activities\n• Filters for users created in the last 30 days\n• Groups by user to aggregate activity metrics\n• Calculates total activities and average engagement scores\n• Filters to show only users with 5+ activities\n• Orders by engagement to highlight top performers`, {
                imageUrl: 'https://via.placeholder.com/350x200?text=SQL+Query+and+Chart',
                imageAlt: 'SQL Query and Resulting Chart'
            });
            
            setTimeout(() => {
                updateButtons([
                    {
                        text: '🔙 Back to Main Menu',
                        action: 'back-to-menu',
                        class: 'chat-action-btn w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md'
                    }
                ]);
            }, 500);
        }, 600);
    }
    
    // Initialize button handlers
    document.querySelectorAll('.chat-action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            handleButtonClick(action);
        });
    });
    
    // Image Error Handling - Replace failed images with clean placeholder
    function handleImageError(img) {
        // Prevent infinite loop if placeholder also fails
        if (img.dataset.errorHandled) return;
        img.dataset.errorHandled = 'true';
        
        // Create a clean gradient placeholder based on context
        const placeholderColor = img.classList.contains('chat-image') 
            ? 'linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)'
            : 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)';
        
        // Create a canvas element as placeholder
        const canvas = document.createElement('canvas');
        canvas.width = img.width || 800;
        canvas.height = img.height || 400;
        const ctx = canvas.getContext('2d');
        
        // Draw gradient background
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#f3f4f6');
        gradient.addColorStop(1, '#e5e7eb');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add text if it's a significant image
        if (!img.classList.contains('chat-image')) {
            ctx.fillStyle = '#9ca3af';
            ctx.font = '16px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('Image unavailable', canvas.width / 2, canvas.height / 2);
        }
        
        // Replace image with canvas
        img.style.display = 'none';
        img.parentNode.insertBefore(canvas, img);
        canvas.className = img.className;
        canvas.style.width = '100%';
        canvas.style.height = 'auto';
        canvas.style.borderRadius = '0.5rem';
    }
    
    // Apply error handling to all images (existing and future)
    function setupImageErrorHandling() {
        // Handle existing images
        document.querySelectorAll('img').forEach(img => {
            if (!img.dataset.errorHandled) {
                img.addEventListener('error', function() {
                    handleImageError(this);
                });
            }
        });
        
        // Use MutationObserver to handle dynamically added images
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        if (node.tagName === 'IMG' && !node.dataset.errorHandled) {
                            node.addEventListener('error', function() {
                                handleImageError(this);
                            });
                        }
                        // Also check for images within added nodes
                        const images = node.querySelectorAll && node.querySelectorAll('img');
                        if (images) {
                            images.forEach(function(img) {
                                if (!img.dataset.errorHandled) {
                                    img.addEventListener('error', function() {
                                        handleImageError(this);
                                    });
                                }
                            });
                        }
                    }
                });
            });
        });
        
        // Start observing
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
    // Initialize image error handling
    setupImageErrorHandling();
});
