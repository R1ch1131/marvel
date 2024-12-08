export interface Comic {
    id: number;
    title: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    characters: {
      items: {
          name: string
      }[]
   }
   }