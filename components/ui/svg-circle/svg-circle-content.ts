export interface TitleContent {
    title: string
    subtitle?: string
  }
  
  export const titleContents: Record<string, TitleContent> = {
    default: {
      title: "Hi there",
      subtitle: "Something amazing is coming soon",
    },
    ourwork: {
      title: "Our Work",
      subtitle: "Check out our latest projects",
    },
    about: {
      title: "About Us",
      subtitle: "Our story and mission",
    },
    // Add more configurations as needed
  }
  
  