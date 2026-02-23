import { Link, useSearchParams } from 'react-router-dom';
import { courses, type Course } from './data';  

function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get('sort') || 'asc';
  
  const sortedCourses = [...courses].sort((a: Course, b: Course) => {
    return sortOrder === 'desc' 
      ? b.title.localeCompare(a.title)
      : a.title.localeCompare(b.title);
  });

  const toggleSort = () => {
    setSearchParams({ sort: sortOrder === 'asc' ? 'desc' : 'asc' });
  };

  return (
    <div className="page">
      <h1>Our Courses</h1>
      
      <div className="sort-controls">
        <button onClick={toggleSort} className="sort-btn">
          Sort: {sortOrder.toUpperCase()}
        </button>
      </div>

      <div className="courses-grid">
        {sortedCourses.map(course => (
          <Link 
            to={`/courses/${course.id}`} 
            key={course.id} 
            className="course-link"
          >
            <div className="course-card">
              <h3>{course.title}</h3>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <p><strong>Level:</strong> {course.level}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Courses;