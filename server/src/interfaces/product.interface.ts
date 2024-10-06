// export interface Image {
//     id: number;
//     url: string; 
//   }
  
//   export interface Category {
//     id: number;
//     name: string; 
//   }
  
//   export interface Label {
//     id: number;
//     name: string; 
//   }
  
  export interface Product {
    id: number;
    name: string;
    description: string;
    price: number; 
    quantity: number;
    // images: Image[]; 
    // categories: Category[]; 
    // labels: Label[]; 
  }