package com.maisondhote.perfect.Service;

import com.maisondhote.perfect.Entite.Admin;

import java.util.List;
import java.util.Optional;

public interface AdminService {
    Admin ajouterAdmin(Admin admin);
    Admin modifierAdmin(Admin admin);
    void supprimerById(Long id);
    List<Admin> listeadmin();
    Optional<Admin> getAdminById(Long id);
}
