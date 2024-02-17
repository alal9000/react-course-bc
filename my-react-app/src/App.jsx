import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: "apple" },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "bananna", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];

  return (
    <>
      {fruits.length > 0 && <List category="Fruits" />}
      {vegetables.length > 0 ? (
        <List items={vegetables} category="Vegetables" />
      ) : null}
    </>
  );
}

export default App;
