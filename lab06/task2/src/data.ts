export interface Course {
    id: number;
    title: string;
    instructor: string;
    description: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const courses: Course[] = [
    {
        id: 1,
        title: 'Introduction to React',
        instructor: 'Dr. Sarah Smith',
        description: 'Learn React fundamentals, components, hooks, and state management',
        duration: '8 weeks',
        level: 'Beginner'
    },
    {
        id: 2,
        title: 'TypeScript Masterclass',
        instructor: 'Prof. Michael Johnson',
        description: 'Deep dive into TypeScript, types, interfaces, and advanced patterns',
        duration: '10 weeks',
        level: 'Intermediate'
    },
    {
        id: 3,
        title: 'Advanced Node.js',
        instructor: 'Dr. Emily Williams',
        description: 'Build scalable backend applications with Node.js and Express',
        duration: '12 weeks',
        level: 'Advanced'
    },
    {
        id: 4,
        title: 'Web Development Fundamentals',
        instructor: 'Prof. David Brown',
        description: 'HTML, CSS, JavaScript and modern web development basics',
        duration: '6 weeks',
        level: 'Beginner'
    }
];

export function getCourseById(id: number): Course | undefined {
    return courses.find(course => course.id === id);
}