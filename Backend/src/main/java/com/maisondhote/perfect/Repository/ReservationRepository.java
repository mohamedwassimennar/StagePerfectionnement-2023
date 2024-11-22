package com.maisondhote.perfect.Repository;

import com.maisondhote.perfect.Entite.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {
    List<Reservation> findByClientId(Long id);
}
