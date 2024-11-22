package com.maisondhote.perfect.Repository;

import com.maisondhote.perfect.Entite.Client;
import com.maisondhote.perfect.Entite.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact,Long>{
    Contact findContactByEmail(String email);
}
