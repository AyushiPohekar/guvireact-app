import logo from './logo.svg';
import './App.css';

function App() {
  const name = ["Mayuri", "Sayli", "Anagha"];
  const students = [
    {
      name: "Mayuri",
      pic: "https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
    },
    {
      name: "Sayli",
      pic: "https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      name: "Anagha",
      pic: "https://bestprofilepictures.com/wp-content/uploads/2021/08/Anime-Girl-Profile-Picture.jpg",
    },
  ];
  return (
    <div className="App">
      {students.map((student) => (<Message name={student.name} pic={student.pic} />
      ))}
    </div>
  );
  //jsx ends
}
//props=properties=pass arguments to components

export default App;
//create  component
//function-component
//1.first letter capital
//2.it should one jsx element.
//Defined the component-logic+view
// function Message(props)
// {
// return (
//   <div>
//      <img className='profile-pic' src={props.pic} alt={props.name}
//        />
//   <h1>Hello,{props.name} &#128512;</h1>
//   </div>
// );
// object destructuring
function Message({ pic, name }) {
  return (
    <div>
      <img className='profile-pic' src={pic} alt={name}
      />
      <h1>Hello,{name} &#128512;</h1>
    </div>
  );
}


//<> </>-react fragment-helps in styling and performance

//{}-template syntax
//jsx-javascript XML
//className

//Webpack+Babel
//jsx-js
