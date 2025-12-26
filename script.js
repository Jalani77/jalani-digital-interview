// Portfolio Functionality - Persona Selection and Navigation
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded - initializing portfolio...');
    
    // Landing Page Functionality
    const landingPage = document.getElementById('landingPage');
    const mainNav = document.getElementById('mainNav');
    const mainContent = document.getElementById('mainContent');
    const aiWidget = document.getElementById('aiConsultantWidget');
    const landingButtons = document.querySelectorAll('.landing-btn');
    const changePersonaBtn = document.getElementById('changePersonaBtn');
    const selectedPersonaTitle = document.getElementById('selectedPersonaTitle');
    const selectedPersonaIcon = document.getElementById('selectedPersonaIcon');
    
    console.log('Landing buttons found:', landingButtons.length);
    
    // Store current persona
    let currentPersona = null;
    
    // Persona configuration with SEO-optimized page titles
    const personaConfig = {
        'pm': {
            title: 'Product Manager',
            fullTitle: 'Jalani Bandele | Product Management & AI Innovation',
            icon: '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>'
        },
        'consulting': {
            title: 'Strategic Consultant',
            fullTitle: 'Jalani Bandele | Strategic Consulting & Business Growth',
            icon: '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>'
        },
        'finance': {
            title: 'Financial Analyst',
            fullTitle: 'Jalani Bandele | Financial Modeling & VC Portfolio',
            icon: '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>'
        },
        'tech': {
            title: 'Full-Stack Engineer',
            fullTitle: 'Jalani Bandele | Full-Stack Development & Cloud Engineering',
            icon: '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>'
        }
    };
    
    // Handle landing page role selection - Event Listener on each button
    console.log('Setting up click handlers for', landingButtons.length, 'buttons');
    
    landingButtons.forEach((button, index) => {
        const roleAttr = button.getAttribute('data-role');
        console.log(`Button ${index}: data-role="${roleAttr}"`);
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const role = this.getAttribute('data-role');
            console.log('✅ BUTTON CLICKED! Role:', role);
            
            if (!role) {
                console.error('❌ ERROR: No data-role attribute found on button!');
                return;
            }
            
            currentPersona = role;
            console.log('Current persona set to:', currentPersona);
            
            // Fade out landing page
            console.log('Step 1: Fading out landing page');
            if (landingPage) {
                landingPage.style.opacity = '0';
                console.log('Landing page opacity set to 0');
            } else {
                console.error('❌ landingPage element not found!');
            }
            
            setTimeout(() => {
                console.log('Step 2: Inside setTimeout, hiding landing page');
                // Hide landing page
                if (landingPage) {
                    landingPage.style.display = 'none';
                    console.log('Landing page display set to none');
                }
                
                // Show main navigation and content
                console.log('Step 3: Showing mainNav and mainContent');
                if (mainNav) {
                    mainNav.style.display = 'block';
                    mainNav.style.opacity = '0';
                    console.log('mainNav display set to block');
                } else {
                    console.error('❌ mainNav element not found!');
                }
                
                if (mainContent) {
                    mainContent.style.display = 'block';
                    mainContent.style.opacity = '0';
                    console.log('mainContent display set to block');
                } else {
                    console.error('❌ mainContent element not found!');
                }
                
                // Show AI Avatar (new fixed avatar)
                if (aiAvatar) {
                    aiAvatar.style.display = 'block';
                    console.log('aiAvatar shown');
                }
                
                // Show Schedule a Call CTA button
                const scheduleCallCTA = document.getElementById('scheduleCallCTA');
                if (scheduleCallCTA) {
                    scheduleCallCTA.style.display = 'block';
                    console.log('scheduleCallCTA shown');
                }
                
                // Show the selected persona content
                console.log('Step 4: Calling showPersonaContent for role:', role);
                showPersonaContent(role);
                
                // Update navigation header
                console.log('Step 5: Updating persona header');
                updatePersonaHeader(role);
                
                // Trigger fade in after DOM updates
                console.log('Step 6: Fading in nav and content');
                setTimeout(() => {
                    if (mainNav) {
                        mainNav.style.opacity = '1';
                        console.log('mainNav opacity set to 1');
                    }
                    if (mainContent) {
                        mainContent.style.opacity = '1';
                        console.log('mainContent opacity set to 1');
                    }
                    console.log('✅ ANIMATION COMPLETE - Portfolio should now be visible');
                }, 50);
            }, 500);
        });
    });
    
    // Function to update persona header
    function updatePersonaHeader(role) {
        const config = personaConfig[role];
        if (config && selectedPersonaTitle && selectedPersonaIcon) {
            selectedPersonaTitle.textContent = config.title;
            selectedPersonaIcon.innerHTML = config.icon;
        }
    }
    
    // Function to show specific persona content
    function showPersonaContent(role) {
        console.log('showPersonaContent called with role:', role);
        
        // Set current persona for AI avatar
        currentPersona = role;
        
        // Hide all content sections first
        const contentSections = document.querySelectorAll('.content-section');
        console.log('Total content sections found:', contentSections.length);
        
        contentSections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });
        
        // Show the target section
        const targetSection = document.getElementById(`${role}-content`);
        console.log('Target section ID:', `${role}-content`, 'Found:', !!targetSection);
        
        if (targetSection) {
            targetSection.classList.add('active');
            targetSection.style.display = 'block';
            console.log('Target section displayed successfully');
        } else {
            console.error(`Content section not found: ${role}-content`);
        }
        
        // Update page title
        const config = personaConfig[role];
        document.title = config ? config.fullTitle : 'Jalani Bandele | Product & Strategy Portfolio';
    }
    
    // Handle Change Persona button click
    if (changePersonaBtn) {
        changePersonaBtn.addEventListener('click', function() {
            // Fade out current view
            mainNav.style.opacity = '0';
            mainContent.style.opacity = '0';
            if (aiWidget) aiWidget.style.display = 'none';
            
            // Hide Schedule a Call CTA button
            const scheduleCallCTA = document.getElementById('scheduleCallCTA');
            if (scheduleCallCTA) scheduleCallCTA.style.display = 'none';
            
            setTimeout(() => {
                mainNav.style.display = 'none';
                mainContent.style.display = 'none';
                landingPage.style.display = 'flex';
                
                // Fade in landing page
                setTimeout(() => {
                    landingPage.style.opacity = '1';
                }, 50);
            }, 300);
        });
    }
    
    // Note: Old filter button functionality removed - now using "Change Persona" button instead
    
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
    const modalTechStack = document.getElementById('modalTechStack');
    const modalArchitecture = document.getElementById('modalArchitecture');
    const modalFeatures = document.getElementById('modalFeatures');
    const liveVisualBtn = document.getElementById('liveVisualBtn');
    const codeSnippetBtn = document.getElementById('codeSnippetBtn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Project data with comprehensive technical details including code snippets
    const projectData = {
        'hackathon-logic': {
            title: 'Biometric Fan Engagement MVP (Georgia Tech AI Hackathon)',
            description: 'Situation: Competed in the Startup Exchange AI Hackathon (Georgia Tech) under the PrizePicks and Microsoft for Startups track to solve fan engagement stagnation using biometrics. Task: Acted as a solo Full-Stack PM/Engineer to move beyond a prototype into a commercially viable Enterprise MVP within a 72-hour sprint. Action: Architected the technical MVP to define core feature boundaries, curated a proprietary dataset of 50 biometric test videos for model validation, and engineered a roadmap featuring CAC/LTV projections and ARR modeling for Enterprise scale. Result: Delivered a commercially-ready product strategy and technical proof-of-concept currently targeting Enterprise Directors for customer acquisition.',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"%3E%3Cdefs%3E%3ClinearGradient id="grad1" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23dc2626;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23b91c1c;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23grad1)" width="800" height="500"/%3E%3Cg transform="translate(400, 200)"%3E%3Ccircle cx="0" cy="0" r="60" fill="white" opacity="0.95"/%3E%3Cpath d="M -25,-10 Q -25,-30 -10,-30 L 10,-30 Q 25,-30 25,-10 L 25,10 Q 25,20 15,20 L -15,20 Q -25,20 -25,10 Z" fill="%23dc2626"/%3E%3Ccircle cx="-12" cy="-15" r="5" fill="white"/%3E%3Ccircle cx="12" cy="-15" r="5" fill="white"/%3E%3Cpath d="M -15,5 Q 0,12 15,5" stroke="white" stroke-width="2" fill="none"/%3E%3Cpath d="M -80,80 L -40,40 M 80,80 L 40,40 M -40,-80 L -20,-40 M 40,-80 L 20,-40" stroke="white" stroke-width="4" opacity="0.7"/%3E%3C/g%3E%3Ctext x="50%25" y="80%25" font-family="Arial, sans-serif" font-size="28" fill="white" text-anchor="middle" font-weight="bold"%3EBIOMETRIC MVP%3C/text%3E%3Ctext x="50%25" y="88%25" font-family="Arial, sans-serif" font-size="18" fill="white" text-anchor="middle" opacity="0.9"%3EReal-time ML Analytics%3C/text%3E%3C/svg%3E',
            techStack: ['Python', 'TensorFlow', 'Flask', 'Arduino', 'SQLite', 'REST API'],
            architecture: [
                'Hardware layer with biometric sensors (Arduino-based microcontroller)',
                'Data processing pipeline using Python for real-time signal processing',
                'ML model built with TensorFlow for pattern recognition and classification',
                'Flask REST API backend for data endpoints and client communication',
                'SQLite database for storing sensor readings, analytics, and user data'
            ],
            features: [
                'Real-time biometric data capture and processing (50Hz sampling rate)',
                'Machine learning model for engagement pattern detection (95% accuracy)',
                'RESTful API for third-party integrations and data access',
                'Historical data analytics dashboard with interactive visualizations',
                'Low-latency response time (<100ms for ML predictions)'
            ],
            codeSnippet: `# Biometric Signal Processing Pipeline
import numpy as np
import tensorflow as tf
from flask import Flask, jsonify, request
from scipy.signal import butter, filtfilt

app = Flask(__name__)

# Bandpass filter for heart rate signal (0.5-4 Hz)
def butter_bandpass_filter(data, lowcut=0.5, highcut=4.0, fs=50, order=4):
    nyquist = 0.5 * fs
    low = lowcut / nyquist
    high = highcut / nyquist
    b, a = butter(order, [low, high], btype='band')
    return filtfilt(b, a, data)

# Load pre-trained TensorFlow model
model = tf.keras.models.load_model('engagement_model.h5')

@app.route('/api/analyze', methods=['POST'])
def analyze_biometric_data():
    """
    Real-time biometric analysis endpoint
    Input: Raw sensor data from Arduino (50Hz sampling)
    Output: Engagement score and recommendations
    """
    raw_data = np.array(request.json['sensor_readings'])
    
    # Signal preprocessing
    filtered_signal = butter_bandpass_filter(raw_data)
    heart_rate = calculate_heart_rate(filtered_signal)
    
    # Feature extraction for ML model
    features = extract_engagement_features(filtered_signal, heart_rate)
    
    # Predict engagement level (0-100 scale)
    engagement_score = model.predict(features.reshape(1, -1))[0][0] * 100
    
    # Generate actionable recommendations
    recommendations = generate_recommendations(engagement_score)
    
    return jsonify({
        'heart_rate': float(heart_rate),
        'engagement_score': float(engagement_score),
        'recommendations': recommendations,
        'timestamp': time.time()
    })

def calculate_heart_rate(signal, fs=50):
    """Calculate BPM from filtered signal using peak detection"""
    peaks, _ = scipy.signal.find_peaks(signal, distance=fs*0.6)
    if len(peaks) > 1:
        bpm = 60 * fs / np.mean(np.diff(peaks))
        return min(max(bpm, 40), 200)  # Clamp to realistic range
    return 0

def extract_engagement_features(signal, heart_rate):
    """Extract 15 features for ML classification"""
    return np.array([
        heart_rate,
        np.mean(signal),
        np.std(signal),
        np.max(signal) - np.min(signal),
        # ... additional 11 frequency-domain features
    ])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)`,
            codeLanguage: 'Python',
            codeTabTitle: 'The Code',
            codeTabLabel: 'The Code',
            liveUrl: '#',
            codeUrl: '#'
        },
        'growth-dashboard': {
            title: 'Growth Dashboard',
            description: 'Developed and launched iterative content strategies, optimizing for user retention and boosting product utility across key departments. Executed strategic on-campus marketing initiatives and events to drive product adoption, leading 30% MoM active user growth. Built analytics platform tracking user growth, engagement metrics, and conversion funnels through data visualization and real-time monitoring.',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"%3E%3Cdefs%3E%3ClinearGradient id="grad2" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23dc2626;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23991b1b;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23grad2)" width="800" height="500"/%3E%3Cg transform="translate(100, 350)"%3E%3Cpath d="M 0,0 L 140,-80 L 280,-120 L 420,-180 L 560,-240" stroke="white" stroke-width="5" fill="none" opacity="0.9"/%3E%3Ccircle cx="0" cy="0" r="8" fill="white"/%3E%3Ccircle cx="140" cy="-80" r="8" fill="white"/%3E%3Ccircle cx="280" cy="-120" r="8" fill="white"/%3E%3Ccircle cx="420" cy="-180" r="8" fill="white"/%3E%3Ccircle cx="560" cy="-240" r="8" fill="white"/%3E%3Ctext x="280" y="-260" font-family="Arial, sans-serif" font-size="28" fill="white" text-anchor="middle" font-weight="bold"%3E30%25 MoM Growth%3C/text%3E%3C/g%3E%3Ctext x="50%25" y="92%25" font-family="Arial, sans-serif" font-size="18" fill="white" text-anchor="middle" opacity="0.9"%3EReal-time Analytics Platform%3C/text%3E%3C/svg%3E',
            techStack: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis', 'Chart.js'],
            architecture: [
                'React frontend with modular component architecture and hooks',
                'D3.js and Chart.js for interactive data visualizations and custom charts',
                'Node.js/Express backend with RESTful API design patterns',
                'PostgreSQL for relational data storage and complex analytical queries',
                'Redis for caching frequently accessed metrics and session management',
                'WebSocket integration for real-time data updates and live dashboard refreshes'
            ],
            features: [
                'Interactive dashboards with drill-down capabilities and custom filters',
                'Real-time metrics tracking (user growth, engagement rates, retention cohorts)',
                'Customizable date ranges, metric comparisons, and segmentation',
                'Automated daily/weekly report generation with email delivery',
                'Export functionality (CSV, PDF, Excel) for stakeholder presentations',
                'Role-based access control for different user segments and departments'
            ],
            codeSnippet: `// React Dashboard Component with Real-Time Analytics
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { io } from 'socket.io-client';

const GrowthDashboard = () => {
  const [metrics, setMetrics] = useState({
    activeUsers: 0,
    growthRate: 0,
    retentionRate: 0,
    conversionRate: 0
  });
  const [chartData, setChartData] = useState([]);
  const [timeRange, setTimeRange] = useState('30d');

  // WebSocket connection for real-time updates
  useEffect(() => {
    const socket = io('https://api.yourapp.com', {
      transports: ['websocket'],
      auth: { token: localStorage.getItem('authToken') }
    });

    // Listen for real-time metric updates
    socket.on('metrics:update', (data) => {
      setMetrics(prev => ({
        ...prev,
        activeUsers: data.active_users,
        growthRate: data.mom_growth_rate
      }));
    });

    // Fetch historical data on mount
    fetchGrowthData(timeRange);

    return () => socket.disconnect();
  }, [timeRange]);

  const fetchGrowthData = async (range) => {
    const response = await fetch(\`/api/analytics/growth?range=\${range}\`, {
      headers: { 'Authorization': \`Bearer \${getAuthToken()}\` }
    });
    const data = await response.json();
    setChartData(data.timeSeries);
    setMetrics(data.summary);
  };

  const exportReport = async (format) => {
    const response = await fetch('/api/reports/export', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${getAuthToken()}\`
      },
      body: JSON.stringify({
        format,
        timeRange,
        metrics: ['users', 'growth', 'retention', 'conversion']
      })
    });
    const blob = await response.blob();
    downloadFile(blob, \`growth-report.\${format}\`);
  };

  return (
    <div className="dashboard-container">
      <div className="metrics-grid">
        <MetricCard 
          title="Active Users" 
          value={metrics.activeUsers.toLocaleString()}
          trend={metrics.growthRate}
          icon="users"
        />
        <MetricCard 
          title="MoM Growth" 
          value={\`\${metrics.growthRate}%\`}
          trend={metrics.growthRate}
          icon="trending-up"
        />
      </div>

      <LineChart width={1200} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="users" 
          stroke="#1565C0" 
          strokeWidth={2}
        />
      </LineChart>

      <div className="export-actions">
        <button onClick={() => exportReport('csv')}>Export CSV</button>
        <button onClick={() => exportReport('pdf')}>Export PDF</button>
      </div>
    </div>
  );
};

export default GrowthDashboard;`,
            codeLanguage: 'JavaScript',
            codeTabTitle: 'The Code',
            codeTabLabel: 'The Code',
            liveUrl: '#',
            codeUrl: '#'
        },
        'live-ai-tool': {
            title: 'Live AI Tool',
            description: 'AI-powered recruitment platform with real-time candidate matching using advanced machine learning algorithms. Implemented natural language processing for resume parsing and job description analysis. Built scalable architecture with cloud services (AWS) to handle high-volume candidate processing. Features include intelligent candidate ranking, automated screening, and real-time matching scores.',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"%3E%3Cdefs%3E%3ClinearGradient id="grad3" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23dc2626;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%237f1d1d;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23grad3)" width="800" height="500"/%3E%3Cg transform="translate(400, 200)"%3E%3Ccircle cx="0" cy="0" r="70" fill="white" opacity="0.95"/%3E%3Cpath d="M -30,-15 Q -30,-35 -12,-35 L 12,-35 Q 30,-35 30,-15 L 30,15 Q 30,25 18,25 L -18,25 Q -30,25 -30,15 Z" fill="%23dc2626"/%3E%3Ccircle cx="-15" cy="-20" r="6" fill="white"/%3E%3Ccircle cx="15" cy="-20" r="6" fill="white"/%3E%3Cpath d="M -20,8 Q 0,18 20,8" stroke="white" stroke-width="3" fill="none"/%3E%3Cpath d="M -90,90 L -50,50 M 90,90 L 50,50 M -50,-90 L -25,-50 M 50,-90 L 25,-50" stroke="white" stroke-width="5" opacity="0.7"/%3E%3C/g%3E%3Ctext x="50%25" y="80%25" font-family="Arial, sans-serif" font-size="32" fill="white" text-anchor="middle" font-weight="bold"%3EAI RECRUITMENT%3C/text%3E%3Ctext x="50%25" y="88%25" font-family="Arial, sans-serif" font-size="18" fill="white" text-anchor="middle" opacity="0.9"%3ESmart Candidate Matching%3C/text%3E%3C/svg%3E',
            techStack: ['Python', 'Streamlit', 'OpenAI API', 'spaCy', 'AWS', 'Docker'],
            architecture: [
                'Python backend with Streamlit framework for rapid UI prototyping',
                'NLP pipeline using spaCy for text processing, tokenization, and entity extraction',
                'OpenAI GPT-4 API integration for intelligent semantic job-candidate matching',
                'AWS Lambda for serverless processing of high-volume document parsing',
                'Docker containerization for consistent deployment across environments',
                'S3 for resume/document storage and CloudFront CDN for fast content delivery'
            ],
            features: [
                'Automated resume parsing with 98% accuracy using custom NLP models',
                'Intelligent job description analysis with skill and requirement extraction',
                'Real-time candidate ranking based on multiple weighted criteria',
                'Semantic search for finding similar candidates and skill gap analysis',
                'Bias detection and mitigation algorithms in job descriptions',
                'Candidate matching scores with detailed AI-generated explanations'
            ],
            codeSnippet: `# AI Recruitment Matching Engine
import streamlit as st
import openai
from spacy import load
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# Load NLP model
nlp = load("en_core_web_lg")

def parse_resume(resume_text):
    """Extract skills, experience, and qualifications from resume"""
    doc = nlp(resume_text)
    
    skills = []
    experience_years = 0
    education = []
    
    # Extract named entities and patterns
    for ent in doc.ents:
        if ent.label_ == "SKILL":
            skills.append(ent.text.lower())
        elif ent.label_ == "DATE":
            # Calculate years of experience
            experience_years = calculate_experience(ent.text)
    
    return {
        "skills": list(set(skills)),
        "experience_years": experience_years,
        "education": education
    }

def match_candidate_to_job(resume, job_description):
    """
    AI-powered semantic matching using OpenAI embeddings
    Returns matching score (0-100) and detailed explanation
    """
    # Get embeddings for both resume and job description
    resume_embedding = get_embedding(resume)
    job_embedding = get_embedding(job_description)
    
    # Calculate similarity score
    similarity = cosine_similarity([resume_embedding], [job_embedding])[0][0]
    match_score = int(similarity * 100)
    
    # Generate AI explanation
    explanation = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{
            "role": "system",
            "content": "You are an expert recruiter analyzing candidate fit."
        }, {
            "role": "user",
            "content": f"""
            Candidate Resume: {resume[:500]}
            Job Description: {job_description[:500]}
            Match Score: {match_score}%
            
            Provide a detailed explanation of the match, including:
            1. Key strengths and alignments
            2. Potential gaps or concerns
            3. Recommendation (Strong Fit / Moderate Fit / Weak Fit)
            """
        }]
    )
    
    return {
        "score": match_score,
        "explanation": explanation.choices[0].message.content,
        "recommendation": get_recommendation(match_score)
    }

def get_embedding(text):
    """Get OpenAI embedding for semantic search"""
    response = openai.Embedding.create(
        input=text,
        model="text-embedding-ada-002"
    )
    return np.array(response['data'][0]['embedding'])

# Streamlit UI
st.title("AI Recruitment Matching")
uploaded_resume = st.file_uploader("Upload Resume (PDF)", type=['pdf'])
job_desc = st.text_area("Paste Job Description")

if st.button("Analyze Match"):
    if uploaded_resume and job_desc:
        resume_text = extract_text_from_pdf(uploaded_resume)
        result = match_candidate_to_job(resume_text, job_desc)
        
        st.metric("Match Score", f"{result['score']}%")
        st.write(result['explanation'])`,
            codeLanguage: 'Python',
            codeTabTitle: 'The Code',
            codeTabLabel: 'The Code',
            liveUrl: '#',
            codeUrl: '#'
        },
        'financial-model': {
            title: 'Financial Modeling & VC Portfolio',
            description: 'Comprehensive financial modeling framework for venture capital portfolio analysis and investment decision-making. Built dynamic valuation models (DCF, Comparable Company Analysis) with scenario planning and sensitivity analysis. Developed automated reporting dashboards tracking portfolio performance, IRR calculations, and fund-level metrics.',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"%3E%3Cdefs%3E%3ClinearGradient id="grad4" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23dc2626;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%235b0808;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23grad4)" width="800" height="500"/%3E%3Cg transform="translate(400, 250)"%3E%3Crect x="-150" y="-100" width="300" height="200" fill="white" opacity="0.95" rx="10"/%3E%3Ctext x="0" y="-50" font-family="Arial, sans-serif" font-size="32" fill="%23dc2626" text-anchor="middle" font-weight="bold"%3E$2.4M%3C/text%3E%3Ctext x="0" y="-15" font-family="Arial, sans-serif" font-size="14" fill="%23666" text-anchor="middle"%3EPortfolio Value%3C/text%3E%3Cpath d="M -100,20 L -60,0 L -20,-10 L 20,15 L 60,-5 L 100,10" stroke="%23dc2626" stroke-width="4" fill="none"/%3E%3Ccircle cx="-100" cy="20" r="5" fill="%23dc2626"/%3E%3Ccircle cx="-60" cy="0" r="5" fill="%23dc2626"/%3E%3Ccircle cx="-20" cy="-10" r="5" fill="%23dc2626"/%3E%3Ccircle cx="20" cy="15" r="5" fill="%23dc2626"/%3E%3Ccircle cx="60" cy="-5" r="5" fill="%23dc2626"/%3E%3Ccircle cx="100" cy="10" r="5" fill="%23dc2626"/%3E%3C/g%3E%3Ctext x="50%25" y="92%25" font-family="Arial, sans-serif" font-size="18" fill="white" text-anchor="middle" opacity="0.9"%3EVC Portfolio Analytics%3C/text%3E%3C/svg%3E',
            techStack: ['Excel', 'Python', 'Pandas', 'NumPy', 'Matplotlib', 'SQL'],
            architecture: [
                'Multi-sheet Excel model with linked financial statements (IS, BS, CF)',
                'Python automation scripts for data extraction from portfolio company reports',
                'SQL database for storing historical performance metrics and benchmarks',
                'Pandas-based data pipeline for cleansing and transforming financial data',
                'Automated dashboard generation using Matplotlib and Seaborn'
            ],
            features: [
                'DCF valuation with WACC calculation and terminal value estimation',
                'Scenario analysis (Base, Bull, Bear cases) with probability weighting',
                'IRR and MOIC calculations across individual investments and fund level',
                'Portfolio company performance tracking with custom KPIs',
                'Cap table modeling with dilution analysis through multiple funding rounds',
                'Automated quarterly reports with visualizations and trend analysis'
            ],
            codeSnippet: `# VC Portfolio Financial Model - DCF Valuation
"""
This model demonstrates key financial expertise in:
- Discounted Cash Flow (DCF) analysis
- WACC calculation and cost of capital estimation
- Terminal value using Gordon Growth Model
- Sensitivity analysis for investment decisions
"""

FREE_CASH_FLOWS = [-500_000, 120_000, 250_000, 380_000, 520_000]
TERMINAL_GROWTH_RATE = 0.025
WACC = 0.12

def calculate_enterprise_value(fcfs, wacc, terminal_growth):
    """
    Calculate enterprise value using DCF methodology
    
    Args:
        fcfs: List of projected free cash flows
        wacc: Weighted Average Cost of Capital
        terminal_growth: Perpetual growth rate for terminal value
    
    Returns:
        dict: Enterprise value, NPV of cash flows, terminal value
    """
    # Discount each projected cash flow
    pv_cash_flows = []
    for year, fcf in enumerate(fcfs[1:], start=1):
        discount_factor = (1 + wacc) ** year
        pv = fcf / discount_factor
        pv_cash_flows.append(pv)
    
    # Calculate terminal value using Gordon Growth Model
    final_fcf = fcfs[-1]
    terminal_fcf = final_fcf * (1 + terminal_growth)
    terminal_value = terminal_fcf / (wacc - terminal_growth)
    
    # Discount terminal value to present
    terminal_pv = terminal_value / ((1 + wacc) ** len(pv_cash_flows))
    
    # Sum all present values
    enterprise_value = sum(pv_cash_flows) + terminal_pv
    
    return {
        'enterprise_value': enterprise_value,
        'pv_cash_flows': sum(pv_cash_flows),
        'terminal_value_pv': terminal_pv,
        'initial_investment': abs(fcfs[0])
    }

def calculate_investment_returns(enterprise_value, initial_investment):
    """Calculate IRR, NPV, and ROI metrics"""
    npv = enterprise_value - initial_investment
    roi = (npv / initial_investment) * 100
    
    # IRR calculation (simplified - would use numpy.irr in production)
    irr = calculate_irr(FREE_CASH_FLOWS + [enterprise_value])
    
    return {
        'npv': npv,
        'roi_percent': roi,
        'irr_percent': irr * 100,
        'moic': enterprise_value / initial_investment
    }

def sensitivity_analysis(base_wacc, base_growth):
    """
    Run sensitivity analysis across different WACC and growth rates
    Critical for understanding valuation range and risk
    """
    wacc_range = [base_wacc - 0.02, base_wacc, base_wacc + 0.02]
    growth_range = [base_growth - 0.01, base_growth, base_growth + 0.01]
    
    results = []
    for wacc in wacc_range:
        for growth in growth_range:
            ev = calculate_enterprise_value(
                FREE_CASH_FLOWS, wacc, growth
            )['enterprise_value']
            results.append({
                'wacc': wacc,
                'growth': growth,
                'enterprise_value': ev
            })
    
    return results

# Main execution
valuation = calculate_enterprise_value(
    FREE_CASH_FLOWS, WACC, TERMINAL_GROWTH_RATE
)
returns = calculate_investment_returns(
    valuation['enterprise_value'],
    valuation['initial_investment']
)

print(f"Enterprise Value: $" + f"{valuation['enterprise_value']:,.0f}")
print(f"NPV: $" + f"{returns['npv']:,.0f}")
print(f"IRR: " + f"{returns['irr_percent']:.1f}%")
print(f"MOIC: " + f"{returns['moic']:.2f}x")`,
            codeLanguage: 'Python / Financial Modeling',
            codeTabTitle: 'The Financial Model',
            codeTabLabel: 'The Model',
            liveUrl: '#',
            codeUrl: '#'
        }
    };
    
    // Function to open project modal with tabbed interface
    function openProjectModal(card) {
        const projectId = card.getAttribute('data-project');
        const project = projectData[projectId];
        
        if (project) {
            // Populate basic info
            modalTitle.textContent = project.title;
            modalImage.src = project.image;
            modalImage.alt = `${project.title} Visual`;
            modalImage.loading = 'lazy';
            modalImage.decoding = 'async';
            modalDescription.textContent = project.description;
            
            // Update tab labels based on project type
            const codeTabLabelEl = document.getElementById('codeTabLabel');
            const codeTabTitleEl = document.getElementById('codeTabTitle');
            const codeLanguageLabelEl = document.getElementById('codeLanguageLabel');
            
            if (codeTabLabelEl) codeTabLabelEl.textContent = project.codeTabLabel || 'The Code';
            if (codeTabTitleEl) codeTabTitleEl.textContent = project.codeTabTitle || 'Code Snippet';
            if (codeLanguageLabelEl) codeLanguageLabelEl.textContent = project.codeLanguage || 'code';
            
            // Populate code snippet
            const modalCodeSnippet = document.getElementById('modalCodeSnippet');
            if (modalCodeSnippet && project.codeSnippet) {
                modalCodeSnippet.querySelector('code').textContent = project.codeSnippet;
            }
            
            // Populate tech stack badges
            modalTechStack.innerHTML = '';
            if (project.techStack) {
                project.techStack.forEach(tech => {
                    const badge = document.createElement('span');
                    badge.className = 'px-3 py-1.5 bg-teal-100 text-teal-700 rounded-lg font-semibold text-xs border border-teal-300';
                    badge.textContent = tech;
                    modalTechStack.appendChild(badge);
                });
            }
            
            // Populate architecture details
            modalArchitecture.innerHTML = '';
            if (project.architecture) {
                project.architecture.forEach(item => {
                    const p = document.createElement('p');
                    p.className = 'flex items-start gap-2 text-xs';
                    p.innerHTML = `
                        <svg class="w-4 h-4 text-red-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                        <span>${item}</span>
                    `;
                    modalArchitecture.appendChild(p);
                });
            }
            
            // Populate features
            modalFeatures.innerHTML = '';
            if (project.features) {
                project.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.className = 'flex items-start gap-2 text-sm';
                    li.innerHTML = `
                        <svg class="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-700">${feature}</span>
                    `;
                    modalFeatures.appendChild(li);
                });
            }
            
            // Update button URLs
            liveVisualBtn.href = project.liveUrl;
            liveVisualBtn.onclick = function(e) {
                if (project.liveUrl === '#') {
                    e.preventDefault();
                    alert('Live demo will be available soon!');
                }
            };
            
            // Reset to first tab
            const allTabs = document.querySelectorAll('.modal-tab');
            const allTabContents = document.querySelectorAll('.modal-tab-content');
            allTabs.forEach(t => t.classList.remove('active'));
            allTabContents.forEach(tc => tc.classList.remove('active'));
            
            const firstTab = document.querySelector('.modal-tab[data-tab="visual"]');
            const firstTabContent = document.getElementById('visualTab');
            if (firstTab) firstTab.classList.add('active');
            if (firstTabContent) firstTabContent.classList.add('active');
            
            // Show modal
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    }
    
    // Tab switching functionality
    const modalTabs = document.querySelectorAll('.modal-tab');
    modalTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            modalTabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.modal-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding content
            const targetContent = document.getElementById(`${targetTab}Tab`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // Open modal when project card is clicked
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            openProjectModal(this);
        });
        
        // Keyboard accessibility - open modal with Enter or Space
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openProjectModal(this);
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
    
    // ========================================
    // JALANI AI CONSULTANT - Avatar-Centric System
    // ========================================
    
    const aiAvatar = document.getElementById('aiConsultantAvatar');
    const chatModal = document.getElementById('chatModal');
    const chatModalContainer = document.getElementById('chatModalContainer');
    const closeChatModal = document.getElementById('closeChatModal');
    const chatMessages = document.getElementById('chatMessages');
    const chatButtons = document.getElementById('chatButtons');
    const chatPersonaContext = document.getElementById('chatPersonaContext');
    
    // Conversation state
    let conversationState = 'initial';
    
    // Open fullscreen chat modal
    function openChatModal() {
        chatModal.style.display = 'flex';
        setTimeout(() => {
            chatModal.style.opacity = '1';
            chatModalContainer.style.transform = 'scale(1)';
        }, 10);
        loadPersonaQuestions(currentPersona);
    }
    
    // Close fullscreen chat modal
    function closeChatModalFunc() {
        chatModal.style.opacity = '0';
        chatModalContainer.style.transform = 'scale(0.95)';
        setTimeout(() => {
            chatModal.style.display = 'none';
        }, 300);
    }
    
    // Avatar click handler
    if (aiAvatar) {
        aiAvatar.addEventListener('click', openChatModal);
    }
    
    // Close button handler
    if (closeChatModal) {
        closeChatModal.addEventListener('click', closeChatModalFunc);
    }
    
    // Close on backdrop click
    if (chatModal) {
        chatModal.addEventListener('click', function(e) {
            if (e.target === chatModal) {
                closeChatModalFunc();
            }
        });
    }
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && chatModal.style.display === 'flex') {
            closeChatModalFunc();
        }
    });
    
    // ========================================
    // DYNAMIC QUESTION SYSTEM
    // ========================================
    
    const personaQuestions = {
        'pm': [
            { text: 'How did you drive 30% growth at Perplexity?', action: 'pm-perplexity-growth' },
            { text: 'Tell me about your technical leadership at GT Hackathon', action: 'pm-hackathon-leadership' },
            { text: 'How do you approach product-market fit for AI?', action: 'pm-product-market-fit' },
            { text: 'Tell me about building for commercial scale quickly', action: 'pm-commercial-scale' },
            { text: 'What is your philosophy on technical co-founding?', action: 'pm-cofounder-philosophy' }
        ],
        'consulting': [
            { text: 'What did you learn at McKinsey Forward?', action: 'consulting-mckinsey' },
            { text: 'Tell me about your VC fellowship experience', action: 'consulting-vc' },
            { text: 'How did you pivot CampusXATL strategy?', action: 'consulting-pivot' },
            { text: 'Explain your market sizing approach', action: 'consulting-market-sizing' }
        ],
        'finance': [
            { text: 'Walk me through a financial model you built', action: 'finance-modeling' },
            { text: 'What did you learn at Barclays?', action: 'finance-barclays' },
            { text: 'Explain your deal evaluation process', action: 'finance-deals' },
            { text: 'Show me your valuation experience', action: 'finance-valuation' }
        ],
        'tech': [
            { text: 'Show me your Python/ML skills', action: 'tech-python-ml' },
            { text: 'Tell me about the AI recruitment tool', action: 'tech-ai-tool' },
            { text: 'Walk me through your tech stack', action: 'tech-stack' },
            { text: 'Explain a complex technical challenge you solved', action: 'tech-challenge' }
        ],
        'general': [
            { text: 'Tell me about a tough challenge Jalani faced', action: 'general-challenge' },
            { text: 'What are Jalani\'s career goals?', action: 'general-goals' },
            { text: 'What makes Jalani stand out?', action: 'general-standout' },
            { text: 'Tell me about Jalani\'s background', action: 'general-background' }
        ]
    };
    
    // Load appropriate questions based on current persona
    function loadPersonaQuestions(persona) {
        const questions = personaQuestions[persona] || personaQuestions['general'];
        
        // Update context text
        if (chatPersonaContext) {
            const contextMap = {
                'pm': 'Product Management Questions',
                'consulting': 'Consulting & Strategy Questions',
                'finance': 'Finance & Investment Questions',
                'tech': 'Technical & Engineering Questions'
            };
            chatPersonaContext.textContent = contextMap[persona] || 'Ask me anything about Jalani';
        }
        
        // Add general "Back to Main" button if not on general
        const buttons = [...questions];
        if (persona && persona !== 'general') {
            buttons.push({
                text: 'See all questions',
                action: 'back-to-main',
                class: 'chat-action-btn w-full text-left px-5 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all duration-200 font-semibold shadow-sm'
            });
        }
        
        updateButtons(buttons);
    }
    
    // Core function to send messages
    function sendMessage(role, content, options = {}) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'} mb-4`;
        
        let bubbleClass = role === 'user' 
            ? 'bg-white text-gray-900 rounded-2xl rounded-tr-sm border-2 border-gray-200 shadow-md'
            : 'bg-gradient-to-br from-teal-50 to-teal-100 text-gray-900 rounded-2xl rounded-tl-sm border-2 border-teal-200 shadow-lg';
        
        let messageHTML = `<div class="${bubbleClass} px-5 py-4 max-w-[85%]">`;
        
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
            btn.className = button.class || 'chat-action-btn w-full text-left px-5 py-4 bg-red-50 hover:bg-blue-700 text-red-700 hover:text-white rounded-xl transition-all duration-200 font-semibold shadow-sm hover:shadow-lg transform hover:scale-[1.02]';
            
            // Simple text rendering without emoji detection
            btn.textContent = button.text;
            
            btn.setAttribute('data-action', button.action);
            btn.addEventListener('click', () => handleButtonClick(button.action));
            chatButtons.appendChild(btn);
        });
    }
    
    // Smooth scroll to section on main page
    function scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            // Temporarily close modal for visual effect
            chatModal.style.opacity = '0.3';
            
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
            // Highlight section briefly
            section.style.transition = 'background-color 0.5s ease';
            section.style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
            setTimeout(() => {
                section.style.backgroundColor = '';
                chatModal.style.opacity = '1';
            }, 2000);
        }
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
                text: 'Tell me about a tough challenge Jalani faced',
                action: 'challenge',
                class: 'chat-action-btn w-full text-left px-5 py-4 bg-red-50 hover:bg-blue-700 text-red-700 hover:text-white rounded-xl transition-all duration-200 font-semibold shadow-sm hover:shadow-lg transform hover:scale-[1.02]'
            },
            {
                text: '🤔 Why Perplexity? What\'s his interest?',
                action: 'perplexity',
                class: 'chat-action-btn w-full text-left px-5 py-4 bg-red-50 hover:bg-blue-700 text-red-700 hover:text-white rounded-xl transition-all duration-200 font-semibold shadow-sm hover:shadow-lg transform hover:scale-[1.02]'
            },
            {
                text: 'Show me his technical SQL skills',
                action: 'sql',
                class: 'chat-action-btn w-full text-left px-4 py-3 bg-red-50 hover:bg-blue-100 text-teal-700 rounded-lg transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md'
            }
        ]);
    }
    
    // ========================================
    // ADVANCED CONVERSATION HANDLERS
    // ========================================
    
    function handleButtonClick(action) {
        // PM Actions
        if (action === 'pm-perplexity-growth') handlePMPerplexityGrowth();
        else if (action === 'pm-hackathon-logic') handlePMHackathonLogic();
        else if (action === 'pm-hackathon-leadership') handlePMHackathonLeadership();
        else if (action === 'pm-product-market-fit') handlePMProductMarketFit();
        else if (action === 'pm-commercial-scale') handlePMCommercialScale();
        else if (action === 'pm-cofounder-philosophy') handlePMCofounderPhilosophy();
        else if (action === 'pm-growth-dashboard') handlePMGrowthDashboard();
        else if (action === 'pm-product-vision') handlePMProductVision();
        
        // Consulting Actions
        else if (action === 'consulting-mckinsey') handleConsultingMcKinsey();
        else if (action === 'consulting-vc') handleConsultingVC();
        else if (action === 'consulting-pivot') handleConsultingPivot();
        else if (action === 'consulting-market-sizing') handleConsultingMarketSizing();
        
        // Finance Actions
        else if (action === 'finance-modeling') handleFinanceModeling();
        else if (action === 'finance-barclays') handleFinanceBarclays();
        else if (action === 'finance-deals') handleFinanceDeals();
        else if (action === 'finance-valuation') handleFinanceValuation();
        
        // Tech Actions
        else if (action === 'tech-python-ml') handleTechPythonML();
        else if (action === 'tech-ai-tool') handleTechAITool();
        else if (action === 'tech-stack') handleTechStack();
        else if (action === 'tech-challenge') handleTechChallenge();
        
        // General Actions
        else if (action === 'general-challenge') handleGeneralChallenge();
        else if (action === 'general-goals') handleGeneralGoals();
        else if (action === 'general-standout') handleGeneralStandout();
        else if (action === 'general-background') handleGeneralBackground();
        
        // Navigation
        else if (action === 'back-to-main') loadPersonaQuestions('general');
        else if (action === 'view-project') openProjectModal(action);
    }
    
    // PM: Perplexity Growth
    function handlePMPerplexityGrowth() {
        sendMessage('user', 'How did you drive 30% growth at Perplexity?');
        sendTypingMessage(() => {
            sendMessage('system', `Great question! Here's how Jalani drove that impressive growth at Perplexity:\n\n**The Strategy:**\n• Launched targeted on-campus marketing campaigns\n• Built relationships with key student organizations\n• Created iterative content strategies based on user feedback\n• Focused on boosting product utility across departments\n\n**The Results:**\n30% month-over-month active user growth\nSustained engagement across multiple cohorts\nProduct adoption in 5+ academic departments\n\nWant to dive deeper?`);
            
            setTimeout(() => {
                updateButtons([
                    { text: 'Show me the growth strategy details', action: 'pm-growth-strategy-details' },
                    { text: 'How did you identify the target users?', action: 'pm-target-users' },
                    { text: 'Back to PM questions', action: 'pm-back' }
                ]);
            }, 500);
        });
    }
    
    // PM: Hackathon Logic
    function handlePMHackathonLogic() {
        sendMessage('user', 'Tell me about building the Hackathon MVP');
        sendTypingMessage(() => {
            sendMessage('system', `This was one of Jalani's most exciting technical projects!\n\n**The Challenge:**\nBuild a biometric hardware MVP that processes heart-rate data in real-time for fan engagement analytics.\n\n**What Jalani Built:**\n• Engineered core Python/ML logic to process biometric signals\n• Built real-time data pipeline for live analytics\n• Integrated with hardware sensors for continuous monitoring\n• Created dashboard for visualizing engagement metrics\n\n**The Impact:**\nDelivered a working prototype in 48 hours that proved feasibility for sports and entertainment applications.\n\nWant to see the code?`);
            
            setTimeout(() => {
                updateButtons([
                    { text: 'View the technical details', action: 'open-project-hackathon' },
                    { text: 'Back to PM questions', action: 'pm-back' }
                ]);
            }, 500);
        });
    }

    // PM: Technical Leadership at GT Hackathon (NEW - Recruiter Mode)
    function handlePMHackathonLeadership() {
        sendMessage('user', 'Tell me about your technical leadership at GT Hackathon');
        sendTypingMessage(() => {
            sendMessage('system', `I operated at the intersection of product and engineering, personally building the MVP to de-risk the technical roadmap while simultaneously defining the ICP and Enterprise GTM strategy.\n\n**The Approach:**\n• Solo Full-Stack PM/Engineer role during 72-hour sprint\n• Built technical MVP while defining commercial strategy in parallel\n• Curated proprietary dataset of 50 biometric test videos for validation\n• Developed financial models (ARR/LTV projections) for Enterprise scale\n\n**The Philosophy:**\nI focused on building a "business engine" rather than just a feature, managing everything from biometric data curation to financial modeling (ARR/LTV) to ensure day-one commercial readiness.\n\n**Current Status:**\nThis commercially-ready product strategy is currently being pitched to Enterprise Directors for customer acquisition.`);
            
            setTimeout(() => {
                updateButtons([
                    { text: 'View the full project details', action: 'open-project-hackathon' },
                    { text: 'Back to PM questions', action: 'pm-back' }
                ]);
            }, 500);
        });
    }

    // PM: Product-Market Fit for AI (NEW - Recruiter Mode)
    function handlePMProductMarketFit() {
        sendMessage('user', 'How do you approach product-market fit for AI?');
        sendTypingMessage(() => {
            sendMessage('system', `My approach is data-driven and customer-centric.\n\n**For my biometric AI project:**\n• Personally curated a 50-video database to validate feature concepts BEFORE engineering\n• Ensured the product solved real-world engagement pain points for our ICP\n• Conducted market research to identify Enterprise Directors as primary buyers\n• Built validation into every stage of the MVP development\n\n**Key Philosophy:**\nValidate with real data first, build second. This prevents wasting engineering time on features that don't solve actual customer problems.\n\n**Result:**\nThe MVP moved directly from hackathon prototype to Enterprise-ready product because customer validation was built into the foundation.`);
            
            setTimeout(() => {
                updateButtons([
                    { text: 'Tell me about commercial scale', action: 'pm-commercial-scale' },
                    { text: 'Back to PM questions', action: 'pm-back' }
                ]);
            }, 500);
        });
    }

    // PM: Building for Commercial Scale (NEW - Recruiter Mode)
    function handlePMCommercialScale() {
        sendMessage('user', 'Tell me about building for commercial scale quickly');
        sendTypingMessage(() => {
            sendMessage('system', `During the 72-hour GT Hackathon, I acted as a Full-Stack PM to build a "business engine" rather than just a feature.\n\n**What This Meant:**\n• Balanced technical MVP development with financial modeling\n• Projected ARR and LTV to prove venture viability\n• Defined ICP and GTM strategy alongside engineering\n• Created roadmap for Enterprise adoption from day one\n\n**Technical + Business Integration:**\nMost teams build prototypes. I built a commercially viable product by treating the business model as equally important as the code.\n\n**The Outcome:**\nEnterprise partners could immediately understand the business case because the financial fundamentals were baked into the MVP from the start.`);
            
            setTimeout(() => {
                updateButtons([
                    { text: 'What about co-founding philosophy?', action: 'pm-cofounder-philosophy' },
                    { text: 'Back to PM questions', action: 'pm-back' }
                ]);
            }, 500);
        });
    }

    // PM: Co-Founder Philosophy (NEW - Recruiter Mode)
    function handlePMCofounderPhilosophy() {
        sendMessage('user', 'What is your philosophy on technical co-founding?');
        sendTypingMessage(() => {
            sendMessage('system', `I believe in building with hunger and scalability.\n\n**What I'm Looking For:**\nI am currently seeking a student technical co-founder who shares a passion for AI-driven growth engines to transform these validated MVPs into market-leading companies.\n\n**My Value as a Co-Founder:**\n• Product strategy and commercial GTM expertise\n• Experience with financial modeling and unit economics\n• Track record of shipping MVPs that solve real problems\n• Deep understanding of customer validation and ICP definition\n\n**The Vision:**\nPartner with someone who can scale the technical infrastructure while I drive product, growth, and commercial strategy. Together, we turn validated concepts into category-defining companies.\n\n**Current Projects Ready to Scale:**\nBiometric AI platform with Enterprise interest and proven customer validation.`);
            
            setTimeout(() => {
                updateButtons([
                    { text: 'Tell me about Perplexity growth', action: 'pm-perplexity-growth' },
                    { text: 'Back to PM questions', action: 'pm-back' }
                ]);
            }, 500);
        });
    }
    
    // PM: Growth Dashboard
    function handlePMGrowthDashboard() {
        sendMessage('user', 'Show me your growth dashboard work');
        sendTypingMessage(() => {
            sendMessage('system', `Jalani built a comprehensive analytics dashboard for CampusXATL to track key growth metrics.\n\n**What it Tracked:**\nUser sign-ups and daily active users\nFunnel conversion rates at each stage\nRetention metrics and cohort analysis\nFeature engagement and usage patterns\n\n**Technical Implementation:**\n• Built with Python and data visualization libraries\n• Real-time data updates from backend\n• Custom SQL queries for complex metrics\n• Interactive filters and date ranges\n\n**Business Impact:**\nEnabled data-driven decisions that improved conversion by 40% and retention by 25%.`);
            
            setTimeout(() => {
                updateButtons([
                    { text: 'See the actual dashboard', action: 'open-project-dashboard' },
                    { text: 'Back to PM questions', action: 'pm-back' }
                ]);
            }, 500);
        });
    }
    
    // PM: Product Vision
    function handlePMProductVision() {
        sendMessage('user', 'Walk me through your product vision');
        sendTypingMessage(() => {
            sendMessage('system', `Jalani's product approach centers on building user-centric solutions that solve real problems.\n\n**His Philosophy:**\n• Start with deep user research and pain point identification\n• Build MVPs quickly to validate assumptions\n• Iterate based on data and feedback, not opinions\n• Scale only what's proven to work\n\n**Real Examples:**\n• CampusXATL: Pivoted entire product strategy based on user feedback, cutting launch timeline by 40%\n• Perplexity: Drove 30% MoM growth through targeted feature improvements\n\nJalani believes great products come from listening to users and moving fast.`);
            
            setTimeout(() => {
                updateButtons([
                    { text: '📖 Tell me about the CampusXATL pivot', action: 'pm-pivot-story' },
                    { text: 'Back to PM questions', action: 'pm-back' }
                ]);
            }, 500);
        });
    }
    
    // Consulting: McKinsey
    function handleConsultingMcKinsey() {
        sendMessage('user', 'What did you learn at McKinsey Forward?');
        sendTypingMessage(() => {
            sendMessage('system', `The McKinsey Forward Learning Program was a selective global initiative that shaped Jalani's strategic thinking.\n\n**What He Learned:**\nStructured problem-solving frameworks (like MECE)\nBusiness strategy and market analysis techniques\nDigital transformation methodologies\nData-driven decision making\n\n**How He Applied It:**\nThese frameworks directly influenced his work at CampusXATL, where he used market sizing and strategic analysis to pivot the entire product strategy—cutting time-to-launch by 40%.\n\nMcKinsey taught Jalani to think like a consultant: break down complex problems, analyze systematically, and deliver actionable recommendations.`);
            
            setTimeout(() => {
                updateButtons([
                    { text: 'See how he applied these frameworks', action: 'consulting-frameworks' },
                    { text: 'Back to consulting questions', action: 'consulting-back' }
                ]);
            }, 500);
        });
    }
    
    // Consulting: VC Fellowship
    function handleConsultingVC() {
        sendMessage('user', 'Tell me about your VC fellowship experience');
        sendTypingMessage(() => {
            sendMessage('system', `Jalani was selected for the highly competitive Black Venture Capital Consortium (BVCC) Fellowship.\n\n**What He Mastered:**\nDue diligence fundamentals and investment frameworks\nMarket sizing analysis and TAM calculations\n📝 Writing comprehensive investment memos\nEvaluating startup metrics and unit economics\n\n**The Program:**\nA rigorous 10-week curriculum focused on venture capital fundamentals, startup evaluation, and portfolio strategy.\n\n**Real Impact:**\nThis experience shaped how Jalani evaluates opportunities and makes strategic decisions—always thinking about market size, scalability, and sustainable growth.`);
            
            setTimeout(() => {
                updateButtons([
                    { text: 'How do you size markets?', action: 'consulting-market-sizing' },
                    { text: 'Back to consulting questions', action: 'consulting-back' }
                ]);
            }, 500);
        });
    }
    
    // Consulting: Pivot Strategy
    function handleConsultingPivot() {
        sendMessage('user', 'How did you pivot CampusXATL strategy?');
        sendTypingMessage(() => {
            sendMessage('system', `This is one of Jalani's best strategic pivots!\n\n**The Problem:**\nCampusXATL's initial go-to-market strategy stalled. Traditional marketing channels were expensive and ineffective.\n\n**The Pivot:**\nJalani completely redesigned the user acquisition approach:\n• Ditched expensive paid channels\n• Built a scrappy, direct-outreach model\n• Focused on authentic, personal engagement\n• Optimized for low customer acquisition cost (CAC)\n\n**The Results:**\n✅ 100 daily sign-ups achieved\n✅ Built sustainable, low-CAC pipeline\n✅ Cut time-to-launch by 40%\n✅ Proved market viability with 170 beta users\n\nThis wasn't just a tactic change—it was a complete strategic overhaul based on data and user feedback.`);
            
            setTimeout(() => {
                updateButtons([
                    { text: 'Show me the metrics', action: 'consulting-pivot-metrics' },
                    { text: 'Back to consulting questions', action: 'consulting-back' }
                ]);
            }, 500);
        });
    }
    
    // General handlers for navigation
    function handleGeneralChallenge() {
        sendMessage('user', 'Tell me about a tough challenge Jalani faced');
        sendTypingMessage(() => {
            sendMessage('system', `Great question! Let me tell you about when Jalani had to completely pivot CampusXATL.\n\n**The Challenge:**\nThe initial go-to-market strategy hit a wall. Traditional channels were too expensive and not delivering results.\n\n**The Response:**\nInstead of giving up, Jalani designed an entirely new user acquisition approach—scrappy, direct, and authentic.\n\n**The Outcome:**\n✅ Locked in 100 daily sign-ups\n✅ Built a sustainable, low-CAC pipeline\n✅ Proved the model worked\n\nThis is the kind of strategic thinking that turns obstacles into opportunities.`);
            
            setTimeout(() => {
                loadPersonaQuestions(currentPersona || 'general');
            }, 500);
        });
    }
    
    function handleGeneralGoals() {
        sendMessage('user', 'What are Jalani\'s career goals?');
        sendTypingMessage(() => {
            sendMessage('system', `Jalani is driven by a clear vision: build products that create real impact at scale.\n\n**His Focus Areas:**\nProduct Management at innovative tech companies\nWorking on AI/ML-powered products\nDriving user growth and engagement\nBuilding 0-to-1 products and MVPs\n\n**What He's Looking For:**\nCompanies that move fast, ship iteratively, and put users first. He thrives in environments where data drives decisions and teams aren't afraid to pivot.\n\n**The Big Picture:**\nJalani wants to be where cutting-edge technology meets real-world problems—building products people love and use every day.`);
            
            setTimeout(() => {
                loadPersonaQuestions(currentPersona || 'general');
            }, 500);
        });
    }
    
    function handleGeneralStandout() {
        sendMessage('user', 'What makes Jalani stand out?');
        sendTypingMessage(() => {
            sendMessage('system', `Great question! Here's what makes Jalani unique:\n\n**1. Multi-Disciplinary Skill Set**\n• Product Management + Strategy + Finance + Engineering\n• Can speak to executives, engineers, and customers equally well\n\n**2. Proven Track Record**\n• 30% MoM growth at Perplexity\n• 100 daily sign-ups for CampusXATL\n• McKinsey and BVCC-trained strategic thinking\n\n**3. Builder Mentality**\n• Ships working prototypes in 48 hours\n• Not afraid to get hands dirty with code\n• Data-driven but moves fast\n\n**4. Strategic Yet Scrappy**\n• Thinks like a consultant, executes like a founder\n• Comfortable with ambiguity and rapid iteration\n\nJalani doesn't just talk about ideas—he builds them, tests them, and scales what works.`);
            
            setTimeout(() => {
                loadPersonaQuestions(currentPersona || 'general');
            }, 500);
        });
    }
    
    function handleGeneralBackground() {
        sendMessage('user', 'Tell me about Jalani\'s background');
        sendTypingMessage(() => {
            sendMessage('system', `Jalani brings a unique blend of experiences:\n\n**Education & Training:**\nGeorgia State University\nMcKinsey Forward Learning Program\nBlack Venture Capital Consortium (BVCC) Fellow\nBarclays Investment Banking Discovery Program\n\n**Professional Experience:**\nProduct & Growth at Perplexity (30% MoM growth)\nFounder of CampusXATL (170 beta users)\nMicrosoft Ignite Competition\n\n**Core Strengths:**\n• Product Management & Growth Strategy\n• Financial Modeling & Investment Analysis\n• Full-Stack Development (Python, JavaScript, React)\n• Data-Driven Decision Making\n\nHe's built products, driven growth, analyzed markets, and written code—a true hybrid PM/engineer/strategist.`);
            
            setTimeout(() => {
                loadPersonaQuestions(currentPersona || 'general');
            }, 500);
        });
    }
    
    // Challenge conversation flow
    function handleChallengeFlow() {
        conversationState = 'challenge';
        const buttonText = 'Tell me about a tough challenge Jalani faced';
        sendMessage('user', buttonText);
        
        sendTypingMessage(() => {
            sendMessage('system', `Ooh, great question! Let me tell you about a time when Jalani really had to think on his feet.\n\nSo, picture this: CampusXATL was hitting a wall with their initial go-to-market strategy. The traditional channels? Way too expensive and not delivering results. 😬\n\nInstead of just accepting defeat, Jalani completely flipped the script. He designed a whole new user acquisition approach—ditched the expensive lead sources and went for a scrappy, direct-outreach model. It was more personal, more authentic, and honestly? Way more effective.\n\nThe result? They locked in 100 daily sign-ups and built a sustainable, low-CAC pipeline. That's the kind of strategic pivot that turns a struggling initiative into a success story! 🚀`);
            
            setTimeout(() => {
                updateButtons([
                    {
                        text: 'See the actual numbers',
                        action: 'see-metrics',
                        class: 'chat-action-btn w-full text-left px-5 py-4 bg-red-50 hover:bg-blue-700 text-red-700 hover:text-white rounded-xl transition-all duration-200 font-semibold shadow-sm hover:shadow-lg transform hover:scale-[1.02]'
                    },
                    {
                        text: '🔙 Back to main topics',
                        action: 'back-to-menu',
                        class: 'chat-action-btn w-full text-left px-5 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all duration-200 font-semibold shadow-sm hover:shadow-md'
                    }
                ]);
            }, 500);
        });
    }
    
    // Tech: Python/ML
    function handleTechPythonML() {
        sendMessage('user', 'Show me your Python/ML skills');
        sendTypingMessage(() => {
            sendMessage('system', `Jalani has strong Python and Machine Learning experience!\n\n**Projects:**\nHackathon Logic - Built ML pipeline to process biometric signals in real-time\nGrowth Dashboard - Python-based analytics with pandas and data visualization\nAI Recruitment Tool - Integrated GPT-4 API for intelligent matching\n\n**Technical Skills:**\n• Machine Learning libraries (scikit-learn, TensorFlow basics)\n• Data analysis with pandas, numpy\n• API integrations (OpenAI, REST APIs)\n• Real-time data processing\n\n**Example:**\nFor the Hackathon MVP, Jalani engineered Python logic that processed heart-rate data, applied ML algorithms for pattern detection, and output real-time engagement scores—all in 48 hours!\n\nWant to see the code?`);
            
            setTimeout(() => {
                updateButtons([
                    { text: 'View the Hackathon code', action: 'open-project-hackathon' },
                    { text: 'Back to tech questions', action: 'tech-back' }
                ]);
            }, 500);
        });
    }
    
    // Tech: AI Tool
    function handleTechAITool() {
        sendMessage('user', 'Tell me about the AI recruitment tool');
        sendTypingMessage(() => {
            sendMessage('system', `This was a cutting-edge project leveraging GPT-4!\n\n**What It Does:**\nAn AI-powered recruitment platform that matches candidates with jobs based on skills, experience, and cultural fit.\n\n**Technical Implementation:**\n• Integrated GPT-4 API for natural language processing\n• Built matching algorithms considering multiple dimensions\n• Created intuitive UI for both recruiters and candidates\n• Real-time scoring and recommendations\n\n**The Innovation:**\nInstead of just keyword matching, the system uses AI to understand context, evaluate fit, and provide intelligent recommendations—like having a smart recruiter assistant.\n\n**Impact:**\nDemonstrated how AI can transform traditional HR processes and improve hiring outcomes.`);
            
            setTimeout(() => {
                updateButtons([
                    { text: 'See the implementation details', action: 'open-project-ai' },
                    { text: 'Back to tech questions', action: 'tech-back' }
                ]);
            }, 500);
        });
    }
    
    // Tech: Tech Stack
    function handleTechStack() {
        sendMessage('user', 'Walk me through your tech stack');
        sendTypingMessage(() => {
            sendMessage('system', `Here's what Jalani works with:\n\n**Frontend:**\n⚛️ React, JavaScript/TypeScript\n🎨 Tailwind CSS, modern UI frameworks\n📱 Responsive design principles\n\n**Backend:**\n🐍 Python (Flask, FastAPI)\n🗄️ SQL databases (PostgreSQL, MySQL)\n🔌 RESTful API design\n\n**Data & ML:**\npandas, numpy for data analysis\nscikit-learn, basic TensorFlow\nData visualization (Plotly, Matplotlib)\n\n**Tools & Platforms:**\n☁️ Cloud deployment basics\nGit/GitHub for version control\nAgile development workflows\n\n**Philosophy:**\nJalani chooses tools based on the problem, not the hype. He's pragmatic—uses what ships fast and scales well.`);
            
            setTimeout(() => {
                updateButtons([
                    { text: 'Back to tech questions', action: 'tech-back' }
                ]);
            }, 500);
        });
    }
    
    // Tech: Challenge
    function handleTechChallenge() {
        sendMessage('user', 'Explain a complex technical challenge you solved');
        sendTypingMessage(() => {
            sendMessage('system', `Great question! Here's a tough one Jalani tackled:\n\n**The Problem:**\nBuilding real-time biometric processing for the Hackathon MVP with hardware constraints and tight deadlines.\n\n**The Challenges:**\n• Processing streaming data from hardware sensors\n• Applying ML algorithms with minimal latency\n• Displaying results in real-time dashboard\n• All in 48 hours!\n\n**The Solution:**\n• Designed efficient data pipeline with buffering\n• Optimized ML models for speed over perfect accuracy\n• Built lightweight visualization layer\n• Prioritized MVP features ruthlessly\n\n**The Lesson:**\nSometimes "good enough fast" beats "perfect too late." Jalani delivered a working prototype that proved the concept and impressed judges.`);
            
            setTimeout(() => {
                updateButtons([
                    { text: 'See the technical implementation', action: 'open-project-hackathon' },
                    { text: 'Back to tech questions', action: 'tech-back' }
                ]);
            }, 500);
        });
    }
    
    // Finance: Modeling
    function handleFinanceModeling() {
        sendMessage('user', 'Walk me through a financial model you built');
        sendTypingMessage(() => {
            sendMessage('system', `Jalani has built comprehensive financial models for various applications:\n\n**Example: Startup Valuation Model**\nRevenue projections with multiple scenarios\nCash flow analysis and burn rate tracking\nValuation using DCF and comparable methods\nSensitivity analysis for key assumptions\n\n**Technical Skills:**\n• Excel/Google Sheets with advanced formulas\n• Python for complex calculations and automation\n• Understanding of accounting principles\n• Scenario modeling and risk analysis\n\n**Real Application:**\nDuring his BVCC fellowship, Jalani built models to evaluate startups for investment—analyzing unit economics, growth potential, and capital efficiency.\n\nWant to see an example?`);
            
            setTimeout(() => {
                updateButtons([
                    { text: 'View a sample model', action: 'finance-model-example' },
                    { text: 'Back to finance questions', action: 'finance-back' }
                ]);
            }, 500);
        });
    }
    
    // Finance: Barclays
    function handleFinanceBarclays() {
        sendMessage('user', 'What did you learn at Barclays?');
        sendTypingMessage(() => {
            sendMessage('system', `The Barclays Investment Banking Discovery Program gave Jalani exposure to high-level finance:\n\n**Key Learnings:**\nInvestment banking deal structures\nFinancial statement analysis\nM&A transaction processes\nEquity and debt markets\n\n**Skills Developed:**\n• Analyzing company financials quickly\n• Understanding deal lifecycle and due diligence\n• Presenting to senior stakeholders\n• Working under tight deadlines with precision\n\n**The Impact:**\nThis experience taught Jalani to think about business from a financial lens—evaluating opportunities based on numbers, not just narrative.\n\nHe now applies this rigor to product and strategy decisions.`);
            
            setTimeout(() => {
                updateButtons([
                    { text: 'Back to finance questions', action: 'finance-back' }
                ]);
            }, 500);
        });
    }
    
    // Finance: Deals
    function handleFinanceDeals() {
        sendMessage('user', 'Explain your deal evaluation process');
        sendTypingMessage(() => {
            sendMessage('system', `Jalani's deal evaluation framework comes from his VC and banking training:\n\n**Step 1: Market Analysis**\nTotal Addressable Market (TAM) sizing\nCompetitive landscape assessment\nGrowth trajectory and trends\n\n**Step 2: Financial Due Diligence**\nUnit economics and margins\nBurn rate and runway\nRevenue model sustainability\n\n**Step 3: Team & Execution**\n👥 Founder experience and vision\nTraction and milestones achieved\nGo-to-market strategy\n\n**Step 4: Risk Assessment**\n⚠️ Market risks, competitive threats\nTechnological feasibility\nFinancial projections reality check\n\nThis systematic approach ensures thorough evaluation before any commitment.`);
            
            setTimeout(() => {
                updateButtons([
                    { text: 'Back to finance questions', action: 'finance-back' }
                ]);
            }, 500);
        });
    }
    
    // Finance: Valuation
    function handleFinanceValuation() {
        sendMessage('user', 'Show me your valuation experience');
        sendTypingMessage(() => {
            sendMessage('system', `Jalani learned valuation through his BVCC fellowship and applies it regularly:\n\n**Valuation Methods:**\nDiscounted Cash Flow (DCF)\nComparable Company Analysis\nPrecedent Transactions\nVenture Capital Method (for startups)\n\n**Real Application:**\nDuring his VC fellowship, Jalani valued multiple startups for investment consideration:\n• Built detailed financial models\n• Ran scenario analyses (bull/base/bear cases)\n• Presented recommendations to investment committee\n\n**Key Insight:**\nValuation is both art and science. The numbers matter, but so does understanding the story, the team, and the market opportunity.\n\nJalani balances quantitative rigor with qualitative judgment.`);
            
            setTimeout(() => {
                updateButtons([
                    { text: 'Back to finance questions', action: 'finance-back' }
                ]);
            }, 500);
        });
    }
    
    // Navigation back buttons
    if (!window.handlePMBack) {
        window.handlePMBack = () => loadPersonaQuestions('pm');
    }
    if (!window.handleConsultingBack) {
        window.handleConsultingBack = () => loadPersonaQuestions('consulting');
    }
    if (!window.handleFinanceBack) {
        window.handleFinanceBack = () => loadPersonaQuestions('finance');
    }
    if (!window.handleTechBack) {
        window.handleTechBack = () => loadPersonaQuestions('tech');
    }
    
    // Handle back buttons in handleButtonClick
    const originalHandleButtonClick = handleButtonClick;
    window.handleButtonClick = function(action) {
        if (action === 'pm-back') return loadPersonaQuestions('pm');
        if (action === 'consulting-back') return loadPersonaQuestions('consulting');
        if (action === 'finance-back') return loadPersonaQuestions('finance');
        if (action === 'tech-back') return loadPersonaQuestions('tech');
        if (action.startsWith('open-project-')) {
            const projectMap = {
                'open-project-hackathon': 'hackathon-logic',
                'open-project-dashboard': 'growth-dashboard',
                'open-project-ai': 'live-ai-tool'
            };
            const projectId = projectMap[action];
            if (projectId) {
                const card = document.querySelector(`[data-project="${projectId}"]`);
                if (card) {
                    closeChatModalFunc();
                    setTimeout(() => card.click(), 400);
                }
            }
            return;
        }
        return originalHandleButtonClick(action);
    };
    
    // See Metrics flow
    function handleSeeMetrics() {
        sendMessage('user', 'See the actual numbers');
        
        sendTypingMessage(() => {
            sendMessage('system', 'Alright, let\'s look at the hard data! 📊\n\nHere are the key performance indicators from that CampusXATL pivot:\n\n✅ **100 daily sign-ups** achieved\n✅ **Reduced CAC** by going direct\n✅ **Higher engagement** from authentic outreach\n✅ **Sustainable growth pipeline** established\n\nThese aren\'t just vanity metrics—they represent real users and a scalable acquisition model!', {
                imageUrl: 'https://via.placeholder.com/350x200?text=CampusXATL+Growth+Metrics',
                imageAlt: 'Growth metrics dashboard showing 100 daily sign-ups'
            });
        }, 600);
    }
    
    // Perplexity conversation flow
    function handlePerplexityFlow() {
        conversationState = 'perplexity';
        const buttonText = '🤔 Why Perplexity? What\'s his interest?';
        sendMessage('user', buttonText);
        
        sendTypingMessage(() => {
            sendMessage('system', `Ah, I love this one! Jalani's pretty passionate about Perplexity, and here's why:\n\nFor him, Perplexity is where AI innovation meets real-world impact. It's not just about cool technology—it's about building products people actually use and love. That's his sweet spot! 🎯\n\nHe's already been making waves there as a Product & Growth Campus Partner, driving 30% month-over-month active user growth. The fast-paced, product-first culture? It's exactly what he thrives in. He's all about building MVPs, shipping fast, and iterating based on real user feedback.\n\nBasically, Perplexity lets him combine his product management skills with cutting-edge AI. What's not to love? 😄`);
            
            setTimeout(() => {
                updateButtons([
                    {
                        text: 'Show me the growth strategy',
                        action: 'view-growth-strategy',
                        class: 'chat-action-btn w-full text-left px-5 py-4 bg-red-50 hover:bg-blue-700 text-red-700 hover:text-white rounded-xl transition-all duration-200 font-semibold shadow-sm hover:shadow-lg transform hover:scale-[1.02]'
                    },
                    {
                        text: '🔙 Back to main topics',
                        action: 'back-to-menu',
                        class: 'chat-action-btn w-full text-left px-5 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all duration-200 font-semibold shadow-sm hover:shadow-md'
                    }
                ]);
            }, 500);
        });
    }
    
    // View Growth Strategy flow
    function handleViewGrowthStrategy() {
        sendMessage('user', 'Show me the growth strategy');
        
        sendTypingMessage(() => {
            sendMessage('system', `Love this question! Here's how Jalani cracked the growth code at Perplexity: 🎯\n\n**The Approach:**\n• Launched iterative content strategies (test, learn, optimize, repeat)\n• Focused on user retention—not just acquisition\n• Boosted product utility across different departments\n• Ran strategic on-campus marketing & events\n\n**The Result:**\nSustained 30% month-over-month growth! 📈\n\nThat's the power of combining smart strategy with consistent execution. Want to see the full breakdown?`, {
                linkUrl: 'https://example.com/growth-strategy-case-study',
                linkText: '📄 View Complete Growth Strategy Case Study →'
            });
        }, 600);
    }
    
    // SQL conversation flow
    function handleSQLFlow() {
        conversationState = 'sql';
        const buttonText = 'Show me his technical SQL skills';
        sendMessage('user', buttonText);
        
        sendTypingMessage(() => {
            sendMessage('system', `Alright, let's dive into some SQL magic! 🧙‍♂️\n\nHere's a query Jalani wrote for CampusXATL to analyze user engagement patterns. Pretty slick, right?\n\n**What this query does:**\n• Uses LEFT JOIN to capture all users (even the quiet ones!)\n• Filters for users from the last 30 days\n• Groups data by user to get those juicy aggregate metrics\n• Calculates total activities & average engagement scores\n• Shows only highly engaged users (5+ activities)\n• Orders by engagement to spotlight the MVPs\n\nThis kind of analysis helps spot trends, identify power users, and make data-driven product decisions. Jalani's all about turning raw data into actionable insights! 📊✨`, {
                imageUrl: 'https://via.placeholder.com/350x200?text=SQL+Query+and+Chart',
                imageAlt: 'SQL Query and Resulting Chart'
            });
            
            setTimeout(() => {
                updateButtons([
                    {
                        text: '🔙 Back to main topics',
                        action: 'back-to-menu',
                        class: 'chat-action-btn w-full text-left px-5 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all duration-200 font-semibold shadow-sm hover:shadow-md'
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
    
    // Schedule a Call CTA Button Functionality
    const scheduleCallCTA = document.getElementById('scheduleCallCTA');
    const scheduleCallBtn = document.getElementById('scheduleCallBtn');
    
    // Show Schedule a Call button when persona is selected
    if (scheduleCallBtn) {
        scheduleCallBtn.addEventListener('click', function() {
            // Find the first "Get In Touch" section in the active content
            const activeSection = document.querySelector('.content-section.active');
            if (activeSection) {
                const contactSection = activeSection.querySelector('h2');
                // Find the section with "Get In Touch" text
                const headings = activeSection.querySelectorAll('h2');
                for (let heading of headings) {
                    if (heading.textContent.includes('Get In Touch')) {
                        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        // Add a subtle highlight animation
                        heading.closest('div').classList.add('ring-4', 'ring-teal-500', 'ring-opacity-50');
                        setTimeout(() => {
                            heading.closest('div').classList.remove('ring-4', 'ring-teal-500', 'ring-opacity-50');
                        }, 2000);
                        break;
                    }
                }
            }
        });
    }
});
