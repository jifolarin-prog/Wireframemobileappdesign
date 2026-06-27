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
<img width="671" height="376" alt="image" src="https://github.com/user-attachments/assets/6abf3aef-386d-4287-b07e-
   b28600e2b6fd" />
   <img width="670" height="376" alt="image" src="https://github.com/user-attachments/assets/00eb3042-029d-4276-87e4-06cfe42ea9f0" />

my first version 
<img width="643" height="374" alt="image" src="https://github.com/user-attachments/assets/9a07fbcc-6819-4254-bdaa-f09753731522" />
<img width="602" height="373" alt="image" src="https://github.com/user-attachments/assets/dec8ca8b-99e6-407f-848e-8ebfb4ed0dde" />
<img width="335" height="371" alt="image" src="https://github.com/user-attachments/assets/4c6bebe4-5293-4d84-87d3-782e2aabc38f" />
<img width="336" height="376" alt="image" src="https://github.com/user-attachments/assets/1bad2b04-07d8-4ba6-8bf7-456027e9d0ea" />
see only: White #FFFFFF Light Gray #F5F5F5 Mid Gray #D9D9D9 Dark Gray #333333 Black #000000 No color accents yet. This is bones only. 📱 Frame Setup Device Frame iPhone 14 size (390 x 844) Background: #F5F5F5 16px outer padding 8px base spacing system 🏠 1. Home Screen Wireframe Layout Structure Vertical Auto Layout Spacing: 16px Padding: 0 🔍 Search Bar Component Height: 48px Fill: White Corner radius: 12px Stroke: 1px #D9D9D9 Inside: Left: 24x24 circle (icon placeholder) Middle: “Search or use voice” text placeholder (14px gray) Right: 24x24 circle (mic icon placeholder) ⚡ Low Energy Toggle Row Height: 40px Auto layout: horizontal Left: 20x20 square icon placeholder Label: “Low Energy Mode” Right: Toggle switch placeholder 36x20 rounded rectangle Small 16x16 circle inside 📂 Primary Card Grid Two-column grid Spacing: 12px Card size: (Width: Fill container / 2 minus spacing) Height: 120px Fill: White Corner radius: 16px Stroke: 1px #D9D9D9 Inside each card: 32x32 square icon placeholder (top left) Title text (16px bold) Optional 12px subtext Cards: Browse by Challenge Tool Library Recent Tips Support Circles 🔻 Bottom Navigation Bar Height: 72px Fill: White Top stroke: 1px #D9D9D9 4 evenly spaced icons + labels stacked vertically: 🏠 Home ➕ Post 💬 Community 👤 Profile Icon placeholder: 24x24 square Label: 12px 🔎 2. Browse by Challenge Screen Vertical Auto Layout Spacing: 16px 🏷 Filter Chips Row Horizontal scrolling container Height: 40px Each chip: Auto width Height: 32px Fill: White Stroke: 1px #D9D9D9 Radius: 16px 12px horizontal padding Text: 12px Example chips: Mobility Vision Chronic Pain Neurodivergent Low Energy 📄 Tip List Cards Single column list Card: Height: 100px Fill: White Radius: 16px Stroke: 1px #D9D9D9 Padding: 12px Inside: Top row: Title (16px bold) Small 16x16 format icons (video / voice / text) Below: 1-line summary (14px gray) Bottom right: 20x20 bookmark icon placeholder ➕ 3. Create Post Screen Vertical Auto Layout Spacing: 20px 🧭 Format Selection Grid 2-column grid Spacing: 16px Each button: Height: 100px Fill: White Stroke: 1px #D9D9D9 Radius: 16px Inside: 32x32 icon placeholder centered Label centered below Options: Record Voice Record Video Upload Image Write Text 📝 Structured Template Area Large container: Height: 300px Fill: White Stroke: 1px #D9D9D9 Radius: 16px Padding: 16px Inside stacked text fields: Challenge (input line) What helped (multiline) Tools used (input line) Energy level (dropdown placeholder) Each input: Height: 40px min Underline stroke #D9D9D9 📤 Submit Button Full width Height: 48px Fill: #333333 Text: White Radius: 12px Label: “Share Tip” 🧵 4. Tip Detail Screen Vertical layout Spacing: 16px Title (18px bold) Creator row: 32x32 circle avatar placeholder Name Tag chips row below (small 12px chips) Content Block: Height varies Fill: White Stroke: 1px #D9D9D9 Radius: 16px Padding: 16px Media placeholder: Full width Height: 200px Gray fill block Text content below if needed. 🧠 Summary Block (Optional) Smaller white card Padding 12px Label: “Quick Summary” 14px text 💬 Action Row Horizontal evenly spaced: Helped button (icon + label) Save button Comment button 48px tall touch area 👤 Profile Screen Top section centered: 80x80 circle avatar placeholder Name Bio text (2 lines max) Divider line Tabbed section: Horizontal tabs: Portfolio Tips Shared Saved Circles Active tab underlined (2px black line) Content below = card grid or list. 🌙 Low Energy Mode Variant Duplicate each screen as a variant: Changes: Increase spacing by +8px Remove grid layouts → convert to single column list Increase text size by +2px Hide secondary icons No shadows or visual layering Keep it visually calm and sparse. 🧱 Component List for Figma Create reusable components: Search Bar Toggle Row Card Large Card List Filter Chip Bottom Nav Input Field Primary Button Tag Chip Media Placeholder Use variants for: Default Low Energy
