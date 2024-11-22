package com.maisondhote.perfect.Service;

import com.maisondhote.perfect.Entite.Admin;
import com.maisondhote.perfect.Entite.Contact;

import java.util.List;
import java.util.Optional;

public interface ContactService {
    Contact ajouterContact(Contact contact);
    Contact consultercontact(Contact contact);
    List<Contact> listecontact();
    Optional<Contact> getContactById(Long id);

    void supprimerById(Long id);
}
