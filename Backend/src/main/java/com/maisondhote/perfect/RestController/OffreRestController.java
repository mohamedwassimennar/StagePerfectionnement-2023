package com.maisondhote.perfect.RestController;

import com.maisondhote.perfect.Entite.Admin;
import com.maisondhote.perfect.Entite.Offre;
import com.maisondhote.perfect.Repository.AdminRepository;
import com.maisondhote.perfect.Repository.OffreRepository;
import com.maisondhote.perfect.Service.AdminService;
import com.maisondhote.perfect.Service.OffreService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@RestController
@CrossOrigin("*")
@RequestMapping(value ="/offre")
public class OffreRestController {
    private OffreRepository offreRepository;

    @Autowired

    public OffreRestController(OffreRepository offreRepository) {
        this.offreRepository = offreRepository;



    }
    @Autowired
    OffreService offreService;
    @RequestMapping(method = RequestMethod.POST )

    public Offre ajouteroffre(@RequestBody Offre offre){
        Offre savedUser = offreRepository.save(offre);
        return offreService.ajouteroffre(offre);

    }
    @RequestMapping(value = "/{id}" ,method = RequestMethod.PUT)
    public Offre modifieroffre(@PathVariable("id")Long id, @RequestBody Offre offre){

        Offre newOffre = offreService.modifieroffre(offre);
        return newOffre;
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )
//RequestBody:tekhdh vrb tabaathhom lel contrl kn sar c bon snn erreur
    public void supprimerOffre(@PathVariable("id") long id){
        offreService.supprimerById(id);

    }
    @RequestMapping(method = RequestMethod.GET )
//RequestBody:tekhdh vrb tabaathhom lel contrl kn sar c bon snn erreur
    public List<Offre> afficherOffre(){
        return offreService.listeoffre();

    }
    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<Offre> getOffreById(@PathVariable("id") long id){

        Optional<Offre> offre = offreService.getOffreById(id);
        return offre;
    }


    /*@PostMapping(path = "register")
    public ResponseEntity<Admin> addAdmin(@RequestBody Admin admin) {
        admin.setMp(this.bCryptPasswordEncoder.encode(admin.getMp()));
        Admin savedUser = adminRepository.save(admin);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginAdmin(@RequestBody Admin admin) {
        System.out.println("in login-admin"+admin);
        HashMap<String, Object> response = new HashMap<>();

        Admin userFromDB = adminRepository.findAdminByEmail(admin.getEmail());
        System.out.println("userFromDB+admin"+userFromDB);
        if (userFromDB == null) {
            response.put("message", "Admin not found !");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else {
            boolean compare = this.bCryptPasswordEncoder.matches(admin.getMotdepasse(), userFromDB.getMotdepasse());
            System.out.println("compare"+compare);
            if (!compare) {
                response.put("message", "admin not found !");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }else
            {
                String token = Jwts.builder()
                        .claim("data", userFromDB)
                        .signWith(SignatureAlgorithm.HS256, "SECRET")
                        .compact();
                response.put("token", token);
                System.out.println("hhh");
                return ResponseEntity.status(HttpStatus.OK).body(response);
            }

        }
    }

     */
}
