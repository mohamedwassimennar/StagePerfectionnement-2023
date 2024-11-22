package com.maisondhote.perfect.Service;

import com.maisondhote.perfect.Entite.Client;
import com.maisondhote.perfect.Entite.Offre;
import com.maisondhote.perfect.Entite.Reservation;
import com.maisondhote.perfect.Repository.ReservationRepository;
import com.maisondhote.perfect.beans.ReservationRq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ReservationServiceImpl implements ReservationService {
    @Autowired OffreService offreService;
    @Autowired ClientService clientService;
    @Autowired ReservationRepository reservationRepository;
    @Override
    public Reservation ajouterReservation(ReservationRq reservationRq) {
        Optional<Offre> offre = offreService.getOffreById(reservationRq.getIdOffre());
        Optional<Client> client = clientService.getclientbyid(reservationRq.getIdClient());

        if (offre.isPresent() && client.isPresent()) {
            Reservation reservation = new Reservation();
            reservation.setOffre(offre.get());
            reservation.setClient(client.get());

            return reservationRepository.save(reservation);


        }
        else
        {
            return null;
        }
    }

    @Override
    public List<Reservation> ListReservation() {
       return reservationRepository.findAll();
    }

    @Override
    public List<Reservation> getOffreByClient(Long id) {
        return reservationRepository.findByClientId(id);
    }

}
