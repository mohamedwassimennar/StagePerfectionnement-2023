package com.maisondhote.perfect.RestController;

import com.maisondhote.perfect.Entite.Reservation;
import com.maisondhote.perfect.Service.ReservationService;
import com.maisondhote.perfect.beans.ReservationRq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@CrossOrigin("*")
@RequestMapping(value ="/reservation")
public class ReservationRestController {
    @Autowired
    ReservationService reservationService;
    @RequestMapping(method = RequestMethod.POST)
    public Reservation ajouterReservation(@RequestBody ReservationRq reservationRq){
        System.out.println("reserverRq"+reservationRq);
        return reservationService.ajouterReservation(reservationRq);
    }
    @RequestMapping("get-all-by-id-client/{id}")
    public List<Reservation> listReservationByClient(@PathVariable Long id){
        return reservationService.getOffreByClient(id);
    }

}
