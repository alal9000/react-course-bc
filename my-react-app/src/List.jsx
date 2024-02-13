function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "bananna", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical
  //   fruits.sort((a, b) => a.calories - b.calories); // numeric
  //   fruits.sort((a, b) => b.calories - a.calories); // reverse numeric


  const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);





  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} &nbsp; <b>{fruit.calories}</b>
    </li>
  ));

  return <ol>{listItems}</ol>;
}
export default List;
