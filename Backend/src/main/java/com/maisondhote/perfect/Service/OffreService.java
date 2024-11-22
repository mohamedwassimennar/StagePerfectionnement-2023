package com.maisondhote.perfect.Service;

import com.maisondhote.perfect.Entite.Offre;

import java.util.List;
import java.util.Optional;

public interface OffreService {
    Offre ajouteroffre(Offre offre);
    Offre modifieroffre(Offre offre);

    void supprimerById(long id);

    Optional<Offre> getOffreById(long id);

    List<Offre> listeoffre();
}
