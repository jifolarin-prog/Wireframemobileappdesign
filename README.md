# AccessAbility Community

AccessAbility Community is a responsive React-based platform designed for an academic project with a primary focus on strict **WCAG 2.1 AA accessibility compliance**. The site provides resources, community support, and live updates to ensure an inclusive digital experience for all users, regardless of their physical or cognitive abilities.

## 🌟 Key Features

- **Strict WCAG 2.1 AA Compliance**: Built with semantic HTML, ARIA labels, and high-contrast support.
- **Low Energy Mode**: A unique accessibility feature that reduces motion, simplifies layouts, and optimizes performance for users with cognitive sensitivities or low-battery devices.
- **Responsive Design**: Leverages CSS Grid and Media Queries for a seamless experience across mobile, tablet, and desktop devices.
- **Weather Integration**: Live updates via the OpenWeatherMap API to provide context-aware community information.
- **Custom Accessible Video Player**: Enhanced media controls designed for keyboard navigation and screen reader compatibility.
- **Validated Forms**: Robust error handling and accessible feedback in the Support Center contact forms.

## 🛠 Tech Stack

- **Framework**: React 18
- **Styling**: Tailwind CSS v4
- **Routing**: React Router (Data Mode)
- **Icons**: Lucide React
- **UI Components**: Radix UI Primitives (via Shadcn UI)
- **State Management**: React Context API (for Global Accessibility Settings)

## 📂 Project Structure

- `/src/app/screens`: Main page components (Home, Community, Contact, etc.)
- `/src/app/components`: Reusable UI components including the custom `VideoPlayer` and `WeatherWidget`.
- `/src/app/contexts`: Contains the `LowEnergyContext` for global accessibility state.
- `/src/styles`: Theme tokens, font imports, and Tailwind configuration.
- `REQUIREMENTS-CHECKLIST.md`: A tracking document for academic criteria implementation.

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or pnpm

### Configuration

The Weather Widget requires an OpenWeatherMap API key. 

1. Create a `.env` file in the root directory.
2. Add your API key:
   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

## ♿ Accessibility Implementation

This project follows the four principles of accessibility (POUR):
1. **Perceivable**: Text alternatives for non-text content and high color contrast.
2. **Operable**: Full keyboard navigability and sufficient time for interactions.
3. **Understandable**: Clear navigation, input assistance, and predictable UI behavior.
4. **Robust**: Use of semantic markup to ensure compatibility with current and future user agents (including screen readers).
Testing Process

Testing was carried out throughout the development lifecycle rather than only at the end of the project.

Functional Testing

Each feature was tested individually to ensure it met the specified requirements.

Feature	Expected Result	Actual Result	Status
Navigation	Opens selected page	Successful	Pass
Login Form	Accepts valid input	Successful	Pass
Upload Button	Opens upload page	Successful	Pass
Search Function	Returns matching content	Successful	Pass
Profile Page	Displays user information	Successful	Pass
Settings Page	Loads correctly	Successful	Pass
Responsive Testing

The application was tested using browser developer tools on multiple screen sizes.

Device	Result
Mobile	Pass
Tablet	Pass
Laptop	Pass
Desktop	Pass

The interface adapted correctly using responsive CSS layouts.

Browser Testing
Browser	Result
Google Chrome	Pass
Microsoft Edge	Pass
Firefox	Pass

No significant layout or functionality issues were identified.

Accessibility Testing

The following accessibility checks were completed:

Keyboard navigation
Colour contrast verification
Readable font sizes
Form labels
Alternative image text
Logical heading structure

All tests confirmed the interface remained accessible and easy to navigate.
