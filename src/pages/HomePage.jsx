import React, { Component} from "react";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import UsersForm from "../components/user-form/UsersForm";
import UsersCard from "../components/user-card/UsersCard";

import "react-tabs/style/react-tabs.css";
import "./HomePage.scss"


const usersJSON = localStorage.getItem('users');



class HomePage extends Component {
  state = {
    validated: false,
    users: JSON.parse(usersJSON) || [
      {
        id:1,
        name:"Asilbek" , 
        lastName:"Xoliyorov" ,
        phoneNumber:"+998937550412" ,
        importance:"Family" ,
        favourite: false
      } ,
      {
        id:2,
        name:"Asadbek" , 
        lastName:"Normurodov" ,
        phoneNumber:"+998995001005" ,
        importance:"Friend" ,
        favourite: true
      } , 
      {
        id:3,
        name:"Shaxriyor" , 
        lastName:"Ergashev" ,
        phoneNumber:"+998995042656" ,
        importance:"Relative" ,
        favourite: false
      } ,
      {
        id:4,
        name:"Daler" , 
        lastName:"Qahramonov" ,
        phoneNumber:"+998937552030" ,
        importance:"Friend" ,
        favourite: true
      } ,
      {
        id:5,
        name:"Madina" , 
        lastName:"Xoliyorova" ,
        phoneNumber:"+998123456789" ,
        importance:"Family" ,
        favourite: true
      } ,
      {
        id:6,
        name:"Nodirbek" , 
        lastName:"Normo'minov" ,
        phoneNumber:"+998937550412" ,
        importance:"Relative" ,
        favourite: false
      }
    ] , 
    user: {
      name : "" ,
      lastName: "" ,
      phoneNumber: "" ,
      importance:"Family"
    } ,
    search:"" ,
    selected: null,
  };
  render() {
    let newUsers = [];
    const { validated , users , user , search , selected } = this.state;

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      if(form.checkValidity()) {
        if(selected){
          newUsers = users.map(el => {
            if(el.id === selected){
              return user
            }
            return el
          })
          this.setState({selected:null})
        }else{
          newUsers = [  ...users, {...user ,  id: Date.now() , favourite:false}]
        }
        this.setState({users: newUsers })
        localStorage.setItem("users" , JSON.stringify(newUsers));
        this.setState({
          user: {
            name : "" ,
            lastName: "" ,
            phoneNumber: "" ,
            importance:"Family"
          }
        })
      }else{
        this.setState({validated:true})
      }
    };
    // const allContacts = users.filter(el => el.includes);

    const favouriteCard = (id) => {
      let newUsers = users.map((user) => {
        if(user.id === id){
          return {...user , favourite: true}
        }
        return user
      })
      this.setState({users: newUsers});
      localStorage.setItem("users" , JSON.stringify(newUsers))
    }

    const deleteFavouriteCard = (id) => {
       let newUsers = users.map((user)=>{
        if(user.id === id){
          return {...user , favourite:false}
        }
        return user
       })
       this.setState({users: newUsers});
       localStorage.setItem("users" , JSON.stringify(newUsers))
    }

    const deleteCard = (id) => {
      let newUsers = users.filter(user => user.id !== id);
      this.setState({users: newUsers});
      localStorage.setItem("users" , JSON.stringify(newUsers))
    }

    const handleValue = (e) => {
      this.setState({
        user: { ...user , [e.target.id] : [e.target.value]}
      })
    }

    const handleSearch = ( e ) => {
      this.setState({search: e.target.value});
    }


    const editUser = (id) =>{
      let user = users.find((el) => el.id === id);
      this.setState({user , selected:id});
    }


    const allContacts = users;
    const favouriteContacts = users.filter((user) => user.favourite)

    // const results = allContacts.filter(el => el.name.includes(search.trim().toLowerCase()))
    

    return (
      <Container className="form-container">
        <UsersForm selected={selected} user={user} handleValue={handleValue} validated={validated} handleSubmit={handleSubmit} />
        <InputGroup className="mb-3 input-group">
          <Form.Control type="text" value={search} onChange={handleSearch} className="search-input" placeholder="Searching person ..."
          />
          <Button variant="outline-secondary" className="d-flex align-items-center select-btn" id="button-addon1">
            <Form.Select  className="form-select">
              <option value="All" >All</option>
              <option value="Family" >Family</option>
              <option value="Friend" >Friend</option>
              <option value="Relative" >Relative</option>
            </Form.Select>
          </Button>
          <Button variant="outline-secondary" className="d-flex align-items-center select-btn" id="button-addon1">
            <Form.Select className="form-select">
              <option value="">Sort by</option>
              <option value="family">A-Z</option>
              <option value="friends">Z-A</option>
            </Form.Select>
          </Button>
        </InputGroup>
        <Tabs className="tabs">

          <TabList className="tab-lists">
            <Tab className="tab">All</Tab>
            <Tab className="tab">Favourites</Tab>
          </TabList>

          <TabPanel className="tab-panel">
            { allContacts.map((el) => <UsersCard key={el.id} editUser={editUser} deleteCard={deleteCard} deleteFavouriteCard={deleteFavouriteCard} favouriteCard={favouriteCard} {...el}/>)}            
          </TabPanel>
          <TabPanel className="tab-panel">
            {favouriteContacts.map((el) =><UsersCard key={el.id} editUser={editUser} deleteFavouriteCard={deleteFavouriteCard} deleteCard={deleteCard} {...el}/>)}
          </TabPanel>

        </Tabs>
      </Container>
    );
  }
}

export default HomePage;
