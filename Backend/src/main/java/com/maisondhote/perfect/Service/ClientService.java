package com.maisondhote.perfect.Service;

import com.maisondhote.perfect.Entite.Admin;
import com.maisondhote.perfect.Entite.Client;

import java.util.List;
import java.util.Optional;
public interface ClientService {
    Client ajouterClient(Client client);
    Client modifierClient(Client client);
    Client consulterClient(Client client);
    void supprimerClient(Long id);
    List<Client> listeclient();
    Optional<Client> getclientbyid(Long id);


}
