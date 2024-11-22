package com.maisondhote.perfect.Service;

import com.maisondhote.perfect.Entite.Client;
import com.maisondhote.perfect.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientServiceImpl implements ClientService {
    @Autowired
    ClientRepository clientRepository;


    @Override
    public Client ajouterClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public Client modifierClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public Client consulterClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public void supprimerClient(Long id) {

    }

    @Override
    public List<Client> listeclient() {
        return clientRepository.findAll();
    }

    @Override
    public Optional<Client> getclientbyid(Long id) {
        return clientRepository.findById(id);
    }
}