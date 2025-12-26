
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  mp4Url: string;
  thumbnail: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}
