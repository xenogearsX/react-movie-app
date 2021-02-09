import axios from "axios";
import React from "react";

class FormMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: "",
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitForm(e) {
    e.preventDefault();
    axios
      .post("https://post-a-form.herokuapp.com/api/movies/", this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Film ajouté avec l'ID ${res.id} !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un film : ${e.message}`);
      });
  }

  render() {
    return (
      <div className="FormMovie">
        <h1>Saisie de votre film péféré</h1>
        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="title">Titre du film<span> * </span></label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                required
                value={this.state.title}
              />
            </div>
            <div className="form-data">
              <label htmlFor="poster">Url Poster du film<span> * </span></label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                required
                value={this.state.poster}
              />
            </div>
            <div className="form-data">
              <label htmlFor="comment">Commentaire<span> * </span></label>
              <textarea
                id="comment"
                name="comment"
                onChange={this.onChange}
                required
                value={this.state.comment}
              />
            </div>
            <hr />
            <p><span> * </span> required.</p>
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovie;
