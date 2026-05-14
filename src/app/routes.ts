import { createBrowserRouter } from 'react-router';
import { Home } from './screens/Home';
import { BrowseByChallenge } from './screens/BrowseByChallenge';
import { CreatePost } from './screens/CreatePost';
import { TipDetail } from './screens/TipDetail';
import { Profile } from './screens/Profile';

// Accessibility Website Pages
import AccessHome from '../../accessibility-website/pages/Home';
import AccessResources from '../../accessibility-website/pages/Resources';
import AccessContact from '../../accessibility-website/pages/Contact';

export const router = createBrowserRouter([
  // Original App Routes
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/browse',
    Component: BrowseByChallenge,
  },
  {
    path: '/create',
    Component: CreatePost,
  },
  {
    path: '/tip/:id',
    Component: TipDetail,
  },
  {
    path: '/profile',
    Component: Profile,
  },
  // Accessibility Website Routes
  {
    path: '/accessibility',
    Component: AccessHome,
  },
  {
    path: '/accessibility/resources',
    Component: AccessResources,
  },
  {
    path: '/accessibility/contact',
    Component: AccessContact,
  },
]);
