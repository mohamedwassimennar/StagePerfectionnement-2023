package com.maisondhote.perfect.Entite;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.awt.*;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Offre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    @Lob
    private String image;
    private Float prix;
    private String datededebut;
    private String datedefin;

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Float getPrix() {
        return prix;
    }

    public void setPrix(Float prix) {
        this.prix = prix;
    }

    public String getDatededebut() {
        return datededebut;
    }

    public void setDatededebut(String datededebut) {
        this.datededebut = datededebut;
    }

    public String getDatedefin() {
        return datedefin;
    }

    public void setDatedefin(String datedefin) {
        this.datedefin = datedefin;
    }
}
