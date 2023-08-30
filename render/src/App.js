const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <div className="App">
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map(part => (
          <li key={part.id}>"{part.name}": {part.exercises} Exercises</li>
        ))}
      </ul>
      <p>Total # of Exercises: {totalExercises}</p>
    </div>
  )
}

export default App
