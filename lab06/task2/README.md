# Lab 6.2: Route  Parameters & Dynamic Pages

## Student Name: Nuray Koshan
## Date: 23.02.2026

### Route Structure
- `/` - Home page
- `/courses` - Courses list with sort functionality
- `/courses/:id` - Dynamic course detail page
- `/*` - 404 Not Found

### Hooks Usage
- **useParams**: Gets the :id parameter from URL in CourseDetail
- **useSearchParams**: Handles ? sort=asc|desc query parameter in Courses
- **useLoaderData**: Loads course data before rendering

### URL Params vs Query Params
- **URL Params** (/courses/:id) : Used for specific resourse identification
- **Query Params** (?sort=asc): Used for optional filters and sorting

### Features
- Dynamic routing with parameters
- Query string parsing for sorting
- Error handling for invalid course IDs
- Type-safe data structures