import "./styles.css";

export default function App() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycby1blNamZKeqrKxZTeI67WY4Yi1a6oO2l2DndWYcS17b4f-HD6kvbYNUwYp8yvQ739O/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <h1 className="h1">Contact Me</h1>
      <div className="form-wrapper">
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Name" name="Name" type="text" className="placeholder" />
          <input placeholder="Your Email" name="Email" type="text" className="placeholder" />
          <input placeholder="Your Mobile Number" name="Mobile Number" type="tel" className="placeholder" />
          <input placeholder="Your Message" name="Message" type="text" className="placeholder"/>
          <input name="Name" type="submit" className="submit" />
        </form>
      </div>
    </div>
  );
}
