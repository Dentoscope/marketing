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

    // 3. Smart Appointment & Chair Scheduling (Supports 2 swappable images: weekly view & monthly view)
    screen3Appointment: {
      weekly: {
        en: "/screenshots/appointment_weekly.png",
        ar: "/screenshots/appointment_weekly.png",
      },
      monthly: {
        en: "/screenshots/appointment_monthly.png",
        ar: "/screenshots/appointment_monthly.png",
      }
    },

    // 4. Digital Prescriptions & Direct Printing (Supports 2 swappable images: digital view & print view)
    screen4Prescriptions: {
      digital: {
        en: "/screenshots/prescriptions_digital.png",
        ar: "/screenshots/prescriptions_digital.png",
      },
      print: {
        en: "/screenshots/prescriptions_print.png",
        ar: "/screenshots/prescriptions_print.png",
      }
    },
  },
};
