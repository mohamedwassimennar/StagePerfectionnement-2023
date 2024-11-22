package com.maisondhote.perfect.Service;

import com.maisondhote.perfect.Entite.Contact;
import com.maisondhote.perfect.Repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ContactServiceImpl implements ContactService{

    @Autowired
    ContactRepository contactRepository;
    @Override
    public Contact ajouterContact(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public Contact consultercontact(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public List<Contact> listecontact() {
        return contactRepository.findAll();
    }

    @Override
    public Optional<Contact> getContactById(Long id) {
        return contactRepository.findById(id);
    }

    @Override
    public void supprimerById(Long id) { contactRepository.deleteById(id);

    }
}
