// ==================== WEATHER API INTEGRATION ====================
// OpenWeatherMap API configuration
const WEATHER_API_KEY = 'YOUR_API_KEY_HERE'; // Replace with actual API key
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

interface WeatherData {
    name: string;
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
    };
    weather: Array<{
        description: string;
        main: string;
    }>;
    wind: {
        speed: number;
    };
}

/**
 * Fetches weather data from OpenWeatherMap API
 * Uses geolocation to get user's current location
 */
async function fetchWeatherData(): Promise<void> {
    const weatherContent = document.getElementById('weather-content');
    if (!weatherContent) return;

    try {
        // Get user's geolocation
        if (!navigator.geolocation) {
            throw new Error('Geolocation is not supported by your browser');
        }

        weatherContent.innerHTML = '<p>Getting your location...</p>';

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                try {
                    // For demonstration, using mock data since API key is placeholder
                    // In production, uncomment the fetch call below
                    /*
                    const response = await fetch(
                        `${WEATHER_API_URL}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
                    );

                    if (!response.ok) {
                        throw new Error('Weather data unavailable');
                    }

                    const data: WeatherData = await response.json();
                    */

                    // Mock data for demonstration
                    const data: WeatherData = {
                        name: 'Your Location',
                        main: {
                            temp: 22,
                            feels_like: 20,
                            humidity: 65
                        },
                        weather: [{
                            description: 'partly cloudy',
                            main: 'Clouds'
                        }],
                        wind: {
                            speed: 3.5
                        }
                    };

                    displayWeatherData(data);
                } catch (error) {
                    weatherContent.innerHTML = `<p>Error fetching weather: ${(error as Error).message}</p>`;
                }
            },
            (error) => {
                // Use mock data if geolocation is denied
                const mockData: WeatherData = {
                    name: 'Sample City',
                    main: {
                        temp: 22,
                        feels_like: 20,
                        humidity: 65
                    },
                    weather: [{
                        description: 'partly cloudy',
                        main: 'Clouds'
                    }],
                    wind: {
                        speed: 3.5
                    }
                };
                displayWeatherData(mockData);
            }
        );
    } catch (error) {
        weatherContent.innerHTML = `<p>Error: ${(error as Error).message}</p>`;
    }
}

/**
 * Displays weather data in the modal
 * @param data - Weather data from API
 */
function displayWeatherData(data: WeatherData): void {
    const weatherContent = document.getElementById('weather-content');
    if (!weatherContent) return;

    const html = `
        <div class="weather-info">
            <div class="weather-item">
                <span class="weather-label">Location</span>
                <span class="weather-value">${data.name}</span>
            </div>
            <div class="weather-item">
                <span class="weather-label">Temperature</span>
                <span class="weather-value">${Math.round(data.main.temp)}°C</span>
            </div>
            <div class="weather-item">
                <span class="weather-label">Feels Like</span>
                <span class="weather-value">${Math.round(data.main.feels_like)}°C</span>
            </div>
            <div class="weather-item">
                <span class="weather-label">Conditions</span>
                <span class="weather-value">${data.weather[0].description}</span>
            </div>
            <div class="weather-item">
                <span class="weather-label">Humidity</span>
                <span class="weather-value">${data.main.humidity}%</span>
            </div>
            <div class="weather-item">
                <span class="weather-label">Wind Speed</span>
                <span class="weather-value">${data.wind.speed} m/s</span>
            </div>
        </div>
    `;

    weatherContent.innerHTML = html;
}

// ==================== MODAL POPUP CONTROLS ====================
/**
 * Opens the weather modal and fetches weather data
 */
function openWeatherModal(): void {
    const modal = document.getElementById('weather-modal');
    if (modal) {
        modal.removeAttribute('hidden');
        modal.setAttribute('aria-hidden', 'false');

        // Trap focus within modal
        const closeBtn = document.getElementById('close-modal');
        if (closeBtn) {
            closeBtn.focus();
        }

        // Fetch weather data
        fetchWeatherData();

        // Prevent background scrolling
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Closes the weather modal
 */
function closeWeatherModal(): void {
    const modal = document.getElementById('weather-modal');
    if (modal) {
        modal.setAttribute('hidden', '');
        modal.setAttribute('aria-hidden', 'true');

        // Restore background scrolling
        document.body.style.overflow = '';

        // Return focus to trigger button
        const weatherBtn = document.getElementById('weather-btn');
        if (weatherBtn) {
            weatherBtn.focus();
        }
    }
}

// ==================== VIDEO PLAYER CONTROLS ====================
/**
 * Initializes custom video player controls
 */
function initializeVideoControls(): void {
    const video = document.getElementById('intro-video') as HTMLVideoElement | null;
    const playPauseBtn = document.getElementById('play-pause-btn');
    const muteBtn = document.getElementById('mute-btn');
    const volumeControl = document.getElementById('volume-control') as HTMLInputElement | null;

    if (!video || !playPauseBtn || !muteBtn || !volumeControl) {
        return; // Elements not found, skip initialization
    }

    // Play/Pause control
    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = 'Pause';
            playPauseBtn.setAttribute('aria-label', 'Pause video');
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play';
            playPauseBtn.setAttribute('aria-label', 'Play video');
        }
    });

    // Update button when video plays/pauses from native controls
    video.addEventListener('play', function() {
        playPauseBtn.textContent = 'Pause';
        playPauseBtn.setAttribute('aria-label', 'Pause video');
    });

    video.addEventListener('pause', function() {
        playPauseBtn.textContent = 'Play';
        playPauseBtn.setAttribute('aria-label', 'Play video');
    });

    // Mute control
    muteBtn.addEventListener('click', function() {
        video.muted = !video.muted;
        muteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
        muteBtn.setAttribute('aria-label', video.muted ? 'Unmute video' : 'Mute video');
    });

    // Volume control
    volumeControl.addEventListener('input', function() {
        video.volume = Number(this.value) / 100;
        if (video.volume === 0) {
            video.muted = true;
            muteBtn.textContent = 'Unmute';
        } else {
            video.muted = false;
            muteBtn.textContent = 'Mute';
        }
    });

    // Keyboard accessibility for video
    video.addEventListener('keydown', function(e) {
        // Space or Enter to play/pause
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            playPauseBtn.click();
        }
        // M to mute/unmute
        if (e.key === 'm' || e.key === 'M') {
            e.preventDefault();
            muteBtn.click();
        }
    });
}

// ==================== CONTACT FORM VALIDATION ====================
/**
 * Validates the contact form before submission
 * @param event - Form submit event
 */
function validateContactForm(event: Event): boolean {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const name = document.getElementById('name') as HTMLInputElement | null;
    const email = document.getElementById('email') as HTMLInputElement | null;
    const subject = document.getElementById('subject') as HTMLSelectElement | null;
    const message = document.getElementById('message') as HTMLTextAreaElement | null;

    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.form-error').forEach(error => {
        error.classList.remove('show');
    });

    // Validate name
    if (!name || name.value.trim() === '') {
        showError('name-error', 'Please enter your name');
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.value.trim())) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate subject
    if (!subject || subject.value === '') {
        showError('subject-error', 'Please select a subject');
        isValid = false;
    }

    // Validate message
    if (!message || message.value.trim().length < 10) {
        showError('message-error', 'Please enter a message (minimum 10 characters)');
        isValid = false;
    }

    if (isValid) {
        // Form is valid, show success message
        const successMessage = document.getElementById('success-message');
        if (successMessage) {
            successMessage.classList.add('show');
        }

        // Reset form
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            if (successMessage) {
                successMessage.classList.remove('show');
            }
        }, 5000);
    }

    return false;
}

/**
 * Shows error message for form field
 * @param errorId - ID of error element
 * @param message - Error message to display
 */
function showError(errorId: string, message: string): void {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

// ==================== EVENT LISTENERS ====================
/**
 * Initialize all event listeners when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Weather modal controls
    const weatherBtn = document.getElementById('weather-btn');
    const closeModalBtn = document.getElementById('close-modal');
    const modal = document.getElementById('weather-modal');

    if (weatherBtn) {
        weatherBtn.addEventListener('click', openWeatherModal);
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeWeatherModal);
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeWeatherModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false') {
            closeWeatherModal();
        }
    });

    // Initialize video controls
    initializeVideoControls();

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', validateContactForm);
    }
});

// ==================== ACCESSIBILITY ENHANCEMENTS ====================
/**
 * Announce page changes to screen readers
 * @param message - Message to announce
 */
function announceToScreenReader(message: string): void {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'visually-hidden';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Export for potential module usage
export { openWeatherModal, closeWeatherModal, initializeVideoControls, validateContactForm };
