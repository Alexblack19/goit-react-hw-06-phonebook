import { Contact } from '../Contact/Contact';

import { List, Item, Text } from './ContactList.styled';

export function ContactList({ filterContacts, deleteContact }) {
  return (
    <>
      {filterContacts.length ? (
        <List>
          {filterContacts.map(item => (
            <Item key={item.id}>
              <Contact item={item} deleteContact={deleteContact} />
            </Item>
          ))}
        </List>
      ) : (
        <Text>No contacts</Text>
      )}
    </>
  );
}
