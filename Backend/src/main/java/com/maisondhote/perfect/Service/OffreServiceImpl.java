package com.maisondhote.perfect.Service;

import com.maisondhote.perfect.Entite.Offre;
import com.maisondhote.perfect.Repository.OffreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class OffreServiceImpl implements OffreService{
    @Autowired
    OffreRepository offreRepository;
    @Override
    public Offre ajouteroffre(Offre offre) {
        return offreRepository.save(offre);
    }

    @Override
    public Offre modifieroffre(Offre offre) {
        return offreRepository.save(offre);
    }


    @Override
    public void supprimerById(long id) {
        offreRepository.deleteById(id);

    }

    @Override
    public Optional<Offre> getOffreById(long id) {
        return offreRepository.findById(id);
    }

    @Override
    public List<Offre> listeoffre() {
        return offreRepository.findAll();
    }
}
