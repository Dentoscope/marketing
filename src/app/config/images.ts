// Centralized configuration object for bilingual screenshot image replacement.
// Each screenshot entry contains separate file paths for English ('en') and Arabic ('ar') versions.

export type Language = 'en' | 'ar';

export const CLINIC_IMAGES = {
  // Hero section main dashboard screenshot
  heroDashboard: {
    en: "/screenshots/dashboard_real.png",
    ar: "/screenshots/dashboard_real.png",
  },

  // Gallery grid cards under "Your Entire Workflow. One Screen."
  gallery: {
    // 1. Live Capture & Patient Media
    screen1Capture: {
      en: "/screenshots/camera_real.png",
      ar: "/screenshots/camera_real.png",
    },

    // 2. 3D Case Presentation
    screen23D: {
      en: "/screenshots/annotations_real.png",
      ar: "/screenshots/annotations_real.png",
    },

    // 3. Complete Patient History
    screen3History: {
      en: "/screenshots/dashboard_real.png",
      ar: "/screenshots/dashboard_real.png",
    },

    // 4. Digital Prescriptions & Direct Printing
    screen4Prescriptions: {
      en: "/screenshots/preset_real.png",
      ar: "/screenshots/preset_real.png",
    },
  },

  // Appointment & Chair Scheduling banner screenshot
  appointmentBanner: {
    en: "/screenshots/preset_real.png",
    ar: "/screenshots/preset_real.png",
  },
};
