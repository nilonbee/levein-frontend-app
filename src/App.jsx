import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Context from "./context/context";
import Navbar from "./components/Navbar";
import BookForm from "./components/BookForm";
import AuthorForm from "./components/AuthorForm";
import Home from "./components/Home";
import SingleViewAuthor from "./components/SingleViewAuthor";
import SingleViewBook from "./components/SingleViewBook";
import Authors from "./pages/Authors";
import Books from "./pages/Books";

function App() {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const openBookModal = () => {
    setModal1Open(true);
  };

  const closeBookModal = () => {
    setModal1Open(false);
  };

  const openAuthorModal = () => {
    setModal2Open(true);
  };

  const closeAuthorModal = () => {
    setModal2Open(false);
  };

  return (
    <>
      <Context>
        <Navbar
          openAuthorModal={openAuthorModal}
          openBookModal={openBookModal}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/authors/" component={Authors} />
          <Route exact path="/books/" component={Books} />
          <Route exact path="/authors/:id" component={SingleViewAuthor} />
          <Route exact path="/books/:id" component={SingleViewBook} />
          <Route component={Error} />
        </Switch>
        <BookForm
          title="Book"
          modalOpen={modal1Open}
          setModalOpen={closeBookModal}
        />
        <AuthorForm
          title="Author"
          modalOpen={modal2Open}
          setModalOpen={closeAuthorModal}
        />
      </Context>
    </>
  );
}

export default App;
