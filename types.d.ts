interface Book_Meta {
    id:number;
    title: string;
    author: string;
    description: string;
    total_books: number;
    available_books : number;
    coverImage: string;
    coverColor:string;
}

interface AuthCredentials {
    fullName: string;
    email: string;
    password: string;
    schoolId: number;
    schoolCard: string;
}