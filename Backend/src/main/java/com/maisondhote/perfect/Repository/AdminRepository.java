package com.maisondhote.perfect.Repository;

import com.maisondhote.perfect.Entite.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin,Long> {
    Admin findAdminByEmail(String email);
}
