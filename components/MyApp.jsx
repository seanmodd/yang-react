import React from 'react';
import MyCard from './MyCard';
import contacts from '../data/contacts';

function createCard(contact) {
  return <MyCard name={contact.name} />;
}

function MyApp() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map((contact) => (
        <MyCard
          name={contact.name}
          img={contact.imgURL}
          tel={contact.phone}
          email={contact.email}
        />
      ))}

      {/* <MyCard
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <MyCard
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <MyCard
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default MyApp;
