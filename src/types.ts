export interface IArticle {
  id: number;
  img: string;
  title: string;
  author: string;
  date: string;
  description: string;
}

export interface IService {
  title: string;
  img: string;
}

export interface ICircle {
  size: string;
  color: string;
  left: string;
  top: string;
}

export interface IFormData {
  name: string;
  email: string;
  message: string;
}

export interface BackgroundCirclesProps {
  circles: ICircle[];
}