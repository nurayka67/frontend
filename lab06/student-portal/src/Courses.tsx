interface Course {
    id: number;
    title: string;
    instructer: string;
    level: string;
}

const courses: Course[] = [
    { id: 1, title: 'Introduction to React', instructer: 'Dr. Smith', level: 'Beginner'},
    { id: 2, title: 'TypeScript Masterclass', instructer: 'Prof.Johnson', level: 'Intermediate'},
    { id: 3, title: 'Advanced Node.js', instructer: 'Dr. Williams', level: 'Advanced'},
    { id: 4, title: 'Web development Fundamentals', instructer: 'Prof. Brown', level: 'Beginner'}
];

function Courses() {
    return (
        <div className="page">
            <h1>Our Courses</h1>
            <div className="courses-grid">
                {courses.map(course => (
                    <div key={course.id} className="course-card">
                        <h2>{course.title}</h2>
                        <p><strong>Instructor:</strong> {course.instructer}</p>
                        <p><strong>Level:</strong> {course.level}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;