package com.maisondhote.perfect.Service;

import com.maisondhote.perfect.Entite.Reservation;
import com.maisondhote.perfect.beans.ReservationRq;

import java.util.List;

public interface ReservationService {
    Reservation ajouterReservation(ReservationRq reservationRq);
    List<Reservation> ListReservation();
    List<Reservation> getOffreByClient(Long id);

}
