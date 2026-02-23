import { useParams, useLoaderData, Link } from 'react-router-dom';
import { type Course } from './data';  

function CourseDetail() {
  const { id } = useParams();
  const { course } = useLoaderData() as { course: Course };

  return (
    <div className="page course-detail">
      <h1>{course.title}</h1>
      
      <div className="course-info">
        <p><strong>Course ID:</strong> {id}</p>
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <p><strong>Level:</strong> {course.level}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        
        <h2>Description</h2>
        <p>{course.description}</p>
      </div>

      <div className="navigation">
        <Link to="/courses">← Back to Courses</Link>
      </div>
    </div>
  );
}

export default CourseDetail;