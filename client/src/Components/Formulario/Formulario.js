import React , { useState, useEffect } from "react";
import '../Formulario/Formulario.css';
import { Link } from "react-router-dom";
import { getAllCountries, postCountryActivity  } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";

export function Validate(activity){
  let errors = {};
  let reg =  /^[A-Z]+$/i  

  if(!activity.countries){
   errors.countries = "Select a country or more";
  }

  if(activity.name.length < 3){
    errors.name = "The activity must have a minimum of 3 letters";
  }else if(!reg.test(activity.name)){
    errors.name = "Activity cannot have numbers";
  }

  if(!activity.difficulty){
    errors.difficulty = "Enter a difficulty level";
  }

  if(activity.duration > 12 || activity.duration <= 1 || !/\d/g.test(activity.duration)){
    errors.duration = "Enter a duration between 1 to 12 months";
  }

  if(!activity.season){
    errors.season = "select a season";
  }
  return errors;
}

export default function Formulario() {
  const dispatch = useDispatch()
  const  countries  = useSelector((state)=> state.allCountries)

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  function handleChange(e) {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
    setErrors(
      Validate({
        ...activity,
        [e.target.name]: e.target.value,
      })
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    let errors = Object.keys(Validate(activity));
    if (!errors.length !== 0) {
      dispatch( postCountryActivity(activity));
      setActivity({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
      });
      alert("activity created successfully");
    } else {
      alert("Fill in the fields");
    }
  }
  function handleSelect(e) {
    setActivity({
      ...activity,
      countries: [...activity.countries, e.target.value],
    });
    setErrors(
      Validate({
        ...activity,
        countries: [...activity.countries, e.target.value],
      })
    );
  }
  function handleDelete(id) {
    //e.preventDefault(e)
    setActivity({
      ...activity,
      countries: activity.countries.filter((t) => t !== id),
    });
  }

  return (
    <div className="container">
      <div className="enviar">
        <Link to="/home">
          <button className="boton">Back</button>
        </Link>
      </div>


      <div className="formato">
        <div className="container_form">
          <form onSubmit={(e) => handleSubmit(e)}>
              <h1 className="h1"> Create Touristic Activity </h1>
              
            <div className="name">
              <div>
                <label className="label">Name:</label>
              </div>
              <input
                name="name"
                id="name"
                type="text"
                value={activity.name}
                placeholder="Enter a name"
                onChange={handleChange}
                className="input"
                required
                ></input>
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="pais">
              <div>
                <label className="label">Countries:</label>
              </div>
              <select  className="input" name="countries" type="text" onChange={(e) => handleSelect(e)}>
                {countries.map((c) => (
                  <option value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <ul>
              {activity.countries.map((c) => (
                <li key={c.id}>
                  {c} <button onClick={() => handleDelete(c)}>X</button>
                </li>
              ))}
            </ul>



            <div className="dificultad">
              <div>
                <label className="label">Difficulty:</label>
              </div>
              <select className="input" id="difficulty" name="difficulty" type="text" value={activity.difficulty} onChange={handleChange} required >
                <option value="">Select your difficulty</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              {errors.difficulty && (
                <p className="error">{errors.difficulty}</p>
              )}
            </div>

            <div className="duracion">
              <div>
                <label className="label">Duration:</label>
              </div>
              <input
                name="duration"
                type="text"
                value={activity.duration}
                placeholder="Enter a duration"
                required="required"
                className="input"
                onChange={handleChange}
              ></input>
              {errors.duration && <p className="error">{errors.duration}</p>}
            </div>

            <div className="temporada">
              <div>
                <label className="label">Season:</label>
              </div>
              <select  className="input" name="season" type="text" value={activity.season} required="required" onChange={handleChange}>
                <option value="">Select your season</option>
                <option value="Summer">Summer</option>
                <option value="Fall">Fall</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
              </select>
              {errors.season && <p className="error">{errors.season}</p>}
            </div>
      {
       activity.name &&
       activity.difficulty &&
       activity.duration &&
       activity.season ? (
        <div className="enviar">
          <button type="submit" className="boton-enviar">Create Activity</button>
        </div>
      ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}
