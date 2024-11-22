package com.maisondhote.perfect.Repository;

import com.maisondhote.perfect.Entite.Admin;
import com.maisondhote.perfect.Entite.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client,Long> {
    Client findByEmail(String email);
}
